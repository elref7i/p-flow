/* eslint-disable react/prop-types */

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";

import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BarChartIcon from "@mui/icons-material/BarChart";
import MedicationIcon from "@mui/icons-material/Medication";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import imgMangerLight from "../../assets/drug-action-light.png";
import imgMangerDark from "../../assets/drug-action-dark.png";

import imgDashboardLight from "../../assets/mange-inventory-light.png";
import imgDashboardDark from "../../assets/mange-inventory-dark.png";

import imgOrderDetailsLight from "../../assets/order-details-light.png";
import imgOrderDetailsDark from "../../assets/order-details-dark.png";

import imgOrderLight from "../../assets/order-inv-light.png";
import imgOrderDark from "../../assets/order-inv-dark.png";

import imgProfileLight from "../../assets/profile-inventory-light.png";
import imgProfileDark from "../../assets/profile-inventory-dark.png";

import imgDrugsLight from "../../assets/all-drug-light.png";
import imgDrugsDark from "../../assets/all-drug-dark.png";

const features = [
  {
    icon: InventoryIcon,
    title: "Inventory Management",
    description:
      "Track medications, manage stock levels, and receive alerts for low inventory or expiring products.",
    color: "#1976d2",
    boxShadow: 16,
    imageLight: imgMangerLight,
    imageDark: imgMangerDark,
  },
  {
    icon: MedicationIcon,
    title: "Inventory Overview",
    description:
      "View and manage all available medications with their current stock status and expiry details.",
    color: "#3f51b5",
    boxShadow: 15,
    imageLight: imgDrugsLight,
    imageDark: imgDrugsDark,
  },
  {
    icon: BarChartIcon,
    title: "Analytics Dashboard",
    description:
      "Gain insights into sales trends, inventory turnover, and business performance.",
    color: "#ff9800",
    boxShadow: 12,
    imageLight: imgDashboardLight,
    imageDark: imgDashboardDark,
  },
  {
    icon: ShoppingCartIcon,
    title: "Order Processing",
    description:
      "Streamline order creation, processing, and fulfillment with an intuitive interface.",
    color: "#00bcd4",
    boxShadow: 14,
    imageLight: imgOrderLight,
    imageDark: imgOrderDark,
  },
  {
    icon: LocalShippingIcon,
    title: "Delivery Tracking",
    description:
      "Monitor deliveries in real-time and provide accurate ETAs to your customers.",
    color: "#4caf50",
    boxShadow: 11,
    imageLight: imgOrderDetailsLight,
    imageDark: imgOrderDetailsDark,
  },

  {
    icon: Inventory2Icon,
    title: "Inventory & Supplier Profile",
    description:
      "View and manage supplier profiles with inventory insights, including stock levels, contact details, and performance tracking.",
    color: "#9c27b0",
    boxShadow: 10,
    imageLight: imgProfileLight,
    imageDark: imgProfileDark,
  },
];

