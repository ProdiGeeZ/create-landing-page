export type Theme = {
    name: string;
    colors: {
        primary: string;
        primaryDark: string;
    };
};

export const themes = {
    wine: {
        name: "Wine",
        colors: {
            primary: "341.3 75.5% 30.4%",
            primaryDark: "341.3 75.5% 35.4%"
        }
    }
} as const;

export type ThemeNames = keyof typeof themes;

export const defaultTheme: ThemeNames = "wine";

// This ensures only one theme is used throughout the application
export const activeTheme = themes[defaultTheme]; 