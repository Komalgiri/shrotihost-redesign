"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function applyTheme(mode: "dark" | "light") {
  const root = document.documentElement;
  if (mode === "light") {
    root.classList.add("light");
    root.classList.remove("dark");
  } else {
    root.classList.add("dark");
    root.classList.remove("light");
  }
}

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("shroti-theme") as "dark" | "light" | null;
    const resolved = savedTheme === "light" ? "light" : "dark";
    setTheme(resolved);
    applyTheme(resolved);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("shroti-theme", next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!mounted}
      className="w-9 h-9 rounded-xl border border-white/10 hover:border-white/20 bg-[#111827] hover:bg-[#1F2937] flex items-center justify-center text-[#9CA3AF] hover:text-[#F9FAFB] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/40 disabled:opacity-70"
      aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Switch color theme"}
      title={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Switch color theme"}
    >
      {!mounted ? (
        <span className="w-4 h-4" aria-hidden />
      ) : theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-400 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
};
