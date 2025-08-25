import { Typography, Button, IconButton, Avatar, Box } from "@mui/material";
import { Edit, Save, Cancel, PhotoCamera } from "@mui/icons-material";
import { useState, useRef } from "react";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function ProfileSection({ user, onChange }) {
  const { darkMode } = useDarkMode();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({
    name: user.name || "",
    email: user.email || "",
  });
  const fileInputRef = useRef();

  const handleSave = () => {
    onChange(draft);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft({
      name: user.name || "",
      email: user.email || "",
    });
    setIsEditing(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange({ profilePicture: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "1.5rem", md: "1.75rem" },
            color: darkMode ? "#e2e8f0" : "#424242",
            textShadow: darkMode ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none",
          }}
        >
          Profile Information
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
            Edit Profile
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

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Picture */}
        <div className="text-center">
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Avatar
              src={user.profilePicture}
              sx={{
                width: 120,
                height: 120,
                fontSize: "3rem",
                fontWeight: "bold",
                backgroundColor: darkMode ? "#60a5fa" : "#1976d2",
                color: "white",
                boxShadow: darkMode
                  ? "0 8px 25px rgba(96, 165, 250, 0.3)"
                  : "0 8px 25px rgba(25, 118, 210, 0.3)",
                mb: 2,
              }}
            >
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </Avatar>
            <IconButton
              onClick={() => fileInputRef.current?.click()}
              sx={{
                position: "absolute",
                bottom: 8,
                right: 8,
                backgroundColor: darkMode ? "#60a5fa" : "#1976d2",
                color: "white",
                "&:hover": {
                  backgroundColor: darkMode ? "#93c5fd" : "#1565c0",
                },
              }}
            >
              <PhotoCamera />
            </IconButton>
          </Box>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          <Typography
            variant="body2"
            sx={{
              color: darkMode ? "#94a3b8" : "#757575",
              fontSize: "0.875rem",
            }}
          >
            Click the camera icon to upload a new photo
          </Typography>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2">
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
                Full Name
              </Typography>
              {isEditing ? (
                <input
                  type="text"
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                  className={`w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all ${
                    darkMode
                      ? "bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400/20"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20"
                  }`}
                  placeholder="Enter your full name"
                />
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? "#e2e8f0" : "#424242",
                    fontSize: "1.1rem",
                    fontWeight: "medium",
                  }}
                >
                  {user.name || "Not provided"}
                </Typography>
              )}
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
                Email Address
              </Typography>
              {isEditing ? (
                <input
                  type="email"
                  value={draft.email}
                  onChange={(e) =>
                    setDraft({ ...draft, email: e.target.value })
                  }
                  className={`w-full px-3 py-2 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all ${
                    darkMode
                      ? "bg-gray-800 border-gray-600 text-white focus:border-blue-400 focus:ring-blue-400/20"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20"
                  }`}
                  placeholder="Enter your email address"
                />
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? "#e2e8f0" : "#424242",
                    fontSize: "1.1rem",
                    fontWeight: "medium",
                  }}
                >
                  {user.email || "Not provided"}
                </Typography>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
