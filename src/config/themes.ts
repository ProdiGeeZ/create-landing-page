export type Theme = {
  name: string;
  colors: {
    primary: string;
    background: string;
    foreground: string;
    primaryForeground: string;
  };
};

export const themes = {
  twilight: {
    name: "Twilight",
    colors: {
      primary: "103 93 167",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "255 255 255"
    }
  },
  ocean: {
    name: "Ocean",
    colors: {
      primary: "0 119 182",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "255 255 255"
    }
  },
  crimson: {
    name: "Crimson",
    colors: {
      primary: "220 53 69",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "255 255 255"
    }
  },
  sunset: {
    name: "Sunset",
    colors: {
      primary: "255 165 0",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "23 23 23"
    }
  },
  forest: {
    name: "Forest",
    colors: {
      primary: "76 107 34",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "255 255 255"
    }
  },
  wine: {
    name: "Wine",
    colors: {
      primary: "128 0 32",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "255 255 255"
    }
  },
  lavender: {
    name: "Lavender",
    colors: {
      primary: "187 169 220",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "23 23 23"
    }
  },
  tropical: {
    name: "Tropical",
    colors: {
      primary: "0 128 128",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "255 255 255"
    }
  },
  sage: {
    name: "Sage",
    colors: {
      primary: "190 198 174",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "23 23 23"
    }
  },
  emerald: {
    name: "Emerald",
    colors: {
      primary: "47 92 54",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "255 255 255"
    }
  },
  carnival: {
    name: "Carnival",
    colors: {
      primary: "255 183 0",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "23 23 23"
    }
  },
  coastal: {
    name: "Coastal",
    colors: {
      primary: "0 105 120",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "255 255 255"
    }
  },
  rose: {
    name: "Rose",
    colors: {
      primary: "214 105 139",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "23 23 23"
    }
  },
  sand: {
    name: "Sand",
    colors: {
      primary: "214 196 168",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "23 23 23"
    }
  },
  bubblegum: {
    name: "Bubblegum",
    colors: {
      primary: "255 182 193",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "23 23 23"
    }
  },
  midnight: {
    name: "Midnight",
    colors: {
      primary: "25 25 112",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "255 255 255"
    }
  },
  autumn: {
    name: "Autumn",
    colors: {
      primary: "139 69 19",
      background: "255 255 255",
      foreground: "23 23 23",
      primaryForeground: "255 255 255"
    }
  }
};

export type ThemeKey = keyof typeof themes; 