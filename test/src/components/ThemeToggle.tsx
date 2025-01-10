'use client';

import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "./ui/button";

const themes = [
    'forest',
    'ocean',
    'crimson',
    'sunset',
    'wine',
    'lavender',
    'tropical',
    'sage',
    'emerald',
    'carnival',
    'coastal',
    'rose',
    'sand',
    'bubblegum',
    'midnight',
    'autumn'
] as const;

export function ThemeToggle() {
    const { theme, setTheme, mode, setMode } = useTheme();

    return (
        <div className="flex flex-wrap gap-2 p-4">
            <div className="flex flex-wrap gap-2">
                {themes.map((t) => (
                    <Button
                        key={t}
                        variant={theme === t ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTheme(t)}
                    >
                        {t}
                    </Button>
                ))}
            </div>
            <Button
                variant="outline"
                size="sm"
                onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            >
                {mode === 'dark' ? '🌙' : '☀️'}
            </Button>
        </div>
    );
} 