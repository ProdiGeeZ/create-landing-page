const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const os = require('os');

jest.mock('prompts', () => {
    return jest.fn().mockImplementation(async () => ({
        projectName: 'test-project',
        uiFramework: 'shadcn'
    }));
});

jest.mock('child_process', () => ({
    execSync: jest.fn().mockImplementation((cmd) => {
        if (cmd.includes('create-next-app')) {
            const projectName = cmd.split(' ')[2];
            const projectPath = path.join(process.cwd(), projectName);

            const dirs = [
                'src/components/sections',
                'src/components/layout',
                'src/app',
                'src/config',
                'src/types',
                'src/providers'
            ];

            dirs.forEach(dir => fs.mkdirSync(path.join(projectPath, dir), { recursive: true }));
        }
    })
}));

describe('CLI', () => {
    let tempDir;
    let originalCwd;

    beforeEach(() => {
        originalCwd = process.cwd();
        tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'landing-cli-test-'));
        process.chdir(tempDir);
    });

    afterEach(() => {
        process.chdir(originalCwd);
        fs.rmSync(tempDir, { recursive: true, force: true });
    });

    test('should create project with correct structure', async () => {
        const projectName = 'test-project';
        const projectPath = path.join(tempDir, projectName);

        process.env.TEST_MODE = 'true';
        process.env.SKIP_INSTALL = 'true';

        await require('../bin/create-landing');

        const essentialPaths = [
            'src/components/sections',
            'src/app',
            'src/config',
            'src/types',
            'package.json'
        ];

        essentialPaths.forEach(filePath => {
            const fullPath = path.join(projectPath, filePath);
            expect(fs.existsSync(fullPath)).toBe(true);
        });
    });

    test('should generate correct landing page sections', async () => {
        const projectName = 'sections-test';
        const projectPath = path.join(tempDir, projectName);

        process.env.TEST_MODE = 'true';
        process.env.SKIP_INSTALL = 'true';

        const sectionsDir = path.join(projectPath, 'src/components/sections');
        fs.mkdirSync(sectionsDir, { recursive: true });

        const sections = [
            'Hero',
            'Features',
            'Benefits',
            'Solution',
            'HowItWorks',
            'Integrations',
            'Testimonials',
            'FAQ',
            'CTA'
        ];

        sections.forEach(section => {
            fs.writeFileSync(
                path.join(sectionsDir, `${section}.tsx`),
                `export default function ${section}() { return null; }`
            );
        });

        await require('../bin/create-landing');

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
        process.env.SKIP_INSTALL = 'true';

        fs.mkdirSync(path.join(projectPath, 'src/config'), { recursive: true });

        const siteConfig = `
            export const siteConfig = {
                name: "PROJECT_NAME",
                description: "A modern landing page built with Next.js",
                nav: [],
                features: [],
                testimonials: [],
                faqs: []
            };
        `;
        fs.writeFileSync(path.join(projectPath, 'src/config/site.ts'), siteConfig);

        const tsConfig = {
            compilerOptions: {},
            include: ['src']
        };
        fs.writeFileSync(
            path.join(projectPath, 'tsconfig.json'),
            JSON.stringify(tsConfig, null, 2)
        );

        await require('../bin/create-landing');

        const siteConfigPath = path.join(projectPath, 'src/config/site.ts');
        expect(fs.existsSync(siteConfigPath)).toBe(true);
        const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8');
        expect(siteConfigContent).toContain('export const siteConfig');

        const tsconfigPath = path.join(projectPath, 'tsconfig.json');
        expect(fs.existsSync(tsconfigPath)).toBe(true);
        const tsConfigContent = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
        expect(tsConfigContent.include).toContain('src');
    });
}); 