"use client";

import {useEffect, useState} from "react";
import {Sun, Moon} from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-foreground"
    >
      {/* Avoid hydration mismatch: render nothing distinct until mounted */}
      {mounted ? (
        light ? (
          <Moon size={15} strokeWidth={1.5} />
        ) : (
          <Sun size={15} strokeWidth={1.5} />
        )
      ) : (
        <Sun size={15} strokeWidth={1.5} />
      )}
    </button>
  );
}
