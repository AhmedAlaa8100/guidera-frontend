import { Typography, Button, Box, Alert, LinearProgress } from "@mui/material";
import { CloudUpload, Description, Delete } from "@mui/icons-material";
import { useState } from "react";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function CVUploadSection({ user, onChange }) {
  const { darkMode } = useDarkMode();
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploading(false);
            onChange({ cv: file });
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const handleRemoveCV = () => {
    onChange({ cv: null });
  };

  return (
    <div>
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: 3,
          color: darkMode ? "#e2e8f0" : "#424242",
          textShadow: darkMode ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >
        CV/Resume
      </Typography>

      {user.cv ? (
        <div className="space-y-4">
          <Alert
            severity="success"
            icon={<Description />}
            sx={{
              borderRadius: 3,
              backgroundColor: darkMode
                ? "rgba(34, 197, 94, 0.1)"
                : "rgba(76, 175, 80, 0.1)",
              borderColor: darkMode
                ? "rgba(34, 197, 94, 0.3)"
                : "rgba(76, 175, 80, 0.3)",
              color: darkMode ? "#22c55e" : "#4caf50",
            }}
          >
            CV uploaded successfully!
          </Alert>

          <Box
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: darkMode
                ? "rgba(30, 41, 59, 0.5)"
                : "rgba(248, 250, 252, 0.8)",
              border: `1px solid ${
                darkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.1)"
              }`,
            }}
          >
            <div className="flex items-center gap-3">
              <Description
                sx={{
                  fontSize: "2rem",
                  color: darkMode ? "#60a5fa" : "#1976d2",
                }}
              />
              <div className="flex-1">
                <Typography
                  variant="body1"
                  fontWeight="medium"
                  sx={{
                    color: darkMode ? "#e2e8f0" : "#424242",
                    mb: 0.5,
                  }}
                >
                  {user.cv.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: darkMode ? "#94a3b8" : "#757575",
                  }}
                >
                  {(user.cv.size / 1024 / 1024).toFixed(2)} MB
                </Typography>
              </div>
              <Button
                variant="outlined"
                color="error"
                startIcon={<Delete />}
                onClick={handleRemoveCV}
                size="small"
                sx={{
                  borderColor: darkMode ? "#ef4444" : "#d32f2f",
                  color: darkMode ? "#ef4444" : "#d32f2f",
                  "&:hover": {
                    borderColor: darkMode ? "#dc2626" : "#c62828",
                    backgroundColor: darkMode
                      ? "rgba(239, 68, 68, 0.08)"
                      : "rgba(211, 47, 47, 0.08)",
                  },
                }}
              >
                Remove
              </Button>
            </div>
          </Box>
        </div>
      ) : (
        <div className="space-y-4">
          <Alert
            severity="info"
            sx={{
              borderRadius: 3,
              backgroundColor: darkMode
                ? "rgba(96, 165, 250, 0.1)"
                : "rgba(25, 118, 210, 0.05)",
              borderColor: darkMode
                ? "rgba(96, 165, 250, 0.3)"
                : "rgba(25, 118, 210, 0.2)",
              color: darkMode ? "#60a5fa" : "#1976d2",
            }}
          >
            Upload your CV/Resume to increase your chances of getting hired
          </Alert>

          <Box
            sx={{
              p: 6,
              borderRadius: 3,
              border: `2px dashed ${
                darkMode ? "rgba(148, 163, 184, 0.3)" : "rgba(0, 0, 0, 0.2)"
              }`,
              backgroundColor: darkMode
                ? "rgba(30, 41, 59, 0.3)"
                : "rgba(248, 250, 252, 0.5)",
              textAlign: "center",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: darkMode ? "#60a5fa" : "#1976d2",
                backgroundColor: darkMode
                  ? "rgba(30, 41, 59, 0.5)"
                  : "rgba(248, 250, 252, 0.8)",
              },
            }}
          >
            <CloudUpload
              sx={{
                fontSize: "3rem",
                color: darkMode ? "#94a3b8" : "#9ca3af",
                mb: 2,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: darkMode ? "#e2e8f0" : "#424242",
              }}
            >
              Upload your CV/Resume
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 4,
                color: darkMode ? "#94a3b8" : "#757575",
              }}
            >
              Supported formats: PDF, DOC, DOCX (Max 5MB)
            </Typography>

            {uploading && (
              <Box sx={{ mb: 3 }}>
                <LinearProgress
                  variant="determinate"
                  value={uploadProgress}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: darkMode
                      ? "rgba(148, 163, 184, 0.2)"
                      : "rgba(0, 0, 0, 0.1)",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: darkMode ? "#60a5fa" : "#1976d2",
                      borderRadius: 4,
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    color: darkMode ? "#94a3b8" : "#757575",
                  }}
                >
                  Uploading... {uploadProgress}%
                </Typography>
              </Box>
            )}

            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUpload />}
              disabled={uploading}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: darkMode ? "#60a5fa" : "#1976d2",
                color: "white",
                "&:hover": {
                  backgroundColor: darkMode ? "#93c5fd" : "#1565c0",
                },
                "&:disabled": {
                  backgroundColor: darkMode
                    ? "rgba(148, 163, 184, 0.3)"
                    : "rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              Choose File
              <input
                type="file"
                hidden
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                disabled={uploading}
              />
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
}
