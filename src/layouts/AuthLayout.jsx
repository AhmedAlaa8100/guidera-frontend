// src/components/AuthLayout.jsx
import { useDarkMode } from "../contexts/DarkModeContext";
import { Outlet } from "react-router-dom";
import { PublicNavbar } from "../components/Navbar";

export default function AuthLayout() {
  const { darkMode } = useDarkMode();

  return (
    <>
      <PublicNavbar />
      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
            : "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
        }`}
      >
        <Outlet />
      </div>
    </>
  );
}
