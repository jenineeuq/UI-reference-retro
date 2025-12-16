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
      <nav className="border-4 theme-border theme-bg-dark">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 theme-accent-bg border-2 theme-border flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="font-bold uppercase theme-text hidden sm:block">RetroApp</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {["Home", "Products", "About", "Contact"].map((item, i) => (
              <button
                key={item}
                className={`px-3 py-1.5 text-sm uppercase font-bold transition-all ${
                  i === 0
                    ? "theme-accent-bg text-white border-2 theme-border"
                    : "theme-text-muted hover:theme-bg-header hover:theme-bg-header border-2 border-transparent hover:theme-border"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 border-2 theme-border theme-bg-header hover:theme-bg-header hover:theme-bg-header">
              <Search className="w-4 h-4 theme-text-muted" />
            </button>
            <button className="relative p-2 border-2 theme-border theme-bg-header hover:theme-bg-header hover:theme-bg-header">
              <Bell className="w-4 h-4 theme-text-muted" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center font-bold">3</span>
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 border-2 theme-border theme-bg-header">
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t-4 theme-border p-2 space-y-1">
            {["Home", "Products", "About", "Contact"].map(item => (
              <button key={item} className="w-full px-3 py-2 text-left text-sm uppercase font-bold theme-text hover:theme-bg-header hover:theme-bg-header">
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
      <div className={`${collapsed ? "w-16" : "w-56"} transition-all border-4 theme-border theme-bg-dark`}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b-4 theme-border">
          {!collapsed && <span className="font-bold uppercase theme-text">Menu</span>}
          <button onClick={() => setCollapsed(!collapsed)} className="p-1 border-2 theme-border theme-bg-header hover:theme-bg-header">
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
                  ? "theme-accent-bg text-white border-2 theme-border shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
                  : "theme-text-muted border-2 border-transparent hover:theme-bg-header hover:theme-bg-header hover:theme-border-light"
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
        <div className="p-2 border-t-4 theme-border">
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
      <div className="flex border-4 theme-border theme-bg-header">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex-1 px-4 py-2 text-sm uppercase font-bold transition-all ${
              active === tab.id
                ? "theme-accent-bg text-white shadow-[inset_0_-4px_0_0_rgba(180,83,9,1)]"
                : "theme-text-muted hover:theme-bg-header hover:theme-bg-header"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 border-4 border-t-0 theme-border theme-bg">
        <h3 className="font-bold uppercase theme-text mb-2">
          ■ {tabs.find(t => t.id === active)?.label}
        </h3>
        <p className="text-sm theme-text-muted">
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
      <nav className="flex items-center gap-1 px-4 py-2 border-4 theme-border theme-bg-dark">
        {paths.map((path, i) => (
          <div key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="w-4 h-4 theme-text-subtle" />}
            {path.current ? (
              <span className="px-2 py-1 theme-accent-bg text-white text-sm uppercase font-bold">
                {path.label}
              </span>
            ) : (
              <a href={path.href} className="px-2 py-1 theme-text-muted text-sm uppercase font-bold hover:theme-bg-header hover:theme-bg-header border-2 border-transparent hover:theme-border-light">
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
          className={`p-2 border-4 theme-border font-bold ${
            page === 1
              ? "theme-bg-dark theme-text-subtle cursor-not-allowed"
              : "theme-bg-header theme-text-muted hover:theme-bg-header shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {page > 3 && (
          <>
            <button onClick={() => setPage(1)} className="w-10 h-10 border-4 theme-border-light theme-bg-dark theme-text-muted font-bold hover:theme-bg-header">
              1
            </button>
            <span className="px-1 theme-text-subtle">...</span>
          </>
        )}

        {getPages().map(p => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`w-10 h-10 border-4 font-bold transition-all ${
              p === page
                ? "theme-border theme-accent-bg text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "theme-border-light theme-bg-dark theme-text-muted hover:theme-bg-header hover:theme-bg-header"
            }`}
          >
            {p}
          </button>
        ))}

        {page < totalPages - 2 && (
          <>
            <span className="px-1 theme-text-subtle">...</span>
            <button onClick={() => setPage(totalPages)} className="w-10 h-10 border-4 theme-border-light theme-bg-dark theme-text-muted font-bold hover:theme-bg-header">
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className={`p-2 border-4 theme-border font-bold ${
            page === totalPages
              ? "theme-bg-dark theme-text-subtle cursor-not-allowed"
              : "theme-bg-header theme-text-muted hover:theme-bg-header shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-3 text-center text-sm theme-text-muted uppercase">
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
        className="flex items-center gap-2 px-4 py-2 border-4 theme-border theme-bg-header theme-text-muted hover:theme-bg-header hover:theme-bg-header shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
      >
        <Command className="w-4 h-4" />
        <span className="text-sm uppercase font-bold">Command Palette</span>
        <span className="px-2 py-0.5 theme-bg-header theme-bg-header text-xs">⌘K</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50">
          <div className="w-full max-w-lg border-4 theme-border theme-bg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Search */}
            <div className="flex items-center gap-3 px-4 py-3 border-b-4 theme-border theme-bg-dark">
              <Search className="w-5 h-5 theme-text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="TYPE A COMMAND..."
                className="flex-1 bg-transparent theme-text placeholder:theme-text-subtle uppercase focus:outline-none"
                autoFocus
              />
              <button onClick={() => { setOpen(false); setSearch(""); }} className="p-1 hover:theme-bg-header hover:theme-bg-header">
                <X className="w-5 h-5 theme-text-muted" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-64 overflow-auto p-2">
              {filtered.length > 0 ? (
                filtered.map((cmd, i) => (
                  <button
                    key={i}
                    onClick={() => { setOpen(false); setSearch(""); }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:theme-bg-header hover:theme-bg-header border-2 border-transparent hover:theme-border"
                  >
                    <cmd.icon className="w-5 h-5 theme-text-muted" />
                    <span className="flex-1 text-sm uppercase font-bold theme-text">{cmd.label}</span>
                    <span className="px-2 py-0.5 theme-bg-header text-xs theme-text-muted font-mono">{cmd.shortcut}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center theme-text-subtle uppercase text-sm">
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
