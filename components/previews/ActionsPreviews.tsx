"use client";

import { useState } from "react";
import {
  ChevronDown, Copy, Download, Share, Settings, Edit, Trash2,
  Plus, MoreHorizontal, ArrowRight, Loader2, Check
} from "lucide-react";

// Button Preview
export function ButtonPreview() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="font-mono space-y-4">
      {/* Primary Buttons */}
      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 border-4 border-amber-700 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">
          Primary
        </button>
        <button className="px-4 py-2 border-4 border-amber-500 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(180,83,9,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(180,83,9,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">
          Secondary
        </button>
        <button className="px-4 py-2 border-4 border-amber-400 dark:border-amber-600 text-amber-700 dark:text-amber-300 font-bold uppercase hover:bg-amber-100 dark:hover:bg-amber-900 transition-all">
          Outline
        </button>
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap items-center gap-2">
        <button className="px-2 py-1 text-xs border-2 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Small
        </button>
        <button className="px-4 py-2 text-sm border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Medium
        </button>
        <button className="px-6 py-3 text-lg border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Large
        </button>
      </div>

      {/* With Icons */}
      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create
        </button>
        <button className="px-4 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* States */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleClick}
          disabled={loading}
          className="px-4 py-2 border-4 border-amber-600 bg-amber-500 text-white font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Click Me"
          )}
        </button>
        <button disabled className="px-4 py-2 border-4 border-amber-400 bg-amber-200 text-amber-400 font-bold uppercase cursor-not-allowed">
          Disabled
        </button>
      </div>

      {/* Destructive */}
      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 border-4 border-red-700 bg-red-500 text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-2">
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
}

// DropdownMenu Preview
export function DropdownMenuPreview() {
  const [open, setOpen] = useState(false);

  const items = [
    { icon: Edit, label: "Edit", shortcut: "⌘E" },
    { icon: Copy, label: "Copy", shortcut: "⌘C" },
    { icon: Download, label: "Download", shortcut: "⌘D" },
    { icon: Share, label: "Share", shortcut: "⌘S" },
    { divider: true },
    { icon: Settings, label: "Settings", shortcut: "⌘," },
    { divider: true },
    { icon: Trash2, label: "Delete", danger: true, shortcut: "⌘⌫" },
  ];

  return (
    <div className="font-mono relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 border-4 border-amber-600 bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] flex items-center gap-2"
      >
        Options
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute z-20 top-full left-0 mt-1 w-56 border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {items.map((item, i) =>
              item.divider ? (
                <div key={i} className="h-1 bg-amber-300 dark:bg-amber-700 my-1" />
              ) : (
                <button
                  key={i}
                  onClick={() => setOpen(false)}
                  className={`w-full px-3 py-2 flex items-center gap-2 text-left text-sm uppercase font-bold transition-colors ${
                    item.danger
                      ? "text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30"
                      : "text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800"
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="flex-1">{item.label}</span>
                  <span className="text-xs text-amber-500 font-mono">{item.shortcut}</span>
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ContextMenu Preview
export function ContextMenuPreview() {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY });
  };

  const items = [
    { icon: Edit, label: "Edit" },
    { icon: Copy, label: "Copy" },
    { icon: Download, label: "Download" },
    { divider: true },
    { icon: Trash2, label: "Delete", danger: true },
  ];

  return (
    <div className="font-mono">
      <div
        onContextMenu={handleContextMenu}
        className="w-full h-48 border-4 border-dashed border-amber-500 bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center cursor-context-menu select-none"
      >
        <div className="text-center">
          <MoreHorizontal className="w-8 h-8 mx-auto mb-2 text-amber-500" />
          <p className="text-amber-700 dark:text-amber-300 uppercase text-sm font-bold">Right-click here</p>
          <p className="text-amber-500 text-xs mt-1">to open context menu</p>
        </div>
      </div>

      {menu && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setMenu(null)} onContextMenu={(e) => { e.preventDefault(); setMenu(null); }} />
          <div
            className="fixed z-20 w-48 border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ left: menu.x, top: menu.y }}
          >
            {items.map((item, i) =>
              item.divider ? (
                <div key={i} className="h-1 bg-amber-300 dark:bg-amber-700 my-1" />
              ) : (
                <button
                  key={i}
                  onClick={() => setMenu(null)}
                  className={`w-full px-3 py-2 flex items-center gap-2 text-left text-sm uppercase font-bold transition-colors ${
                    item.danger
                      ? "text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30"
                      : "text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800"
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ActionBar Preview
export function ActionBarPreview() {
  const [selected, setSelected] = useState<number[]>([1, 3]);

  const items = [1, 2, 3, 4, 5];

  const toggleItem = (id: number) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const clearSelection = () => setSelected([]);

  return (
    <div className="font-mono w-full max-w-md">
      {/* Items */}
      <div className="space-y-2 mb-4">
        {items.map(id => (
          <div
            key={id}
            onClick={() => toggleItem(id)}
            className={`flex items-center gap-3 px-4 py-3 border-4 cursor-pointer transition-all ${
              selected.includes(id)
                ? "border-amber-600 bg-amber-200 dark:bg-amber-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
                : "border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-950 hover:border-amber-500"
            }`}
          >
            <div className={`w-5 h-5 border-4 flex items-center justify-center ${
              selected.includes(id)
                ? "border-amber-700 bg-amber-500"
                : "border-amber-400 dark:border-amber-600 bg-amber-100 dark:bg-amber-900"
            }`}>
              {selected.includes(id) && <Check className="w-3 h-3 text-white" />}
            </div>
            <span className="text-amber-800 dark:text-amber-200 uppercase font-bold">Item {id}</span>
          </div>
        ))}
      </div>

      {/* Action Bar */}
      {selected.length > 0 && (
        <div className="flex items-center gap-2 p-3 border-4 border-amber-600 dark:border-amber-500 bg-amber-200 dark:bg-amber-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="text-sm text-amber-800 dark:text-amber-200 uppercase font-bold flex-1">
            {selected.length} Selected
          </span>
          <div className="flex gap-1">
            <button className="p-2 border-2 border-amber-500 bg-amber-100 dark:bg-amber-700 hover:bg-amber-300 dark:hover:bg-amber-600">
              <Edit className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            </button>
            <button className="p-2 border-2 border-amber-500 bg-amber-100 dark:bg-amber-700 hover:bg-amber-300 dark:hover:bg-amber-600">
              <Copy className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            </button>
            <button className="p-2 border-2 border-red-500 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-800/50">
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>
            <button
              onClick={clearSelection}
              className="px-3 py-1 border-2 border-amber-500 text-amber-700 dark:text-amber-300 text-xs uppercase font-bold hover:bg-amber-300 dark:hover:bg-amber-600"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
