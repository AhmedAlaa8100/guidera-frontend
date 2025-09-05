import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { Login, PersonAdd } from "@mui/icons-material";
import BaseNavbar from "./BaseNavbar";

export default function PublicNavbar() {
  const navigate = useNavigate();

  const customActions = (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Button
        variant="outlined"
        startIcon={<Login />}
        onClick={() => navigate("/login")}
        sx={{
          textTransform: "none",
          borderRadius: 2,
          px: 3,
          py: 1,
        }}
      >
        Sign In
      </Button>
      <Button
        variant="contained"
        startIcon={<PersonAdd />}
        onClick={() => navigate("/register")}
        sx={{
          textTransform: "none",
          borderRadius: 2,
          px: 3,
          py: 1,
        }}
      >
        Sign Up
      </Button>
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
