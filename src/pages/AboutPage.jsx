import React from "react";
import { Box } from "@mui/material";
import { useDarkMode } from "../contexts/DarkModeContext";
import {
  AnimatedBackground,
  HeroSection,
  MissionSection,
  FeaturesSection,
  TeamSection,
  CTASection,
} from "../components/About";

export default function AboutPage() {
  const { darkMode } = useDarkMode();

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      <AnimatedBackground darkMode={darkMode} />
      <HeroSection darkMode={darkMode} />
      <MissionSection darkMode={darkMode} />
      <FeaturesSection darkMode={darkMode} />
      <TeamSection darkMode={darkMode} />
      <CTASection darkMode={darkMode} />
    </Box>
  );
}
