// src/theme/AppThemeProvider.jsx
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function AppThemeProvider({ children }) {
  const { darkMode } = useDarkMode();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#1976d2" },
        },
        typography: { fontFamily: "Inter, Roboto, sans-serif" },
      }),
    [darkMode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
