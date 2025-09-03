import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

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

export default AnimatedBackground;
