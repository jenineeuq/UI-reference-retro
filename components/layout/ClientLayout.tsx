"use client";

import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { ThemeProvider as ColorThemeProvider } from "@/lib/theme-context";
import Navigation from "@/components/layout/Navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ColorThemeProvider>
        <div className="min-h-screen theme-page-bg transition-colors duration-300">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </ColorThemeProvider>
    </ThemeProvider>
  );
}
