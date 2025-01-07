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
            execSync('npx shadcn-ui@latest init', { stdio: 'inherit' });
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