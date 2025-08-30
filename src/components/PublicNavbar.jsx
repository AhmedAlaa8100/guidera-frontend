import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Roadmap", path: "/roadmap" },
  { name: "Projects", path: "/project-manager" },
];

export default function PublicNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useDarkMode();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleMenuClick = (path) => {
    if (path === "/") {
      // Home is always accessible
      navigate(path);
    } else {
      // Show snackbar for protected routes
      setSnackbarOpen(true);
    }
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: darkMode
            ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          borderBottom: `2px solid ${darkMode ? "#374151" : "#e2e8f0"}`,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo and Menu Items */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: darkMode ? "#ffffff" : "#1f2937",
                mr: 4,
                background: darkMode
                  ? "linear-gradient(135deg, #60a5fa 0%, #8b5cf6 100%)"
                  : "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              Guidera
            </Typography>

            {/* Menu Items */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  onClick={() => handleMenuClick(item.path)}
                  sx={{
                    color:
                      location.pathname === item.path
                        ? darkMode
                          ? "#60a5fa"
                          : "#3b82f6"
                        : darkMode
                        ? "#9ca3af"
                        : "#6b7280",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: darkMode ? "#60a5fa" : "#3b82f6",
                      bgcolor: darkMode
                        ? "rgba(96, 165, 250, 0.1)"
                        : "rgba(59, 130, 246, 0.05)",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Auth Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              onClick={handleSignIn}
              sx={{
                borderColor: darkMode ? "#6b7280" : "#d1d5db",
                color: darkMode ? "#9ca3af" : "#6b7280",
                textTransform: "none",
                fontWeight: 500,
                px: 3,
                py: 1,
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: darkMode ? "#9ca3af" : "#6b7280",
                  bgcolor: darkMode
                    ? "rgba(156, 163, 175, 0.1)"
                    : "rgba(107, 114, 128, 0.05)",
                },
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              onClick={handleSignUp}
              sx={{
                background: darkMode
                  ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                  : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                color: "#ffffff",
                textTransform: "none",
                fontWeight: 500,
                px: 3,
                py: 1,
                borderRadius: 2,
                boxShadow: darkMode
                  ? "0 4px 12px rgba(59, 130, 246, 0.3)"
                  : "0 4px 12px rgba(59, 130, 246, 0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: darkMode
                    ? "0 6px 20px rgba(59, 130, 246, 0.4)"
                    : "0 6px 20px rgba(59, 130, 246, 0.3)",
                  background: darkMode
                    ? "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)"
                    : "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)",
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Snackbar for protected routes */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          sx={{
            background: darkMode ? "#3b82f6" : "#3b82f6",
            color: "#ffffff",
            fontWeight: 600,
            "& .MuiAlert-icon": {
              color: "#ffffff",
            },
          }}
        >
          Please sign in to access this page
        </Alert>
      </Snackbar>
    </>
  );
}
