'use client';

import { useTheme } from '@/providers/ThemeProvider';

export default function DarkModeToggle() {
    const { isDark, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800"
        >
            {isDark ? '🌙' : '☀️'}
        </button>
    );
} 