import React, { useState } from "react";
import { Container } from "@mui/material";
import GlassCard from "../components/GlassCard";
import { JobOffersSection } from "../components/Dashboard";

export default function JobOffersPage() {
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
  ]);
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
      {/* Job Offers */}
      <div className="mt-8 mb-8">
        <GlassCard maxWidth="100%">
          <JobOffersSection jobs={jobOffers} />
        </GlassCard>
      </div>
    </Container>
  );
}
