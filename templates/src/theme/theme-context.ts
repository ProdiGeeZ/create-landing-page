import { createContext, useContext } from 'react';

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

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'sunset',
    mode: 'light'
});

export const useTheme = () => useContext(ThemeContext); 