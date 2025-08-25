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

  // Job offers (mock)
  const [jobOffers, setJobOffers] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      description:
        "We're looking for an experienced frontend developer to join our team...",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      description:
        "We're looking for an experienced frontend developer to join our team...",
      posted: "2 days ago",
    },
    {
      id: 3,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      description:
        "We're looking for an experienced frontend developer to join our team...",
      posted: "2 days ago",
    },
    {
      id: 4,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      description:
        "We're looking for an experienced frontend developer to join our team...",
      posted: "2 days ago",
    },
    {
      id: 5,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      description:
        "We're looking for an experienced frontend developer to join our team...",
      posted: "2 days ago",
    },
    {
      id: 6,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      description:
        "We're looking for an experienced frontend developer to join our team lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. We're looking for an experienced frontend developer to join our team lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      posted: "2 days ago",
    },
  ]);

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

      {/* Job Offers */}
      <div className="mt-8 mb-8">
        <GlassCard maxWidth="100%">
          <JobOffersSection jobs={jobOffers} />
        </GlassCard>
      </div>
    </Container>
  );
}
