import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Grow,
  Button,
} from "@mui/material";
import {
  School as SchoolIcon,
  AccessTime as TimeIcon,
  PlayArrow as PlayIcon,
  Work as WorkIcon,
} from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function RoadmapCard({ item, index, onClick }) {
  const { darkMode } = useDarkMode();

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Beginner: "#10b981",
      Intermediate: "#f59e0b",
      Advanced: "#ef4444",
      Expert: "#8b5cf6",
    };
    return colors[difficulty] || colors["Intermediate"];
  };

  const getTypeIcon = (type) => {
    return type === "project" ? <WorkIcon /> : <SchoolIcon />;
  };

  const getTypeColor = (type) => {
    return type === "project" ? "#8b5cf6" : "#10b981";
  };

  const difficultyColor = getDifficultyColor(item.difficulty);

  return (
    <Grow in timeout={500 + index * 100}>
      <Card
        sx={{
          width: "100%",
          height: "200px",
          cursor: "pointer",
          background: darkMode
            ? "linear-gradient(135deg, #374151 0%, #1f2937 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          border: `2px solid ${darkMode ? "#4b5563" : "#e2e8f0"}`,
          borderRadius: 3,
          transition: "all 0.3s ease",
          mb: 2,
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: difficultyColor,
            boxShadow: darkMode
              ? `0 20px 40px -12px ${difficultyColor}40`
              : `0 20px 40px -12px ${difficultyColor}30`,
          },
        }}
        onClick={() => onClick(item)}
      >
        <CardContent
          sx={{
            p: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Top Section: Icon, Title, and Type Badge */}
          <Box
            sx={{
              textAlign: "center",
              mb: 2,
              position: "relative",
            }}
          >
            {/* Type Badge - Top Left */}
            <Box
              sx={{
                position: "absolute",
                top: -8,
                left: -8,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                background: getTypeColor(item.type),
                color: "#ffffff",
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              {getTypeIcon(item.type)}
              {item.type}
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: "2.5rem",
                mb: 1,
                lineHeight: 1,
              }}
            >
              {item.icon}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: darkMode ? "#ffffff" : "#1f2937",
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
          </Box>

          {/* Middle Section: Description */}
          <Typography
            variant="body2"
            sx={{
              color: darkMode ? "#9ca3af" : "#6b7280",
              textAlign: "center",
              mb: 2,
              lineHeight: 1.4,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.description}
          </Typography>

          {/* Bottom Section: Chips and Button */}
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <Chip
                label={item.difficulty}
                size="small"
                sx={{
                  bgcolor: difficultyColor,
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                }}
              />
              <Chip
                label={item.duration}
                size="small"
                icon={<TimeIcon sx={{ fontSize: 16 }} />}
                variant="outlined"
                sx={{
                  borderColor: darkMode ? "#6b7280" : "#d1d5db",
                  color: darkMode ? "#9ca3af" : "#6b7280",
                  fontSize: "0.7rem",
                }}
              />
            </Box>

            <Button
              variant="outlined"
              size="small"
              startIcon={<PlayIcon />}
              sx={{
                borderColor: difficultyColor,
                color: difficultyColor,
                "&:hover": {
                  borderColor: difficultyColor,
                  bgcolor: `${difficultyColor}10`,
                },
              }}
            >
              Explore
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
}
