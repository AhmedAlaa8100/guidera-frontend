import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import {
  School as SchoolIcon,
  Timeline as TimelineIcon,
  Work as WorkIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const FeaturesSection = ({ darkMode }) => {
  const features = [
    {
      icon: <TimelineIcon sx={{ fontSize: 40 }} />,
      title: "Personalized Roadmaps",
      description:
        "AI-powered learning paths tailored to your career goals and job requirements.",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: "Structured Learning",
      description:
        "Organized courses and projects that build upon each other for maximum impact.",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    },
    {
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      title: "Real-World Projects",
      description:
        "Hands-on experience with industry-relevant projects and case studies.",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: "Career Growth",
      description:
        "Track your progress and see how each skill contributes to your career advancement.",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 6,
              color: darkMode ? "#f1f5f9" : "#1f2937",
            }}
          >
            Why Choose Guidera?
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gap: 4,
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card
                sx={{
                  height: "100%",
                  background: darkMode
                    ? "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)"
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)",
                  border: darkMode
                    ? "1px solid rgba(148, 163, 184, 0.2)"
                    : "1px solid rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(15px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: feature.gradient,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  },
                  "&:hover": {
                    boxShadow: darkMode
                      ? "0 20px 40px rgba(0, 0, 0, 0.4)"
                      : "0 20px 40px rgba(0, 0, 0, 0.15)",
                    "&::before": {
                      opacity: 0.05,
                    },
                  },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: "center",
                    p: 4,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Box
                      sx={{
                        width: 90,
                        height: 90,
                        borderRadius: "50%",
                        background: feature.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 3,
                        color: "white",
                        boxShadow: `0 8px 32px ${feature.color}40`,
                      }}
                    >
                      {feature.icon}
                    </Box>
                  </motion.div>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: darkMode ? "#f1f5f9" : "#1f2937",
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: darkMode ? "#cbd5e1" : "#4b5563",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </motion.div>
  );
};

export default FeaturesSection;
