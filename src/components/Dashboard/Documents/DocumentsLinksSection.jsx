import { Typography } from "@mui/material";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import CVUploadSection from "./CVUploadSection";
import SocialProfilesSection from "../Profile/SocialProfilesSection";

export default function DocumentsLinksSection({ user, onChange }) {
  const { darkMode } = useDarkMode();

  return (
    <div>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          mb: 3,
          fontSize: { xs: "1.5rem", md: "1.75rem" },
          color: darkMode ? "#e2e8f0" : "#424242",
          textShadow: darkMode ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >
        Professional Documents & Links
      </Typography>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* CV Upload Section */}
        <CVUploadSection user={user} onChange={onChange} />

        {/* Social Profiles Section */}
        <SocialProfilesSection user={user} onChange={onChange} />
      </div>
    </div>
  );
}
