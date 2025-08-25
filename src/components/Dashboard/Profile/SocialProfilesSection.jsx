import {
  Typography,
  Button,
  IconButton,
  Alert,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Edit, Save, Cancel, GitHub, LinkedIn } from "@mui/icons-material";
import { useState } from "react";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function SocialProfilesSection({ user, onChange }) {
  const { darkMode } = useDarkMode();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({
    githubProfile: user.githubProfile || "",
    linkedinProfile: user.linkedinProfile || "",
  });

  const handleSave = () => {
    onChange({
      githubProfile: draft.githubProfile,
      linkedinProfile: draft.linkedinProfile,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft({
      githubProfile: user.githubProfile || "",
      linkedinProfile: user.linkedinProfile || "",
    });
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            color: darkMode ? "#e2e8f0" : "#424242",
            textShadow: darkMode ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none",
          }}
        >
          Social Profiles
        </Typography>
        {!isEditing ? (
          <Button
            variant="outlined"
            startIcon={<Edit />}
            onClick={() => setIsEditing(true)}
            sx={{
              borderColor: darkMode ? "#60a5fa" : "#1976d2",
              color: darkMode ? "#60a5fa" : "#1976d2",
              "&:hover": {
                borderColor: darkMode ? "#93c5fd" : "#1565c0",
                backgroundColor: darkMode
                  ? "rgba(96, 165, 250, 0.08)"
                  : "rgba(25, 118, 210, 0.08)",
              },
            }}
          >
            Edit Profiles
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button
              variant="outlined"
              startIcon={<Save />}
              onClick={handleSave}
              sx={{
                borderColor: darkMode ? "#22c55e" : "#4caf50",
                color: darkMode ? "#22c55e" : "#4caf50",
                "&:hover": {
                  borderColor: darkMode ? "#16a34a" : "#388e3c",
                  backgroundColor: darkMode
                    ? "rgba(34, 197, 94, 0.08)"
                    : "rgba(76, 175, 80, 0.08)",
                },
              }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              startIcon={<Cancel />}
              onClick={handleCancel}
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
              Cancel
            </Button>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <div>
            <Typography
              variant="body2"
              sx={{
                color: darkMode ? "#94a3b8" : "#757575",
                mb: 1,
                fontWeight: "medium",
              }}
            >
              GitHub Profile
            </Typography>
            <TextField
              fullWidth
              value={draft.githubProfile}
              onChange={(e) =>
                setDraft({ ...draft, githubProfile: e.target.value })
              }
              placeholder="https://github.com/username"
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: darkMode ? "rgba(30, 41, 59, 0.5)" : "white",
                  borderColor: darkMode
                    ? "rgba(148, 163, 184, 0.3)"
                    : "#d1d5db",
                  "&:hover": {
                    borderColor: darkMode ? "#60a5fa" : "#1976d2",
                  },
                  "&.Mui-focused": {
                    borderColor: darkMode ? "#60a5fa" : "#1976d2",
                  },
                },
                "& .MuiInputBase-input": {
                  color: darkMode ? "#e2e8f0" : "#424242",
                },
              }}
            />
          </div>

          <div>
            <Typography
              variant="body2"
              sx={{
                color: darkMode ? "#94a3b8" : "#757575",
                mb: 1,
                fontWeight: "medium",
              }}
            >
              LinkedIn Profile
            </Typography>
            <TextField
              fullWidth
              value={draft.linkedinProfile}
              onChange={(e) =>
                setDraft({ ...draft, linkedinProfile: e.target.value })
              }
              placeholder="https://linkedin.com/in/username"
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: darkMode ? "rgba(30, 41, 59, 0.5)" : "white",
                  borderColor: darkMode
                    ? "rgba(148, 163, 184, 0.3)"
                    : "#d1d5db",
                  "&:hover": {
                    borderColor: darkMode ? "#60a5fa" : "#1976d2",
                  },
                  "&.Mui-focused": {
                    borderColor: darkMode ? "#60a5fa" : "#1976d2",
                  },
                },
                "& .MuiInputBase-input": {
                  color: darkMode ? "#e2e8f0" : "#424242",
                },
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {user.githubProfile && (
            <Button
              variant="outlined"
              startIcon={<GitHub />}
              fullWidth
              component="a"
              href={user.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start"
              size="large"
              sx={{
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: "bold",
                borderWidth: 2,
                borderColor: darkMode ? "#60a5fa" : "#1976d2",
                color: darkMode ? "#60a5fa" : "#1976d2",
                "&:hover": {
                  borderColor: darkMode ? "#93c5fd" : "#1565c0",
                  backgroundColor: darkMode
                    ? "rgba(96, 165, 250, 0.08)"
                    : "rgba(25, 118, 210, 0.08)",
                },
              }}
            >
              GitHub Profile
            </Button>
          )}

          {user.linkedinProfile && (
            <Button
              variant="outlined"
              startIcon={<LinkedIn />}
              fullWidth
              component="a"
              href={user.linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start"
              size="large"
              sx={{
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: "bold",
                borderWidth: 2,
                borderColor: darkMode ? "#60a5fa" : "#1976d2",
                color: darkMode ? "#60a5fa" : "#1976d2",
                "&:hover": {
                  borderColor: darkMode ? "#93c5fd" : "#1565c0",
                  backgroundColor: darkMode
                    ? "rgba(96, 165, 250, 0.08)"
                    : "rgba(25, 118, 210, 0.08)",
                },
              }}
            >
              LinkedIn Profile
            </Button>
          )}

          {!user.githubProfile && !user.linkedinProfile && (
            <Alert severity="info" sx={{ borderRadius: 3 }}>
              No social profiles added yet
            </Alert>
          )}
        </div>
      )}
    </div>
  );
}
