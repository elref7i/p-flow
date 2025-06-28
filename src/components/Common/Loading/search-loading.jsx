"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function SearchLoadingAnimation() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 8,
        position: "relative",
      }}
    >
      {/* Main ripple container */}
      <Box
        sx={{
          position: "relative",
          width: 120,
          height: 120,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Multiple ripple rings */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              border: "2px solid",
              borderColor: "rgba(33, 150, 243, 0.3)",
              width: 40 + i * 20,
              height: 40 + i * 20,
            }}
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.8, 0.2, 0.8],
              borderColor: [
                "rgba(33, 150, 243, 0.6)",
                "rgba(156, 39, 176, 0.4)",
                "rgba(33, 150, 243, 0.6)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central swirl */}
        <motion.div
          style={{
            position: "absolute",
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "linear-gradient(45deg, #2196F3, #9C27B0, #FFD700)",
            zIndex: 2,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />

        {/* Floating particles around the swirl */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            style={{
              position: "absolute",
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: `hsl(${200 + i * 20}, 70%, 60%)`,
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [0, Math.cos((i * Math.PI) / 4) * 50],
              y: [0, Math.sin((i * Math.PI) / 4) * 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Water-like wave effect */}
        <motion.div
          style={{
            position: "absolute",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, transparent 70%)",
            zIndex: 1,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </Box>

      {/* Subtle text indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: -20,
          fontSize: "0.9rem",
          color: "rgba(33, 150, 243, 0.7)",
          fontWeight: 500,
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        Searching...
      </motion.div>
    </Box>
  );
}
