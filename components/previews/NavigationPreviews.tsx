"use client";

import { useState } from "react";
import {
  Home, Settings, User, Bell, Search, Menu, X, ChevronRight,
  ChevronLeft, LayoutDashboard, FileText, Mail, HelpCircle,
  LogOut, Command
} from "lucide-react";

// Navbar Preview
export function NavbarPreview() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full font-mono">
      <nav className="border-4 border-amber-600 dark:border-amber-500 bg-amber-100 dark:bg-amber-900">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 border-2 border-amber-700 flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="font-bold uppercase text-amber-900 dark:text-amber-100 hidden sm:block">RetroApp</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {["Home", "Products", "About", "Contact"].map((item, i) => (
              <button
                key={item}
                className={`px-3 py-1.5 text-sm uppercase font-bold transition-all ${
                  i === 0
                    ? "bg-amber-500 text-white border-2 border-amber-700"
                    : "text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800 border-2 border-transparent hover:border-amber-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 border-2 border-amber-500 bg-amber-200 dark:bg-amber-800 hover:bg-amber-300 dark:hover:bg-amber-700">
              <Search className="w-4 h-4 text-amber-700 dark:text-amber-300" />
            </button>
            <button className="relative p-2 border-2 border-amber-500 bg-amber-200 dark:bg-amber-800 hover:bg-amber-300 dark:hover:bg-amber-700">
              <Bell className="w-4 h-4 text-amber-700 dark:text-amber-300" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center font-bold">3</span>
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 border-2 border-amber-500 bg-amber-200 dark:bg-amber-800">
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t-4 border-amber-500 p-2 space-y-1">
            {["Home", "Products", "About", "Contact"].map(item => (
              <button key={item} className="w-full px-3 py-2 text-left text-sm uppercase font-bold text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

// Sidebar Preview
export function SidebarPreview() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("dashboard");

  const items = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "projects", icon: FileText, label: "Projects" },
    { id: "messages", icon: Mail, label: "Messages", badge: 5 },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="font-mono">
      <div className={`${collapsed ? "w-16" : "w-56"} transition-all border-4 border-amber-600 dark:border-amber-500 bg-amber-100 dark:bg-amber-900`}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b-4 border-amber-500">
          {!collapsed && <span className="font-bold uppercase text-amber-900 dark:text-amber-100">Menu</span>}
          <button onClick={() => setCollapsed(!collapsed)} className="p-1 border-2 border-amber-500 bg-amber-200 dark:bg-amber-800 hover:bg-amber-300">
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Items */}
        <div className="p-2 space-y-1">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 transition-all ${
                active === item.id
                  ? "bg-amber-500 text-white border-2 border-amber-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
                  : "text-amber-700 dark:text-amber-300 border-2 border-transparent hover:bg-amber-200 dark:hover:bg-amber-800 hover:border-amber-400"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <>
                  <span className="flex-1 text-left text-sm uppercase font-bold">{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 bg-red-500 text-white text-xs font-bold">{item.badge}</span>
                  )}
                </>
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-2 border-t-4 border-amber-500">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 border-2 border-transparent hover:border-red-400">
            <LogOut className="w-5 h-5" />
            {!collapsed && <span className="text-sm uppercase font-bold">Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

// Tabs Preview
export function TabsPreview() {
  const [active, setActive] = useState("overview");
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "analytics", label: "Analytics" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="w-full max-w-md font-mono">
      {/* Tab Headers */}
      <div className="flex border-4 border-amber-600 dark:border-amber-500 bg-amber-200 dark:bg-amber-800">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex-1 px-4 py-2 text-sm uppercase font-bold transition-all ${
              active === tab.id
                ? "bg-amber-500 text-white shadow-[inset_0_-4px_0_0_rgba(180,83,9,1)]"
                : "text-amber-700 dark:text-amber-300 hover:bg-amber-300 dark:hover:bg-amber-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 border-4 border-t-0 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
        <h3 className="font-bold uppercase text-amber-900 dark:text-amber-100 mb-2">
          ■ {tabs.find(t => t.id === active)?.label}
        </h3>
        <p className="text-sm text-amber-700 dark:text-amber-300">
          Content for the {active} tab. This is a retro-styled tab component with pixel-perfect borders.
        </p>
      </div>
    </div>
  );
}

// Breadcrumbs Preview
export function BreadcrumbsPreview() {
  const paths = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Computers", current: true },
  ];

  return (
    <div className="w-full font-mono">
      <nav className="flex items-center gap-1 px-4 py-2 border-4 border-amber-600 dark:border-amber-500 bg-amber-100 dark:bg-amber-900">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="w-4 h-4 text-amber-400" />}
            {path.current ? (
              <span className="px-2 py-1 bg-amber-500 text-white text-sm uppercase font-bold">
                {path.label}
              </span>
            ) : (
              <a href={path.href} className="px-2 py-1 text-amber-700 dark:text-amber-300 text-sm uppercase font-bold hover:bg-amber-200 dark:hover:bg-amber-800 border-2 border-transparent hover:border-amber-400">
                {path.label}
              </a>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

// Pagination Preview
export function PaginationPreview() {
  const [page, setPage] = useState(3);
  const totalPages = 10;

  const getPages = () => {
    const pages = [];
    for (let i = Math.max(1, page - 2); i <= Math.min(totalPages, page + 2); i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="font-mono">
      <div className="flex items-center gap-1">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className={`p-2 border-4 border-amber-500 font-bold ${
            page === 1
              ? "bg-amber-100 dark:bg-amber-900 text-amber-400 cursor-not-allowed"
              : "bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-300 hover:bg-amber-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {page > 3 && (
          <>
            <button onClick={() => setPage(1)} className="w-10 h-10 border-4 border-amber-400 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 font-bold hover:bg-amber-200">
              1
            </button>
            <span className="px-1 text-amber-500">...</span>
          </>
        )}

        {getPages().map(p => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`w-10 h-10 border-4 font-bold transition-all ${
              p === page
                ? "border-amber-700 bg-amber-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "border-amber-400 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800"
            }`}
          >
            {p}
          </button>
        ))}

        {page < totalPages - 2 && (
          <>
            <span className="px-1 text-amber-500">...</span>
            <button onClick={() => setPage(totalPages)} className="w-10 h-10 border-4 border-amber-400 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 font-bold hover:bg-amber-200">
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className={`p-2 border-4 border-amber-500 font-bold ${
            page === totalPages
              ? "bg-amber-100 dark:bg-amber-900 text-amber-400 cursor-not-allowed"
              : "bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-300 hover:bg-amber-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-3 text-center text-sm text-amber-600 dark:text-amber-400 uppercase">
        Page {page} of {totalPages}
      </div>
    </div>
  );
}

// CommandPalette Preview
export function CommandPalettePreview() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const commands = [
    { icon: Home, label: "Go to Dashboard", shortcut: "G D" },
    { icon: FileText, label: "New Document", shortcut: "N D" },
    { icon: Settings, label: "Open Settings", shortcut: "G S" },
    { icon: User, label: "View Profile", shortcut: "G P" },
    { icon: HelpCircle, label: "Help Center", shortcut: "?" },
  ];

  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="font-mono">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 border-4 border-amber-600 dark:border-amber-500 bg-amber-200 dark:bg-amber-800 text-amber-700 dark:text-amber-300 hover:bg-amber-300 dark:hover:bg-amber-700 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
      >
        <Command className="w-4 h-4" />
        <span className="text-sm uppercase font-bold">Command Palette</span>
        <span className="px-2 py-0.5 bg-amber-400 dark:bg-amber-700 text-xs">⌘K</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50">
          <div className="w-full max-w-lg border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Search */}
            <div className="flex items-center gap-3 px-4 py-3 border-b-4 border-amber-500 bg-amber-100 dark:bg-amber-900">
              <Search className="w-5 h-5 text-amber-600" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="TYPE A COMMAND..."
                className="flex-1 bg-transparent text-amber-900 dark:text-amber-100 placeholder-amber-400 uppercase focus:outline-none"
                autoFocus
              />
              <button onClick={() => { setOpen(false); setSearch(""); }} className="p-1 hover:bg-amber-200 dark:hover:bg-amber-800">
                <X className="w-5 h-5 text-amber-600" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-64 overflow-auto p-2">
              {filtered.length > 0 ? (
                filtered.map((cmd, i) => (
                  <button
                    key={i}
                    onClick={() => { setOpen(false); setSearch(""); }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-amber-200 dark:hover:bg-amber-800 border-2 border-transparent hover:border-amber-500"
                  >
                    <cmd.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    <span className="flex-1 text-sm uppercase font-bold text-amber-800 dark:text-amber-200">{cmd.label}</span>
                    <span className="px-2 py-0.5 bg-amber-200 dark:bg-amber-800 text-xs text-amber-600 dark:text-amber-400 font-mono">{cmd.shortcut}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-amber-500 uppercase text-sm">
                  No commands found
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
