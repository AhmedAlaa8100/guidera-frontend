import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  IconButton,
  Chip,
  Grow,
  Card,
  CardContent,
} from "@mui/material";
import {
  Close as CloseIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  KeyboardArrowDown as ArrowDownIcon,
  AccessTime as TimeIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function RoadmapDetailsModal({ open, onClose, roadmap }) {
  const { darkMode } = useDarkMode();

  if (!roadmap) return null;

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

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: darkMode
            ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          border: `2px solid ${darkMode ? "#374151" : "#e2e8f0"}`,
          borderRadius: 3,
          boxShadow: darkMode
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <DialogTitle
        sx={{
          p: 3,
          pb: 2,
          borderBottom: `1px solid ${darkMode ? "#374151" : "#e2e8f0"}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: darkMode ? "#ffffff" : "#1f2937",
                fontWeight: 700,
                mb: 1,
              }}
            >
              {roadmap.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: darkMode ? "#9ca3af" : "#6b7280",
              }}
            >
              {roadmap.description || "Custom learning roadmap"}
            </Typography>
          </Box>
          <IconButton
            onClick={onClose}
            sx={{
              color: darkMode ? "#9ca3af" : "#6b7280",
              "&:hover": {
                bgcolor: darkMode
                  ? "rgba(156, 163, 175, 0.1)"
                  : "rgba(107, 114, 128, 0.05)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        {/* Roadmap Items */}
        <Box sx={{ maxWidth: "600px", margin: "0 auto" }}>
          {roadmap.items?.map((item, index) => (
            <Box key={item.id}>
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
                      borderColor: item.color,
                      boxShadow: darkMode
                        ? `0 20px 40px -12px ${item.color}40`
                        : `0 20px 40px -12px ${item.color}30`,
                    },
                  }}
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
                            bgcolor: getDifficultyColor(item.difficulty),
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

                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          background: item.color,
                          color: "#ffffff",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                        }}
                      >
                        <PlayIcon sx={{ fontSize: 14 }} />
                        Explore
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grow>

              {/* Arrow between items (except after the last one) */}
              {index < (roadmap.items?.length || 0) - 1 && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    my: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: darkMode
                        ? "linear-gradient(135deg, #374151 0%, #1f2937 100%)"
                        : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
                      border: `2px solid ${darkMode ? "#60a5fa" : "#3b82f6"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: darkMode
                        ? "0 10px 20px rgba(96, 165, 250, 0.2)"
                        : "0 10px 20px rgba(59, 130, 246, 0.15)",
                    }}
                  >
                    <ArrowDownIcon
                      sx={{
                        fontSize: 24,
                        color: darkMode ? "#60a5fa" : "#3b82f6",
                      }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
