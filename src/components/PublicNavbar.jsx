import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Snackbar,
  Alert,
  Container,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Timeline as RoadmapIcon,
  Work as ProjectsIcon,
  Login as LoginIcon,
  PersonAdd as RegisterIcon,
} from "@mui/icons-material";

const menuItems = [{ name: "Home", path: "/", icon: <HomeIcon /> }];

export default function PublicNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  const handleMenuClick = (path) => {
    if (path === "/") {
      // Home is always accessible
      navigate(path);
    } else {
      // Show snackbar for protected routes
      setSnackbarOpen(true);
    }
    setMobileOpen(false);
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

  const handleDrawerToggle = () => {
    console.log("Toggle clicked, current state:", mobileOpen);
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: darkMode
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)",
          borderBottom: `3px solid ${darkMode ? "#1e40af" : "#3b82f6"}`,
          backdropFilter: "blur(20px)",
          zIndex: 1000,
          boxShadow: darkMode
            ? "0 8px 32px rgba(0, 0, 0, 0.3)"
            : "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1.5 }}>
            {/* Logo and Menu Items */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: darkMode ? "#ffffff" : "#1f2937",
                  background: darkMode
                    ? "linear-gradient(135deg, #60a5fa 0%, #8b5cf6 50%, #ec4899 100%)"
                    : "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  position: "relative",
                  "&:hover": {
                    transform: "scale(1.05)",
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
                onClick={() => navigate("/")}
              >
                Guidera
              </Typography>

              {/* Desktop Menu Items */}
              {!isMobile && (
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.name}
                      onClick={() => handleMenuClick(item.path)}
                      startIcon={item.icon}
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
                        fontWeight: 600,
                        fontSize: "1rem",
                        px: 3,
                        py: 1.5,
                        borderRadius: 3,
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          color: darkMode ? "#60a5fa" : "#3b82f6",
                          bgcolor: darkMode
                            ? "rgba(96, 165, 250, 0.15)"
                            : "rgba(59, 130, 246, 0.08)",
                          transform: "translateY(-2px)",
                          boxShadow: darkMode
                            ? "0 8px 25px rgba(96, 165, 250, 0.3)"
                            : "0 8px 25px rgba(59, 130, 246, 0.2)",
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: "-100%",
                          width: "100%",
                          height: "100%",
                          background: darkMode
                            ? "linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.2), transparent)"
                            : "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)",
                          transition: "left 0.5s ease",
                        },
                        "&:hover::before": {
                          left: "100%",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </Box>
              )}
            </Box>

            {/* Auth Buttons */}
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {!isMobile ? (
                <>
                  {!isLoginPage && (
                    <Button
                      variant="outlined"
                      onClick={handleSignIn}
                      startIcon={<LoginIcon />}
                      sx={{
                        borderColor: darkMode ? "#6b7280" : "#d1d5db",
                        color: darkMode ? "#9ca3af" : "#6b7280",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: 3,
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
                      onClick={handleSignUp}
                      startIcon={<RegisterIcon />}
                      sx={{
                        background: darkMode
                          ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #7c3aed 100%)"
                          : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #7c3aed 100%)",
                        color: "#ffffff",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: 3,
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
                </>
              ) : (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: darkMode ? "#ffffff" : "#1f2937",
                    bgcolor: darkMode
                      ? "rgba(96, 165, 250, 0.1)"
                      : "rgba(59, 130, 246, 0.05)",
                    "&:hover": {
                      bgcolor: darkMode
                        ? "rgba(96, 165, 250, 0.2)"
                        : "rgba(59, 130, 246, 0.1)",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer - Moved outside AppBar for better functionality */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 320,
            background: darkMode
              ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
              : "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%)",
            borderLeft: `3px solid ${darkMode ? "#1e40af" : "#3b82f6"}`,
            boxShadow: darkMode
              ? "0 8px 32px rgba(0, 0, 0, 0.3)"
              : "0 8px 32px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: darkMode ? "#ffffff" : "#1f2937",
                background: darkMode
                  ? "linear-gradient(135deg, #60a5fa 0%, #8b5cf6 50%, #ec4899 100%)"
                  : "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Menu
            </Typography>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: darkMode ? "#ffffff" : "#1f2937",
                bgcolor: darkMode
                  ? "rgba(96, 165, 250, 0.1)"
                  : "rgba(59, 130, 246, 0.05)",
                "&:hover": {
                  bgcolor: darkMode
                    ? "rgba(96, 165, 250, 0.2)"
                    : "rgba(59, 130, 246, 0.1)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ mb: 3 }}>
            {menuItems.map((item) => (
              <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => handleMenuClick(item.path)}
                  startIcon={item.icon}
                  sx={{
                    borderRadius: 3,
                    py: 2,
                    color:
                      location.pathname === item.path
                        ? darkMode
                          ? "#60a5fa"
                          : "#3b82f6"
                        : darkMode
                        ? "#9ca3af"
                        : "#6b7280",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: darkMode
                        ? "rgba(96, 165, 250, 0.15)"
                        : "rgba(59, 130, 246, 0.08)",
                      transform: "translateX(8px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {!isLoginPage && (
              <Button
                variant="outlined"
                onClick={handleSignIn}
                startIcon={<LoginIcon />}
                fullWidth
                sx={{
                  borderColor: darkMode ? "#6b7280" : "#d1d5db",
                  color: darkMode ? "#9ca3af" : "#6b7280",
                  textTransform: "none",
                  fontWeight: 600,
                  py: 2,
                  borderRadius: 3,
                  "&:hover": {
                    borderColor: darkMode ? "#60a5fa" : "#3b82f6",
                    color: darkMode ? "#60a5fa" : "#3b82f6",
                    bgcolor: darkMode
                      ? "rgba(96, 165, 250, 0.1)"
                      : "rgba(59, 130, 246, 0.05)",
                  },
                }}
              >
                Sign In
              </Button>
            )}
            {!isRegisterPage && (
              <Button
                variant="contained"
                onClick={handleSignUp}
                startIcon={<RegisterIcon />}
                fullWidth
                sx={{
                  background: darkMode
                    ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #7c3aed 100%)"
                    : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #7c3aed 100%)",
                  color: "#ffffff",
                  textTransform: "none",
                  fontWeight: 600,
                  py: 2,
                  borderRadius: 3,
                  boxShadow: darkMode
                    ? "0 8px 25px rgba(59, 130, 246, 0.4)"
                    : "0 8px 25px rgba(59, 130, 246, 0.3)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: darkMode
                      ? "0 12px 35px rgba(59, 130, 246, 0.5)"
                      : "0 12px 35px rgba(59, 130, 246, 0.4)",
                  },
                }}
              >
                Sign Up
              </Button>
            )}
          </Box>
        </Box>
      </Drawer>

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
