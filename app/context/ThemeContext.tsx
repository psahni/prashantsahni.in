"use client";

import React, { createContext, useContext, useState } from "react";

export type ThemeName = "ivory" | "jupiter";

export interface ThemeTokens {
  bgIvory: string;
  bgSurface: string;
  forestPrimary: string;
  limeAccent: string;
  textMuted: string;
  borderWarm: string;
}

export const defaultThemeTokens: ThemeTokens = {
  bgIvory: "#F5F3ED",
  bgSurface: "#FFFDF8",
  forestPrimary: "#17372D",
  limeAccent: "#C8F04A",
  textMuted: "#66706A",
  borderWarm: "#D9D8D0",
};

interface ThemeContextType {
  theme: ThemeName;
  tokens: ThemeTokens;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  initialTheme = "ivory",
}: {
  children: React.ReactNode;
  initialTheme?: ThemeName;
}) {
  const [theme, setTheme] = useState<ThemeName>(initialTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        tokens: defaultThemeTokens,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
