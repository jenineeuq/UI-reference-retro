"use client";

import { useState } from "react";
import { Palette, Check } from "lucide-react";
import { useTheme, colorThemes, ColorTheme } from "@/lib/theme-context";

export function ColorThemeSwitcher() {
  const { colorTheme, setColorTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border-4 border-current theme-border theme-bg font-mono font-bold uppercase text-sm retro-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
        style={{ borderColor: colorThemes[colorTheme].preview }}
      >
        <Palette className="w-4 h-4" style={{ color: colorThemes[colorTheme].preview }} />
        <span className="hidden sm:inline" style={{ color: colorThemes[colorTheme].preview }}>
          {colorThemes[colorTheme].name}
        </span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute z-50 top-full right-0 mt-2 w-48 border-4 border-black bg-white dark:bg-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="px-3 py-2 border-b-4 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
              <span className="font-mono font-bold uppercase text-sm text-gray-800 dark:text-gray-200">
                ■ Color Theme
              </span>
            </div>
            <div className="p-2 space-y-1">
              {(Object.entries(colorThemes) as [ColorTheme, typeof colorThemes[ColorTheme]][]).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => { setColorTheme(key); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 font-mono uppercase text-sm transition-colors ${
                    colorTheme === key
                      ? "bg-gray-200 dark:bg-gray-700"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <div
                    className="w-5 h-5 border-2 border-black"
                    style={{ backgroundColor: theme.preview }}
                  />
                  <span className="flex-1 text-left text-gray-800 dark:text-gray-200 font-bold">
                    {theme.name}
                  </span>
                  {colorTheme === key && (
                    <Check className="w-4 h-4 text-green-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
