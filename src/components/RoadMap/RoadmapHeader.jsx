import React from "react";
import { Typography, Box, IconButton, Tooltip } from "@mui/material";
import {
  Lightbulb as LightbulbIcon,
  Save as SaveIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function RoadmapHeader({ isEditing, onSave, roadmapTitle }) {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  return (
    <>
      {/* Back Button - Top Left (when editing) */}
      {isEditing && (
        <Box
          sx={{
            position: "absolute",
            top: 24,
            left: 24,
            zIndex: 1,
          }}
        >
          <Tooltip title="Back to Project Manager" arrow placement="right">
            <IconButton
              onClick={() => navigate("/project-manager")}
              sx={{
                background: darkMode
                  ? "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)"
                  : "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",
                color: "#ffffff",
                width: 48,
                height: 48,
                boxShadow: darkMode
                  ? "0 8px 25px rgba(107, 114, 128, 0.4)"
                  : "0 8px 25px rgba(107, 114, 128, 0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: darkMode
                    ? "0 12px 35px rgba(107, 114, 128, 0.5)"
                    : "0 12px 35px rgba(107, 114, 128, 0.4)",
                  background: darkMode
                    ? "linear-gradient(135deg, #4b5563 0%, #374151 100%)"
                    : "linear-gradient(135deg, #4b5563 0%, #374151 100%)",
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}

      {/* Save Button - Top Right */}
      <Box
        sx={{
          position: "absolute",
          top: 24,
          right: 24,
          zIndex: 1,
        }}
      >
        <Tooltip
          title={isEditing ? "Update Roadmap" : "Save Roadmap"}
          arrow
          placement="left"
        >
          <IconButton
            onClick={onSave}
            sx={{
              background: darkMode
                ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
              color: "#ffffff",
              width: 48,
              height: 48,
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
            <SaveIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          color: darkMode ? "#ffffff" : "#1f2937",
          mb: 4,
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <LightbulbIcon sx={{ color: darkMode ? "#fbbf24" : "#f59e0b" }} />
        {isEditing ? "Edit Learning Path" : "Your custom learning path"}
      </Typography>
    </>
  );
}
