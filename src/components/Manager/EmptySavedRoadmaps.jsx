import React from "react";
import { Typography, Box, Paper, Button } from "@mui/material";
import {
  BookmarkBorder as BookmarkIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useNavigate } from "react-router-dom";

export default function EmptySavedRoadmaps() {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleCreateRoadmap = () => {
    navigate("/roadmap");
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 8,
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: darkMode
              ? "linear-gradient(135deg, #374151 0%, #4b5563 100%)"
              : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `3px solid ${darkMode ? "#6b7280" : "#cbd5e1"}`,
          }}
        >
          <BookmarkIcon
            sx={{
              fontSize: 60,
              color: darkMode ? "#9ca3af" : "#64748b",
            }}
          />
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              color: darkMode ? "#ffffff" : "#1f2937",
              fontWeight: 700,
              mb: 2,
            }}
          >
            No saved roadmaps yet
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: darkMode ? "#9ca3af" : "#6b7280",
              fontWeight: 400,
              maxWidth: "500px",
              lineHeight: 1.6,
            }}
          >
            Start building your learning journey by creating your first roadmap.
            Generate personalized learning paths with projects and courses
            tailored to your goals.
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="large"
          startIcon={<AddIcon />}
          onClick={handleCreateRoadmap}
          sx={{
            background: darkMode
              ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
              : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            color: "#ffffff",
            px: 4,
            py: 1.5,
            borderRadius: 3,
            fontWeight: 600,
            textTransform: "none",
            fontSize: "1.1rem",
            boxShadow: darkMode
              ? "0 8px 25px rgba(59, 130, 246, 0.4)"
              : "0 8px 25px rgba(59, 130, 246, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: darkMode
                ? "0 12px 35px rgba(59, 130, 246, 0.5)"
                : "0 12px 35px rgba(59, 130, 246, 0.4)",
              background: darkMode
                ? "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)"
                : "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)",
            },
          }}
        >
          Create Your First Roadmap
        </Button>
      </Box>
    </Paper>
  );
}
