import React from "react";
import {
  Typography,
  Box,
  LinearProgress,
  Chip,
  Alert,
  Button,
} from "@mui/material";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import Skill from "./Skill";

export default function SkillsEvaluation({ user }) {
  const { darkMode } = useDarkMode();

  // Check if CV and GitHub profile are uploaded
  const hasCV = user.cv !== null;
  const hasGitHub = user.githubProfile && user.githubProfile.trim() !== "";

  // If either CV or GitHub is missing, show message
  if (!hasCV || !hasGitHub) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            color: darkMode ? "#e5e7eb" : "#1f2937",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Skills Evaluation
        </Typography>

        <Alert
          severity="info"
          sx={{
            mb: 2,
            backgroundColor: darkMode
              ? "rgba(59, 130, 246, 0.1)"
              : "rgba(59, 130, 246, 0.05)",
            border: `1px solid ${
              darkMode ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.2)"
            }`,
            color: darkMode ? "#93c5fd" : "#1e40af",
            "& .MuiAlert-icon": {
              color: darkMode ? "#3b82f6" : "#2563eb",
            },
          }}
        >
          To evaluate your skills, please upload your CV and connect your GitHub
          profile.
        </Alert>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {!hasCV && (
            <Chip
              label="CV Required"
              color="warning"
              variant="outlined"
              sx={{
                borderColor: darkMode ? "#f59e0b" : "#d97706",
                color: darkMode ? "#fbbf24" : "#b45309",
              }}
            />
          )}
          {!hasGitHub && (
            <Chip
              label="GitHub Profile Required"
              color="warning"
              variant="outlined"
              sx={{
                borderColor: darkMode ? "#f59e0b" : "#d97706",
                color: darkMode ? "#fbbf24" : "#b45309",
              }}
            />
          )}
        </Box>
      </Box>
    );
  }

  // Mock skills data - in a real app, this would come from API
  const skills = [
    { name: "React", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Programming" },
    { name: "TypeScript", level: 75, category: "Programming" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "CSS/SCSS", level: 80, category: "Frontend" },
    { name: "Git", level: 85, category: "Tools" },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          color: darkMode ? "#e5e7eb" : "#1f2937",
          fontWeight: 600,
          mb: 3,
        }}
      >
        Skills Evaluation
      </Typography>

      <Alert
        severity="success"
        sx={{
          mb: 3,
          backgroundColor: darkMode
            ? "rgba(34, 197, 94, 0.1)"
            : "rgba(34, 197, 94, 0.05)",
          border: `1px solid ${
            darkMode ? "rgba(34, 197, 94, 0.3)" : "rgba(34, 197, 94, 0.2)"
          }`,
          color: darkMode ? "#86efac" : "#166534",
          "& .MuiAlert-icon": {
            color: darkMode ? "#22c55e" : "#16a34a",
          },
        }}
      >
        Skills evaluation completed based on your CV and GitHub profile
        analysis.
      </Alert>

      {categories.map((category) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: darkMode ? "#d1d5db" : "#374151",
              fontWeight: 500,
              mb: 2,
              fontSize: "1.1rem",
            }}
          >
            {category}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <Skill key={skill.name} name={skill.name} level={skill.level} />
              ))}
          </Box>
        </Box>
      ))}

      <Box
        sx={{
          mt: 3,
          pt: 3,
          borderTop: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: darkMode ? "#9ca3af" : "#6b7280",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Skills are evaluated based on your CV content and GitHub repository
          analysis. Keep your profiles updated for accurate assessments.
        </Typography>
      </Box>
    </Box>
  );
}
