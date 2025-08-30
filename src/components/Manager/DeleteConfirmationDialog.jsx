import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Warning as WarningIcon } from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function DeleteConfirmationDialog({
  open,
  onClose,
  onConfirm,
  roadmapTitle,
}) {
  const { darkMode } = useDarkMode();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
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
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WarningIcon sx={{ fontSize: 24, color: "#ffffff" }} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: darkMode ? "#ffffff" : "#1f2937",
              fontWeight: 700,
            }}
          >
            Delete Roadmap
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        <Typography
          variant="body1"
          sx={{
            color: darkMode ? "#9ca3af" : "#6b7280",
            lineHeight: 1.6,
            mb: 2,
          }}
        >
          Are you sure you want to delete the roadmap "{roadmapTitle}"? This
          action cannot be undone.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: darkMode ? "#6b7280" : "#9ca3af",
            fontStyle: "italic",
          }}
        >
          All progress and saved data for this roadmap will be permanently
          removed.
        </Typography>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 2, gap: 2 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: darkMode ? "#6b7280" : "#d1d5db",
            color: darkMode ? "#9ca3af" : "#6b7280",
            "&:hover": {
              borderColor: darkMode ? "#9ca3af" : "#9ca3af",
              bgcolor: darkMode
                ? "rgba(156, 163, 175, 0.1)"
                : "rgba(156, 163, 175, 0.05)",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{
            background: "#ef4444",
            color: "#ffffff",
            "&:hover": {
              background: "#dc2626",
            },
          }}
        >
          Delete Roadmap
        </Button>
      </DialogActions>
    </Dialog>
  );
}
