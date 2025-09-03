import React from "react";
import { Container, Typography, Box, Chip } from "@mui/material";
import { motion } from "framer-motion";

const MissionSection = ({ darkMode }) => {
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
  );
};

export default MissionSection;
