'use client';

import { useEffect } from 'react';
import { ThemeContext } from './theme-context';
import { type Theme, themeColors } from '@/config/themes';

interface ThemeProviderProps {
    children: React.ReactNode;
    theme: Theme;
    mode: 'light' | 'dark';
}

export function ThemeProvider({ children, theme, mode }: ThemeProviderProps) {
    useEffect(() => {
        const root = document.documentElement;

        root.style.setProperty('--primary', themeColors[theme]);
        root.style.setProperty('--ring', themeColors[theme]);

        if (mode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme, mode]);

    return (
        <ThemeContext.Provider value={{ theme, mode }}>
            {children}
        </ThemeContext.Provider>
    );
}