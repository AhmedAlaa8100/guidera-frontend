import React from "react";
import { useLocation } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";
import { Outlet } from "react-router-dom";
import {
  UserNavbar,
  CompanyNavbar,
  PublicNavbar,
  AdminNavbar,
} from "../components/Navbar";
import Footer from "../components/Footer";

export default function SmartLayout() {
  const location = useLocation();
  const { darkMode } = useDarkMode();

  // Determine which navbar to show based on the current path
  const getNavbar = () => {
    if (location.pathname.startsWith("/admin")) {
      return <AdminNavbar />;
    } else if (location.pathname.startsWith("/company")) {
      return <CompanyNavbar />;
    } else if (location.pathname.startsWith("/user")) {
      return <UserNavbar />;
    } else {
      return <PublicNavbar />;
    }
  };

  return (
    <>
      {getNavbar()}
      <div
        className={`min-h-screen flex justify-center transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
            : "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
