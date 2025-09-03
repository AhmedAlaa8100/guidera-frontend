import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
  Fade,
  Slide,
  Zoom,
} from "@mui/material";
import {
  School as SchoolIcon,
  Timeline as TimelineIcon,
  Work as WorkIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Rocket as RocketIcon,
  Lightbulb as LightbulbIcon,
  Group as GroupIcon,
  EmojiEvents as EmojiEventsIcon,
} from "@mui/icons-material";
import { useDarkMode } from "../contexts/DarkModeContext";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef } from "react";

// Animated Background Component
const AnimatedBackground = ({ darkMode }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            borderRadius: "50%",
            background: darkMode
              ? `radial-gradient(circle, rgba(${Math.random() * 100 + 50}, ${
                  Math.random() * 100 + 50
                }, 255, 0.1) 0%, transparent 70%)`
              : `radial-gradient(circle, rgba(${Math.random() * 100 + 100}, ${
                  Math.random() * 100 + 150
                }, 255, 0.05) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: darkMode
            ? `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.1) 1px, transparent 0)`
            : `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.05) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
          opacity: 0.3,
        }}
      />
    </Box>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default function AboutPage() {
  const { darkMode } = useDarkMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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

  const stats = [
    { label: "Active Learners", value: 10000, icon: <GroupIcon /> },
    { label: "Career Paths", value: 50, icon: <RocketIcon /> },
    { label: "Success Stories", value: 2500, icon: <EmojiEventsIcon /> },
    { label: "Industry Partners", value: 100, icon: <LightbulbIcon /> },
  ];

  const team = [
    {
      name: "Amr Attia",
      role: "AI Engineer",
      avatar: "AA",
      description:
        "Former Google engineer with 10+ years in tech education and machine learning expertise.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    },
    {
      name: "Ahmed Alaa",
      role: "CTO",
      avatar: "AA",
      description:
        "Full-stack developer passionate about making learning accessible and scalable.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    },
    {
      name: "Ahmed Wael",
      role: "Head of Design",
      avatar: "AW",
      description:
        "UX designer focused on creating intuitive and beautiful learning experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
    {
      name: "Seif Shaheen",
      role: "Product Manager",
      avatar: "SS",
      description:
        "Product strategist with a passion for user-centered design and growth.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    },
    {
      name: "Ahmed Zaki",
      role: "Frontend Lead",
      avatar: "AZ",
      description:
        "Frontend specialist creating smooth and responsive user interfaces.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
      gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", py: 4, position: "relative" }}>
      <AnimatedBackground darkMode={darkMode} />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Container maxWidth="lg" sx={{ mb: 8 }}>
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
        </Container>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container maxWidth="lg" sx={{ mb: 8 }}>
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
        </Container>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Box
            sx={{
              display: "grid",
              gap: 6,
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr",
              },
              alignItems: "center",
            }}
          >
            <Box>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: darkMode ? "#f1f5f9" : "#1f2937",
                  }}
                >
                  Our Mission
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? "#cbd5e1" : "#4b5563",
                    mb: 3,
                    lineHeight: 1.7,
                    fontSize: "1.1rem",
                  }}
                >
                  To democratize access to quality career education by providing
                  personalized, structured learning paths that help individuals
                  achieve their professional goals regardless of their starting
                  point.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 4 }}>
                  {[
                    "Career Growth",
                    "Skill Development",
                    "Industry Ready",
                    "Personalized Learning",
                  ].map((tag, index) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Chip
                        label={tag}
                        sx={{
                          background: darkMode
                            ? "linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)"
                            : "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
                          color: darkMode ? "#93c5fd" : "#3b82f6",
                          border: darkMode
                            ? "1px solid rgba(96, 165, 250, 0.3)"
                            : "1px solid rgba(59, 130, 246, 0.2)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: darkMode
                              ? "0 4px 12px rgba(96, 165, 250, 0.3)"
                              : "0 4px 12px rgba(59, 130, 246, 0.2)",
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </motion.div>

      {/* Features Section */}
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

      {/* Team Section */}
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
              Meet Our Team
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gap: 4,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(3, 1fr)",
              },
            }}
          >
            {team.map((member, index) => (
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
                      background: member.gradient,
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
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Avatar
                        sx={{
                          width: 100,
                          height: 100,
                          mx: "auto",
                          mb: 3,
                          background: member.gradient,
                          fontSize: "2rem",
                          fontWeight: 600,
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        {member.avatar}
                      </Avatar>
                    </motion.div>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: darkMode ? "#f1f5f9" : "#1f2937",
                      }}
                    >
                      {member.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: darkMode ? "#60a5fa" : "#3b82f6",
                        mb: 2,
                        fontWeight: 500,
                      }}
                    >
                      {member.role}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: darkMode ? "#cbd5e1" : "#4b5563",
                        lineHeight: 1.6,
                        mb: 3,
                      }}
                    >
                      {member.description}
                    </Typography>

                    {/* Social Links */}
                    <Box
                      sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                    >
                      {Object.entries(member.social).map(([platform, url]) => {
                        const IconComponent =
                          platform === "linkedin"
                            ? LinkedInIcon
                            : platform === "twitter"
                            ? TwitterIcon
                            : GitHubIcon;
                        return (
                          <motion.div
                            key={platform}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button
                              size="small"
                              sx={{
                                minWidth: 40,
                                height: 40,
                                borderRadius: "50%",
                                background: darkMode
                                  ? "rgba(148, 163, 184, 0.1)"
                                  : "rgba(59, 130, 246, 0.1)",
                                color: darkMode ? "#94a3b8" : "#3b82f6",
                                "&:hover": {
                                  background: darkMode
                                    ? "rgba(148, 163, 184, 0.2)"
                                    : "rgba(59, 130, 246, 0.2)",
                                  transform: "scale(1.1)",
                                },
                              }}
                            >
                              <IconComponent sx={{ fontSize: 20 }} />
                            </Button>
                          </motion.div>
                        );
                      })}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              background: darkMode
                ? "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)"
                : "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)",
              borderRadius: 6,
              border: darkMode
                ? "1px solid rgba(148, 163, 184, 0.3)"
                : "1px solid rgba(59, 130, 246, 0.15)",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
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
                animation: "shimmer 4s ease-in-out infinite",
              },
              "@keyframes shimmer": {
                "0%": { transform: "translateX(-100%)" },
                "100%": { transform: "translateX(100%)" },
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <StarIcon
                  sx={{
                    fontSize: 80,
                    color: "#f59e0b",
                    mb: 3,
                    filter: "drop-shadow(0 4px 8px rgba(245, 158, 11, 0.3))",
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: darkMode ? "#f1f5f9" : "#1f2937",
                  fontSize: isMobile ? "2rem" : "2.5rem",
                }}
              >
                Ready to Start Your Journey?
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? "#cbd5e1" : "#4b5563",
                  mb: 4,
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6,
                  fontSize: "1.1rem",
                }}
              >
                Join thousands of learners who have transformed their careers
                with Guidera. Create your personalized roadmap today and take
                the first step towards your dream job.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                    px: 6,
                    py: 2,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    borderRadius: 3,
                    textTransform: "none",
                    boxShadow: "0 8px 32px rgba(59, 130, 246, 0.4)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                      transition: "left 0.5s",
                    },
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)",
                      boxShadow: "0 12px 40px rgba(59, 130, 246, 0.5)",
                      transform: "translateY(-3px)",
                      "&::before": {
                        left: "100%",
                      },
                    },
                  }}
                >
                  Get Started Today
                </Button>
              </motion.div>
            </motion.div>
          </Box>
        </Container>
      </motion.div>
    </Box>
  );
}
