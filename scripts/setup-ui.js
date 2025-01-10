const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const framework = process.argv[2];

const frameworks = {
    shadcn: {
        packages: ['next-themes'],
        setup: () => {
            if (process.env.TEST_MODE) {
                return;
            }

            try {
                // Create necessary directories
                const directories = [
                    'src/lib',
                    'src/lib/hooks',
                    'src/providers'
                ];

                directories.forEach(dir => {
                    const dirPath = path.join(process.cwd(), dir);
                    if (!fs.existsSync(dirPath)) {
                        fs.mkdirSync(dirPath, { recursive: true });
                    }
                });

                // Create ThemeProvider
                const themeProviderContent = `'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { themes, ThemeKey } from '@/config/themes';

type ThemeContextType = {
    theme: ThemeKey;
    isDark: boolean;
    changeTheme: (theme: ThemeKey) => void;
    toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
    children,
    initialTheme = 'emerald',
    initialMode = 'light'
}: {
    children: React.ReactNode;
    initialTheme?: ThemeKey;
    initialMode?: 'light' | 'dark';
}) {
    const [theme, setTheme] = useState<ThemeKey>(initialTheme);
    const [isDark, setIsDark] = useState(initialMode === 'dark');

    const changeTheme = (newTheme: ThemeKey) => {
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleDarkMode = () => {
        const newMode = !isDark;
        document.documentElement.classList.toggle('dark', newMode);
        setIsDark(newMode);
        localStorage.setItem('darkMode', newMode ? 'dark' : 'light');
    };

    useEffect(() => {
        changeTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialMode === 'dark');
        setIsDark(initialMode === 'dark');

        const savedTheme = localStorage.getItem('theme') as ThemeKey;
        const savedMode = localStorage.getItem('darkMode') as 'light' | 'dark';

        if (savedTheme && themes[savedTheme]) {
            changeTheme(savedTheme);
        }
        if (savedMode) {
            setIsDark(savedMode === 'dark');
            document.documentElement.classList.toggle('dark', savedMode === 'dark');
        }
    }, [initialTheme, initialMode]);

    return (
        <ThemeContext.Provider value={{ theme, isDark, changeTheme, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}`;

                fs.writeFileSync(path.join(process.cwd(), 'src/providers/ThemeProvider.tsx'), themeProviderContent);
                console.log('✓ Created ThemeProvider');

                // Update layout.tsx to use ThemeProvider
                const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
                if (fs.existsSync(layoutPath)) {
                    let layoutContent = `import { ThemeProvider } from '@/providers/ThemeProvider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <main className="min-h-screen bg-background text-foreground">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}`;
                    fs.writeFileSync(layoutPath, layoutContent);
                    console.log('✓ Updated layout.tsx with ThemeProvider');
                }

                console.log('\n✨ Next steps:');
                console.log('1. Run `npx shadcn@latest init` to set up shadcn/ui');
                console.log('2. Choose your preferred style and configuration options');
                console.log('3. Add components using `npx shadcn@latest add [component-name]`\n');

            } catch (error) {
                console.error('Failed to set up theme:', error);
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
if (frameworks[framework].packages.length > 0) {
    execSync(`npm install --legacy-peer-deps ${frameworks[framework].packages.join(' ')}`, { stdio: 'inherit' });
}
frameworks[framework].setup(); 