// src/components/AuthLayout.jsx
import DarkModeToggle from "../components/DarkModeToggle";
import { useDarkMode } from "../contexts/DarkModeContext";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
      }`}
    >
      <DarkModeToggle position="absolute" />
      <Outlet />
    </div>
  );
}
