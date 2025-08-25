import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Button,
  Card,
  CardContent,
  Chip,
  Grow,
} from "@mui/material";
import {
  School as SchoolIcon,
  AccessTime as TimeIcon,
  PlayArrow as PlayIcon,
  Lightbulb as LightbulbIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";
import SubjectModal from "./SubjectModal";

// Sample roadmap subjects to display
const sampleSubjects = [
  {
    id: "html",
    title: "HTML Fundamentals",
    description: "Learn the foundation of web development",
    icon: "🌐",
    difficulty: "Beginner",
    duration: "2-3 weeks",
    color: "#10b981",
  },
  {
    id: "css",
    title: "CSS Styling",
    description: "Master modern CSS and responsive design",
    icon: "🎨",
    difficulty: "Intermediate",
    duration: "3-4 weeks",
    color: "#f59e0b",
  },
  {
    id: "javascript",
    title: "JavaScript Programming",
    description: "Build interactive web applications",
    icon: "⚡",
    difficulty: "Intermediate",
    duration: "4-6 weeks",
    color: "#f59e0b",
  },
  {
    id: "react",
    title: "React Development",
    description: "Create modern user interfaces",
    icon: "⚛️",
    difficulty: "Advanced",
    duration: "5-7 weeks",
    color: "#8b5cf6",
  },
];

export default function LoadedState() {
  const { darkMode } = useDarkMode();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSubject(null);
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Beginner: "#10b981",
      Intermediate: "#f59e0b",
      Advanced: "#ef4444",
      Expert: "#8b5cf6",
    };
    return colors[difficulty] || colors["Intermediate"];
  };

  return (
    <>
      {/* Featured Subjects Grid */}
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
        }}
      >
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
          Your custom learning path
        </Typography>

        {/* Single Column Layout with Arrows */}
        <Box sx={{ maxWidth: "600px", margin: "0 auto" }}>
          {sampleSubjects.map((subject, index) => (
            <Box key={subject.id}>
              <Grow in timeout={500 + index * 100}>
                <Card
                  sx={{
                    width: "100%",
                    height: "200px", // Fixed height for all cards
                    cursor: "pointer",
                    background: darkMode
                      ? "linear-gradient(135deg, #374151 0%, #1f2937 100%)"
                      : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    border: `2px solid ${darkMode ? "#4b5563" : "#e2e8f0"}`,
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    mb: 2, // Space between cards
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: subject.color,
                      boxShadow: darkMode
                        ? `0 20px 40px -12px ${subject.color}40`
                        : `0 20px 40px -12px ${subject.color}30`,
                    },
                  }}
                  onClick={() => handleSubjectClick(subject)}
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
                    {/* Top Section: Icon and Title */}
                    <Box sx={{ textAlign: "center", mb: 2 }}>
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: "2.5rem",
                          mb: 1,
                          lineHeight: 1,
                        }}
                      >
                        {subject.icon}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: darkMode ? "#ffffff" : "#1f2937",
                          mb: 1,
                        }}
                      >
                        {subject.title}
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
                      {subject.description}
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
                          label={subject.difficulty}
                          size="small"
                          sx={{
                            bgcolor: getDifficultyColor(subject.difficulty),
                            color: "#ffffff",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                          }}
                        />
                        <Chip
                          label={subject.duration}
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
                          borderColor: subject.color,
                          color: subject.color,
                          "&:hover": {
                            borderColor: subject.color,
                            bgcolor: `${subject.color}10`,
                          },
                        }}
                      >
                        Explore
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grow>

              {/* Arrow between subjects (except after the last one) */}
              {index < sampleSubjects.length - 1 && (
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
      </Paper>

      {/* Subject Modal */}
      <SubjectModal
        open={modalOpen}
        onClose={handleCloseModal}
        subject={selectedSubject}
      />
    </>
  );
}
