import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { Login, PersonAdd } from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";
import BaseNavbar from "./BaseNavbar";

export default function PublicNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useDarkMode();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  const customActions = (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      {!isLoginPage && (
        <Button
          variant="outlined"
          startIcon={<Login />}
          onClick={() => navigate("/login")}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 3,
            px: 3,
            py: 1.5,
            borderColor: darkMode ? "#6b7280" : "#d1d5db",
            color: darkMode ? "#9ca3af" : "#6b7280",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              borderColor: darkMode ? "#60a5fa" : "#3b82f6",
              color: darkMode ? "#60a5fa" : "#3b82f6",
              bgcolor: darkMode
                ? "rgba(96, 165, 250, 0.1)"
                : "rgba(59, 130, 246, 0.05)",
              transform: "translateY(-2px)",
              boxShadow: darkMode
                ? "0 8px 25px rgba(96, 165, 250, 0.3)"
                : "0 8px 25px rgba(59, 130, 246, 0.2)",
            },
          }}
        >
          Sign In
        </Button>
      )}
      {!isRegisterPage && (
        <Button
          variant="contained"
          startIcon={<PersonAdd />}
          onClick={() => navigate("/register")}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 3,
            px: 3,
            py: 1.5,
            background: darkMode
              ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #7c3aed 100%)"
              : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #7c3aed 100%)",
            color: "#ffffff",
            boxShadow: darkMode
              ? "0 8px 25px rgba(59, 130, 246, 0.4)"
              : "0 8px 25px rgba(59, 130, 246, 0.3)",
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: darkMode
                ? "0 12px 35px rgba(59, 130, 246, 0.5)"
                : "0 12px 35px rgba(59, 130, 246, 0.4)",
              background: darkMode
                ? "linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #6d28d9 100%)"
                : "linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #6d28d9 100%)",
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
              transition: "left 0.5s ease",
            },
            "&:hover::before": {
              left: "100%",
            },
          }}
        >
          Sign Up
        </Button>
      )}
    </Box>
  );

  return (
    <BaseNavbar
      navigationItems={[]}
      brandName="Guidera"
      brandPath="/"
      showProfileMenu={false}
      showDarkModeToggle={true}
      customActions={customActions}
    />
  );
}
