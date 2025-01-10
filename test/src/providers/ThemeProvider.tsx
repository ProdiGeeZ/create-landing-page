'use client';

import { useEffect } from 'react';
import { Theme, ThemeContext, themeColors } from './theme-context';

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

        // Set mode
        if (mode === 'dark') {
            root.classList.add('dark');
            // Dark mode colors
            root.style.setProperty('--background', '222.2 84% 4.9%');
            root.style.setProperty('--foreground', '210 40% 98%');
            root.style.setProperty('--card', '222.2 84% 4.9%');
            root.style.setProperty('--card-foreground', '210 40% 98%');
            root.style.setProperty('--popover', '222.2 84% 4.9%');
            root.style.setProperty('--popover-foreground', '210 40% 98%');
            root.style.setProperty('--primary-foreground', '210 40% 98%'); // White text in dark mode
            root.style.setProperty('--secondary', '217.2 32.6% 17.5%');
            root.style.setProperty('--secondary-foreground', '210 40% 98%');
            root.style.setProperty('--muted', '217.2 32.6% 17.5%');
            root.style.setProperty('--muted-foreground', '215 20.2% 65.1%');
            root.style.setProperty('--accent', '217.2 32.6% 17.5%');
            root.style.setProperty('--accent-foreground', '210 40% 98%');
            root.style.setProperty('--destructive', '0 62.8% 30.6%');
            root.style.setProperty('--destructive-foreground', '210 40% 98%');
            root.style.setProperty('--border', '217.2 32.6% 17.5%');
            root.style.setProperty('--input', '217.2 32.6% 17.5%');
        } else {
            root.classList.remove('dark');
            // Light mode colors
            root.style.setProperty('--background', '0 0% 100%');
            root.style.setProperty('--foreground', '222.2 84% 4.9%');
            root.style.setProperty('--card', '0 0% 100%');
            root.style.setProperty('--card-foreground', '222.2 84% 4.9%');
            root.style.setProperty('--popover', '0 0% 100%');
            root.style.setProperty('--popover-foreground', '222.2 84% 4.9%');
            root.style.setProperty('--primary-foreground', '222.2 84% 4.9%'); // Dark text in light mode
            root.style.setProperty('--secondary', '210 40% 96.1%');
            root.style.setProperty('--secondary-foreground', '222.2 47.4% 11.2%');
            root.style.setProperty('--muted', '210 40% 96.1%');
            root.style.setProperty('--muted-foreground', '215.4 16.3% 46.9%');
            root.style.setProperty('--accent', '210 40% 96.1%');
            root.style.setProperty('--accent-foreground', '222.2 47.4% 11.2%');
            root.style.setProperty('--destructive', '0 84.2% 60.2%');
            root.style.setProperty('--destructive-foreground', '210 40% 98%');
            root.style.setProperty('--border', '214.3 31.8% 91.4%');
            root.style.setProperty('--input', '214.3 31.8% 91.4%');
        }
    }, [theme, mode]);

    return (
        <ThemeContext.Provider value={{ theme, mode }}>
            {children}
        </ThemeContext.Provider>
    );
}