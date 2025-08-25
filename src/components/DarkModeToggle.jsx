import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function DarkModeToggle({ position = "inline" }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const buttonStyles = {
    color: darkMode ? "#ffeb3b" : "#0d47a1",
    bgcolor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
    "&:hover": {
      bgcolor: darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
    },
  };

  if (position === "absolute") {
    return (
      <div className="absolute top-4 right-4 z-50">
        <IconButton onClick={toggleDarkMode} sx={buttonStyles}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </div>
    );
  }

  return (
    <IconButton onClick={toggleDarkMode} sx={buttonStyles}>
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
