#!/usr/bin/env node

const { execSync } = require('child_process');
const prompts = require('prompts');
const fs = require('fs');
const path = require('path');
const { copyFileSync, mkdirSync } = require('fs');

function copyTemplateFiles(projectPath, projectName) {
    const templateDir = path.join(__dirname, '..', 'templates');
    const srcDir = path.join(projectPath, 'src');

    // Check if template directory exists
    if (!fs.existsSync(templateDir)) {
        console.error('\n❌ Template directory not found');
        process.exit(1);
    }

    // Ensure directories exist
    if (!fs.existsSync(srcDir)) {
        mkdirSync(srcDir, { recursive: true });
    }

    try {
        // Copy template files
        fs.cpSync(path.join(templateDir, 'src'), srcDir, { recursive: true });

        // Copy configuration files
        const configFiles = ['package.json', 'README.md', 'scripts/setup-ui.js'];
        configFiles.forEach(file => {
            const sourcePath = path.join(templateDir, file);
            const targetPath = path.join(projectPath, file);

            // Ensure target directory exists
            mkdirSync(path.dirname(targetPath), { recursive: true });

            if (fs.existsSync(sourcePath)) {
                // Copy and process file
                let content = fs.readFileSync(sourcePath, 'utf8');
                content = content.replace(/PROJECT_NAME/g, projectName);
                fs.writeFileSync(targetPath, content);
            }
        });
    } catch (error) {
        console.error('\n❌ Error copying template files:', error.message);
        process.exit(1);
    }
}

async function main() {
    try {
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