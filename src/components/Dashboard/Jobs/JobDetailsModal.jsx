import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Divider,
  Avatar,
} from "@mui/material";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function JobDetailsModal({
  job,
  open,
  onClose,
  onAccept,
  onReject,
  darkMode,
}) {
  // Use the darkMode prop if provided, otherwise fall back to context
  const { darkMode: contextDarkMode } = useDarkMode();
  const isDarkMode = darkMode !== undefined ? darkMode : contextDarkMode;

  if (!job) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: isDarkMode
            ? "rgba(30, 41, 59, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${
            isDarkMode ? "rgba(148, 163, 184, 0.3)" : "rgba(0, 0, 0, 0.15)"
          }`,
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle
        sx={{
          borderBottom: `1px solid ${
            isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.1)"
          }`,
          pb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              backgroundColor: isDarkMode ? "#3b82f6" : "#2563eb",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {job.company.charAt(0)}
          </Avatar>
          <Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: isDarkMode ? "#e5e7eb" : "#1f2937",
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              {job.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: isDarkMode ? "#9ca3af" : "#6b7280",
                fontWeight: 500,
              }}
            >
              {job.company}
            </Typography>
          </Box>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ pt: 3, mt: 3 }}>
        {/* Job Details Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 2,
            mb: 3,
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: isDarkMode ? "#6b7280" : "#9ca3af",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "0.75rem",
                mb: 0.5,
              }}
            >
              Location
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDarkMode ? "#d1d5db" : "#374151",
                fontWeight: 500,
              }}
            >
              {job.location}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body2"
              sx={{
                color: isDarkMode ? "#6b7280" : "#9ca3af",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "0.75rem",
                mb: 0.5,
              }}
            >
              Job Type
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDarkMode ? "#d1d5db" : "#374151",
                fontWeight: 500,
              }}
            >
              {job.type}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body2"
              sx={{
                color: isDarkMode ? "#6b7280" : "#9ca3af",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "0.75rem",
                mb: 0.5,
              }}
            >
              Salary Range
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDarkMode ? "#d1d5db" : "#374151",
                fontWeight: 500,
              }}
            >
              {job.salary}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body2"
              sx={{
                color: isDarkMode ? "#6b7280" : "#9ca3af",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "0.75rem",
                mb: 0.5,
              }}
            >
              Posted
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: isDarkMode ? "#d1d5db" : "#374151",
                fontWeight: 500,
              }}
            >
              {job.posted}
            </Typography>
          </Box>
        </Box>

        <Divider
          sx={{ my: 3, borderColor: isDarkMode ? "#374151" : "#e5e7eb" }}
        />

        {/* Job Description */}
        <Box>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: isDarkMode ? "#d1d5db" : "#374151",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Job Description
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: isDarkMode ? "#d1d5db" : "#374151",
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
          >
            {job.description}
          </Typography>
        </Box>

        {/* Skills/Tags */}
        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: isDarkMode ? "#d1d5db" : "#374151",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Required Skills
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Chip
              label="React"
              size="small"
              variant="outlined"
              sx={{
                borderColor: isDarkMode ? "#3b82f6" : "#2563eb",
                color: isDarkMode ? "#60a5fa" : "#3b82f6",
                backgroundColor: isDarkMode
                  ? "rgba(59, 130, 246, 0.1)"
                  : "rgba(37, 99, 235, 0.05)",
              }}
            />
            <Chip
              label="JavaScript"
              size="small"
              variant="outlined"
              sx={{
                borderColor: isDarkMode ? "#3b82f6" : "#2563eb",
                color: isDarkMode ? "#60a5fa" : "#3b82f6",
                backgroundColor: isDarkMode
                  ? "rgba(59, 130, 246, 0.1)"
                  : "rgba(37, 99, 235, 0.05)",
              }}
            />
            <Chip
              label="TypeScript"
              size="small"
              variant="outlined"
              sx={{
                borderColor: isDarkMode ? "#3b82f6" : "#2563eb",
                color: isDarkMode ? "#60a5fa" : "#3b82f6",
                backgroundColor: isDarkMode
                  ? "rgba(59, 130, 246, 0.1)"
                  : "rgba(37, 99, 235, 0.05)",
              }}
            />
            <Chip
              label="Node.js"
              size="small"
              variant="outlined"
              sx={{
                borderColor: isDarkMode ? "#3b82f6" : "#2563eb",
                color: isDarkMode ? "#60a5fa" : "#3b82f6",
                backgroundColor: isDarkMode
                  ? "rgba(59, 130, 246, 0.1)"
                  : "rgba(37, 99, 235, 0.05)",
              }}
            />
          </Box>
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          borderTop: `1px solid ${
            isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.1)"
          }`,
          pt: 2,
          gap: 2,
        }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: isDarkMode ? "#6b7280" : "#d1d5db",
            color: isDarkMode ? "#9ca3af" : "#6b7280",
            "&:hover": {
              borderColor: isDarkMode ? "#9ca3af" : "#9ca3af",
              backgroundColor: isDarkMode
                ? "rgba(107, 114, 128, 0.08)"
                : "rgba(107, 114, 128, 0.04)",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => onReject(job)}
          variant="outlined"
          color="error"
          sx={{
            borderColor: isDarkMode ? "#ef4444" : "#dc2626",
            color: isDarkMode ? "#f87171" : "#ef4444",
            "&:hover": {
              borderColor: isDarkMode ? "#dc2626" : "#b91c1c",
              backgroundColor: isDarkMode
                ? "rgba(239, 68, 68, 0.08)"
                : "rgba(220, 38, 38, 0.04)",
            },
          }}
        >
          Reject
        </Button>
        <Button
          onClick={() => onAccept(job)}
          variant="contained"
          color="success"
          sx={{
            backgroundColor: isDarkMode ? "#22c55e" : "#16a34a",
            color: "white",
            "&:hover": {
              backgroundColor: isDarkMode ? "#16a34a" : "#15803d",
            },
          }}
        >
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
}
