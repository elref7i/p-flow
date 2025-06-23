/* eslint-disable react/prop-types */
import { Box, Typography, Container, Stack } from "@mui/material";
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
  Psychology,
  AutoAwesome,
  Science,
} from "@mui/icons-material";
import { useThemeConstants } from "../../../../../lib/constants/theme.constant";
import PulseRing from "./_components/plues-ring";
import DNAHelix from "./_components/dna";
import EnhancedFloatingParticle from "./_components/enhanced-floating";
import {
  containerVariants,
  floatingVariants,
  itemVariants,
} from "./constants/variants";
import TrustIndications from "./_components/trust-indications";
import DynamicResearch from "./_components/dynamic-research";
import AiFeatures from "./_components/ai-features";

export default function HeroVariation1() {
  const { backgroundElevated, mode, textPrimary } = useThemeConstants();
  const ref = useRef(null);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseX, mouseY]);

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "100vh",
        background: backgroundElevated,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 5 },
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
              {/* <motion.div variants={itemVariants}> */}
              {/* <Box
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
                          mode === "dark"
                            ? "linear-gradient(45deg, #2196F3, #21CBF3, #fff, #fff)"
                            : "linear-gradient(45deg, #2196F3, #21CBF3, #fff, #fff)",
                        backgroundSize: "300% 300%",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "gradientShift 4s ease-in-out infinite",
                        textShadow: "0 0 40px rgba(33, 150, 243, 0.3)",
                      }}
                    >
                      Pharmacy
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
                        color: textPrimary,
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
                </Box> */}
              {/* </motion.div> */}

              {/* SECTION 2: Dynamic Search */}
              <DynamicResearch />

              {/* SECTION 3: Spectacular AI Features */}
              <AiFeatures />
              {/* SECTION 4: Animated Trust Indicators */}
              <TrustIndications />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>

      {/* Enhanced CSS Animations */}
    </Box>
  );
}
