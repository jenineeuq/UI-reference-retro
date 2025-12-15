"use client";

import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Navigation from "@/components/layout/Navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
