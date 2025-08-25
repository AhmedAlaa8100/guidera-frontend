import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { TrendingUp as TrendingUpIcon } from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function EmptyState() {
  const { darkMode } = useDarkMode();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 6,
        textAlign: "center",
        background: darkMode
          ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        border: `2px solid ${darkMode ? "#374151" : "#e2e8f0"}`,
        borderRadius: 3,
        boxShadow: darkMode
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Hero Section */}
      <Box sx={{ mb: 6 }}>
        <Box
          sx={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: darkMode
              ? "linear-gradient(135deg, #374151 0%, #1f2937 100%)"
              : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 2rem",
            border: `4px solid ${darkMode ? "#60a5fa" : "#3b82f6"}`,
            boxShadow: darkMode
              ? "0 20px 40px rgba(96, 165, 250, 0.3)"
              : "0 20px 40px rgba(59, 130, 246, 0.2)",
          }}
        >
          <TrendingUpIcon
            sx={{
              fontSize: 56,
              color: darkMode ? "#60a5fa" : "#3b82f6",
            }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            color: darkMode ? "#ffffff" : "#1f2937",
            mb: 2,
            fontWeight: 700,
          }}
        >
          Ready to Start Your Journey?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: darkMode ? "#9ca3af" : "#6b7280",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
            fontSize: "18px",
          }}
        >
          Enter a job description above and click "Generate Roadmap" to create
          your personalized learning path. Get ready to transform your career
          with a structured approach to skill development.
        </Typography>
      </Box>
    </Paper>
  );
}
