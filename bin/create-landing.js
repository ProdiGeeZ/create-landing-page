#!/usr/bin/env node

const { execSync } = require('child_process');
const prompts = require('prompts');
const fs = require('fs-extra');
const path = require('path');

// Helper function to copy template files
function copyTemplateFiles(targetPath, projectName) {
    const templateDir = path.join(__dirname, '..', 'templates');

    if (!fs.existsSync(templateDir)) {
        console.error('\n❌ Template directory not found');
        process.exit(1);
    }

    try {
        // Copy all template files to the project directory
        fs.cpSync(templateDir, targetPath, {
            recursive: true,
            force: true,
            filter: (src) => {
                // Skip node_modules if it exists in templates
                return !src.includes('node_modules');
            }
        });

        // Update project name in package.json
        const pkgPath = path.join(targetPath, 'package.json');
        if (fs.existsSync(pkgPath)) {
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
            pkg.name = projectName;
            fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
        }

        // Copy scripts directory
        const scriptsDir = path.join(__dirname, '..', 'scripts');
        if (fs.existsSync(scriptsDir)) {
            fs.cpSync(scriptsDir, path.join(targetPath, 'scripts'), {
                recursive: true,
                force: true
            });
        }
    } catch (error) {
        console.error('\n❌ Failed to copy template files:', error.message);
        process.exit(1);
    }
}

async function main() {
    try {
        console.log('\n🚀 Welcome to Create Landing Page CLI!\n');

        const response = await prompts([
            {
                type: 'text',
                name: 'projectName',
                message: 'What is your project name?',
                initial: 'my-landing-page',
                validate: value => {
                    if (!/^[a-zA-Z0-9-_]+$/.test(value)) {
                        return 'Project name can only contain letters, numbers, dashes and underscores';
                    }
                    return true;
                }
            },
            {
                type: 'confirm',
                name: 'useTurbopack',
                message: 'Would you like to use Turbopack?',
                initial: false
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

        const { projectName, uiFramework, useTurbopack } = response;

        console.log(`\n🚀 Creating landing page project: ${projectName}...`);

        const createNextAppCommand = [
            'npx create-next-app@latest',
            projectName,
            '--typescript',
            '--tailwind',
            '--eslint',
            useTurbopack ? '--turbo' : '',
            '--use-npm',
            '--no-git'
        ].filter(Boolean).join(' ');

        execSync(createNextAppCommand, { stdio: 'inherit' });

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