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

export const defaultTheme = 'lavender' as const;
export const defaultMode = 'dark' as const;

export const modeColors = {
    dark: {
        background: '222.2 84% 4.9%',
        foreground: '210 40% 98%',
        card: '222.2 84% 4.9%',
        'card-foreground': '210 40% 98%',
        popover: '222.2 84% 4.9%',
        'popover-foreground': '210 40% 98%',
        'primary-foreground': '210 40% 98%',
        secondary: '217.2 32.6% 17.5%',
        'secondary-foreground': '210 40% 98%',
        muted: '217.2 32.6% 17.5%',
        'muted-foreground': '215 20.2% 65.1%',
        accent: '217.2 32.6% 17.5%',
        'accent-foreground': '210 40% 98%',
        destructive: '0 62.8% 30.6%',
        'destructive-foreground': '210 40% 98%',
        border: '217.2 32.6% 17.5%',
        input: '217.2 32.6% 17.5%'
    },
    light: {
        background: '0 0% 100%',
        foreground: '222.2 84% 4.9%',
        card: '0 0% 100%',
        'card-foreground': '222.2 84% 4.9%',
        popover: '0 0% 100%',
        'popover-foreground': '222.2 84% 4.9%',
        'primary-foreground': '210 40% 98%',
        secondary: '210 40% 96.1%',
        'secondary-foreground': '222.2 47.4% 11.2%',
        muted: '210 40% 96.1%',
        'muted-foreground': '215.4 16.3% 46.9%',
        accent: '210 40% 96.1%',
        'accent-foreground': '222.2 47.4% 11.2%',
        destructive: '0 84.2% 60.2%',
        'destructive-foreground': '210 40% 98%',
        border: '214.3 31.8% 91.4%',
        input: '214.3 31.8% 91.4%'
    }
} as const;

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