"use client";

import { useState, useEffect } from "react";
import {
  X, CheckCircle, AlertTriangle, Info, AlertCircle,
  Bell, Trash2, ExternalLink
} from "lucide-react";

// Toast Preview
export function ToastPreview() {
  const [toasts, setToasts] = useState<Array<{ id: number; type: string; message: string }>>([]);

  const addToast = (type: string) => {
    const messages: Record<string, string> = {
      success: "Operation completed successfully!",
      error: "Something went wrong!",
      warning: "Please check your input!",
      info: "Here's some useful information.",
    };
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message: messages[type] }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const colors: Record<string, string> = {
    success: "border-green-600 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
    error: "border-red-600 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
    warning: "border-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
    info: "border-blue-600 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
  };

  const icons: Record<string, typeof CheckCircle> = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  return (
    <div className="font-mono">
      <div className="flex flex-wrap gap-2 mb-4">
        {["success", "error", "warning", "info"].map(type => (
          <button
            key={type}
            onClick={() => addToast(type)}
            className="px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
          >
            {type}
          </button>
        ))}
      </div>

      {/* Toast Container */}
      <div className="space-y-2">
        {toasts.map(toast => {
          const Icon = icons[toast.type];
          return (
            <div
              key={toast.id}
              className={`flex items-center gap-3 px-4 py-3 border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] ${colors[toast.type]}`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="flex-1 text-sm uppercase font-bold">{toast.message}</span>
              <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}>
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Alert Preview
export function AlertPreview() {
  const alerts = [
    { type: "success", icon: CheckCircle, title: "Success!", message: "Your changes have been saved." },
    { type: "error", icon: AlertCircle, title: "Error!", message: "Failed to process your request." },
    { type: "warning", icon: AlertTriangle, title: "Warning!", message: "This action cannot be undone." },
    { type: "info", icon: Info, title: "Information", message: "New updates are available." },
  ];

  const colors: Record<string, string> = {
    success: "border-green-600 bg-green-100 dark:bg-green-900/30",
    error: "border-red-600 bg-red-100 dark:bg-red-900/30",
    warning: "border-yellow-600 bg-yellow-100 dark:bg-yellow-900/30",
    info: "border-blue-600 bg-blue-100 dark:bg-blue-900/30",
  };

  const textColors: Record<string, string> = {
    success: "text-green-800 dark:text-green-300",
    error: "text-red-800 dark:text-red-300",
    warning: "text-yellow-800 dark:text-yellow-300",
    info: "text-blue-800 dark:text-blue-300",
  };

  return (
    <div className="w-full max-w-md font-mono space-y-3">
      {alerts.map(alert => (
        <div key={alert.type} className={`border-4 p-4 ${colors[alert.type]}`}>
          <div className="flex items-start gap-3">
            <alert.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${textColors[alert.type]}`} />
            <div className="flex-1">
              <h4 className={`font-bold uppercase text-sm ${textColors[alert.type]}`}>{alert.title}</h4>
              <p className={`text-sm mt-1 ${textColors[alert.type]} opacity-80`}>{alert.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Dialog Preview
export function DialogPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-mono">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
      >
        Open Dialog
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="w-full max-w-md border-4 theme-border theme-bg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b-4 theme-border theme-bg-header">
              <h2 className="font-bold uppercase theme-text">■ Confirm Action</h2>
              <button onClick={() => setOpen(false)} className="p-1 hover:theme-bg-header hover:theme-bg-header">
                <X className="w-5 h-5 theme-text-muted" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="theme-text-muted">
                Are you sure you want to proceed with this action? This may have significant consequences.
              </p>
            </div>

            {/* Footer */}
            <div className="flex gap-2 p-4 border-t-4 theme-border-light theme-bg-dark">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 px-4 py-2 border-4 theme-border-light font-bold uppercase theme-text-muted hover:theme-bg-header hover:theme-bg-header"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex-1 px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Sheet Preview
export function SheetPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-mono">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
      >
        Open Sheet
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
          <div
            className="w-full max-w-sm h-full border-l-4 theme-border theme-bg shadow-[-8px_0px_0px_0px_rgba(0,0,0,0.3)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b-4 theme-border theme-bg-header">
              <h2 className="font-bold uppercase theme-text">■ Sheet Panel</h2>
              <button onClick={() => setOpen(false)} className="p-1 hover:theme-bg-header hover:theme-bg-header">
                <X className="w-5 h-5 theme-text-muted" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <p className="theme-text-muted text-sm">
                This is a slide-out sheet panel with retro styling. Perfect for forms and additional content.
              </p>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-bold uppercase theme-text mb-1">Name</label>
                  <input className="w-full px-3 py-2 border-4 theme-border theme-bg-dark theme-text" placeholder="ENTER NAME..." />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase theme-text mb-1">Email</label>
                  <input className="w-full px-3 py-2 border-4 theme-border theme-bg-dark theme-text" placeholder="ENTER EMAIL..." />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t-4 theme-border theme-bg-header">
              <button
                onClick={() => setOpen(false)}
                className="w-full px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Popover Preview
export function PopoverPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-mono relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 border-4 theme-border theme-bg-header theme-text font-bold uppercase hover:theme-bg-header hover:theme-bg-header shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
      >
        <Bell className="w-5 h-5 inline mr-2" />
        Notifications
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute z-20 top-full left-0 mt-2 w-72 border-4 theme-border theme-bg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="px-3 py-2 border-b-4 theme-border theme-bg-header">
              <span className="font-bold uppercase text-sm theme-text">■ Notifications (3)</span>
            </div>
            <div className="divide-y-2 theme-border-light">
              {[
                { title: "New message", desc: "You have a new message from John" },
                { title: "Update available", desc: "Version 2.0 is now available" },
                { title: "Task completed", desc: "Your export is ready" },
              ].map((item, i) => (
                <div key={i} className="px-3 py-2 hover:theme-bg-dark dark:hover:theme-bg-dark cursor-pointer">
                  <div className="font-bold text-sm theme-text uppercase">{item.title}</div>
                  <div className="text-xs theme-text-muted">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="px-3 py-2 border-t-4 theme-border-light">
              <button className="w-full text-center text-sm theme-text-muted uppercase font-bold hover:theme-text">
                View All →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Tooltip Preview
export function TooltipPreview() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const buttons = [
    { id: "delete", icon: Trash2, tooltip: "Delete Item" },
    { id: "link", icon: ExternalLink, tooltip: "Open in New Tab" },
    { id: "info", icon: Info, tooltip: "More Information" },
  ];

  return (
    <div className="font-mono">
      <div className="flex gap-3">
        {buttons.map(btn => (
          <div key={btn.id} className="relative">
            <button
              onMouseEnter={() => setActiveTooltip(btn.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              className="p-3 border-4 theme-border theme-bg-header hover:theme-bg-header hover:theme-bg-header shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              <btn.icon className="w-5 h-5 theme-text-muted" />
            </button>
            {activeTooltip === btn.id && (
              <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 border-4 theme-border theme-bg-dark theme-text text-xs uppercase font-bold whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {btn.tooltip}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent theme-border" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Skeleton Preview
export function SkeletonPreview() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setLoading(prev => !prev), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="p-4 border-4 theme-border theme-bg">
        {loading ? (
          <div className="space-y-3 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 theme-bg-header border-4 theme-border-light" />
              <div className="flex-1 space-y-2">
                <div className="h-4 theme-bg-header w-3/4" />
                <div className="h-3 theme-bg-header w-1/2" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 theme-bg-header" />
              <div className="h-3 theme-bg-header w-5/6" />
              <div className="h-3 theme-bg-header w-4/6" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 theme-bg-header flex-1" />
              <div className="h-8 theme-bg-header flex-1" />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 theme-accent-bg border-4 theme-border flex items-center justify-center text-white font-bold">JD</div>
              <div>
                <div className="font-bold theme-text uppercase">John Doe</div>
                <div className="text-sm theme-text-muted">@johndoe</div>
              </div>
            </div>
            <p className="text-sm theme-text-muted">
              Software developer passionate about retro UI design and pixel art.
            </p>
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-1 border-4 theme-border theme-accent-bg text-white text-sm font-bold uppercase">Follow</button>
              <button className="flex-1 px-3 py-1 border-4 theme-border-light theme-text-muted text-sm font-bold uppercase">Message</button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-2 text-center text-xs theme-text-subtle uppercase">
        {loading ? "■ Loading..." : "■ Loaded!"}
      </div>
    </div>
  );
}

// Progress Preview
export function ProgressPreview() {
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 5));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-sm font-mono space-y-4">
      {/* Linear Progress */}
      <div>
        <div className="flex justify-between text-sm theme-text-muted mb-1 uppercase">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-6 border-4 theme-border theme-bg-header">
          <div
            className="h-full theme-accent-bg transition-all duration-300 flex items-center justify-end pr-1"
            style={{ width: `${progress}%` }}
          >
            {progress > 10 && <span className="text-white text-xs font-bold">█</span>}
          </div>
        </div>
      </div>

      {/* Segmented Progress */}
      <div>
        <div className="text-sm theme-text-muted mb-1 uppercase">Segmented</div>
        <div className="flex gap-1">
          {[0, 20, 40, 60, 80].map(threshold => (
            <div
              key={threshold}
              className={`flex-1 h-6 border-4 transition-all ${
                progress > threshold
                  ? "theme-border theme-accent-bg"
                  : "theme-border-light theme-bg-dark"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Steps Progress */}
      <div>
        <div className="text-sm theme-text-muted mb-2 uppercase">Steps: {Math.ceil(progress / 25)}/4</div>
        <div className="flex items-center">
          {[1, 2, 3, 4].map((step, i) => (
            <div key={step} className="flex items-center flex-1">
              <div className={`w-8 h-8 border-4 flex items-center justify-center font-bold text-sm ${
                progress >= step * 25
                  ? "theme-border theme-accent-bg text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
                  : "theme-border-light theme-bg-dark theme-text-subtle"
              }`}>
                {step}
              </div>
              {i < 3 && (
                <div className={`flex-1 h-2 ${progress > step * 25 ? "theme-accent-bg" : "theme-bg-header"}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
