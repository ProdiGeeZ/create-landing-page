import { createContext } from 'react';

export type Theme =
    | 'forest'
    | 'ocean'
    | 'crimson'
    | 'sunset'
    | 'wine'
    | 'lavender'
    | 'tropical'
    | 'sage'
    | 'emerald'
    | 'carnival'
    | 'coastal'
    | 'rose'
    | 'sand'
    | 'bubblegum'
    | 'midnight'
    | 'autumn';

export interface ThemeContextType {
    theme: Theme;
    mode: 'light' | 'dark';
}

// Theme color mappings
export const themeColors: Record<Theme, string> = {
    forest: '142.1 76.2% 36.3%',
    ocean: '201.3 96.3% 32.2%',
    crimson: '346.8 77.2% 49.8%',
    sunset: '20.5 90.2% 48.2%',
    wine: '341.3 75.5% 30.4%',
    lavender: '267.1 83.6% 60.4%',
    tropical: '151.8 93.4% 30.2%',
    sage: '155.7 47.4% 43.5%',
    emerald: '160 84% 39%',
    carnival: '326.1 73.3% 52.5%',
    coastal: '199 89% 48%',
    rose: '346.8 77.2% 49.8%',
    sand: '24.6 95% 53.1%',
    bubblegum: '316.1 73.3% 52.5%',
    midnight: '217.2 91.2% 59.8%',
    autumn: '27.9 98.3% 40%'
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined); 