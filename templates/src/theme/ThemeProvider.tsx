'use client';

import { useEffect } from 'react';
import { Theme, ThemeContext } from './theme-context';
import { themeColors, modeColors } from '@/config/themes';

interface ThemeProviderProps {
    children: React.ReactNode;
    theme: Theme;
    mode: 'light' | 'dark';
}

export function ThemeProvider({ children, theme, mode }: ThemeProviderProps) {
    useEffect(() => {
        const root = document.documentElement;

        // Set theme color
        root.style.setProperty('--primary', themeColors[theme]);
        root.style.setProperty('--ring', themeColors[theme]);

        // Set mode colors
        const colors = modeColors[mode];
        Object.entries(colors).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });

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