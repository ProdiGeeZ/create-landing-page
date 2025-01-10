import { createContext } from 'react';
import { type Theme } from '@/config/themes';

export interface ThemeContextType {
    theme: Theme;
    mode: 'light' | 'dark';
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined); 