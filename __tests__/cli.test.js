const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

describe('CLI', () => {
    let tempDir;
    let originalCwd;

    beforeEach(() => {
        // Save original working directory
        originalCwd = process.cwd();
        // Create temporary directory for tests
        tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'landing-cli-test-'));
        process.chdir(tempDir);

        // Set up template directory for testing
        const templateDir = path.join(process.cwd(), 'templates');
        fs.mkdirSync(path.join(templateDir, 'src/app'), { recursive: true });
        fs.mkdirSync(path.join(templateDir, 'src/components/sections'), { recursive: true });
        fs.mkdirSync(path.join(templateDir, 'src/components/layout'), { recursive: true });
        fs.mkdirSync(path.join(templateDir, 'src/config'), { recursive: true });
        fs.mkdirSync(path.join(templateDir, 'src/types'), { recursive: true });
        fs.mkdirSync(path.join(templateDir, 'src/providers'), { recursive: true });

        // Create scripts directory and setup-ui.js
        fs.mkdirSync(path.join(templateDir, 'scripts'), { recursive: true });
        fs.writeFileSync(
            path.join(templateDir, 'scripts/setup-ui.js'),
            `
            const { execSync } = require('child_process');
            const fs = require('fs');
            const path = require('path');
            
            const framework = process.argv[2];
            const isTestMode = process.env.TEST_MODE === 'true';
            
            console.log(\`Setting up \${framework}...\`);
            
            // Mock setup for testing
            const mockProvider = \`
            export default function UIProvider({ children }) {
              return <>{children}</>;
            }\`;
            
            fs.mkdirSync(path.join(process.cwd(), 'src/providers'), { recursive: true });
            fs.writeFileSync(path.join(process.cwd(), 'src/providers/UIProvider.tsx'), mockProvider);
            `
        );

        // Create minimal template files for testing
        fs.writeFileSync(
            path.join(templateDir, 'package.json'),
            JSON.stringify({ name: "PROJECT_NAME", version: "0.1.0" })
        );

        // Add minimal component files
        const sections = ['Hero', 'Features', 'Solution', 'Benefits', 'HowItWorks',
            'Integrations', 'Testimonials', 'FAQ', 'CTA'];

        sections.forEach(section => {
            fs.writeFileSync(
                path.join(templateDir, `src/components/sections/${section}.tsx`),
                `export default function ${section}() { return null; }`
            );
        });

        // Create essential template files
        const templateFiles = {
            'src/types/index.ts': `
                export interface NavItem {
                    label: string;
                    href: string;
                }
                // ... other types
            `,
            'src/config/site.ts': `
                export const siteConfig = {
                    name: "PROJECT_NAME",
                    // ... site config
                };
            `,
            'src/providers/UIProvider.tsx': `
                'use client';
                export default function UIProvider({ children }) {
                    return <>{children}</>;
                }
            `,
        };

        Object.entries(templateFiles).forEach(([file, content]) => {
            fs.writeFileSync(path.join(templateDir, file), content);
        });
    });

    afterEach(() => {
        // Clean up and restore original working directory
        process.chdir(originalCwd);
        fs.rmSync(tempDir, { recursive: true, force: true });
    });

    test('should create project with correct structure', async () => {
        const projectName = 'test-landing';
        const projectPath = path.join(tempDir, projectName);

        // Mock user input
        process.env.TEST_MODE = 'true';
        process.env.PROJECT_NAME = projectName;
        process.env.UI_FRAMEWORK = 'shadcn';

        // Run CLI
        require('../bin/create-landing');

        // Assert project was created
        expect(fs.existsSync(projectPath)).toBe(true);

        // Check for essential files and directories
        const essentialPaths = [
            'src/components/sections',
            'src/app/page.tsx',
            'src/app/layout.tsx',
            'src/config/site.ts',
            'src/types/index.ts',
            'package.json',
            'tailwind.config.ts',
            'scripts/setup-ui.js'
        ];

        essentialPaths.forEach(filePath => {
            expect(fs.existsSync(path.join(projectPath, filePath))).toBe(true);
        });
    });

    test('should correctly set up selected UI framework', async () => {
        const projectName = 'ui-test';
        const frameworks = ['shadcn', 'chakra', 'mantine'];

        for (const framework of frameworks) {
            const projectPath = path.join(tempDir, `${projectName}-${framework}`);

            process.env.TEST_MODE = 'true';
            process.env.PROJECT_NAME = `${projectName}-${framework}`;
            process.env.UI_FRAMEWORK = framework;

            require('../bin/create-landing');

            // Check package.json for framework dependencies
            const packageJson = JSON.parse(
                fs.readFileSync(path.join(projectPath, 'package.json'), 'utf8')
            );

            switch (framework) {
                case 'shadcn':
                    expect(packageJson.dependencies['@shadcn/ui']).toBeDefined();
                    break;
                case 'chakra':
                    expect(packageJson.dependencies['@chakra-ui/react']).toBeDefined();
                    expect(packageJson.dependencies['@emotion/react']).toBeDefined();
                    break;
                case 'mantine':
                    expect(packageJson.dependencies['@mantine/core']).toBeDefined();
                    break;
            }

            // Check UIProvider configuration
            const uiProviderContent = fs.readFileSync(
                path.join(projectPath, 'src/providers/UIProvider.tsx'),
                'utf8'
            );
            expect(uiProviderContent).toContain(framework);
        }
    });

    test('should handle errors gracefully', async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
        const processSpy = jest.spyOn(process, 'exit').mockImplementation();

        // Test with invalid project name
        process.env.TEST_MODE = 'true';
        process.env.PROJECT_NAME = '';
        process.env.UI_FRAMEWORK = 'shadcn';

        require('../bin/create-landing');

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Required information missing')
        );
        expect(processSpy).toHaveBeenCalledWith(1);

        consoleSpy.mockRestore();
        processSpy.mockRestore();
    });

    test('should generate correct landing page sections', async () => {
        const projectName = 'sections-test';
        const projectPath = path.join(tempDir, projectName);

        process.env.TEST_MODE = 'true';
        process.env.PROJECT_NAME = projectName;
        process.env.UI_FRAMEWORK = 'shadcn';

        require('../bin/create-landing');

        // Check for all section components
        const sections = [
            'Hero',
            'Features',
            'Solution',
            'Benefits',
            'HowItWorks',
            'Integrations',
            'Testimonials',
            'FAQ',
            'CTA'
        ];

        sections.forEach(section => {
            const sectionPath = path.join(
                projectPath,
                'src/components/sections',
                `${section}.tsx`
            );
            expect(fs.existsSync(sectionPath)).toBe(true);

            const content = fs.readFileSync(sectionPath, 'utf8');
            expect(content).toContain(`export default function ${section}`);
        });
    });

    test('should set up correct configuration files', async () => {
        const projectName = 'config-test';
        const projectPath = path.join(tempDir, projectName);

        process.env.TEST_MODE = 'true';
        process.env.PROJECT_NAME = projectName;
        process.env.UI_FRAMEWORK = 'shadcn';

        require('../bin/create-landing');

        // Check site configuration
        const siteConfig = require(path.join(projectPath, 'src/config/site.ts'));
        expect(siteConfig).toHaveProperty('name');
        expect(siteConfig).toHaveProperty('nav');
        expect(siteConfig).toHaveProperty('features');
        expect(siteConfig).toHaveProperty('testimonials');
        expect(siteConfig).toHaveProperty('faqs');

        // Check TypeScript configuration
        const tsConfig = JSON.parse(
            fs.readFileSync(path.join(projectPath, 'tsconfig.json'), 'utf8')
        );
        expect(tsConfig.compilerOptions).toBeDefined();
        expect(tsConfig.include).toContain('src');
    });
}); 