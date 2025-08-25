import React from "react";
import { Box, Typography, Button, Alert } from "@mui/material";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function NoJobsMessage({ hasReviewedJobs, onReset, darkMode }) {
  return (
    <Box sx={{ textAlign: "center", py: 6 }}>
      {hasReviewedJobs ? (
        <>
          <Alert
            severity="info"
            sx={{
              mb: 3,
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
            You've reviewed all available job offers. No more jobs are currently
            available.
          </Alert>

          <Typography
            variant="body1"
            sx={{
              color: darkMode ? "#9ca3af" : "#6b7280",
              mb: 3,
            }}
          >
            You can reset your decisions to review the jobs again, or wait for
            new opportunities.
          </Typography>

          <Button
            variant="contained"
            onClick={onReset}
            sx={{
              backgroundColor: darkMode ? "#3b82f6" : "#2563eb",
              color: "white",
              "&:hover": {
                backgroundColor: darkMode ? "#2563eb" : "#1d4ed8",
              },
            }}
          >
            Reset All Decisions
          </Button>
        </>
      ) : (
        <>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: darkMode ? "#d1d5db" : "#374151",
              fontWeight: 600,
              mb: 2,
            }}
          >
            No Job Offers Available
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: darkMode ? "#9ca3af" : "#6b7280",
              mb: 2,
            }}
          >
            There are currently no job offers available. Please check back later
            for new opportunities.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: darkMode ? "#6b7280" : "#9ca3af",
              fontStyle: "italic",
            }}
          >
            New job offers are added regularly, so keep an eye on this section.
          </Typography>
        </>
      )}
    </Box>
  );
}
