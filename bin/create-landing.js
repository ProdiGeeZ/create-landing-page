#!/usr/bin/env node

const { execSync } = require('child_process');
const prompts = require('prompts');
const fs = require('fs');
const path = require('path');
const { copyFileSync, mkdirSync } = require('fs');

function copyTemplateFiles(projectPath, projectName) {
    const templateDir = path.join(__dirname, '..', 'templates');

    // Ensure target directories exist
    const directories = [
        'src/app',
        'src/components/sections',
        'src/components/layout',
        'src/config',
        'src/types',
        'src/providers',
        'src/lib',
        'scripts'
    ];

    try {
        // Create project directory first
        fs.mkdirSync(projectPath, { recursive: true });

        // Create all directories
        directories.forEach(dir => {
            fs.mkdirSync(path.join(projectPath, dir), { recursive: true });
        });

        // Copy files recursively
        function copyDir(source, target) {
            if (fs.existsSync(source)) {
                const files = fs.readdirSync(source);
                files.forEach(file => {
                    const sourcePath = path.join(source, file);
                    const targetPath = path.join(target, file);

                    if (fs.lstatSync(sourcePath).isDirectory()) {
                        fs.mkdirSync(targetPath, { recursive: true });
                        copyDir(sourcePath, targetPath);
                    } else {
                        let content = fs.readFileSync(sourcePath, 'utf8');
                        content = content.replace(/PROJECT_NAME/g, projectName);
                        fs.writeFileSync(targetPath, content);
                    }
                });
            }
        }

        // Copy entire template directory structure
        copyDir(templateDir, projectPath);

        // Copy root files
        const rootFiles = ['package.json', 'tsconfig.json', 'next-env.d.ts'];
        rootFiles.forEach(file => {
            const sourcePath = path.join(templateDir, file);
            if (fs.existsSync(sourcePath)) {
                let content = fs.readFileSync(sourcePath, 'utf8');
                content = content.replace(/PROJECT_NAME/g, projectName);
                fs.writeFileSync(path.join(projectPath, file), content);
            }
        });

        // Copy scripts directory
        const scriptsDir = path.join(templateDir, 'scripts');
        if (fs.existsSync(scriptsDir)) {
            copyDir(scriptsDir, path.join(projectPath, 'scripts'));
        }

    } catch (error) {
        console.error('\n❌ Error copying template files:', error.message);
        process.exit(1);
    }
}

// Sanitize user inputs
const sanitizeInput = (input) => {
    return input.replace(/[^a-zA-Z0-9-_]/g, '');
};

// Validate package.json
const validatePackageJson = (pkgPath) => {
    try {
        const pkg = require(pkgPath);
        // Add validation logic...
    } catch (error) {
        console.error('Invalid package.json');
        process.exit(1);
    }
};

async function main() {
    try {
        // Check if templates exist
        const templateDir = path.join(__dirname, '..', 'templates');
        if (!fs.existsSync(templateDir)) {
            console.error('\n❌ Template directory not found');
            process.exit(1);
        }

        const response = await prompts([
            {
                type: 'text',
                name: 'projectName',
                message: 'What is your project name?',
                initial: 'my-landing-page'
            },
            {
                type: 'select',
                name: 'uiFramework',
                message: 'Select your UI framework',
                choices: [
                    { title: 'shadcn/ui', value: 'shadcn' },
                    { title: 'Chakra UI', value: 'chakra' },
                    { title: 'Mantine', value: 'mantine' },
                ]
            }
        ], {
            onCancel: () => {
                console.log('\n🛑 Setup cancelled');
                process.exit(1);
            }
        });

        if (!response.projectName || !response.uiFramework) {
            console.log('\n🛑 Required information missing');
            process.exit(1);
        }

        const { projectName, uiFramework } = response;

        console.log(`\n🚀 Creating landing page project: ${projectName}...`);

        // Add validation for project name
        if (!/^[a-zA-Z0-9-_]+$/.test(response.projectName)) {
            console.error('\n❌ Project name can only contain letters, numbers, dashes and underscores');
            process.exit(1);
        }

        // Add check for existing directory
        const projectPath = path.join(process.cwd(), response.projectName);
        if (fs.existsSync(projectPath)) {
            console.error(`\n❌ Directory ${response.projectName} already exists`);
            process.exit(1);
        }

        // Create Next.js project
        execSync(`npx create-next-app@latest ${projectName} --typescript --tailwind --eslint`, { stdio: 'inherit' });

        // Change to project directory
        process.chdir(projectName);

        // Replace git clone with template copy
        copyTemplateFiles(process.cwd(), projectName);

        // Install UI framework
        console.log(`\n📦 Setting up ${uiFramework}...`);
        execSync(`node scripts/setup-ui.js ${uiFramework}`, { stdio: 'inherit' });

        console.log('\n✨ Project ready! Get started with:');
        console.log(`\ncd ${projectName}`);
        console.log('npm run dev');
    } catch (error) {
        console.error('\n❌ An error occurred:', error.message);
        process.exit(1);
    }
}

main().catch(console.error); 