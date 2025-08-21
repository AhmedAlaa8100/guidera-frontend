import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./contexts/authContext.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </AuthContextProvider>
  </StrictMode>
);
