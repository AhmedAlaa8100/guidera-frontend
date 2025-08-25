import React from "react";
import { Typography, TextField, Button, Box, Paper } from "@mui/material";
import {
  PlayArrow as PlayIcon,
  School as SchoolIcon,
} from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function InputSection({
  jobDescription,
  setJobDescription,
  generateRoadmap,
  isGenerating,
}) {
  const { darkMode } = useDarkMode();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mb: 6,
        background: darkMode
          ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
          : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        border: `2px solid ${darkMode ? "#374151" : "#e2e8f0"}`,
        borderRadius: 3,
        boxShadow: darkMode
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <SchoolIcon
          sx={{
            fontSize: 32,
            color: darkMode ? "#60a5fa" : "#3b82f6",
            mr: 2,
          }}
        />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: darkMode ? "#ffffff" : "#1f2937",
          }}
        >
          Describe Your Dream Job
        </Typography>
      </Box>

      <TextField
        fullWidth
        multiline
        rows={4}
        placeholder="e.g., I want to be a frontend developer working with React and modern web technologies, creating beautiful user experiences..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        variant="outlined"
        sx={{
          mb: 4,
          "& .MuiOutlinedInput-root": {
            backgroundColor: darkMode ? "#374151" : "#ffffff",
            border: `2px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
            borderRadius: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: darkMode ? "#60a5fa" : "#3b82f6",
              transform: "translateY(-2px)",
              boxShadow: darkMode
                ? "0 10px 25px rgba(96, 165, 250, 0.2)"
                : "0 10px 25px rgba(59, 130, 246, 0.1)",
            },
            "&.Mui-focused": {
              borderColor: darkMode ? "#60a5fa" : "#3b82f6",
              boxShadow: darkMode
                ? "0 0 0 3px rgba(96, 165, 250, 0.1)"
                : "0 0 0 3px rgba(59, 130, 246, 0.1)",
            },
          },
          "& .MuiInputBase-input": {
            color: darkMode ? "#ffffff" : "#1f2937",
            fontSize: "16px",
            fontWeight: 500,
          },
        }}
      />

      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant="contained"
          size="large"
          onClick={generateRoadmap}
          disabled={!jobDescription.trim() || isGenerating}
          startIcon={isGenerating ? null : <PlayIcon />}
          sx={{
            background: darkMode
              ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
              : "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
            color: "#ffffff",
            px: 6,
            py: 2,
            borderRadius: 3,
            fontWeight: 700,
            fontSize: "16px",
            textTransform: "none",
            boxShadow: darkMode
              ? "0 10px 25px rgba(59, 130, 246, 0.3)"
              : "0 10px 25px rgba(59, 130, 246, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: darkMode
                ? "0 20px 40px rgba(59, 130, 246, 0.4)"
                : "0 20px 40px rgba(59, 130, 246, 0.3)",
            },
            "&:disabled": {
              background: darkMode ? "#374151" : "#d1d5db",
              transform: "none",
              boxShadow: "none",
            },
          }}
        >
          {isGenerating ? "Generating Roadmap..." : "Generate Roadmap"}
        </Button>
      </Box>
    </Paper>
  );
}
