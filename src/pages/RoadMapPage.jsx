import React, { useState, useCallback } from "react";
import { Container, Button, Box } from "@mui/material";
import { Lightbulb as LightbulbIcon } from "@mui/icons-material";
import { useDarkMode } from "../contexts/DarkModeContext";
import {
  Header,
  InputSection,
  TipsSection,
  EmptyState,
  LoadedState,
} from "../components/RoadMap";

export default function RoadmapPage() {
  const { darkMode } = useDarkMode();
  const [jobDescription, setJobDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTips, setShowTips] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate roadmap data based on job description
  const generateRoadmap = useCallback(() => {
    setIsGenerating(true);

    // Simulate API call delay
    setTimeout(() => {
      // For now, just show a console log since we removed the roadmap section
      console.log("Generating roadmap for:", jobDescription);
      setIsGenerating(false);
      setIsLoaded(true); // Set to loaded state after generation
    }, 1500);
  }, [jobDescription]);

  const handleRoadmapSave = (savedRoadmap) => {
    console.log("Roadmap saved:", savedRoadmap);
    // You can add additional logic here if needed
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4, minHeight: "100vh" }}>
      <Header />

      <InputSection
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
        generateRoadmap={generateRoadmap}
        isGenerating={isGenerating}
      />

      <TipsSection showTips={showTips} />

      {/* Conditionally render EmptyState or LoadedState based on isLoaded */}
      {isLoaded ? (
        <LoadedState
          roadmapTitle={jobDescription || "Custom Learning Roadmap"}
          onSave={handleRoadmapSave}
        />
      ) : (
        <EmptyState />
      )}
    </Container>
  );
}
