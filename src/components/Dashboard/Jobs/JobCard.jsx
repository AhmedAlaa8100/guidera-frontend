import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Avatar,
} from "@mui/material";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function JobCard({ job, onViewDetails, darkMode }) {
  // Use the darkMode prop if provided, otherwise fall back to context
  const { darkMode: contextDarkMode } = useDarkMode();
  const isDarkMode = darkMode !== undefined ? darkMode : contextDarkMode;

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: isDarkMode
          ? "rgba(30, 41, 59, 0.5)"
          : "rgba(255, 255, 255, 0.8)",
        border: `1px solid ${
          isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.1)"
        }`,
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: isDarkMode
            ? "0 12px 30px rgba(0, 0, 0, 0.4)"
            : "0 12px 30px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            sx={{
              width: 50,
              height: 50,
              backgroundColor: isDarkMode ? "#3b82f6" : "#2563eb",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
              mr: 2,
            }}
          >
            {job.company.charAt(0)}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                color: isDarkMode ? "#e5e7eb" : "#1f2937",
                fontWeight: 600,
                fontSize: "1.1rem",
                lineHeight: 1.3,
                mb: 0.5,
              }}
            >
              {job.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: isDarkMode ? "#9ca3af" : "#6b7280",
                fontWeight: 500,
              }}
            >
              {job.company}
            </Typography>
          </Box>
        </Box>

        {/* Job Details */}
        <Box sx={{ mt: 3, mb: 3, flexGrow: 1 }}>
          <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
            <Chip
              label={job.type}
              size="small"
              variant="outlined"
              sx={{
                borderColor: isDarkMode ? "#6b7280" : "#d1d5db",
                color: isDarkMode ? "#9ca3af" : "#6b7280",
                fontSize: "0.75rem",
              }}
            />
            <Chip
              label={job.location}
              size="small"
              variant="outlined"
              sx={{
                borderColor: isDarkMode ? "#6b7280" : "#d1d5db",
                color: isDarkMode ? "#9ca3af" : "#6b7280",
                fontSize: "0.75rem",
              }}
            />
            <Chip
              label={job.salary}
              size="small"
              variant="outlined"
              sx={{
                borderColor: isDarkMode ? "#22c55e" : "#16a34a",
                color: isDarkMode ? "#4ade80" : "#22c55e",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            />
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: isDarkMode ? "#d1d5db" : "#374151",
              lineHeight: 1.6,
              mb: 2,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {job.description}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: isDarkMode ? "#6b7280" : "#9ca3af",
              fontStyle: "italic",
            }}
          >
            Posted {job.posted}
          </Typography>
        </Box>

        {/* Action Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={() => onViewDetails(job)}
          sx={{
            backgroundColor: isDarkMode ? "#3b82f6" : "#2563eb",
            color: "white",
            "&:hover": {
              backgroundColor: isDarkMode ? "#2563eb" : "#1d4ed8",
            },
            mt: "auto",
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
