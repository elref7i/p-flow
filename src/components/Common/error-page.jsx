/* eslint-disable react/prop-types */
"use client";

import { Box, Typography, Button, Container, Paper, Chip } from "@mui/material";
import {
  ErrorOutline,
  Home,
  Help,
  WifiOff,
  BugReport,
  Warning,
  SupportAgent,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import { useNavigate } from "react-router-dom";
import Logo, { GradientLogo } from "./LogoImage";

const ErrorPage = ({ errorType = "general", errorCode = 500 }) => {
  //Navigation
  const navigate = useNavigate();

  // Themes
  const {
    textSecondary,
    navyBackground,
    deepBlueBackground,
    backgroundRedSoft,
    backgroundRed,
  } = useThemeConstants();

  // Error type configurations
  const errorConfigs = {
    network: {
      icon: WifiOff,
      title: "Connection Problem",
      subtitle:
        "Unable to connect to our servers. Please check your internet connection and try again.",
      color: "#ff9800",
    },
    404: {
      icon: Warning,
      title: "Page Not Found",
      subtitle: "The page you are looking for doesn't exist or has been moved.",
      color: "#f44336",
    },
    500: {
      icon: BugReport,
      title: "Server Error",
      subtitle:
        "Our servers are experiencing technical difficulties. We're working to fix this issue.",
      color: "#f44336",
    },
    general: {
      icon: ErrorOutline,
      title: "Oops! Something Went Wrong",
      subtitle:
        "An unexpected error occurred. Don't worry, our team has been notified.",
      color: "#f44336",
    },
  };

  const config = errorConfigs[errorType] || errorConfigs.general;
  const IconComponent = config.icon;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Paper
            elevation={12}
            sx={{
              background: backgroundRedSoft,
              boxShadow: 13,
              borderRadius: 4,
              overflow: "hidden",
              textAlign: "center",
              border: `1px solid ${config.color}20`,
            }}
          >
            {/* Header with Logo and Gradient */}
            <Box
              sx={{
                background: backgroundRed,
                color: "white",
                py: 4,
                px: 3,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background decoration */}
              <Box
                sx={{
                  position: "absolute",
                  top: -100,
                  right: -100,
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                }}
              />

              {/* Error Icon */}
              <motion.div variants={itemVariants}>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <IconComponent
                    sx={{
                      fontSize: 80,
                      color: config.color,
                      mb: 2,
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Error Title */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  component="h1"
                  fontWeight="bold"
                  gutterBottom
                >
                  {config.title}
                </Typography>
              </motion.div>

              {/* Error Code Chip */}
              {errorCode && (
                <motion.div variants={itemVariants}>
                  <Chip
                    label={`Error ${errorCode}`}
                    sx={{
                      bgcolor: backgroundRed,
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      height: 32,
                    }}
                  />
                </motion.div>
              )}
            </Box>

            {/* Content */}
            <Box sx={{ p: 4 }}>
              {/* Error Description */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  color={textSecondary}
                  sx={{ mb: 2, lineHeight: 1.6 }}
                >
                  {config.subtitle}
                </Typography>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flexWrap: "wrap",
                    mt: 4,
                  }}
                >
                  {/* Home Button */}
                  <Button
                    onClick={() => navigate("/pharmacy")}
                    variant="outlined"
                    size="large"
                    startIcon={<Home />}
                    sx={{
                      borderColor: navyBackground,
                      color: navyBackground,
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      minWidth: 140,
                      "&:hover": {
                        borderColor: deepBlueBackground,
                        color: deepBlueBackground,
                        bgcolor: `${navyBackground}08`,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Home
                  </Button>

                  {/* Help Button */}
                  <Button
                    variant="text"
                    size="large"
                    startIcon={<Help />}
                    sx={{
                      color: textSecondary,
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      minWidth: 140,
                      "&:hover": {
                        color: config.color,
                        bgcolor: `${config.color}08`,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Help
                  </Button>
                </Box>
              </motion.div>

              {/* Support Message */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    mt: 4,
                    pt: 3,
                    borderTop: `1px solid ${textSecondary}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    gap: 1,
                  }}
                >
                  <Logo justifyContent={"center"}>
                    <GradientLogo />
                  </Logo>
                  <SupportAgent sx={{ color: textSecondary, fontSize: 20 }} />
                  <Typography
                    variant="body2"
                    color={textSecondary}
                  >
                    Need immediate assistance? Contact our support team 24/7
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ErrorPage;
