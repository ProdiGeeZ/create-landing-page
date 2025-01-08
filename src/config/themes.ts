export type Theme = {
  name: string;
  colors: {
    primary: string;
    background: string;
    foreground: string;
  };
};

export const themes = {
  blue: {
    name: "Blue",
    colors: {
      primary: "0 112 243", // Blue
      background: "255 255 255",
      foreground: "23 23 23",
    }
  },
  purple: {
    name: "Purple",
    colors: {
      primary: "147 51 234", // Purple
      background: "255 255 255",
      foreground: "23 23 23",
    }
  },
  green: {
    name: "Green",
    colors: {
      primary: "34 197 94", // Green
      background: "255 255 255",
      foreground: "23 23 23",
    }
  },
  orange: {
    name: "Orange",
    colors: {
      primary: "249 115 22", // Orange
      background: "255 255 255",
      foreground: "23 23 23",
    }
  }
};

export type ThemeKey = keyof typeof themes; 