import { Box, Container } from "@mui/material";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocalPharmacy, Psychology, Science } from "@mui/icons-material";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import PulseRing from "./_components/plues-ring";
import DNAHelix from "./_components/dna";
import EnhancedFloatingParticle from "./_components/enhanced-floating";
import { containerVariants } from "./constants/variants";
import TrustIndications from "./_components/trust-indications";
import DynamicResearch from "./_components/dynamic-research";
import AiFeatures from "./_components/ai-features";

export default function HeroVariation1() {
  // States
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentParticleColor, setCurrentParticleColor] = useState(0);

  //Themes
  const { backgroundElevated } = useThemeConstants();

  // Hooks
  const ref = useRef(null);

  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Variables
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
