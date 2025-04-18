import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animated background component
const AnimatedBackground = () => {
  const theme = useTheme();
  const DarkAuth =
    "linear-gradient(291.59deg, #1A1A1A 44.64%, #001B34 100.68%), linear-gradient(244.91deg, rgba(16, 0, 64, 10%) -5.58%, rgba(0, 0, 0, 0) 72.1%)";
  const LightAuth =
    "linear-gradient(63.25deg, rgba(0, 0, 0, 0) 46.5%, rgba(64, 0, 255, 2%) 107.58%), linear-gradient(297.17deg, rgba(255, 250, 244, 0) 60.92%, #9BCEFF77 107.8%)";

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            background: theme.mode === "dark" ? DarkAuth : LightAuth,
            borderRadius: "50%",
            zIndex: 0,
          }}
          animate={{
            x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            width: `${100 + index * 20}px`,
            height: `${100 + index * 20}px`,
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
        />
      ))}
    </Box>
  );
};

const HeroSection = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showVideo, setShowVideo] = useState(false);

  const features = ["Inventory Management", "Order Processing", "Analytics"];

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 16 },
        background: theme.palette.background.auth,
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AnimatedBackground />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="overline"
                  component="div"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    letterSpacing: 1,
                    mb: 2,
                  }}
                >
                  PHARMACY INVENTORY SYSTEM
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                    lineHeight: 1.2,
                    background:
                      "linear-gradient(45deg, #1565c0 30%, #0097a7 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Revolutionize Your Pharmacy Operations
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography
                  variant="h6"
                  color="textSecondary"
                  paragraph
                  sx={{ mb: 4, fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  P-FLOW is the complete inventory management system designed
                  specifically for pharmacies. Track medications, manage orders,
                  and optimize your supply chain with our powerful platform.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    mb: 4,
                  }}
                >
                  <Button
                    component={Link}
                    to={"/signup"}
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      boxShadow: "0 10px 20px rgba(25, 118, 210, 0.3)",
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrowIcon />}
                    onClick={() => setShowVideo(true)}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      borderWidth: 2,
                      "&:hover": {
                        borderWidth: 2,
                      },
                    }}
                  >
                    Watch Demo
                  </Button>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                  {features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <CheckCircleIcon color="primary" />
                      <Typography
                        variant="body1"
                        fontWeight={500}
                        style={{ color: textColor }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -20,
                    left: -20,
                    right: 20,
                    bottom: 20,
                    borderRadius: 4,
                    background:
                      "linear-gradient(45deg, rgba(25, 118, 210, 0.1) 0%, rgba(0, 188, 212, 0.1) 100%)",
                    zIndex: -1,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 20,
                    left: 20,
                    right: -20,
                    bottom: -20,
                    borderRadius: 4,
                    background:
                      "linear-gradient(45deg, rgba(0, 188, 212, 0.1) 0%, rgba(25, 118, 210, 0.1) 100%)",
                    zIndex: -1,
                  },
                }}
              >
                <Paper
                  elevation={16}
                  sx={{
                    overflow: "hidden",
                    borderRadius: 4,
                    position: "relative",
                    transform:
                      "perspective(1500px) rotateY(-5deg) rotateX(5deg)",
                    transformStyle: "preserve-3d",
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {showVideo ? (
                    <Box
                      component="iframe"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="P-FLOW Demo Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      sx={{
                        width: "100%",
                        aspectRatio: "16/9",
                        display: "block",
                      }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src="/placeholder.svg?height=1080&width=1920&text=P-FLOW+Dashboard"
                      alt="P-FLOW Dashboard Preview"
                      sx={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  )}

                  {/* Floating elements */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -30,
                      right: -30,
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(45deg, #1976d2 30%, #00bcd4 90%)",
                      opacity: 0.1,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -20,
                      left: -20,
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(45deg, #00bcd4 30%, #1976d2 90%)",
                      opacity: 0.1,
                    }}
                  />
                </Paper>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Floating badges */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -30, md: -50 },
            left: "10%",
            transform: "rotate(-15deg)",
            zIndex: 2,
            display: { xs: "none", md: "block" },
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 2,
                borderRadius: 3,
                background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
                color: "white",
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                99.9% Uptime
              </Typography>
            </Paper>
          </motion.div>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "20%",
            right: "5%",
            transform: "rotate(10deg)",
            zIndex: 2,
            display: { xs: "none", md: "block" },
          }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 2,
                borderRadius: 3,
                background: "linear-gradient(45deg, #00bcd4 30%, #4dd0e1 90%)",
                color: "white",
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                500+ Pharmacies Trust Us
              </Typography>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
