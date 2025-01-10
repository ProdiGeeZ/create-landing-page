const fs = require('fs');
const path = require('path');

function removeIfExists(filePath) {
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            console.log(`Removing directory: ${filePath}`);
            fs.rmSync(filePath, { recursive: true, force: true });
        } else {
            console.log(`Removing file: ${filePath}`);
            fs.unlinkSync(filePath);
        }
        return true;
    }
    return false;
}

async function cleanup() {
    const redundantPaths = [
        // Build artifacts
        'dist',
        '.next',
        'tsconfig.tsbuildinfo',

        // Package artifacts
        'prodigeez-create-landing-page-1.0.0.tgz',

        // Test projects
        'test-projects',
        'test2',
        'test3',

        // Development artifacts
        '.vscode',
        'node_modules',
        'src', // Root src directory (we only need the one in templates)
        'public', // Root public directory (we only need the one in templates if it exists)

        // Template cleanup - only remove build/development artifacts
        'templates/.vscode',
        'templates/node_modules',
        'templates/.next',
        'templates/dist',
        'templates/coverage',
        'templates/tsconfig.tsbuildinfo'
    ];

    console.log('Starting cleanup...');

    let removedCount = 0;
    let skippedCount = 0;

    for (const p of redundantPaths) {
        const fullPath = path.join(process.cwd(), p);
        if (removeIfExists(fullPath)) {
            removedCount++;
        } else {
            skippedCount++;
            console.log(`Skipped (not found): ${p}`);
        }
    }

    // Clean up empty directories
    const dirsToCheck = [
        'templates/src/components/layout',
        'templates/src/components/ui'
    ];

    for (const dir of dirsToCheck) {
        const fullPath = path.join(process.cwd(), dir);
        if (fs.existsSync(fullPath)) {
            const files = fs.readdirSync(fullPath);
            if (files.length === 0) {
                console.log(`Removing empty directory: ${dir}`);
                fs.rmdirSync(fullPath);
                removedCount++;
            }
        }
    }

    console.log('\nCleanup completed!');
    console.log(`Removed: ${removedCount} items`);
    console.log(`Skipped: ${skippedCount} items`);
    console.log('\nNote: Some files/directories were skipped because they didn\'t exist or were already removed.');
}

cleanup().catch(console.error); 