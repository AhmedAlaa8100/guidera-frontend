import React from "react";
import { Typography, Box, Paper, Fade } from "@mui/material";
import { Lightbulb as LightbulbIcon } from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function TipsSection({ showTips }) {
  const { darkMode } = useDarkMode();

  return (
    <>
      {showTips && (
        <Fade in={showTips}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 6,
              background: darkMode
                ? "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)"
                : "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
              border: `2px solid ${darkMode ? "#4338ca" : "#0ea5e9"}`,
              borderRadius: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LightbulbIcon
                sx={{
                  fontSize: 24,
                  color: darkMode ? "#a78bfa" : "#0ea5e9",
                  mr: 1.5,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: darkMode ? "#e0e7ff" : "#0c4a6e",
                }}
              >
                Pro Tips for Success
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: darkMode ? "#c7d2fe" : "#0369a1" }}
              >
                • Build projects for each skill to reinforce learning
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: darkMode ? "#c7d2fe" : "#0369a1" }}
              >
                • Practice consistently - even 30 minutes daily adds up
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: darkMode ? "#c7d2fe" : "#0369a1" }}
              >
                • Join communities and learn from others
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: darkMode ? "#c7d2fe" : "#0369a1" }}
              >
                • Document your progress and celebrate milestones
              </Typography>
            </Box>
          </Paper>
        </Fade>
      )}
    </>
  );
}
