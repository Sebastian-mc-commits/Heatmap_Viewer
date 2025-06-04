// Theme color configurations
// This file centralizes all color definitions for easy theme customization

export type ThemeColorScheme = {
  primary: string
  primaryDark: string
  primaryLight: string
  secondary: string
  accent: string
  background: {
    light: string
    dark: string
  }
  text: {
    light: string
    dark: string
  }
  muted: {
    light: string
    dark: string
  }
  border: {
    light: string
    dark: string
  }
}

// Default orange theme
export const orangeTheme: ThemeColorScheme = {
  primary: "hsl(24.6 95% 53.1%)", // #ff7b00
  primaryDark: "hsl(20.5 90.2% 48.2%)",
  primaryLight: "hsl(30 100% 65%)",
  secondary: "hsl(60 4.8% 95.9%)",
  accent: "hsl(262 83% 58%)",
  background: {
    light: "hsl(0 0% 100%)",
    dark: "hsl(20 14.3% 4.1%)",
  },
  text: {
    light: "hsl(20 14.3% 4.1%)",
    dark: "hsl(60 9.1% 97.8%)",
  },
  muted: {
    light: "hsl(60 4.8% 95.9%)",
    dark: "hsl(12 6.5% 15.1%)",
  },
  border: {
    light: "hsl(20 5.9% 90%)",
    dark: "hsl(12 6.5% 15.1%)",
  },
}

// Blue theme
export const blueTheme: ThemeColorScheme = {
  primary: "hsl(210 100% 50%)", // #0078ff
  primaryDark: "hsl(210 100% 40%)",
  primaryLight: "hsl(210 100% 65%)",
  secondary: "hsl(210 50% 95%)",
  accent: "hsl(340 80% 55%)",
  background: {
    light: "hsl(0 0% 100%)",
    dark: "hsl(210 30% 8%)",
  },
  text: {
    light: "hsl(210 50% 10%)",
    dark: "hsl(210 20% 98%)",
  },
  muted: {
    light: "hsl(210 40% 96%)",
    dark: "hsl(210 30% 15%)",
  },
  border: {
    light: "hsl(210 40% 90%)",
    dark: "hsl(210 30% 20%)",
  },
}

// Green theme
export const greenTheme: ThemeColorScheme = {
  primary: "hsl(150 80% 40%)", // #00b36b
  primaryDark: "hsl(150 80% 30%)",
  primaryLight: "hsl(150 80% 50%)",
  secondary: "hsl(150 30% 96%)",
  accent: "hsl(25 100% 55%)",
  background: {
    light: "hsl(0 0% 100%)",
    dark: "hsl(150 30% 8%)",
  },
  text: {
    light: "hsl(150 50% 10%)",
    dark: "hsl(150 20% 98%)",
  },
  muted: {
    light: "hsl(150 40% 96%)",
    dark: "hsl(150 30% 15%)",
  },
  border: {
    light: "hsl(150 40% 90%)",
    dark: "hsl(150 30% 20%)",
  },
}

// Purple theme
export const purpleTheme: ThemeColorScheme = {
  primary: "hsl(270 70% 50%)", // #7b00ff
  primaryDark: "hsl(270 70% 40%)",
  primaryLight: "hsl(270 70% 60%)",
  secondary: "hsl(270 30% 96%)",
  accent: "hsl(40 100% 55%)",
  background: {
    light: "hsl(0 0% 100%)",
    dark: "hsl(270 30% 8%)",
  },
  text: {
    light: "hsl(270 50% 10%)",
    dark: "hsl(270 20% 98%)",
  },
  muted: {
    light: "hsl(270 40% 96%)",
    dark: "hsl(270 30% 15%)",
  },
  border: {
    light: "hsl(270 40% 90%)",
    dark: "hsl(270 30% 20%)",
  },
}

// Available themes
export const themes = {
  orange: orangeTheme,
  blue: blueTheme,
  green: greenTheme,
  purple: purpleTheme,
}

// Default theme
export const defaultTheme = orangeTheme

