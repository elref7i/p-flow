// Enhanced animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const floatingVariants = {
  animate: {
    y: [0, -30, 0],
    rotate: [0, 10, -10, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};
