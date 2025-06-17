"use client";

import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Chip,
  Paper,
  IconButton,
  Stack,
} from "@mui/material";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  LocalPharmacy,
  Search,
  CameraAlt,
  Psychology,
  DocumentScanner,
  Speed,
  Security,
  TrendingUp,
  AutoAwesome,
  Science,
} from "@mui/icons-material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const quickSearchSuggestions = [
  "Paracetamol",
  "Ibuprofen",
  "Aspirin",
  "Vitamin D",
  "Insulin",
];

const trustIndicators = [
  { icon: <Speed />, label: "1000+ Suppliers", value: "Real-time Stock" },
  { icon: <Security />, label: "100% Verified", value: "Licensed Products" },
  { icon: <TrendingUp />, label: "Save 30%", value: "Best Prices" },
];

// Enhanced floating particle component
const EnhancedFloatingParticle = ({
  delay = 0,
  duration = 20,
  size = 4,
  color = "rgba(33, 150, 243, 0.6)",
}) => {
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
};

// DNA Helix Animation Component
const DNAHelix = () => {
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
};

// Pulse Ring Component
const PulseRing = ({ size = 200, delay = 0 }) => {
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
};

export default function HeroVariation1() {
  const { textPrimary } = useThemeConstants();
  const ref = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentParticleColor, setCurrentParticleColor] = useState(0);

  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Particle color cycling
  const particleColors = [
    "rgba(33, 150, 243, 0.6)",
    "rgba(156, 39, 176, 0.6)",
    "rgba(255, 215, 0, 0.6)",
    "rgba(76, 175, 80, 0.6)",
  ];

  useEffect(() => {
    setIsLoaded(true);

    const colorInterval = setInterval(() => {
      setCurrentParticleColor((prev) => (prev + 1) % particleColors.length);
    }, 3000);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouseX.set((clientX - centerX) / 30);
      mouseY.set((clientY - centerY) / 30);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(colorInterval);
    };
  }, [mouseX, mouseY]);

  const handleAISearch = () => {
    console.log("Opening AI Active Ingredient Search Modal");
  };

  const handlePrescriptionScan = () => {
    console.log("Opening Prescription OCR Modal");
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const floatingVariants = {
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

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
      }}
    >
      {/* Ultra Dynamic Background */}
      <motion.div
        style={{ scale, opacity }}
        className="background-container"
      >
        {/* Main Animated Orbs */}
        <motion.div
          style={{
            position: "absolute",
            width: 1000,
            height: 1000,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(33, 150, 243, 0.15) 0%, transparent 70%)",
            top: "-40%",
            right: "-40%",
            y,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 80,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(156, 39, 176, 0.12) 0%, transparent 70%)",
            bottom: "-20%",
            left: "-20%",
          }}
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: {
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            scale: {
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        />

        {/* Enhanced Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <EnhancedFloatingParticle
            key={i}
            delay={i * 1.5}
            duration={20 + Math.random() * 15}
            size={3 + Math.random() * 6}
            color={particleColors[currentParticleColor]}
          />
        ))}

        {/* DNA Helix */}
        <DNAHelix />

        {/* Pulse Rings */}
        <Box sx={{ position: "absolute", left: "20%", top: "30%" }}>
          <PulseRing
            size={150}
            delay={0}
          />
          <PulseRing
            size={200}
            delay={1}
          />
          <PulseRing
            size={250}
            delay={2}
          />
        </Box>

        {/* Animated Grid */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(33, 150, 243, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(33, 150, 243, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "120px 120px"],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Interactive Mouse Light */}
        <motion.div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(33, 150, 243, 0.15) 0%, transparent 70%)",
            pointerEvents: "none",
            x: smoothMouseX,
            y: smoothMouseY,
            left: -200,
            top: -200,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating Science Icons */}
        {[Science, LocalPharmacy, Psychology].map((Icon, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 2,
            }}
          >
            <Icon sx={{ fontSize: 40, color: "rgba(33, 150, 243, 0.4)" }} />
          </motion.div>
        ))}
      </motion.div>

      <Container
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 2 }}
      >
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ opacity }}
            >
              {/* SECTION 1: Spectacular Header */}
              <motion.div variants={itemVariants}>
                <Box
                  textAlign="center"
                  mb={{ xs: 6, md: 8 }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                    mb={4}
                  >
                    <motion.div
                      variants={floatingVariants}
                      animate="animate"
                      whileHover={{
                        scale: 1.2,
                        rotate: 20,
                        filter: "drop-shadow(0 0 30px rgba(33, 150, 243, 0.8))",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <LocalPharmacy
                        sx={{
                          fontSize: { xs: 60, md: 80 },
                          color: "#2196F3",
                          filter:
                            "drop-shadow(0 0 25px rgba(33, 150, 243, 0.6))",
                        }}
                      />
                    </motion.div>

                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.3, 1],
                        filter: [
                          "drop-shadow(0 0 15px rgba(255, 215, 0, 0.7))",
                          "drop-shadow(0 0 25px rgba(255, 215, 0, 1))",
                          "drop-shadow(0 0 15px rgba(255, 215, 0, 0.7))",
                        ],
                      }}
                      transition={{
                        rotate: {
                          duration: 10,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                        filter: {
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                      }}
                      whileHover={{ scale: 1.5, rotate: 180 }}
                    >
                      <AutoAwesome
                        sx={{
                          fontSize: { xs: 30, md: 40 },
                          color: "#FFD700",
                        }}
                      />
                    </motion.div>
                  </Stack>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: {
                          xs: "2.8rem",
                          sm: "4rem",
                          md: "5rem",
                          lg: "6rem",
                        },
                        fontWeight: 900,
                        lineHeight: 1.1,
                        mb: 3,
                        background:
                          "linear-gradient(45deg, #ffffff, #e3f2fd, #2196F3, #21CBF3)",
                        backgroundSize: "300% 300%",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "gradientShift 4s ease-in-out infinite",
                        textShadow: "0 0 40px rgba(33, 150, 243, 0.3)",
                      }}
                    >
                      AI-Powered Pharmacy
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: "rgba(255,255,255,0.9)",
                        fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                        fontWeight: 300,
                        maxWidth: 700,
                        mx: "auto",
                        lineHeight: 1.6,
                        textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                      }}
                    >
                      Revolutionary medicine search with AI ingredient analysis
                      and prescription reading
                    </Typography>
                  </motion.div>
                </Box>
              </motion.div>

              {/* SECTION 2: Dynamic Search */}
              <motion.div variants={itemVariants}>
                <Box mb={{ xs: 6, md: 8 }}>
                  <Box
                    maxWidth={900}
                    mx="auto"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 25px 50px rgba(33, 150, 243, 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Paper
                        elevation={25}
                        sx={{
                          p: { xs: 4, md: 5 },
                          borderRadius: 6,
                          background: "rgba(255,255,255,0.98)",
                          backdropFilter: "blur(30px)",
                          border: "2px solid rgba(255,255,255,0.4)",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: "-100%",
                            width: "100%",
                            height: "100%",
                            background:
                              "linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.1), transparent)",
                            animation: "shimmer 4s infinite",
                          },
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1, duration: 0.8 }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              color: textPrimary,
                              mb: 4,
                              fontWeight: 700,
                              textAlign: "center",
                              fontSize: { xs: "1.3rem", md: "1.5rem" },
                            }}
                          >
                            🔍 Smart Medicine Search
                          </Typography>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2, duration: 0.8 }}
                        >
                          <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Search by name, active ingredient, or condition..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <motion.div
                                    animate={{
                                      rotate: searchQuery ? [0, 360] : 0,
                                      scale: searchQuery ? [1, 1.2, 1] : 1,
                                    }}
                                    transition={{ duration: 0.6 }}
                                  >
                                    <Search
                                      sx={{
                                        color: "primary.main",
                                        fontSize: 28,
                                      }}
                                    />
                                  </motion.div>
                                </InputAdornment>
                              ),
                              endAdornment: (
                                <InputAdornment position="end">
                                  <motion.div
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                  >
                                    <IconButton
                                      onClick={handlePrescriptionScan}
                                      sx={{
                                        bgcolor: "primary.main",
                                        color: "white",
                                        "&:hover": {
                                          bgcolor: "primary.dark",
                                          boxShadow:
                                            "0 8px 20px rgba(33, 150, 243, 0.4)",
                                        },
                                      }}
                                    >
                                      <CameraAlt />
                                    </IconButton>
                                  </motion.div>
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderRadius: 4,
                                fontSize: "1.2rem",
                                py: 1.5,
                                background: "rgba(255,255,255,0.95)",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  boxShadow:
                                    "0 12px 30px rgba(33, 150, 243, 0.2)",
                                  transform: "translateY(-2px)",
                                },
                                "&.Mui-focused": {
                                  boxShadow:
                                    "0 15px 35px rgba(33, 150, 243, 0.3)",
                                  transform: "translateY(-3px)",
                                },
                              },
                            }}
                          />
                        </motion.div>

                        {/* Enhanced Quick Suggestions */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4, duration: 0.8 }}
                        >
                          <Box mt={4}>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "text.secondary",
                                mb: 3,
                                fontWeight: 500,
                              }}
                            >
                              Popular searches:
                            </Typography>
                            <Stack
                              direction="row"
                              spacing={2}
                              flexWrap="wrap"
                              useFlexGap
                            >
                              {quickSearchSuggestions.map(
                                (suggestion, index) => (
                                  <motion.div
                                    key={suggestion}
                                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                      delay: 1.6 + index * 0.1,
                                      duration: 0.5,
                                    }}
                                    whileHover={{
                                      scale: 1.1,
                                      y: -5,
                                      boxShadow:
                                        "0 8px 20px rgba(33, 150, 243, 0.3)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Chip
                                      label={suggestion}
                                      onClick={() => setSearchQuery(suggestion)}
                                      sx={{
                                        cursor: "pointer",
                                        fontSize: "1rem",
                                        py: 2,
                                        px: 1,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                          bgcolor: "primary.main",
                                          color: "white",
                                          transform: "translateY(-3px)",
                                        },
                                      }}
                                    />
                                  </motion.div>
                                )
                              )}
                            </Stack>
                          </Box>
                        </motion.div>
                      </Paper>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>

              {/* SECTION 3: Spectacular AI Features */}
              <motion.div variants={itemVariants}>
                <Box mb={{ xs: 6, md: 8 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 1 }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: "white",
                        textAlign: "center",
                        mb: 6,
                        fontWeight: 800,
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                      }}
                    >
                      AI-Powered Features
                    </Typography>
                  </motion.div>

                  <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    maxWidth={1000}
                    mx="auto"
                  >
                    <Grid
                      item
                      xs={12}
                      sm={6}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -100, rotateY: -45 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{
                          delay: 2,
                          duration: 1.2,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          y: -15,
                          rotateY: 8,
                          scale: 1.03,
                          rotateX: 5,
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <Card
                          onClick={handleAISearch}
                          sx={{
                            background:
                              "linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.95))",
                            color: "white",
                            cursor: "pointer",
                            borderRadius: 6,
                            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                            position: "relative",
                            overflow: "hidden",
                            border: "2px solid rgba(255,255,255,0.2)",
                            "&:hover": {
                              boxShadow: "0 30px 60px rgba(102, 126, 234, 0.5)",
                            },
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background:
                                "linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)",
                              transform: "translateX(-100%)",
                              transition: "transform 0.8s",
                            },
                            "&:hover::before": {
                              transform: "translateX(100%)",
                            },
                          }}
                        >
                          <CardContent
                            sx={{
                              p: 5,
                              textAlign: "center",
                              position: "relative",
                              zIndex: 1,
                            }}
                          >
                            <motion.div
                              animate={{
                                rotate: [0, 15, -15, 0],
                                scale: [1, 1.15, 1],
                              }}
                              transition={{
                                duration: 5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            >
                              <Psychology sx={{ fontSize: 70, mb: 3 }} />
                            </motion.div>
                            <Typography
                              variant="h4"
                              fontWeight={800}
                              gutterBottom
                            >
                              AI Ingredient Search
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                opacity: 0.95,
                                mb: 4,
                                lineHeight: 1.7,
                                fontSize: "1.1rem",
                              }}
                            >
                              Smart AI analyzes and suggests medicines by active
                              ingredients with drug interactions
                            </Typography>
                            <motion.div
                              whileHover={{ scale: 1.08 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                variant="contained"
                                size="large"
                                sx={{
                                  bgcolor: "rgba(255,255,255,0.25)",
                                  color: "white",
                                  fontWeight: 600,
                                  py: 1.5,
                                  px: 4,
                                  "&:hover": {
                                    bgcolor: "rgba(255,255,255,0.35)",
                                    boxShadow:
                                      "0 8px 20px rgba(255,255,255,0.2)",
                                  },
                                }}
                              >
                                Try AI Search
                              </Button>
                            </motion.div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={6}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 100, rotateY: 45 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{
                          delay: 2.2,
                          duration: 1.2,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          y: -15,
                          rotateY: -8,
                          scale: 1.03,
                          rotateX: 5,
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <Card
                          onClick={handlePrescriptionScan}
                          sx={{
                            background:
                              "linear-gradient(135deg, rgba(240, 147, 251, 0.95), rgba(245, 87, 108, 0.95))",
                            color: "white",
                            cursor: "pointer",
                            borderRadius: 6,
                            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                            position: "relative",
                            overflow: "hidden",
                            border: "2px solid rgba(255,255,255,0.2)",
                            "&:hover": {
                              boxShadow: "0 30px 60px rgba(240, 147, 251, 0.5)",
                            },
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background:
                                "linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent)",
                              transform: "translateX(-100%)",
                              transition: "transform 0.8s",
                            },
                            "&:hover::before": {
                              transform: "translateX(100%)",
                            },
                          }}
                        >
                          <CardContent
                            sx={{
                              p: 5,
                              textAlign: "center",
                              position: "relative",
                              zIndex: 1,
                            }}
                          >
                            <motion.div
                              animate={{
                                rotate: [0, -15, 15, 0],
                                scale: [1, 1.15, 1],
                              }}
                              transition={{
                                duration: 5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 2.5,
                              }}
                            >
                              <DocumentScanner sx={{ fontSize: 70, mb: 3 }} />
                            </motion.div>
                            <Typography
                              variant="h4"
                              fontWeight={800}
                              gutterBottom
                            >
                              Prescription OCR
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                opacity: 0.95,
                                mb: 4,
                                lineHeight: 1.7,
                                fontSize: "1.1rem",
                              }}
                            >
                              Upload prescription images and let AI read them
                              instantly with accuracy
                            </Typography>
                            <motion.div
                              whileHover={{ scale: 1.08 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                variant="contained"
                                size="large"
                                sx={{
                                  bgcolor: "rgba(255,255,255,0.25)",
                                  color: "white",
                                  fontWeight: 600,
                                  py: 1.5,
                                  px: 4,
                                  "&:hover": {
                                    bgcolor: "rgba(255,255,255,0.35)",
                                    boxShadow:
                                      "0 8px 20px rgba(255,255,255,0.2)",
                                  },
                                }}
                              >
                                Scan Prescription
                              </Button>
                            </motion.div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>
              </motion.div>

              {/* SECTION 4: Animated Trust Indicators */}
              <motion.div variants={itemVariants}>
                <Box>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4, duration: 1 }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "rgba(255,255,255,0.95)",
                        textAlign: "center",
                        mb: 5,
                        fontWeight: 700,
                        fontSize: { xs: "1.8rem", md: "2rem" },
                      }}
                    >
                      Trusted by 10,000+ Pharmacists
                    </Typography>
                  </motion.div>

                  <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    maxWidth={900}
                    mx="auto"
                  >
                    {trustIndicators.map((indicator, index) => (
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        key={index}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 50, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            delay: 2.6 + index * 0.15,
                            duration: 0.8,
                          }}
                          whileHover={{
                            y: -12,
                            scale: 1.08,
                            rotateY: 5,
                          }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <Paper
                            elevation={8}
                            sx={{
                              p: 4,
                              textAlign: "center",
                              background: "rgba(255,255,255,0.12)",
                              backdropFilter: "blur(25px)",
                              border: "2px solid rgba(255,255,255,0.25)",
                              borderRadius: 4,
                              color: "white",
                              transition: "all 0.4s ease",
                              "&:hover": {
                                background: "rgba(255,255,255,0.18)",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                              },
                            }}
                          >
                            <motion.div
                              animate={{
                                rotate: [0, 8, -8, 0],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: index * 0.7,
                              }}
                            >
                              <Box
                                sx={{ color: "#2196F3", mb: 2, fontSize: 35 }}
                              >
                                {indicator.icon}
                              </Box>
                            </motion.div>
                            <Typography
                              variant="h5"
                              fontWeight={800}
                              gutterBottom
                            >
                              {indicator.label}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ opacity: 0.9, fontSize: "1.1rem" }}
                            >
                              {indicator.value}
                            </Typography>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>

                  {/* Epic Call to Action */}
                  <Box
                    textAlign="center"
                    mt={8}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 3.2, duration: 1 }}
                      whileHover={{
                        scale: 1.08,
                        y: -5,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          px: 8,
                          py: 3,
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          borderRadius: 6,
                          background:
                            "linear-gradient(45deg, #2196F3, #21CBF3, #00BCD4)",
                          backgroundSize: "200% 200%",
                          animation: "gradientShift 3s ease-in-out infinite",
                          boxShadow: "0 15px 35px rgba(33, 150, 243, 0.4)",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: "-100%",
                            width: "100%",
                            height: "100%",
                            background:
                              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                            transition: "left 0.6s",
                          },
                          "&:hover::before": {
                            left: "100%",
                          },
                          "&:hover": {
                            boxShadow: "0 20px 50px rgba(33, 150, 243, 0.6)",
                            transform: "translateY(-5px)",
                          },
                        }}
                      >
                        Get Started Free
                      </Button>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </Box>
  );
}
