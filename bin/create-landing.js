#!/usr/bin/env node

const { execSync } = require('child_process');
const prompts = require('prompts');
const fs = require('fs-extra');
const path = require('path');

// Helper function to copy template files
function copyTemplateFiles(targetPath, projectName) {
    const templateDir = path.join(__dirname, '..', 'templates');
    const scriptsDir = path.join(__dirname, '..', 'scripts');

    try {
        // Copy templates
        const templateContents = fs.readdirSync(templateDir);
        templateContents.forEach(item => {
            const sourcePath = path.join(templateDir, item);
            const targetItemPath = path.join(targetPath, item);

            if (fs.statSync(sourcePath).isDirectory()) {
                fs.cpSync(sourcePath, targetItemPath, {
                    recursive: true,
                    force: true,
                    filter: (src) => {
                        // Skip node_modules and .git
                        if (src.includes('node_modules') || src.includes('.git')) {
                            return false;
                        }
                        // Skip scripts directory as we handle it separately
                        if (src.includes('scripts')) {
                            return false;
                        }
                        return true;
                    }
                });
            } else {
                // For root files, only copy if they don't exist or are in our override list
                const overrideFiles = [
                    'package.json',
                    'tsconfig.json',
                    'tailwind.config.ts',
                    'postcss.config.js'
                ];
                if (!fs.existsSync(targetItemPath) || overrideFiles.includes(item)) {
                    fs.copyFileSync(sourcePath, targetItemPath);
                }
            }
        });

        // Copy src directory structure
        const srcDir = path.join(templateDir, 'src');
        if (fs.existsSync(srcDir)) {
            fs.cpSync(srcDir, path.join(targetPath, 'src'), {
                recursive: true,
                force: true
            });
        }

        // Update project name in package.json
        const pkgPath = path.join(targetPath, 'package.json');
        if (fs.existsSync(pkgPath)) {
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
            pkg.name = projectName;
            fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
        }

        // Copy scripts directory
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
        console.clear();
        console.log('\n🚀 Welcome to Create Landing Page CLI!\n');

        // Skip prompts in test mode
        let projectName = 'test-project';
        let uiFramework = 'shadcn';

        if (!process.env.TEST_MODE) {
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
                    type: 'select',
                    name: 'uiFramework',
                    message: 'Select your UI framework',
                    choices: [
                        { title: 'shadcn/ui', value: 'shadcn' },
                        { title: 'Chakra UI', value: 'chakra' }
                    ]
                }
            ]);

            if (!response.projectName || !response.uiFramework) {
                console.log('\n🛑 Required information missing');
                process.exit(1);
            }

            projectName = response.projectName;
            uiFramework = response.uiFramework;
        }

        console.log(`\n🚀 Creating landing page project: ${projectName}...`);

        // Create project directory
        const projectPath = path.join(process.cwd(), projectName);
        if (!fs.existsSync(projectPath)) {
            fs.mkdirSync(projectPath, { recursive: true });
        }
        process.chdir(projectPath);

        // Copy template files first
        copyTemplateFiles(process.cwd(), projectName);

        // Set up UI framework
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