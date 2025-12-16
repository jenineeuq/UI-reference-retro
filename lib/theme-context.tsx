"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ColorTheme = "amber" | "sage" | "rose" | "sky" | "violet" | "slate";

interface ThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const colorThemes: Record<ColorTheme, { name: string; primary: string; preview: string }> = {
  amber: { name: "Amber", primary: "amber", preview: "#f59e0b" },
  sage: { name: "Sage", primary: "emerald", preview: "#10b981" },
  rose: { name: "Rose", primary: "rose", preview: "#f43f5e" },
  sky: { name: "Sky", primary: "sky", preview: "#0ea5e9" },
  violet: { name: "Violet", primary: "violet", preview: "#8b5cf6" },
  slate: { name: "Slate", primary: "slate", preview: "#64748b" },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("amber");

  useEffect(() => {
    const saved = localStorage.getItem("retro-color-theme") as ColorTheme;
    if (saved && colorThemes[saved]) {
      setColorTheme(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("retro-color-theme", colorTheme);
    // Update CSS variables on document root
    document.documentElement.setAttribute("data-color-theme", colorTheme);
  }, [colorTheme]);

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
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
