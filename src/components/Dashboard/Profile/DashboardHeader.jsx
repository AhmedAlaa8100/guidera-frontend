import { Typography, Avatar, Box } from "@mui/material";
import { useDarkMode } from "../../../contexts/DarkModeContext";

export default function DashboardHeader({ firstName }) {
  const { darkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-between">
      <div>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: darkMode ? "#e2e8f0" : "#424242",
            textShadow: darkMode ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none",
            mb: 1,
          }}
        >
          Welcome back, {firstName}! 👋
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: darkMode ? "#94a3b8" : "#757575",
            textShadow: darkMode ? "0 1px 2px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          Here's what's happening with your career today
        </Typography>
      </div>
      <Avatar
        sx={{
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          fontSize: { xs: "1.5rem", md: "1.75rem" },
          fontWeight: "bold",
          backgroundColor: darkMode ? "#60a5fa" : "#1976d2",
          color: "white",
          boxShadow: darkMode
            ? "0 4px 12px rgba(96, 165, 250, 0.3)"
            : "0 4px 12px rgba(25, 118, 210, 0.3)",
        }}
      >
        {firstName.charAt(0).toUpperCase()}
      </Avatar>
    </div>
  );
}
