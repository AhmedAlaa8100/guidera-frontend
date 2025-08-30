import React from "react";
import { Box } from "@mui/material";
import { KeyboardArrowDown as ArrowDownIcon } from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function RoadmapArrow() {
  const { darkMode } = useDarkMode();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 2,
      }}
    >
      <Box
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: darkMode
            ? "linear-gradient(135deg, #374151 0%, #1f2937 100%)"
            : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
          border: `2px solid ${darkMode ? "#60a5fa" : "#3b82f6"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: darkMode
            ? "0 10px 20px rgba(96, 165, 250, 0.2)"
            : "0 10px 20px rgba(59, 130, 246, 0.15)",
        }}
      >
        <ArrowDownIcon
          sx={{
            fontSize: 24,
            color: darkMode ? "#60a5fa" : "#3b82f6",
          }}
        />
      </Box>
    </Box>
  );
}
