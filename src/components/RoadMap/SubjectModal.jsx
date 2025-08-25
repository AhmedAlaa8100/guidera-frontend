import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Rating,
  Avatar,
} from "@mui/material";
import {
  Close as CloseIcon,
  School as SchoolIcon,
  AccessTime as TimeIcon,
  Star as StarIcon,
  Language as LanguageIcon,
  Computer as ComputerIcon,
  Book as BookIcon,
  VideoLibrary as VideoIcon,
  Assignment as AssignmentIcon,
  Group as GroupIcon,
} from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

const courseData = {
  html: {
    title: "HTML Fundamentals",
    description:
      "Master the foundation of web development with HTML5. Learn semantic markup, forms, accessibility, and modern HTML features.",
    difficulty: 1,
    duration: "2-3 weeks",
    level: "Beginner",
    skills: ["Semantic HTML", "Forms", "Accessibility", "SEO Basics"],
    courses: [
      {
        name: "HTML & CSS Crash Course",
        platform: "freeCodeCamp",
        rating: 4.8,
        duration: "4 hours",
        type: "Free",
        url: "https://www.freecodecamp.org/learn/responsive-web-design/",
        features: ["Interactive", "Certificate", "Projects"],
      },
      {
        name: "HTML5 Complete Course",
        platform: "Udemy",
        rating: 4.6,
        duration: "8 hours",
        type: "Paid",
        price: "$19.99",
        url: "#",
        features: ["Video Lectures", "Exercises", "Lifetime Access"],
      },
      {
        name: "Web Development Bootcamp",
        platform: "The Odin Project",
        rating: 4.9,
        duration: "Self-paced",
        type: "Free",
        url: "https://www.theodinproject.com/",
        features: ["Project-based", "Community", "Full-stack"],
      },
    ],
  },
  css: {
    title: "CSS Mastery",
    description:
      "Transform your web pages with advanced CSS techniques. Master layouts, animations, responsive design, and modern CSS frameworks.",
    difficulty: 2,
    duration: "3-4 weeks",
    level: "Intermediate",
    skills: ["Flexbox", "Grid", "Responsive Design", "CSS Variables"],
    courses: [
      {
        name: "CSS Grid & Flexbox Masterclass",
        platform: "CSS-Tricks",
        rating: 4.7,
        duration: "6 hours",
        type: "Free",
        url: "https://css-tricks.com/",
        features: ["Tutorials", "Examples", "Community"],
      },
      {
        name: "Advanced CSS and Sass",
        platform: "Udemy",
        rating: 4.8,
        duration: "21 hours",
        type: "Paid",
        price: "$24.99",
        url: "#",
        features: ["Sass/SCSS", "Animations", "Projects"],
      },
    ],
  },
  javascript: {
    title: "JavaScript Programming",
    description:
      "Learn modern JavaScript from fundamentals to advanced concepts. Master ES6+, async programming, and DOM manipulation.",
    difficulty: 3,
    duration: "4-6 weeks",
    level: "Intermediate",
    skills: ["ES6+", "Async/Await", "DOM Manipulation", "Modules"],
    courses: [
      {
        name: "JavaScript Algorithms & Data Structures",
        platform: "freeCodeCamp",
        rating: 4.9,
        duration: "300 hours",
        type: "Free",
        url: "https://www.freecodecamp.org/",
        features: ["Algorithms", "Projects", "Certificate"],
      },
      {
        name: "The Complete JavaScript Course 2024",
        platform: "Udemy",
        rating: 4.8,
        duration: "69 hours",
        type: "Paid",
        price: "$29.99",
        url: "#",
        features: ["ES6+", "Real Projects", "Node.js"],
      },
    ],
  },
  react: {
    title: "React Development",
    description:
      "Build modern, interactive user interfaces with React. Learn hooks, state management, routing, and best practices.",
    difficulty: 4,
    duration: "5-7 weeks",
    level: "Advanced",
    skills: ["Hooks", "State Management", "Routing", "Testing"],
    courses: [
      {
        name: "React Tutorial",
        platform: "React Official",
        rating: 4.9,
        duration: "Self-paced",
        type: "Free",
        url: "https://react.dev/learn",
        features: ["Official", "Interactive", "Examples"],
      },
      {
        name: "React - The Complete Guide",
        platform: "Udemy",
        rating: 4.8,
        duration: "48 hours",
        type: "Paid",
        price: "$34.99",
        url: "#",
        features: ["Hooks", "Redux", "Next.js"],
      },
    ],
  },
};

