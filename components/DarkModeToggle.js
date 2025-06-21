"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);
  return (
    <button
      onClick={() => setDark(d => !d)}
      className="ml-4 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
      aria-label="Toggle dark mode"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
