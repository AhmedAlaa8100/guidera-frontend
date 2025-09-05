import React from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function MobileMenu({
  navigationItems,
  isActive,
  open,
  onToggle,
  onClose,
}) {
  const { darkMode } = useDarkMode();

  const renderMobileNavigationItem = (item) => (
    <ListItem
      key={item.to}
      component={Link}
      to={item.to}
      onClick={onClose}
      sx={{
        color: isActive(item.path) ? "primary.main" : "inherit",
        backgroundColor: isActive(item.path)
          ? darkMode
            ? "rgba(25, 118, 210, 0.1)"
            : "rgba(25, 118, 210, 0.05)"
          : "transparent",
        borderLeft: isActive(item.path) ? "4px solid" : "4px solid transparent",
        borderColor: isActive(item.path) ? "primary.main" : "transparent",
        "&:hover": {
          backgroundColor: "rgba(25, 118, 210, 0.08)",
        },
        transition: "all 0.2s ease-in-out",
      }}
    >
      <ListItemIcon
        sx={{ color: isActive(item.path) ? "primary.main" : "inherit" }}
      >
        {item.icon}
      </ListItemIcon>
      <ListItemText
        primary={item.label}
        sx={{
          fontWeight: isActive(item.path) ? "bold" : "normal",
        }}
      />
    </ListItem>
  );

  return (
    <>
      <IconButton
        onClick={onToggle}
        sx={{
          p: 1,
          border: "2px solid",
          borderColor: "transparent",
          "&:hover": {
            borderColor: "primary.main",
            backgroundColor: "rgba(25, 118, 210, 0.08)",
          },
          transition: "all 0.2s ease-in-out",
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: darkMode
              ? "rgba(18, 18, 18, 0.98)"
              : "rgba(252, 253, 254, 0.98)",
            backdropFilter: "blur(20px)",
            borderLeft: darkMode
              ? "1px solid rgba(255, 255, 255, 0.08)"
              : "1px solid rgba(0, 0, 0, 0.08)",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(45deg, #1976d2, #42a5f5)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 3,
              textAlign: "center",
            }}
          >
            Navigation
          </Typography>
          <List>{navigationItems.map(renderMobileNavigationItem)}</List>
        </Box>
      </Drawer>
    </>
  );
}
