import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./contexts/authContext.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext.jsx";
import AppThemeProvider from "./Theme/AppThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <DarkModeProvider>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </DarkModeProvider>
    </AuthContextProvider>
  </StrictMode>
);
