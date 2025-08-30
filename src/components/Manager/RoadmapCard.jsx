import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Bookmark as BookmarkIcon,
  AccessTime as TimeIcon,
  CalendarToday as CalendarIcon,
  Launch as LaunchIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";
import RoadmapService from "../../services/RoadmapService";

export default function RoadmapCard({ roadmap, onClick, onDelete }) {
  const { darkMode } = useDarkMode();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent triggering the card click
    if (onDelete) {
      onDelete(roadmap.id);
    }
  };

  return (
    <Card
      sx={{
        width: "100%",
        cursor: "pointer",
        background: darkMode
          ? "linear-gradient(135deg, #374151 0%, #1f2937 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        border: `2px solid ${darkMode ? "#4b5563" : "#e2e8f0"}`,
        borderRadius: 3,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "#3b82f6",
          boxShadow: darkMode
            ? "0 20px 40px -12px rgba(59, 130, 246, 0.3)"
            : "0 20px 40px -12px rgba(59, 130, 246, 0.2)",
        },
      }}
      onClick={onClick}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: darkMode ? "#ffffff" : "#1f2937",
                mb: 1,
                lineHeight: 1.3,
              }}
            >
              {roadmap.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: darkMode ? "#9ca3af" : "#6b7280",
                lineHeight: 1.5,
              }}
            >
              {roadmap.description || "Custom learning roadmap"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="View Roadmap" arrow placement="top">
              <IconButton
                size="small"
                sx={{
                  color: "#3b82f6",
                  "&:hover": {
                    bgcolor: darkMode
                      ? "rgba(59, 130, 246, 0.1)"
                      : "rgba(59, 130, 246, 0.05)",
                  },
                }}
              >
                <LaunchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Roadmap" arrow placement="top">
              <IconButton
                size="small"
                onClick={handleDelete}
                sx={{
                  color: "#ef4444",
                  "&:hover": {
                    bgcolor: darkMode
                      ? "rgba(239, 68, 68, 0.1)"
                      : "rgba(239, 68, 68, 0.05)",
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Stats Section */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 2,
            flexWrap: "wrap",
          }}
        >
          <Chip
            icon={<BookmarkIcon sx={{ fontSize: 16 }} />}
            label={`${roadmap.items?.length || 0} items`}
            size="small"
            variant="outlined"
            sx={{
              borderColor: darkMode ? "#6b7280" : "#d1d5db",
              color: darkMode ? "#9ca3af" : "#6b7280",
              fontSize: "0.75rem",
            }}
          />
          <Chip
            icon={<TimeIcon sx={{ fontSize: 16 }} />}
            label={roadmap.estimatedDuration || "8-12 weeks"}
            size="small"
            variant="outlined"
            sx={{
              borderColor: darkMode ? "#6b7280" : "#d1d5db",
              color: darkMode ? "#9ca3af" : "#6b7280",
              fontSize: "0.75rem",
            }}
          />
        </Box>

        {/* Footer Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 2,
            borderTop: `1px solid ${darkMode ? "#4b5563" : "#e2e8f0"}`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: darkMode ? "#9ca3af" : "#6b7280",
            }}
          >
            <CalendarIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">
              Saved on {formatDate(roadmap.savedAt)}
            </Typography>
          </Box>

          <Chip
            label="View Details"
            size="small"
            sx={{
              bgcolor: "#3b82f6",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "0.7rem",
              "&:hover": {
                bgcolor: "#1d4ed8",
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
