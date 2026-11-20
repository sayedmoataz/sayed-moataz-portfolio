"use client";

import { Moon, Sun } from "lucide-react";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs in <head> before first paint: applies the saved theme (no flash) and
 * sets data-js, which lets CSS hide scroll-reveal content only when JS runs.
 */
export const themeScript = `(function(){var d=document.documentElement;d.setAttribute("data-js","");try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")d.setAttribute("data-theme",t)}catch(e){}})()`;

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {}
  }

  // Both icons render; CSS shows the right one, so server and client markup
  // always match regardless of the stored preference.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-fg"
    >
      <Sun aria-hidden className="hidden size-4 dark:block" />
      <Moon aria-hidden className="block size-4 dark:hidden" />
    </button>
  );
}
