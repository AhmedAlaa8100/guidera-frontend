import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Work, Person, Timeline, Business, Info } from "@mui/icons-material";
import { authContext } from "../../contexts/authContext";
import BaseNavbar from "./BaseNavbar";

const userNavigationItems = [
  {
    to: "/user/roadmap",
    label: "RoadMap",
    icon: <Timeline />,
    path: "/user/roadmap",
  },
  {
    to: "/user/project-manager",
    label: "Drafts",
    icon: <Business />,
    path: "/user/project-manager",
  },
  {
    to: "/user/dashboard",
    label: "Profile",
    icon: <Person />,
    path: "/user/dashboard",
  },
  {
    to: "/user/job-offers",
    label: "Job Offers",
    icon: <Work />,
    path: "/user/job-offers",
  },
  {
    to: "/user/about",
    label: "About",
    icon: <Info />,
    path: "/user/about",
  },
];

export default function UserNavbar() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(authContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <BaseNavbar
      navigationItems={userNavigationItems}
      brandName="Guidera"
      brandPath="/user/dashboard"
      showProfileMenu={true}
      showDarkModeToggle={true}
      onLogout={handleLogout}
    />
  );
}
