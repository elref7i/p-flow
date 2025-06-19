/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function EnhancedFloatingParticle({
  delay = 0,
  duration = 20,
  size = 4,
  color = "rgba(33, 150, 243, 0.6)",
}) {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: "blur(0.5px)",
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
      initial={{
        x:
          Math.random() *
          (typeof window !== "undefined" ? window.innerWidth : 1200),
        y: typeof window !== "undefined" ? window.innerHeight + 100 : 800,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        y: -100,
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        x:
          Math.random() *
          (typeof window !== "undefined" ? window.innerWidth : 1200),
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}
