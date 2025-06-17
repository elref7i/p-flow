"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { TrendingUp, Star, ShoppingCart } from "@mui/icons-material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const frequentMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    price: "$12.99",
    rating: 4.8,
    orders: "2.5k+ orders",
    image:
      "https://img.freepik.com/free-photo/white-pills-scattered-blue-surface_23-2148533158.jpg",
    inStock: true,
    trending: true,
  },
  {
    id: 2,
    name: "Vitamin D3 1000 IU",
    category: "Vitamins",
    price: "$18.50",
    rating: 4.9,
    orders: "1.8k+ orders",
    image:
      "https://img.freepik.com/free-photo/vitamin-d-capsules-wooden-spoon_23-2148533142.jpg",
    inStock: true,
    trending: false,
  },
  {
    id: 3,
    name: "Ibuprofen 400mg",
    category: "Anti-inflammatory",
    price: "$15.75",
    rating: 4.7,
    orders: "3.2k+ orders",
    image:
      "https://img.freepik.com/free-photo/medical-pills-capsules_23-2148531704.jpg",
    inStock: true,
    trending: true,
  },
  {
    id: 4,
    name: "Omega-3 Fish Oil",
    category: "Supplements",
    price: "$24.99",
    rating: 4.6,
    orders: "1.5k+ orders",
    image:
      "https://img.freepik.com/free-photo/omega-3-fish-oil-capsules_23-2148533156.jpg",
    inStock: false,
    trending: false,
  },
  {
    id: 5,
    name: "Aspirin 100mg",
    category: "Cardiovascular",
    price: "$9.99",
    rating: 4.8,
    orders: "4.1k+ orders",
    image:
      "https://img.freepik.com/free-photo/white-pills-medicine-health_1150-28241.jpg",
    inStock: true,
    trending: true,
  },
  {
    id: 6,
    name: "Multivitamin Complex",
    category: "Vitamins",
    price: "$32.50",
    rating: 4.5,
    orders: "980+ orders",
    image:
      "https://img.freepik.com/free-photo/colorful-pills-capsules_23-2148533144.jpg",
    inStock: true,
    trending: false,
  },
];

export default function FrequentMedicinesSection() {
  const { textPrimary, paperBackground } = useThemeConstants();

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="xl">
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
              <TrendingUp sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
              <Typography
                variant="h3"
                component="h2"
                fontWeight={700}
                sx={{
                  color: textPrimary,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                Frequent Medicines
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
              Most ordered and saved medicines by our customers
            </Typography>
          </Box>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={25}
          slidesPerView={4}
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation
          breakpoints={{
            250: { slidesPerView: 1, spaceBetween: 20 },
            600: { slidesPerView: 2, spaceBetween: 20 },
            900: { slidesPerView: 3, spaceBetween: 25 },
            1200: { slidesPerView: 4, spaceBetween: 25 },
          }}
        >
          {frequentMedicines.map((medicine, index) => (
            <SwiperSlide key={medicine.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    bgcolor: paperBackground,
                    "&:hover": {
                      boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                      transform: "translateY(-8px) scale(1.02)",
                      "& .medicine-image": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  {/* Trending Badge */}
                  {medicine.trending && (
                    <Chip
                      icon={<TrendingUp sx={{ fontSize: 16 }} />}
                      label="Trending"
                      sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        bgcolor: "rgba(255, 152, 0, 0.9)",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        zIndex: 2,
                        backdropFilter: "blur(10px)",
                      }}
                    />
                  )}

                  {/* Stock Status */}
                  <Chip
                    label={medicine.inStock ? "In Stock" : "Out of Stock"}
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bgcolor: medicine.inStock
                        ? "rgba(76, 175, 80, 0.9)"
                        : "rgba(244, 67, 54, 0.9)",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      zIndex: 2,
                    }}
                  />

                  {/* Medicine Image */}
                  <Box
                    sx={{
                      position: "relative",
                      height: 200,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={medicine.image}
                      alt={medicine.name}
                      className="medicine-image"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                      }}
                    />

                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "50%",
                        background:
                          "linear-gradient(transparent, rgba(0,0,0,0.7))",
                      }}
                    />
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      sx={{
                        color: textPrimary,
                        fontSize: "1.1rem",
                        lineHeight: 1.3,
                        mb: 1,
                      }}
                    >
                      {medicine.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 2,
                        fontSize: "0.9rem",
                      }}
                    >
                      {medicine.category}
                    </Typography>

                    {/* Rating and Orders */}
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={2}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                      >
                        <Star
                          sx={{ fontSize: 16, color: "#FFD700", mr: 0.5 }}
                        />
                        <Typography
                          variant="body2"
                          fontWeight={600}
                        >
                          {medicine.rating}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontSize: "0.8rem" }}
                      >
                        {medicine.orders}
                      </Typography>
                    </Box>

                    {/* Price and Add to Cart */}
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ color: "primary.main" }}
                      >
                        {medicine.price}
                      </Typography>

                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<ShoppingCart sx={{ fontSize: 16 }} />}
                        disabled={!medicine.inStock}
                        sx={{
                          borderRadius: 2,
                          textTransform: "none",
                          fontSize: "0.8rem",
                          px: 2,
                        }}
                      >
                        Add
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
