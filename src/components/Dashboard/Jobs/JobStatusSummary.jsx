import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function JobStatusSummary({
  total,
  available,
  accepted,
  rejected,
}) {
  const { darkMode } = useDarkMode();

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
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        sx={{
          color: darkMode ? "#d1d5db" : "#374151",
          fontWeight: 600,
          mb: 2,
        }}
      >
        Job Status Overview
      </Typography>

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Chip
          label={`Total: ${total}`}
          variant="outlined"
          sx={{
            borderColor: darkMode ? "#6b7280" : "#d1d5db",
            color: darkMode ? "#9ca3af" : "#6b7280",
            backgroundColor: darkMode
              ? "rgba(107, 114, 128, 0.1)"
              : "rgba(107, 114, 128, 0.05)",
          }}
        />

        <Chip
          label={`Available: ${available}`}
          color="primary"
          variant="outlined"
          sx={{
            borderColor: darkMode ? "#3b82f6" : "#2563eb",
            color: darkMode ? "#60a5fa" : "#3b82f6",
            backgroundColor: darkMode
              ? "rgba(59, 130, 246, 0.1)"
              : "rgba(37, 99, 235, 0.05)",
          }}
        />

        <Chip
          label={`Accepted: ${accepted}`}
          color="success"
          variant="outlined"
          sx={{
            borderColor: darkMode ? "#22c55e" : "#16a34a",
            color: darkMode ? "#4ade80" : "#22c55e",
            backgroundColor: darkMode
              ? "rgba(34, 197, 94, 0.1)"
              : "rgba(22, 163, 74, 0.05)",
          }}
        />

        <Chip
          label={`Rejected: ${rejected}`}
          color="error"
          variant="outlined"
          sx={{
            borderColor: darkMode ? "#ef4444" : "#dc2626",
            color: darkMode ? "#f87171" : "#ef4444",
            backgroundColor: darkMode
              ? "rgba(239, 68, 68, 0.1)"
              : "rgba(220, 38, 38, 0.05)",
          }}
        />
      </Box>
    </Box>
  );
}
