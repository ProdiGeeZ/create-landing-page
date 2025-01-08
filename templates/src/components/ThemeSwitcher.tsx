'use client';

import { themes, ThemeKey } from '@/config/themes';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<ThemeKey>('blue');

    const changeTheme = (newTheme: ThemeKey) => {
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as ThemeKey;
        if (savedTheme && themes[savedTheme]) {
            changeTheme(savedTheme);
        }
    }, []);

    return (
        <div className="flex gap-2">
            {Object.entries(themes).map(([key, value]) => (
                <button
                    key={key}
                    onClick={() => changeTheme(key as ThemeKey)}
                    className={`w-8 h-8 rounded-full ${theme === key ? 'ring-2 ring-offset-2' : ''
                        }`}
                    style={{
                        backgroundColor: `rgb(${value.colors.primary})`
                    }}
                >
                    <span className="sr-only">{value.name}</span>
                </button>
            ))}
        </div>
    );
} 