export default function SubjectModal({ open, onClose, subject }) {
  const { darkMode } = useDarkMode();

  if (!subject) return null;

  const subjectInfo = courseData[subject.id] || {
    title: subject.title,
    description: subject.description,
    difficulty: 2,
    duration: "3-4 weeks",
    level: "Intermediate",
    skills: ["Core Concepts", "Best Practices", "Practical Skills"],
    courses: [],
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      1: "#10b981", // Easy - Green
      2: "#f59e0b", // Medium - Yellow
      3: "#ef4444", // Hard - Red
      4: "#8b5cf6", // Expert - Purple
    };
    return colors[difficulty] || colors[2];
  };

  const getLevelColor = (level) => {
    const colors = {
      Beginner: "#10b981",
      Intermediate: "#f59e0b",
      Advanced: "#ef4444",
      Expert: "#8b5cf6",
    };
    return colors[level] || colors["Intermediate"];
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
            : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pb: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              bgcolor: getDifficultyColor(subjectInfo.difficulty),
              width: 48,
              height: 48,
            }}
          >
            <SchoolIcon />
          </Avatar>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: darkMode ? "#ffffff" : "#1f2937",
              }}
            >
              {subjectInfo.title}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 0.5 }}>
              <Chip
                label={subjectInfo.level}
                size="small"
                sx={{
                  bgcolor: getLevelColor(subjectInfo.level),
                  color: "#ffffff",
                  fontWeight: 600,
                }}
              />
              <Chip
                label={subjectInfo.duration}
                size="small"
                icon={<TimeIcon />}
                variant="outlined"
                sx={{
                  borderColor: darkMode ? "#6b7280" : "#d1d5db",
                  color: darkMode ? "#9ca3af" : "#6b7280",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Button
          onClick={onClose}
          sx={{
            color: darkMode ? "#9ca3af" : "#6b7280",
            "&:hover": { color: darkMode ? "#ffffff" : "#1f2937" },
          }}
        >
          <CloseIcon />
        </Button>
      </DialogTitle>

      <DialogContent sx={{ pt: 2 }}>
        <Typography
          variant="body1"
          sx={{
            color: darkMode ? "#d1d5db" : "#4b5563",
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          {subjectInfo.description}
        </Typography>

        <Divider
          sx={{ my: 3, borderColor: darkMode ? "#374151" : "#e2e8f0" }}
        />

        {/* Skills Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: darkMode ? "#ffffff" : "#1f2937",
              mb: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ComputerIcon />
            Skills You'll Learn
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {subjectInfo.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                variant="outlined"
                sx={{
                  borderColor: darkMode ? "#60a5fa" : "#3b82f6",
                  color: darkMode ? "#60a5fa" : "#3b82f6",
                  "&:hover": {
                    bgcolor: darkMode
                      ? "rgba(96, 165, 250, 0.1)"
                      : "rgba(59, 130, 246, 0.1)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Difficulty & Time */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={6}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                background: darkMode ? "#374151" : "#f1f5f9",
                border: `1px solid ${darkMode ? "#4b5563" : "#e2e8f0"}`,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: darkMode ? "#9ca3af" : "#6b7280",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Difficulty
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                <Rating
                  value={subjectInfo.difficulty}
                  max={4}
                  readOnly
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: getDifficultyColor(subjectInfo.difficulty),
                    },
                  }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              sx={{
                p: 2,
                textAlign: "center",
                background: darkMode ? "#374151" : "#f1f5f9",
                border: `1px solid ${darkMode ? "#4b5563" : "#e2e8f0"}`,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: darkMode ? "#9ca3af" : "#6b7280",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Time to Master
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: darkMode ? "#ffffff" : "#1f2937",
                  fontWeight: 700,
                  mt: 1,
                }}
              >
                {subjectInfo.duration}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Course Recommendations */}
        {subjectInfo.courses.length > 0 && (
          <>
            <Divider
              sx={{ my: 3, borderColor: darkMode ? "#374151" : "#e2e8f0" }}
            />

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: darkMode ? "#ffffff" : "#1f2937",
                mb: 3,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <VideoIcon />
              Recommended Courses
            </Typography>

            <List sx={{ p: 0 }}>
              {subjectInfo.courses.map((course, index) => (
                <ListItem
                  key={index}
                  sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                    background: darkMode ? "#374151" : "#ffffff",
                    border: `1px solid ${darkMode ? "#4b5563" : "#e2e8f0"}`,
                    "&:hover": {
                      borderColor: darkMode ? "#60a5fa" : "#3b82f6",
                      transform: "translateY(-2px)",
                      transition: "all 0.2s ease",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Avatar
                      sx={{
                        bgcolor: course.type === "Free" ? "#10b981" : "#3b82f6",
                        width: 40,
                        height: 40,
                      }}
                    >
                      {course.type === "Free" ? <BookIcon /> : <VideoIcon />}
                    </Avatar>
                  </ListItemIcon>

                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: darkMode ? "#ffffff" : "#1f2937",
                        }}
                      >
                        {course.name}
                      </Typography>
                    }
                    secondary={
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: darkMode ? "#9ca3af" : "#6b7280",
                            }}
                          >
                            {course.platform}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            <StarIcon sx={{ fontSize: 16, color: "#fbbf24" }} />
                            <Typography
                              variant="body2"
                              sx={{
                                color: darkMode ? "#9ca3af" : "#6b7280",
                              }}
                            >
                              {course.rating}
                            </Typography>
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: darkMode ? "#9ca3af" : "#6b7280",
                            }}
                          >
                            {course.duration}
                          </Typography>
                        </Box>

                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {course.features.map((feature, idx) => (
                            <Chip
                              key={idx}
                              label={feature}
                              size="small"
                              variant="outlined"
                              sx={{
                                fontSize: "0.7rem",
                                borderColor: darkMode ? "#6b7280" : "#d1d5db",
                                color: darkMode ? "#9ca3af" : "#6b7280",
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    }
                  />

                  <Box sx={{ textAlign: "right", ml: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: course.type === "Free" ? "#10b981" : "#3b82f6",
                        fontWeight: 700,
                      }}
                    >
                      {course.type === "Free" ? "FREE" : course.price}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      href={course.url}
                      target="_blank"
                      sx={{
                        mt: 1,
                        bgcolor: course.type === "Free" ? "#10b981" : "#3b82f6",
                        "&:hover": {
                          bgcolor:
                            course.type === "Free" ? "#059669" : "#1d4ed8",
                        },
                      }}
                    >
                      Start Learning
                    </Button>
                  </Box>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 1 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: darkMode ? "#6b7280" : "#d1d5db",
            color: darkMode ? "#9ca3af" : "#6b7280",
            "&:hover": {
              borderColor: darkMode ? "#9ca3af" : "#6b7280",
            },
          }}
        >
          Close
        </Button>
        <Button
          variant="contained"
          startIcon={<SchoolIcon />}
          sx={{
            bgcolor: getDifficultyColor(subjectInfo.difficulty),
            "&:hover": {
              bgcolor: getDifficultyColor(subjectInfo.difficulty),
              opacity: 0.9,
            },
          }}
        >
          Start Learning Path
        </Button>
      </DialogActions>
    </Dialog>
  );
}
