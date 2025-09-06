import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dashboard,
  Business,
  People,
  Assessment,
  Settings,
} from "@mui/icons-material";
import { authContext } from "../../contexts/authContext";
import BaseNavbar from "./BaseNavbar";

const companyNavigationItems = [
  {
    to: "/company/dashboard",
    label: "Dashboard",
    icon: <Dashboard />,
    path: "/company/dashboard",
  },
  {
    to: "/company/analytics",
    label: "Analytics",
    icon: <Assessment />,
    path: "/company/analytics",
  },
  {
    to: "/company/candidates",
    label: "Candidates",
    icon: <People />,
    path: "/company/candidates",
  },
  {
    to: "/company/jobs",
    label: "Job Management",
    icon: <Business />,
    path: "/company/jobs",
  },
  {
    to: "/company/settings",
    label: "Settings",
    icon: <Settings />,
    path: "/company/settings",
  },
];

export default function CompanyNavbar() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(authContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const profileMenuItems = [
    {
      label: "Company Profile",
      icon: Business,
      onClick: () => navigate("/company/profile"),
    },
    {
      label: "Settings",
      icon: Settings,
      onClick: () => navigate("/company/settings"),
    },
  ];

  return (
    <BaseNavbar
      navigationItems={companyNavigationItems}
      brandName="Guidera"
      subBrandName="Company"
      brandPath="/company"
      showProfileMenu={true}
      showDarkModeToggle={true}
      onLogout={handleLogout}
      profileMenuItems={profileMenuItems}
    />
  );
}
