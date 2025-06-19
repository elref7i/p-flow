/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function PulseRing({ size = 200, delay = 0 }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        border: "2px solid rgba(33, 150, 243, 0.3)",
        left: "50%",
        top: "50%",
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      animate={{
        scale: [1, 2, 1],
        opacity: [0.5, 0, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeOut",
        delay,
      }}
    />
  );
}
