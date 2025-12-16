"use client";

import { useState } from "react";
import {
  User, Check, X, Copy, Clock, AlertTriangle, Inbox,
  RefreshCw, Plus
} from "lucide-react";

// Avatar Preview
export function AvatarPreview() {
  return (
    <div className="space-y-4 font-mono">
      {/* Single avatars */}
      <div className="flex items-center gap-4">
        {/* With icon */}
        <div className="w-12 h-12 border-4 theme-border theme-accent-bg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]">
          <User className="w-6 h-6 text-white" />
        </div>
        {/* With initials */}
        <div className="w-12 h-12 border-4 border-blue-600 bg-blue-500 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]">
          <span className="text-white font-bold">JD</span>
        </div>
        {/* With status */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-green-600 bg-green-500 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]">
            <span className="text-white font-bold">AS</span>
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 theme-bg" />
        </div>
      </div>

      {/* Avatar group */}
      <div className="flex -space-x-3">
        {["bg-purple-500", "bg-blue-500", "bg-green-500", "bg-orange-500"].map((bg, i) => (
          <div
            key={i}
            className={`w-10 h-10 ${bg} flex items-center justify-center border-4 theme-bg shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]`}
          >
            <span className="text-white text-sm font-bold">{String.fromCharCode(65 + i)}</span>
          </div>
        ))}
        <div className="w-10 h-10 theme-bg-header flex items-center justify-center border-4 theme-bg">
          <span className="theme-text-muted text-xs font-bold">+5</span>
        </div>
      </div>
    </div>
  );
}

// Badge Preview
export function BadgePreview() {
  const badges = [
    { label: "New", color: "theme-accent-bg text-white theme-border" },
    { label: "Success", color: "bg-green-500 text-white border-green-700" },
    { label: "Warning", color: "bg-yellow-500 text-black border-yellow-700" },
    { label: "Error", color: "bg-red-500 text-white border-red-700" },
    { label: "Info", color: "bg-blue-500 text-white border-blue-700" },
  ];

  return (
    <div className="space-y-3 font-mono">
      {/* Basic badges */}
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge.label}
            className={`px-2.5 py-0.5 border-2 text-xs font-bold uppercase ${badge.color}`}
          >
            {badge.label}
          </span>
        ))}
      </div>

      {/* Badges with icons */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 border-2 border-green-700 bg-green-500 text-white text-xs font-bold uppercase">
          <Check className="w-3 h-3" />
          Verified
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 border-2 border-yellow-700 bg-yellow-500 text-black text-xs font-bold uppercase">
          <Clock className="w-3 h-3" />
          Pending
        </span>
      </div>

      {/* Dot badges */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border-2 theme-border theme-bg-header text-xs uppercase font-bold">
          <span className="w-2 h-2 bg-green-500" />
          Active
        </span>
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border-2 theme-border theme-bg-header text-xs uppercase font-bold">
          <span className="w-2 h-2 bg-red-500" />
          Offline
        </span>
      </div>
    </div>
  );
}

