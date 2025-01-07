const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const framework = process.argv[2];
const isTestMode = process.env.TEST_MODE === 'true';

const frameworks = {
    shadcn: {
        packages: ['@shadcn/ui'],
        setup: () => {
            if (isTestMode) {
                // Mock setup for testing
                const mockProvider = `
export default function UIProvider({ children }) {
  return <>{children}</>;
}`;
                fs.writeFileSync(path.join(process.cwd(), 'src/providers/UIProvider.tsx'), mockProvider);
            } else {
                execSync('npx shadcn-ui@latest init', { stdio: 'inherit' });
            }
        }
    },
    chakra: {
        packages: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
        setup: () => {
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

try {
    if (!isTestMode) {
        execSync(`npm install ${frameworks[framework].packages.join(' ')}`, { stdio: 'inherit' });
    }
    frameworks[framework].setup();
} catch (error) {
    console.error(`Failed to setup ${framework}:`, error.message);
    process.exit(1);
} 