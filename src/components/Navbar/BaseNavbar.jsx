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
  subBrandName = null,
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
        background: darkMode
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)",
        backdropFilter: "blur(20px)",
        borderBottom: `3px solid ${darkMode ? "#1e40af" : "#3b82f6"}`,
        boxShadow: darkMode
          ? "0 8px 32px rgba(0, 0, 0, 0.3)"
          : "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        {/* Logo and Brand */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              cursor: "pointer",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "translateY(-1px)",
              },
            }}
            onClick={handleBrandClick}
          >
            <Box
              sx={{
                
                background: darkMode
                  ? "linear-gradient(135deg, #60a5fa 0%, #8b5cf6 50%, #ec4899 100%)"
                  : "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.5px",
                transition: "all 0.4s ease",
                position: "relative",
                lineHeight: 1,
                "&:hover": {
                  filter: "brightness(1.2)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  width: 0,
                  height: "3px",
                  background: darkMode
                    ? "linear-gradient(135deg, #60a5fa 0%, #8b5cf6 50%, #ec4899 100%)"
                    : "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                  transition: "width 0.4s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              <Typography variant="h4" component="div" sx={{ fontWeight: 800 }}>
                {brandName}
              </Typography>
              {subBrandName && (
                <Typography
                  variant="caption"
                  component="div"
                  sx={{
                    fontWeight: 500,
                    color: darkMode ? "#9ca3af" : "#6b7280",
                    fontSize: "0.75rem",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    marginTop: "-2px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: darkMode ? "#60a5fa" : "#3b82f6",
                    },
                  }}
                >
                  {subBrandName}
                </Typography>
              )}
            </Box>
          </Box>
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
