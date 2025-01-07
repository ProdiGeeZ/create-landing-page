const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const framework = process.argv[2];
const isTestMode = process.env.TEST_MODE === 'true';

const frameworks = {
    shadcn: {
        packages: ['@shadcn/ui'],
        setup: async () => {
            if (process.env.TEST_MODE === 'true') {
                // Mock setup for testing
                return;
            }
            try {
                // Install dependencies first
                execSync('npm install -D tailwindcss postcss autoprefixer', { stdio: 'inherit' });
                execSync('npx tailwindcss init -p', { stdio: 'inherit' });
                execSync('npx shadcn-ui@latest init', { stdio: 'inherit' });
            } catch (error) {
                console.error('Failed to set up shadcn/ui:', error);
                process.exit(1);
            }
        }
    },
    chakra: {
        packages: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
        setup: () => {
            try {
                execSync('npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion', { stdio: 'inherit' });
                // Create UIProvider with ChakraProvider
                const chakraProvider = `
                    import { ChakraProvider } from '@chakra-ui/react';
                    export default function UIProvider({ children }) {
                        return <ChakraProvider>{children}</ChakraProvider>;
                    }`;
                fs.writeFileSync(path.join(process.cwd(), 'src/providers/UIProvider.tsx'), chakraProvider);
            } catch (error) {
                console.error('Failed to set up Chakra UI:', error);
                process.exit(1);
            }
        }
    },
    mantine: {
        packages: ['@mantine/core', '@mantine/hooks'],
        setup: () => {
            const mantineProvider = `
                import React from 'react';
                import { MantineProvider } from '@mantine/core';
                export default function UIProvider({ children }) {
                    return <MantineProvider>{children}</MantineProvider>;
                }`;
            fs.writeFileSync(path.join(process.cwd(), 'src/providers/UIProvider.tsx'), mantineProvider);
        }
    }
};

if (!framework || !frameworks[framework]) {
    console.log('Please specify a valid UI framework: shadcn, chakra, mantine');
    process.exit(1);
}

try {
    console.log(`Setting up ${framework}...`);
    if (!isTestMode) {
        execSync(`npm install ${frameworks[framework].packages.join(' ')}`, { stdio: 'inherit' });
    }
    frameworks[framework].setup();
} catch (error) {
    console.error(`Failed to setup ${framework}:`, error.message);
    process.exit(1);
} 