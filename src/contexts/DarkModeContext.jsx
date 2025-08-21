import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // 1. Check if user has a saved preference in localStorage
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return saved === "true";
    }
    // 2. Otherwise, use system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 🟢 Sync darkMode with Tailwind `dark` class + save to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // <html class="dark">
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
