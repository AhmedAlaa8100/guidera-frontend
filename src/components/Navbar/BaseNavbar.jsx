import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";
import DarkModeToggle from "./DarkModeToggle";
import NavigationButtons from "./NavigationButtons";
import MobileMenu from "./MobileMenu";
import ProfileMenu from "./ProfileMenu";

export default function BaseNavbar({
  navigationItems = [],
  brandName = "Guidera",
  brandPath = "/user/dashboard",
  showProfileMenu = true,
  showDarkModeToggle = true,
  onLogout,
  profileMenuItems = [],
  customActions = null,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleBrandClick = () => {
    navigate(brandPath);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: darkMode
          ? "rgba(18, 18, 18, 0.95)"
          : "rgba(252, 253, 254, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: darkMode
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        {/* Logo and Brand */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(45deg, #1976d2, #42a5f5)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              cursor: "pointer",
              letterSpacing: "-0.5px",
            }}
            onClick={handleBrandClick}
          >
            {brandName}
          </Typography>
        </Box>

        {/* Desktop Navigation Links */}
        {!isMobile && navigationItems.length > 0 && (
          <NavigationButtons
            navigationItems={navigationItems}
            isActive={isActive}
          />
        )}

        {/* Right Side Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {showDarkModeToggle && <DarkModeToggle position="inline" />}

          {/* Custom Actions */}
          {customActions}

          {/* Mobile Menu Button */}
          {isMobile && navigationItems.length > 0 && (
            <MobileMenu
              navigationItems={navigationItems}
              isActive={isActive}
              open={mobileMenuOpen}
              onToggle={handleMobileMenuToggle}
              onClose={handleMobileMenuClose}
            />
          )}

          {/* Profile Menu */}
          {showProfileMenu && (
            <ProfileMenu onLogout={onLogout} menuItems={profileMenuItems} />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
