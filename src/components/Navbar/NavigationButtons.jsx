import React from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function NavigationButtons({ navigationItems, isActive }) {
  const { darkMode } = useDarkMode();

  const renderNavigationButton = (item) => (
    <Button
      key={item.to}
      component={Link}
      to={item.to}
      color={isActive(item.path) ? "primary" : "inherit"}
      startIcon={item.icon}
      sx={{
        textTransform: "none",
        fontWeight: isActive(item.path) ? "bold" : "normal",
        px: 3,
        py: 1,
        borderRadius: 2,
        color: darkMode ? "inherit" : "black",
        backgroundColor: isActive(item.path)
          ? darkMode
            ? "rgba(25, 118, 210, 0.15)"
            : "rgba(25, 118, 210, 0.1)"
          : "transparent",
        border: isActive(item.path) ? "2px solid" : "2px solid transparent",
        borderColor: isActive(item.path) ? "primary.main" : "transparent",
        "&:hover": {
          backgroundColor: "rgba(25, 118, 210, 0.08)",
          transform: "translateY(-1px)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
      {item.label}
    </Button>
  );

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {navigationItems.map(renderNavigationButton)}
    </Box>
  );
}
