"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, Monitor } from "lucide-react";
import { useTheme } from "@/components/shared/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-amber-600 dark:border-amber-500 bg-amber-100 dark:bg-amber-950/90 font-mono">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="border-4 border-amber-700 dark:border-amber-400 bg-amber-500 dark:bg-amber-600 p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <span className="uppercase tracking-wider text-amber-900 dark:text-amber-100">
              UI Reference
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-bold uppercase tracking-wide text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 transition-colors px-3 py-1 border-2 border-transparent hover:border-amber-500 hover:bg-amber-200 dark:hover:bg-amber-800"
            >
              All Components
            </Link>
            <Link
              href="/categories"
              className="text-sm font-bold uppercase tracking-wide text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 transition-colors px-3 py-1 border-2 border-transparent hover:border-amber-500 hover:bg-amber-200 dark:hover:bg-amber-800"
            >
              Categories
            </Link>
            <Link
              href="/styles"
              className="text-sm font-bold uppercase tracking-wide text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 transition-colors px-3 py-1 border-2 border-transparent hover:border-amber-500 hover:bg-amber-200 dark:hover:bg-amber-800"
            >
              Style Tags
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border-4 border-amber-500 dark:border-amber-500 bg-amber-200 dark:bg-amber-800 hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-amber-800 dark:text-amber-200" />
              ) : (
                <Sun className="w-5 h-5 text-amber-800 dark:text-amber-200" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border-4 border-amber-500 dark:border-amber-500 bg-amber-200 dark:bg-amber-800 hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-800 dark:text-amber-200" />
              ) : (
                <Menu className="w-5 h-5 text-amber-800 dark:text-amber-200" />
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
              className="md:hidden border-t-4 border-amber-500 dark:border-amber-600 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm font-bold uppercase tracking-wide text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800 border-2 border-transparent hover:border-amber-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Components
                </Link>
                <Link
                  href="/categories"
                  className="block px-4 py-2 text-sm font-bold uppercase tracking-wide text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800 border-2 border-transparent hover:border-amber-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  href="/styles"
                  className="block px-4 py-2 text-sm font-bold uppercase tracking-wide text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800 border-2 border-transparent hover:border-amber-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Style Tags
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
