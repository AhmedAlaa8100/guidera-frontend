import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TeamSection = ({ darkMode }) => {
  const team = [
    {
      name: "Amr Attia",
      role: "Generative AI Engineer",
      avatar: "AA",
      description:
        "Alexandria FOE - Computer & Communication Third Year Student",
      social: {
        linkedin: "#",
        github: "#",
      },
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    },
    {
      name: "Ahmed Alaa",
      role: "Frontend Engineer",
      avatar: "AA",
      description:
        "Alexandria FOE - Computer & Communication Third Year Student",
      social: {
        linkedin: "https://www.linkedin.com/in/ahmed-alaa-elnaggar/",
        github: "https://github.com/AhmedAlaa8100",
      },
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    },
    {
      name: "Ahmed Wael",
      role: "Backend Engineer",
      avatar: "AW",
      description:
        "Alexandria FOE - Computer & Communication Third Year Student",
      social: {
        linkedin: "https://www.linkedin.com/in/ahmad-wael",
        github: "https://github.com/AhmWael",
      },
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
    {
      name: "Seif Shaheen",
      role: "Flutter Engineer",
      avatar: "SS",
      description:
        "Alexandria FOE - Computer & Communication Third Year Student",
      social: {
        linkedin: "https://www.linkedin.com/in/seif-shaheen/",
        github: "https://github.com/SeifShaheen",
      },
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    },
    {
      name: "Ahmed Zaki",
      role: "Traditional AI Engineer",
      avatar: "AZ",
      description:
        "Alexandria FOE - Computer & Communication Third Year Student",
      social: {
        linkedin: "https://www.linkedin.com/in/ahmad-zaki05/",
        github: "https://github.com/Ahmad-Zaki05",
      },
      gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
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
                          <Link
                            to={url}
                            target="_blank"
                            rel="noopener noreferrer"
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
                          </Link>
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
  );
};

export default TeamSection;
