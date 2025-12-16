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

  return (
    <nav className="sticky top-0 z-50 border-b-4 theme-border theme-bg-dark font-mono transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div
              className="border-4 p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] transition-colors"
              style={{
                borderColor: currentColor.preview,
                backgroundColor: currentColor.preview
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
                className="p-2 border-4 theme-border theme-bg hover:opacity-90 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] flex items-center gap-2"
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
                      className="absolute z-50 top-full right-0 mt-2 w-52 border-4 border-black bg-white dark:bg-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <div className="px-3 py-2 border-b-4 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                        <span className="font-mono font-bold uppercase text-sm text-gray-800 dark:text-gray-200">
                          ■ Color Theme
                        </span>
                      </div>
                      <div className="p-2 space-y-1">
                        {(Object.entries(colorThemes) as [ColorTheme, typeof colorThemes[ColorTheme]][]).map(([key, themeData]) => (
                          <button
                            key={key}
                            onClick={() => { setColorTheme(key); setColorPickerOpen(false); }}
                            className={`w-full flex items-center gap-3 px-3 py-2 font-mono uppercase text-sm transition-colors ${
                              colorTheme === key
                                ? "bg-gray-200 dark:bg-gray-700"
                                : "hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                          >
                            <div
                              className="w-6 h-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
                              style={{ backgroundColor: themeData.preview }}
                            />
                            <span className="flex-1 text-left text-gray-800 dark:text-gray-200 font-bold">
                              {themeData.name}
                            </span>
                            {colorTheme === key && (
                              <Check className="w-4 h-4 text-green-600" />
                            )}
                          </button>
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
              className="p-2 border-4 theme-border theme-bg hover:opacity-90 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
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
              className="md:hidden p-2 border-4 theme-border theme-bg hover:opacity-90 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
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
