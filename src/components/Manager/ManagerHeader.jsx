import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { Bookmark as BookmarkIcon } from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function ManagerHeader() {
  const { darkMode } = useDarkMode();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 6,
        mb: 6,
        background: darkMode
          ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        border: `2px solid ${darkMode ? "#374151" : "#e2e8f0"}`,
        borderRadius: 3,
        boxShadow: darkMode
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: darkMode
              ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
              : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: darkMode
              ? "0 20px 40px rgba(59, 130, 246, 0.3)"
              : "0 20px 40px rgba(59, 130, 246, 0.2)",
            mb: 2,
          }}
        >
          <BookmarkIcon
            sx={{
              fontSize: 40,
              color: "#ffffff",
            }}
          />
        </Box>

        <Typography
          variant="h3"
          sx={{
            color: darkMode ? "#ffffff" : "#1f2937",
            fontWeight: 700,
            mb: 2,
            background: darkMode
              ? "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)"
              : "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Saved Roadmaps
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: darkMode ? "#9ca3af" : "#6b7280",
            fontWeight: 400,
            maxWidth: "600px",
            lineHeight: 1.6,
          }}
        >
          Access and manage all your saved learning roadmaps. Click on any
          roadmap to view the complete learning path with projects and courses.
        </Typography>
      </Box>
    </Paper>
  );
}