// Tag Preview
export function TagPreview() {
  const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Next.js"]);

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const addTag = () => {
    const newTags = ["Vue", "Angular", "Svelte", "Node.js"];
    const available = newTags.filter(t => !tags.includes(t));
    if (available.length > 0) {
      setTags([...tags, available[0]]);
    }
  };

  return (
    <div className="space-y-3 font-mono">
      {/* Removable tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2.5 py-1 border-4 theme-border theme-bg-header text-sm uppercase font-bold theme-text"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="theme-text-muted hover:theme-text"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        <button
          onClick={addTag}
          className="inline-flex items-center gap-1 px-2.5 py-1 border-4 border-dashed theme-border text-sm theme-text-muted hover:theme-bg-header hover:theme-bg-header uppercase font-bold"
        >
          <Plus className="w-3 h-3" />
          Add
        </button>
      </div>

      {/* Colored tags */}
      <div className="flex flex-wrap gap-2">
        {[
          { label: "Design", color: "border-purple-600 bg-purple-500 text-white" },
          { label: "Development", color: "border-blue-600 bg-blue-500 text-white" },
          { label: "Marketing", color: "border-green-600 bg-green-500 text-white" },
        ].map((tag) => (
          <span key={tag.label} className={`px-2.5 py-1 border-4 text-sm uppercase font-bold ${tag.color}`}>
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// Timestamp Preview
export function TimestampPreview() {
  return (
    <div className="space-y-3 font-mono">
      <div className="flex items-center gap-3 text-sm">
        <Clock className="w-5 h-5 theme-text-subtle" />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="theme-text-subtle uppercase">Relative:</span>
            <span className="theme-text font-bold">5 minutes ago</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="theme-text-subtle uppercase">Absolute:</span>
            <span className="theme-text font-bold">Dec 13, 2024 at 2:30 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="theme-text-subtle uppercase">ISO:</span>
            <span className="theme-text text-xs font-mono">2024-12-13T14:30:00Z</span>
          </div>
        </div>
      </div>

      {/* Timeline style */}
      <div className="space-y-2">
        {[
          { time: "2 min ago", event: "User logged in" },
          { time: "1 hour ago", event: "File uploaded" },
          { time: "Yesterday", event: "Account created" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className="text-xs theme-text-subtle w-20 uppercase">{item.time}</span>
            <div className="w-3 h-3 theme-accent-bg border-2 theme-border" />
            <span className="theme-text uppercase font-bold">{item.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// CopyButton Preview
export function CopyButtonPreview() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-3 font-mono">
      {/* Inline copy */}
      <div className="flex items-center gap-2 px-3 py-2 border-4 theme-border theme-bg-header">
        <code className="text-sm flex-1 theme-text">npm install @acme/ui</code>
        <button
          onClick={() => copyText("npm install @acme/ui", "npm")}
          className="p-1.5 border-2 theme-border theme-bg-dark theme-bg-header hover:theme-bg-header hover:theme-bg-header"
        >
          {copied === "npm" ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 theme-text-muted" />
          )}
        </button>
      </div>

      {/* Address copy */}
      <div className="flex items-center gap-2 px-3 py-2 border-4 theme-border theme-bg-header">
        <span className="text-sm flex-1 font-mono theme-text">0x1234...5678</span>
        <button
          onClick={() => copyText("0x1234567890abcdef", "address")}
          className="p-1.5 border-2 theme-border theme-bg-dark theme-bg-header hover:theme-bg-header hover:theme-bg-header"
        >
          {copied === "address" ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 theme-text-muted" />
          )}
        </button>
      </div>

      {/* Copy button standalone */}
      <button
        onClick={() => copyText("https://example.com/share/abc123", "link")}
        className="inline-flex items-center gap-2 px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
      >
        {copied === "link" ? (
          <>
            <Check className="w-4 h-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Link
          </>
        )}
      </button>
    </div>
  );
}

// QRCode Preview
export function QRCodePreview() {
  // Simple QR code pattern (visual representation)
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
  ];

  return (
    <div className="space-y-4 font-mono">
      <div className="p-4 bg-white border-4 theme-border inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${pattern[0].length}, 1fr)` }}>
          {pattern.flat().map((cell, i) => (
            <div
              key={i}
              className={`w-2 h-2 ${cell ? "bg-black" : "bg-white"}`}
            />
          ))}
        </div>
      </div>

      <div className="text-sm theme-text-muted uppercase">
        ■ Scan to open link
      </div>
    </div>
  );
}

// EmptyState Preview
export function EmptyStatePreview() {
  return (
    <div className="w-full max-w-sm p-8 text-center font-mono border-4 theme-border theme-bg">
      <div className="w-16 h-16 mx-auto mb-4 border-4 theme-border theme-bg-header flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
        <Inbox className="w-8 h-8 theme-text-muted" />
      </div>
      <h3 className="font-bold text-lg mb-1 uppercase theme-text">No items yet</h3>
      <p className="text-sm theme-text-muted mb-4">
        Get started by creating your first item.
      </p>
      <button className="px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        Create Item
      </button>
    </div>
  );
}

// ErrorState Preview
export function ErrorStatePreview() {
  return (
    <div className="w-full max-w-sm p-8 text-center font-mono border-4 border-red-600 bg-red-50 dark:bg-red-950/30">
      <div className="w-16 h-16 mx-auto mb-4 border-4 border-red-500 bg-red-200 dark:bg-red-800 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
        <AlertTriangle className="w-8 h-8 text-red-600" />
      </div>
      <h3 className="font-bold text-lg mb-1 uppercase text-red-800 dark:text-red-300">Something went wrong</h3>
      <p className="text-sm text-red-600 dark:text-red-400 mb-4">
        We couldn&apos;t load this content. Please try again.
      </p>
      <button className="inline-flex items-center gap-2 px-4 py-2 border-4 border-red-600 bg-red-500 text-white font-bold uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <RefreshCw className="w-4 h-4" />
        Try Again
      </button>
    </div>
  );
}
