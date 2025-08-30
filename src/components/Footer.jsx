import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Email as EmailIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Lightbulb as LightbulbIcon,
  ArrowUpward as ArrowUpIcon,
} from "@mui/icons-material";
import { useDarkMode } from "../contexts/DarkModeContext";
import { Link } from "react-router-dom";
const quickLinks = [
  { name: "Home", href: "/"},
  { name: "About", href: "/about"},
  { name: "Roadmap", href: "/roadmap"},
  { name: "Project Manager", href: "/project-manager"},
];

const socialLinks = [
  { icon: <GitHubIcon />, href: "https://github.com", label: "GitHub" },
  { icon: <TwitterIcon />, href: "https://twitter.com", label: "Twitter" },
  { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <YouTubeIcon />, href: "https://youtube.com", label: "YouTube" },
  { icon: <EmailIcon />, href: "mailto:contact@guidera.com", label: "Email" },
];

export default function Footer() {
  const { darkMode } = useDarkMode();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: darkMode
          ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
          : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        borderTop: `2px solid ${darkMode ? "#374151" : "#e2e8f0"}`,
        mt: "auto",
        position: "relative",
      }}
    >
      {/* Scroll to Top Button */}
      <Box
        sx={{
          position: "absolute",
          top: -20,
          right: 40,
          zIndex: 10,
        }}
      >
        <Button
          onClick={scrollToTop}
          variant="contained"
          sx={{
            minWidth: 40,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: darkMode
              ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
              : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            color: "#ffffff",
            boxShadow: darkMode
              ? "0 8px 25px rgba(59, 130, 246, 0.4)"
              : "0 8px 25px rgba(59, 130, 246, 0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: darkMode
                ? "0 12px 35px rgba(59, 130, 246, 0.5)"
                : "0 12px 35px rgba(59, 130, 246, 0.4)",
              background: darkMode
                ? "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)"
                : "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)",
            },
          }}
        >
          <ArrowUpIcon />
        </Button>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: darkMode ? "#ffffff" : "#1f2937",
                mb: 2,
                background: darkMode
                  ? "linear-gradient(135deg, #60a5fa 0%, #8b5cf6 100%)"
                  : "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Guidera
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: darkMode ? "#9ca3af" : "#6b7280",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Transform your career with personalized learning roadmaps,
              hands-on projects, and expert guidance. Master the skills you need
              to succeed in tech.
            </Typography>
            
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: darkMode ? "#ffffff" : "#1f2937",
                mb: 3,
              }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {quickLinks.map((link) => (
                <Box component="li" key={link.name} sx={{ mb: 2 }}>
                  <Link
                    to={link.href}
                    sx={{
                      color: darkMode ? "#9ca3af" : "#6b7280",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      "&:hover": {
                        color: darkMode ? "#60a5fa" : "#3b82f6",
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact & Social */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: darkMode ? "#ffffff" : "#1f2937",
                mb: 3,
              }}
            >
              Connect With Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: darkMode ? "#9ca3af" : "#6b7280",
                mb: 3,
                lineHeight: 1.6,
              }}
            >
              Follow us on social media for the latest updates, tips, and
              learning resources.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: darkMode ? "#9ca3af" : "#6b7280",
                    border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: darkMode ? "#60a5fa" : "#3b82f6",
                      borderColor: darkMode ? "#60a5fa" : "#3b82f6",
                      transform: "translateY(-2px)",
                      boxShadow: darkMode
                        ? "0 8px 20px rgba(96, 165, 250, 0.3)"
                        : "0 8px 20px rgba(59, 130, 246, 0.2)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: darkMode ? "#9ca3af" : "#6b7280",
                fontStyle: "italic",
              }}
            >
              Have questions? Reach out to us at{" "}
              <Link
                href="mailto:contact@guidera.com"
                sx={{
                  color: darkMode ? "#60a5fa" : "#3b82f6",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                contact@guidera.com
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 4,
            borderColor: darkMode ? "#374151" : "#e2e8f0",
          }}
        />

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: darkMode ? "#6b7280" : "#9ca3af",
            }}
          >
            © {new Date().getFullYear()} Guidera. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Link
              href="/privacy"
              sx={{
                color: darkMode ? "#6b7280" : "#9ca3af",
                textDecoration: "none",
                fontSize: "0.875rem",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: darkMode ? "#60a5fa" : "#3b82f6",
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: darkMode ? "#6b7280" : "#9ca3af",
                textDecoration: "none",
                fontSize: "0.875rem",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: darkMode ? "#60a5fa" : "#3b82f6",
                },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/help"
              sx={{
                color: darkMode ? "#6b7280" : "#9ca3af",
                textDecoration: "none",
                fontSize: "0.875rem",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: darkMode ? "#60a5fa" : "#3b82f6",
                },
              }}
            >
              Help Center
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
