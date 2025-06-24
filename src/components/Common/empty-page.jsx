/* eslint-disable react/prop-types */
"use client";

import { Box, Typography, Button, Container, Paper } from "@mui/material";
import {
  SearchOff,
  Refresh,
  Home,
  Help,
  Inventory,
  LocalPharmacy,
  ShoppingCart,
  Assignment,
  SupportAgent,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import { useNavigate } from "react-router-dom";
import Logo, { GradientLogo } from "./LogoImage";

const EmptyPage = ({ type = "general", title, subtitle, customMessage }) => {
  const { cardBackground, textPrimary, textSecondary } = useThemeConstants();

  //Navigation
  const navigate = useNavigate();

  // Empty state configurations
  const emptyConfigs = {
    search: {
      icon: SearchOff,
      title: "No Results Found",
      subtitle: "We couldn't find any medicines matching your search criteria.",
      message:
        "Try adjusting your search terms, checking for typos, or browsing our categories.",
      color: "#2196f3",
    },
    inventory: {
      icon: Inventory,
      title: "No Medicines Available",
      subtitle: "There are currently no medicines in our inventory.",
      message:
        "Our pharmacists are working to restock. Please check back soon or contact us for assistance.",
      color: "#4caf50",
    },
    cart: {
      icon: ShoppingCart,
      title: "Your Cart is Empty",
      subtitle: "You haven't added any medicines to your cart yet.",
      message:
        "Browse our wide selection of medicines and healthcare products to get started.",
      color: "#ff9800",
    },
    prescriptions: {
      icon: Assignment,
      title: "No Prescriptions Found",
      subtitle: "You haven't uploaded any prescriptions yet.",
      message:
        "Upload a prescription image to get AI-powered medicine recommendations and availability.",
      color: "#9c27b0",
    },
    pharmacy: {
      icon: LocalPharmacy,
      title: "No Pharmacies Found",
      subtitle: "No pharmacies are available in your selected area.",
      message:
        "Try expanding your search radius or check back later as we add more pharmacy partners.",
      color: "#00bcd4",
    },
    general: {
      icon: SearchOff,
      title: "No Data Available",
      subtitle: "There's no information to display at the moment.",
      message:
        "This might be temporary. Please try refreshing the page or contact support if the issue persists.",
      color: "#607d8b",
    },
  };

  const config = emptyConfigs[type] || emptyConfigs.general;
  const IconComponent = config.icon;

  // Use custom title/subtitle if provided, otherwise use config
  const displayTitle = title || config.title;
  const displaySubtitle = subtitle || config.subtitle;
  const displayMessage = customMessage || config.message;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        mx: "auto",
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
            elevation={8}
            sx={{
              background: cardBackground,
              borderRadius: 4,
              boxShadow: 5,
              overflow: "hidden",
              textAlign: "center",
              border: `1px solid ${config.color}20`,
            }}
          >
            {/* Header with Logo and Gradient */}
            <Box
              sx={{
                background: `linear-gradient(135deg, ${config.color}15 0%, ${config.color}25 100%)`,
                py: 5,
                px: 3,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background decoration */}
              <Box
                sx={{
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${config.color}10, ${config.color}05)`,
                }}
              />

              {/* Website Logo */}
              <motion.div variants={itemVariants}>
                <Logo
                  justifyContent={"center"}
                  mb={3}
                >
                  <GradientLogo />
                </Logo>
              </motion.div>

              {/* Empty State Icon */}
              <motion.div variants={itemVariants}>
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                >
                  <IconComponent
                    sx={{
                      fontSize: 100,
                      color: config.color,
                      mb: 3,
                      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  component="h1"
                  fontWeight="bold"
                  color={textPrimary}
                  gutterBottom
                >
                  {displayTitle}
                </Typography>
              </motion.div>

              {/* Subtitle */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  color={textSecondary}
                  sx={{ mb: 2, maxWidth: 500, mx: "auto" }}
                >
                  {displaySubtitle}
                </Typography>
              </motion.div>
            </Box>

            {/* Content */}
            <Box sx={{ p: 4 }}>
              {/* Detailed Message */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    bgcolor: `${config.color}08`,
                    border: `1px solid ${config.color}20`,
                    borderRadius: 2,
                    p: 3,
                    mb: 4,
                  }}
                >
                  <Typography
                    variant="body1"
                    color={textPrimary}
                    sx={{ lineHeight: 1.6 }}
                  >
                    {displayMessage}
                  </Typography>
                </Box>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flexWrap: "wrap",
                    mb: 4,
                  }}
                >
                  {/* Reload Button */}
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Refresh />}
                    onClick={() => window.location.reload()}
                    sx={{
                      background: `linear-gradient(135deg, ${config.color} 0%, ${config.color}dd 100%)`,
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      minWidth: 140,
                      "&:hover": {
                        background: `linear-gradient(135deg, ${config.color}dd 0%, ${config.color} 100%)`,
                        transform: "translateY(-2px)",
                        boxShadow: `0 8px 20px ${config.color}40`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Reload
                  </Button>

                  {/* Home Button */}
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Home />}
                    onClick={() => navigate("/pharmacy")}
                    sx={{
                      borderColor: config.color,
                      color: config.color,
                      px: 4,
                      py: 1.5,
                      fontWeight: "bold",
                      minWidth: 140,
                      "&:hover": {
                        borderColor: config.color,
                        color: config.color,
                        bgcolor: `${config.color}08`,
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
                    pt: 3,
                    borderTop: `1px solid ${textSecondary}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <SupportAgent sx={{ color: textSecondary, fontSize: 20 }} />
                  <Typography
                    variant="body2"
                    color={textSecondary}
                  >
                    Still need help? Our support team is here to assist you
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

export default EmptyPage;
