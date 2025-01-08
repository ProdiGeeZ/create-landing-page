'use client';

import { ThemeKey, themes } from '@/config/themes';
import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
    theme: ThemeKey;
    isDark: boolean;
    changeTheme: (theme: ThemeKey) => void;
    toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
    children,
    initialTheme = 'blue',
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
        // Apply initial theme and mode immediately
        changeTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialMode === 'dark');
        setIsDark(initialMode === 'dark');

        // Then check for saved preferences
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
} 