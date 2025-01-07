const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const framework = process.argv[2];

const frameworks = {
    shadcn: {
        packages: ['@shadcn/ui'],
        setup: () => {
            if (process.env.TEST_MODE) {
                const mockProvider = `
                    import React from 'react';
                    export default function UIProvider({ children }) {
                        return <>{children}</>;
                    }`;
                fs.writeFileSync(path.join(process.cwd(), 'src/providers/UIProvider.tsx'), mockProvider);
                return;
            }
            try {
                // Install required dependencies first
                execSync('npm install -D @shadcn/ui tailwindcss-animate class-variance-authority clsx tailwind-merge', { stdio: 'inherit' });

                // Create the components.json file
                const componentsConfig = {
                    $schema: "https://ui.shadcn.com/schema.json",
                    style: "default",
                    rsc: true,
                    tailwind: {
                        config: "tailwind.config.js",
                        css: "app/globals.css",
                        baseColor: "slate",
                        cssVariables: true,
                    },
                    aliases: {
                        components: "@/components",
                        utils: "@/lib/utils"
                    }
                };
                fs.writeFileSync('components.json', JSON.stringify(componentsConfig, null, 2));

                // Create utils file
                const utilsContent = `
                    import { clsx } from 'clsx'
                    import { twMerge } from 'tailwind-merge'
                    
                    export function cn(...inputs) {
                        return twMerge(clsx(inputs))
                    }
                `;
                fs.mkdirSync('src/lib', { recursive: true });
                fs.writeFileSync('src/lib/utils.ts', utilsContent);
            } catch (error) {
                console.error('Failed to set up shadcn/ui:', error);
                process.exit(1);
            }
        }
    },
    chakra: {
        packages: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
        setup: () => {
            // Update UIProvider.tsx
            const chakraProvider = `
import { ChakraProvider } from '@chakra-ui/react';
export default function UIProvider({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}`;
            fs.writeFileSync(path.join(process.cwd(), 'src/providers/UIProvider.tsx'), chakraProvider);
        }
    },
    mantine: {
        packages: ['@mantine/core', '@mantine/hooks'],
        setup: () => {
            const mantineProvider = `
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

console.log(`Setting up ${framework}...`);
execSync(`npm install ${frameworks[framework].packages.join(' ')}`, { stdio: 'inherit' });
frameworks[framework].setup(); 