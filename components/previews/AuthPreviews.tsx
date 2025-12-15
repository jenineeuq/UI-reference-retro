"use client";

import { useState } from "react";
import {
  User, Mail, Lock, Eye, EyeOff, Github, Chrome, LogOut,
  Settings, HelpCircle, CreditCard, ChevronRight
} from "lucide-react";

// AuthCard Preview
export function AuthCardPreview() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm p-6 font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-14 h-14 mx-auto mb-3 border-4 border-amber-700 bg-amber-500 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]">
          <span className="text-white font-bold text-xl">R</span>
        </div>
        <h2 className="text-xl font-bold uppercase text-amber-900 dark:text-amber-100">
          {mode === "login" ? "Welcome back" : "Create account"}
        </h2>
        <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">
          {mode === "login"
            ? "Sign in to continue"
            : "Enter your details to get started"}
        </p>
      </div>

      {/* Social login */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button className="flex items-center justify-center gap-2 px-4 py-2 border-4 border-amber-500 bg-amber-200 dark:bg-amber-800 hover:bg-amber-300 dark:hover:bg-amber-700 text-sm font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
          <Chrome className="w-4 h-4" />
          Google
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2 border-4 border-amber-500 bg-amber-200 dark:bg-amber-800 hover:bg-amber-300 dark:hover:bg-amber-700 text-sm font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
          <Github className="w-4 h-4" />
          GitHub
        </button>
      </div>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-4 border-amber-400 dark:border-amber-600" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-amber-50 dark:bg-amber-950 px-2 text-amber-500 uppercase font-bold">or continue with</span>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-3">
        {mode === "signup" && (
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
            <input
              type="text"
              placeholder="FULL NAME..."
              className="w-full pl-10 pr-4 py-2.5 border-4 border-amber-500 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 text-sm uppercase focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(180,83,9,1)]"
            />
          </div>
        )}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
          <input
            type="email"
            placeholder="EMAIL ADDRESS..."
            className="w-full pl-10 pr-4 py-2.5 border-4 border-amber-500 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 text-sm uppercase focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(180,83,9,1)]"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="PASSWORD..."
            className="w-full pl-10 pr-10 py-2.5 border-4 border-amber-500 bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 text-sm uppercase focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(180,83,9,1)]"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-500 hover:text-amber-700"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        {mode === "login" && (
          <div className="flex justify-end">
            <button className="text-xs text-amber-600 dark:text-amber-400 hover:text-amber-800 uppercase font-bold">
              Forgot password?
            </button>
          </div>
        )}

        <button className="w-full py-2.5 border-4 border-amber-700 bg-amber-500 text-white text-sm font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]">
          {mode === "login" ? "Sign in" : "Create account"}
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-amber-600 dark:text-amber-400 mt-4">
        {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="text-amber-800 dark:text-amber-200 hover:underline font-bold uppercase"
        >
          {mode === "login" ? "Sign up" : "Sign in"}
        </button>
      </p>
    </div>
  );
}

// UserMenu Preview
export function UserMenuPreview() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
    { icon: CreditCard, label: "Billing" },
    { icon: HelpCircle, label: "Help & Support" },
    { divider: true },
    { icon: LogOut, label: "Log out", danger: true },
  ];

  return (
    <div className="relative font-mono">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-3 py-2 border-4 border-amber-500 bg-amber-200 dark:bg-amber-800 hover:bg-amber-300 dark:hover:bg-amber-700 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]"
      >
        <div className="w-8 h-8 border-2 border-amber-600 bg-amber-500 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
          <span className="text-white text-sm font-bold">JD</span>
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-sm font-bold text-amber-900 dark:text-amber-100 uppercase">John Doe</div>
          <div className="text-xs text-amber-600 dark:text-amber-400">john@example.com</div>
        </div>
        <ChevronRight className={`w-4 h-4 text-amber-600 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full right-0 mt-2 w-56 border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20">
            {/* User info */}
            <div className="px-3 py-2 border-b-4 border-amber-500 bg-amber-100 dark:bg-amber-900">
              <div className="font-bold text-sm text-amber-900 dark:text-amber-100 uppercase">John Doe</div>
              <div className="text-xs text-amber-600 dark:text-amber-400">john@example.com</div>
            </div>

            {menuItems.map((item, i) =>
              item.divider ? (
                <div key={i} className="h-1 bg-amber-400 dark:bg-amber-600 my-1" />
              ) : (
                <button
                  key={i}
                  onClick={() => setOpen(false)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-bold uppercase transition-colors ${
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
