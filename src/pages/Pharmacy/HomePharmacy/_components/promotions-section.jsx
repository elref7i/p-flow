"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { LocalOffer, Timer, Percent } from "@mui/icons-material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const promotions = [
  {
    id: 1,
    title: "Summer Health Sale",
    description: "Get up to 30% off on vitamins and supplements",
    discount: "30% OFF",
    validUntil: "Valid until July 31st",
    category: "Vitamins",
    color: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
    bgImage:
      "https://img.freepik.com/free-photo/pills-capsules-medicine-health_1150-28239.jpg",
  },
  {
    id: 2,
    title: "First Order Bonus",
    description: "New customers get 15% off their first purchase",
    discount: "15% OFF",
    validUntil: "For new customers only",
    category: "New Customer",
    color: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
    bgImage:
      "https://img.freepik.com/free-photo/medical-pills-capsules_23-2148531704.jpg",
  },
  {
    id: 3,
    title: "Bulk Order Discount",
    description: "Order 5+ items and save big on your purchase",
    discount: "25% OFF",
    validUntil: "Minimum 5 items required",
    category: "Bulk Order",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    bgImage:
      "https://img.freepik.com/free-photo/arrangement-medicine-pills_23-2148531691.jpg",
  },
  {
    id: 4,
    title: "Weekly Flash Sale",
    description: "Limited time offer on selected medicines",
    discount: "40% OFF",
    validUntil: "Ends in 3 days",
    category: "Flash Sale",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    bgImage:
      "https://img.freepik.com/free-photo/medical-pills-medicine-health_1150-28240.jpg",
  },
];

export default function PromotionsSection() {
  const { textPrimary, paperBackground } = useThemeConstants();

  return (
    <Container
      maxWidth="xl"
      sx={{ py: 8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Box
          textAlign="center"
          mb={6}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <LocalOffer sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
            <Typography
              variant="h3"
              component="h2"
              fontWeight={700}
              sx={{
                color: textPrimary,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Promotions for You
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Don't miss out on these exclusive deals and special offers
          </Typography>
        </Box>
      </motion.div>

      <Grid
        container
        spacing={4}
      >
        {promotions.map((promo, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={promo.id}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                    transform: "translateY(-10px) scale(1.02)",
                    "& .promo-image": {
                      transform: "scale(1.1)",
                    },
                    "& .promo-overlay": {
                      opacity: 0.9,
                    },
                  },
                }}
              >
                {/* Background Image */}
                <Box
                  sx={{
                    position: "relative",
                    height: 200,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={promo.bgImage}
                    alt={promo.title}
                    className="promo-image"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <Box
                    className="promo-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: promo.color,
                      opacity: 0.8,
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  {/* Discount Badge */}
                  <Chip
                    icon={<Percent sx={{ fontSize: 16 }} />}
                    label={promo.discount}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "rgba(255,255,255,0.95)",
                      color: "text.primary",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    }}
                  />

                  {/* Category Badge */}
                  <Chip
                    label={promo.category}
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: "rgba(255,255,255,0.2)",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      backdropFilter: "blur(10px)",
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    sx={{ color: textPrimary, mb: 1 }}
                  >
                    {promo.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      mb: 2,
                      lineHeight: 1.5,
                    }}
                  >
                    {promo.description}
                  </Typography>

                  <Box
                    display="flex"
                    alignItems="center"
                    mb={3}
                  >
                    <Timer
                      sx={{ fontSize: 16, color: "text.secondary", mr: 1 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.85rem",
                      }}
                    >
                      {promo.validUntil}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: 3,
                      py: 1.2,
                      fontWeight: 600,
                      textTransform: "none",
                      background: promo.color,
                      "&:hover": {
                        opacity: 0.9,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Claim Offer
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
