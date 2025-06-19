import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function DNAHelix() {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "10%",
        top: "20%",
        width: 200,
        height: 400,
        opacity: 0.3,
      }}
    >
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: i % 2 === 0 ? "#2196F3" : "#21CBF3",
            left: "50%",
            top: `${i * 20}px`,
          }}
          animate={{
            x: [
              Math.cos(i * 0.5 + 0) * 50,
              Math.cos(i * 0.5 + Math.PI) * 50,
              Math.cos(i * 0.5 + Math.PI * 2) * 50,
            ],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </Box>
  );
}
