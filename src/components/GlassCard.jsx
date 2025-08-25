// src/components/GlassCard.jsx
import { Paper } from "@mui/material";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function GlassCard({ children, maxWidth = 460 }) {
  const { darkMode } = useDarkMode();

  return (
    <Paper
      elevation={10}
      sx={{
        maxWidth,
        width: "100%",
        p: 5,
        borderRadius: 4,
        backdropFilter: "blur(16px)",
        backgroundColor: darkMode
          ? "rgba(18, 18, 18, 0.85)"
          : "rgba(255, 255, 255, 0.85)",
        boxShadow: darkMode
          ? "0px 12px 32px rgba(0,0,0,0.6)"
          : "0px 12px 32px rgba(0,0,0,0.15)",
      }}
    >
      {children}
    </Paper>
  );
}
