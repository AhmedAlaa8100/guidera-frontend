import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Dashboard,
  Home,
  Work,
  Person,
  AccountCircle,
  Logout,
  Timeline,
  Business,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { authContext } from "../contexts/authContext";
import { useDarkMode } from "../contexts/DarkModeContext";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn } = useContext(authContext);
  const { darkMode } = useDarkMode();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

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

  const navigationItems = [
    { to: "/roadmap", label: "RoadMap", icon: <Timeline />, path: "/roadmap" },
    { to: "/dashboard", label: "Home", icon: <Home />, path: "/dashboard" },
    {
      to: "/project-manager",
      label: "Projects",
      icon: <Business />,
      path: "/project-manager",
    },
  ];

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

  const renderMobileNavigationItem = (item) => (
    <ListItem
      key={item.to}
      component={Link}
      to={item.to}
      onClick={handleMobileMenuClose}
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

  // if (!isLoggedIn) return null;

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
            onClick={() => navigate("/dashboard")}
          >
            Guidera
          </Typography>
        </Box>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {navigationItems.map(renderNavigationButton)}
          </Box>
        )}

        {/* Right Side Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <DarkModeToggle position="inline" />

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={handleMobileMenuToggle}
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
          )}

          {/* Profile Menu */}
          <IconButton
            onClick={handleProfileMenuOpen}
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
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "primary.main",
                fontSize: "1rem",
              }}
            >
              <Person />
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
            PaperProps={{
              sx: {
                mt: 1,
                minWidth: 200,
                borderRadius: 2,
                boxShadow: "0px 8px 32px rgba(0,0,0,0.12)",
              },
            }}
          >
            <MenuItem onClick={handleLogout}>
              <Logout sx={{ mr: 2 }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
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
    </AppBar>
  );
}
