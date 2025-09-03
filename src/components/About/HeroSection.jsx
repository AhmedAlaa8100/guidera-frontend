import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Group as GroupIcon,
  Rocket as RocketIcon,
  EmojiEvents as EmojiEventsIcon,
  Lightbulb as LightbulbIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = ({ darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const stats = [
    { label: "Active Users", value: 500, icon: <GroupIcon /> },
    { label: "Career Paths", value: 50, icon: <RocketIcon /> },
    { label: "Success Stories", value: 100, icon: <EmojiEventsIcon /> },
    { label: "Industry Partners", value: 10, icon: <LightbulbIcon /> },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              background: darkMode
                ? "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)"
                : "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)",
              borderRadius: 6,
              border: darkMode
                ? "1px solid rgba(148, 163, 184, 0.3)"
                : "1px solid rgba(59, 130, 246, 0.15)",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
              mb: 6,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: darkMode
                  ? "linear-gradient(45deg, transparent 30%, rgba(96, 165, 250, 0.1) 50%, transparent 70%)"
                  : "linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)",
                animation: "shimmer 3s ease-in-out infinite",
              },
              "@keyframes shimmer": {
                "0%": { transform: "translateX(-100%)" },
                "100%": { transform: "translateX(100%)" },
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  background: darkMode
                    ? "linear-gradient(135deg, #60a5fa 0%, #8b5cf6 50%, #ec4899 100%)"
                    : "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: isMobile ? "2.5rem" : "4rem",
                  letterSpacing: "-0.02em",
                }}
              >
                About Guidera
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: darkMode ? "#e2e8f0" : "#475569",
                  mb: 4,
                  maxWidth: "800px",
                  mx: "auto",
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                Empowering careers through personalized learning roadmaps and
                hands-on experience
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? "#94a3b8" : "#64748b",
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.7,
                  fontSize: "1.1rem",
                }}
              >
                Guidera is a comprehensive career development platform that
                transforms how people learn and grow in their professional
                journey. We create personalized learning paths that bridge the
                gap between where you are and where you want to be.
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: "grid",
              gap: 4,
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    textAlign: "center",
                    p: 3,
                    background: darkMode
                      ? "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)"
                      : "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.9) 100%)",
                    border: darkMode
                      ? "1px solid rgba(148, 163, 184, 0.2)"
                      : "1px solid rgba(0, 0, 0, 0.05)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: darkMode
                        ? "0 20px 40px rgba(0, 0, 0, 0.3)"
                        : "0 20px 40px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: darkMode ? "#60a5fa" : "#3b82f6",
                      mb: 2,
                      "& svg": { fontSize: 40 },
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: darkMode ? "#f1f5f9" : "#1f2937",
                      mb: 1,
                    }}
                  >
                    <AnimatedCounter end={stat.value} />
                    {stat.value >= 1000 && "+"}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: darkMode ? "#cbd5e1" : "#64748b",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div> */}
      </Container>
    </Box>
  );
};

export default HeroSection;
