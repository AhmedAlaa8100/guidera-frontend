import React from "react";
import { Box, Typography, LinearProgress, Chip } from "@mui/material";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function Skill({ name, level, category }) {
  const { darkMode } = useDarkMode();

  const getLevelColor = (level) => {
    if (level >= 80) return darkMode ? "#22c55e" : "#4caf50";
    if (level >= 60) return darkMode ? "#eab308" : "#ff9800";
    if (level >= 40) return darkMode ? "#f97316" : "#ff5722";
    return darkMode ? "#ef4444" : "#f44336";
  };

  const getLevelLabel = (level) => {
    if (level >= 80) return "Expert";
    if (level >= 60) return "Advanced";
    if (level >= 40) return "Intermediate";
    return "Beginner";
  };

  const levelColor = getLevelColor(level);
  const levelLabel = getLevelLabel(level);

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        backgroundColor: darkMode
          ? "rgba(30, 41, 59, 0.5)"
          : "rgba(255, 255, 255, 0.8)",
        border: `1px solid ${
          darkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.1)"
        }`,
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: darkMode
            ? "0 8px 25px rgba(0, 0, 0, 0.3)"
            : "0 8px 25px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: darkMode ? "#e5e7eb" : "#1f2937",
            fontWeight: 600,
            fontSize: "1.1rem",
          }}
        >
          {name}
        </Typography>
        <Chip
          label={levelLabel}
          size="small"
          sx={{
            backgroundColor: `${levelColor}20`,
            color: levelColor,
            border: `1px solid ${levelColor}40`,
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: darkMode ? "#9ca3af" : "#6b7280",
              fontSize: "0.875rem",
            }}
          >
            Proficiency Level
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: levelColor,
              fontWeight: 600,
              fontSize: "0.875rem",
            }}
          >
            {level}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={level}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: darkMode
              ? "rgba(148, 163, 184, 0.2)"
              : "rgba(0, 0, 0, 0.1)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: levelColor,
              borderRadius: 4,
            },
          }}
        />
      </Box>

      {category && (
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Chip
            label={category}
            size="small"
            variant="outlined"
            sx={{
              borderColor: darkMode ? "#6b7280" : "#d1d5db",
              color: darkMode ? "#9ca3af" : "#6b7280",
              fontSize: "0.75rem",
            }}
          />
        </Box>
      )}
    </Box>
  );
}
