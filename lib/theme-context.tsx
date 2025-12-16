"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ColorTheme = "terracotta" | "olive" | "mustard" | "avocado" | "teal" | "dusty-rose" | "mint" | "cream";

interface ThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const colorThemes: Record<ColorTheme, { name: string; primary: string; preview: string; category: string }> = {
  terracotta: { name: "Terracotta", primary: "terracotta", preview: "#C2452D", category: "Warm Earthy" },
  olive: { name: "Olive", primary: "olive", preview: "#6B7C3E", category: "Warm Earthy" },
  mustard: { name: "Mustard", primary: "mustard", preview: "#D4A012", category: "Warm Earthy" },
  avocado: { name: "Avocado", primary: "avocado", preview: "#568203", category: "Mid-Century" },
  teal: { name: "Teal", primary: "teal", preview: "#008080", category: "Mid-Century" },
  "dusty-rose": { name: "Dusty Rose", primary: "dusty-rose", preview: "#C48B9F", category: "Soft Pastel" },
  mint: { name: "Mint", primary: "mint", preview: "#98D4BB", category: "Soft Pastel" },
  cream: { name: "Cream", primary: "cream", preview: "#F5F0E1", category: "Neutral" },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("terracotta");

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
