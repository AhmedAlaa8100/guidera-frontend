import { Container } from "@mui/material";
import { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import GlassCard from "../components/GlassCard";

import {
  DashboardHeader,
  ProfileSection,
  DocumentsLinksSection,
  SkillsEvaluation,
  JobOffersSection,
} from "../components/Dashboard";

export default function DashboardPage() {
  const { darkMode } = useDarkMode();

  // Single source of truth for user
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: null, // dataURL
    cv: null, // File (pdf)
    githubProfile: "",
    linkedinProfile: "",
  });

  // Handy merge setter for user
  const patchUser = (partial) => setUser((u) => ({ ...u, ...partial }));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
      {/* Header */}
      {/* <GlassCard maxWidth="100%">
          <DashboardHeader firstName={user.name.split(" ")[0]} />
        </GlassCard> */}

      {/* Profile */}
      <div className="mt-8">
        <GlassCard maxWidth="100%">
          <ProfileSection user={user} onChange={patchUser} />
        </GlassCard>
      </div>

      {/* Documents & Links */}
      <div className="mt-8">
        <GlassCard maxWidth="100%">
          <DocumentsLinksSection user={user} onChange={patchUser} />
        </GlassCard>
      </div>

      {/* Skills Evaluation */}
      <div className="mt-8">
        <GlassCard maxWidth="100%">
          <SkillsEvaluation user={user} />
        </GlassCard>
      </div>

 
    </Container>
  );
}
