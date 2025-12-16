"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, Monitor, Palette, Check } from "lucide-react";
import { useTheme } from "@/components/shared/ThemeProvider";
import { useTheme as useColorTheme, colorThemes, ColorTheme } from "@/lib/theme-context";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { colorTheme, setColorTheme } = useColorTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);

  const currentColor = colorThemes[colorTheme];

  // Group themes by category
  const themesByCategory = Object.entries(colorThemes).reduce((acc, [key, value]) => {
    const category = value.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push({ key: key as ColorTheme, ...value });
    return acc;
  }, {} as Record<string, Array<{ key: ColorTheme; name: string; primary: string; preview: string; category: string }>>);

  return (
    <nav className="sticky top-0 z-50 border-b-4 theme-border theme-bg-dark font-mono transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div
              className="border-4 p-2 transition-colors"
              style={{
                borderColor: currentColor.preview,
                backgroundColor: currentColor.preview,
                boxShadow: `3px 3px 0px 0px rgba(0,0,0,0.5)`
              }}
            >
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <span className="uppercase tracking-wider theme-text">
              UI Reference
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-bold uppercase tracking-wide theme-text-muted hover:theme-text transition-colors px-3 py-1 border-2 border-transparent hover:theme-border-light hover:theme-bg"
            >
              All Components
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Color Theme Picker */}
            <div className="relative">
              <button
                onClick={() => setColorPickerOpen(!colorPickerOpen)}
                className="p-2 border-4 theme-border theme-bg hover:opacity-90 transition-all active:translate-x-[2px] active:translate-y-[2px] flex items-center gap-2"
                style={{ boxShadow: `2px 2px 0px 0px rgba(0,0,0,0.3)` }}
                aria-label="Change color theme"
              >
                <Palette className="w-5 h-5" style={{ color: currentColor.preview }} />
                <span className="hidden sm:inline text-xs font-bold uppercase" style={{ color: currentColor.preview }}>
                  {currentColor.name}
                </span>
              </button>

              <AnimatePresence>
                {colorPickerOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setColorPickerOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 top-full right-0 mt-2 w-64 border-4 border-black bg-white dark:bg-gray-900"
                      style={{ boxShadow: `4px 4px 0px 0px rgba(0,0,0,1)` }}
                    >
                      <div className="px-3 py-2 border-b-4 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                        <span className="font-mono font-bold uppercase text-sm text-gray-800 dark:text-gray-200">
                          Retro Color Themes
                        </span>
                      </div>
                      <div className="p-2 max-h-80 overflow-y-auto">
                        {Object.entries(themesByCategory).map(([category, themes]) => (
                          <div key={category} className="mb-2">
                            <div className="px-2 py-1 text-xs font-bold uppercase text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                              {category}
                            </div>
                            {themes.map((themeData) => (
                              <button
                                key={themeData.key}
                                onClick={() => { setColorTheme(themeData.key); setColorPickerOpen(false); }}
                                className={`w-full flex items-center gap-3 px-3 py-2 font-mono uppercase text-sm transition-colors ${
                                  colorTheme === themeData.key
                                    ? "bg-gray-200 dark:bg-gray-700"
                                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                              >
                                <div
                                  className="w-6 h-6 border-2 border-black flex-shrink-0"
                                  style={{
                                    backgroundColor: themeData.preview,
                                    boxShadow: `2px 2px 0px 0px rgba(0,0,0,0.3)`
                                  }}
                                />
                                <span className="flex-1 text-left text-gray-800 dark:text-gray-200 font-bold text-xs">
                                  {themeData.name}
                                </span>
                                {colorTheme === themeData.key && (
                                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                                )}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border-4 theme-border theme-bg hover:opacity-90 transition-colors active:translate-x-[2px] active:translate-y-[2px]"
              style={{ boxShadow: `2px 2px 0px 0px rgba(0,0,0,0.3)` }}
              aria-label="Toggle dark/light theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 theme-text" />
              ) : (
                <Sun className="w-5 h-5 theme-text" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border-4 theme-border theme-bg hover:opacity-90 transition-colors active:translate-x-[2px] active:translate-y-[2px]"
              style={{ boxShadow: `2px 2px 0px 0px rgba(0,0,0,0.3)` }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 theme-text" />
              ) : (
                <Menu className="w-5 h-5 theme-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t-4 theme-border-light overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm font-bold uppercase tracking-wide theme-text hover:theme-bg border-2 border-transparent hover:theme-border-light transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Components
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
