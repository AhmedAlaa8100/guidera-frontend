import { useDarkMode } from "../contexts/DarkModeContext";
import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer";

export default function MainLayout() {
  const { darkMode } = useDarkMode();
  return (
    <>
      <Navbar />
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
