import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dashboard,
  People,
  Settings,
  Security,
  Analytics,
  AdminPanelSettings,
} from "@mui/icons-material";
import { authContext } from "../../contexts/authContext";
import BaseNavbar from "./BaseNavbar";

const adminNavigationItems = [
  {
    to: "/admin/dashboard",
    label: "Dashboard",
    icon: <Dashboard />,
    path: "/admin/dashboard",
  },
  {
    to: "/admin/users",
    label: "Users",
    icon: <People />,
    path: "/admin/users",
  },
  {
    to: "/admin/analytics",
    label: "Analytics",
    icon: <Analytics />,
    path: "/admin/analytics",
  },
  {
    to: "/admin/security",
    label: "Security",
    icon: <Security />,
    path: "/admin/security",
  },
  {
    to: "/admin/settings",
    label: "Settings",
    icon: <Settings />,
    path: "/admin/settings",
  },
];

export default function AdminNavbar() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(authContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const profileMenuItems = [
    {
      label: "Admin Profile",
      icon: AdminPanelSettings,
      onClick: () => navigate("/admin/profile"),
    },
    {
      label: "System Settings",
      icon: Settings,
      onClick: () => navigate("/admin/system-settings"),
    },
  ];

  return (
    <BaseNavbar
      navigationItems={adminNavigationItems}
      brandName="Guidera Admin"
      brandPath="/admin/dashboard"
      showProfileMenu={true}
      showDarkModeToggle={true}
      onLogout={handleLogout}
      profileMenuItems={profileMenuItems}
    />
  );
}
