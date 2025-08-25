import React from "react";
import { Typography, Box } from "@mui/material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function Header() {
  const { darkMode } = useDarkMode();

  return (
    <Box sx={{ mb: 6, textAlign: "center" }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 800,
          mb: 2,
          background: darkMode
            ? "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)"
            : "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
        }}
      >
        Career Roadmap Generator
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: darkMode ? "#9ca3af" : "#6b7280",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        Transform your career aspirations into a structured learning path. Get a
        professional roadmap tailored to your goals.
      </Typography>
    </Box>
  );
}