//* translate new Component
const FeatureCard = ({ feature, index, isActive, onClick }) => {
  const { cardBackground, cardActiveBackground } = useThemeConstants();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease",
          cursor: "pointer",
          background: isActive ? cardActiveBackground : cardBackground,
          position: "relative",
          overflow: "visible",
          transform: isActive ? "scale(1.05)" : "scale(1)",
          boxShadow: isActive
            ? `0 20px 60px rgba(${Number.parseInt(
                feature.color.slice(1, 3),
                16
              )}, ${Number.parseInt(
                feature.color.slice(3, 5),
                16
              )}, ${Number.parseInt(feature.color.slice(5, 7), 16)}, 0.2)`
            : "0 8px 40px rgba(0, 0, 0, 0.08)",
          border: isActive ? `2px solid ${feature.color}` : "none",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: `0 15px 50px rgba(${Number.parseInt(
              feature.color.slice(1, 3),
              16
            )}, ${Number.parseInt(
              feature.color.slice(3, 5),
              16
            )}, ${Number.parseInt(feature.color.slice(5, 7), 16)}, 0.15)`,
          },
          "&::before": isActive
            ? {
                content: '""',
                position: "absolute",
                top: -10,
                left: -10,
                right: -10,
                bottom: -10,
                background: `linear-gradient(45deg, ${feature.color}22, ${feature.color}00)`,
                borderRadius: "24px",
                zIndex: -1,
              }
            : {},
        }}
        onClick={onClick}
      >
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(135deg, ${feature.color}22, ${feature.color}44)`,
                color: feature.color,
              }}
            >
              <feature.icon fontSize="large" />
            </Box>
            <Typography
              variant="h5"
              component="h3"
              fontWeight={600}
            >
              {feature.title}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
          >
            {feature.description}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <IconButton
              sx={{
                color: feature.color,
                opacity: isActive ? 1 : 0.5,
                transition: "all 0.3s ease",
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const theme = useTheme();
  const {
    transitionEasingEaseOut,
    transitionEasingEaseIn,
    textPrimary,
    textSecondary,
    backgroundLowered,
    backgroundElevated,
  } = useThemeConstants();
  return (
    <Box
      id="features"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: backgroundLowered,
        position: "relative",
        overflow: "hidden",
        boxShadow: 8,
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: backgroundElevated,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "10.5%",
          right: "5%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: backgroundElevated,
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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
              POWERFUL FEATURES
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: "linear-gradient(45deg, #1565c0 30%, #0097a7 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Everything You Need to Run Your Pharmacy
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ maxWidth: 800, mx: "auto" }}
            >
              P-FLOW combines powerful features with an intuitive interface to
              help you manage your pharmacy efficiently.
            </Typography>
          </motion.div>
        </Box>

        <Grid
          container
          spacing={4}
          sx={{ mb: 8 }}
        >
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
            >
              <FeatureCard
                feature={feature}
                index={index}
                isActive={activeFeature === index}
                onClick={() => setActiveFeature(index)}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 12 }}>
          <Grid
            container
            p={2}
            sx={{
              backgroundColor: backgroundLowered,
              boxShadow: 8,
              transition: transitionEasingEaseOut,

              ":hover": {
                boxShadow: 4,
              },
            }}
            spacing={6}
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={6}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src={
                    theme.palette.mode === "light"
                      ? features[activeFeature].imageLight
                      : features[activeFeature].imageDark
                  }
                  alt={features[activeFeature].title}
                  style={{ color: textPrimary }}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: features[activeFeature].boxShadow,
                    transform:
                      "perspective(1800px) rotateY(20deg) rotateX(15deg)",
                    transition: transitionEasingEaseIn,
                    ":hover": {
                      boxShadow: 8,
                      transform:
                        "perspective(1500px) rotateY(4deg) rotateX(5deg)",
                    },
                  }}
                />
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
            >
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    bgcolor: `${features[activeFeature].color}22`,
                    color: features[activeFeature].color,
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    fontWeight={600}
                  >
                    {features[activeFeature].title}
                  </Typography>
                </Box>

                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  fontWeight={700}
                  style={{ color: textPrimary }}
                >
                  Streamline Your {features[activeFeature].title}
                </Typography>

                <Typography
                  variant="body2"
                  color={textSecondary}
                  sx={{ mb: 4 }}
                >
                  Our {features[activeFeature].title.toLowerCase()} system is
                  designed to make your pharmacy operations more efficient. With
                  P-FLOW, you can automate routine tasks, reduce errors, and
                  focus on what matters most - your customers.
                </Typography>

                <Box sx={{ mb: 4 }}>
                  {[1, 2, 3].map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: features[activeFeature].color,
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "0.8rem",
                        }}
                      >
                        {item}
                      </Box>
                      <Typography
                        variant="body1"
                        style={{ color: textPrimary }}
                      >
                        Key benefit {item} of{" "}
                        {features[activeFeature].title.toLowerCase()}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: features[activeFeature].color,
                    "&:hover": {
                      bgcolor: features[activeFeature].color,
                      filter: "brightness(0.9)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
