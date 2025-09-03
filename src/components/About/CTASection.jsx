import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = ({ darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
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
              Join thousands of learners who have transformed their careers with
              Guidera. Create your personalized roadmap today and take the first
              step towards your dream job.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div>
              <Link to="/register">
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
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)",
                      transition: "left 0.5s ease-in-out",
                      zIndex: 1,
                    },

                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)",
                      boxShadow: "0 12px 40px rgba(59, 130, 246, 0.5)",
                      transform: "translateY(-3px) scale(1.05)",
                      "&::before": {
                        left: "100%",
                      },
                    },

                    "& span": {
                      position: "relative",
                      zIndex: 2,
                    },
                  }}
                >
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </motion.div>
  );
};

export default CTASection;
