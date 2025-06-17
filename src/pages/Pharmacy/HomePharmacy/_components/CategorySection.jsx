"use client";

import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography,
  Container,
  Chip,
} from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { useCategories } from "../../../../lib/hooks/useAdminAction";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { useNavigate } from "react-router-dom";
import { useTypeContext } from "../../../../context/UserType.context";

export default function CategorySection() {
  const { textPrimary, paperBackground } = useThemeConstants();
  const { data, isLoading } = useCategories();
  const categories = data?.data || [];
  const navigate = useNavigate();
  const { role } = useTypeContext();

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
          <Typography
            variant="h3"
            component="h2"
            fontWeight={700}
            gutterBottom
            sx={{
              color: textPrimary,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 2,
            }}
          >
            Drug Categories
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Explore our comprehensive range of pharmaceutical categories
          </Typography>
        </Box>
      </motion.div>

      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[...Array(4)].map((_, idx) => (
            <Card
              key={idx}
              sx={{ width: 320, borderRadius: 4 }}
            >
              <Skeleton
                variant="rectangular"
                height={220}
              />
              <CardContent>
                <Skeleton
                  variant="text"
                  width="70%"
                  height={28}
                  sx={{ mx: "auto", mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="50%"
                  height={20}
                  sx={{ mx: "auto" }}
                />
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          breakpoints={{
            250: { slidesPerView: 1, spaceBetween: 20 },
            600: { slidesPerView: 2, spaceBetween: 25 },
            900: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={cat._id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card
                  onClick={() => {
                    if (role === "pharmacy") {
                      return navigate(`/pharmacy/categorydrugs/${cat._id}`);
                    }
                  }}
                  sx={{
                    borderRadius: 4,
                    boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                    bgcolor: paperBackground,
                    cursor: role === "pharmacy" ? "pointer" : "default",
                    overflow: "hidden",
                    position: "relative",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    "&:hover": {
                      boxShadow: "0 20px 60px rgba(33, 150, 243, 0.2)",
                      transform: "translateY(-8px) scale(1.02)",
                      "& .category-image": {
                        transform: "scale(1.15)",
                      },
                      "& .category-overlay": {
                        opacity: 1,
                      },
                      "& .category-chip": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 8px 20px rgba(33, 150, 243, 0.3)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: 220,
                    }}
                  >
                    <Box
                      component="img"
                      src={cat.imageCover}
                      alt={cat.name}
                      className="category-image"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition:
                          "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />

                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)",
                      }}
                    />

                    {/* Hover Overlay */}
                    <Box
                      className="category-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(135deg, rgba(33, 150, 243, 0.9), rgba(33, 203, 243, 0.9))",
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          color: "white",
                          fontWeight: 700,
                          textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                          textAlign: "center",
                        }}
                      >
                        Explore Category
                      </Typography>
                    </Box>

                    {/* Category Chip */}
                    <Chip
                      label="Available"
                      className="category-chip"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        bgcolor: "rgba(76, 175, 80, 0.9)",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        transition: "all 0.3s ease",
                        backdropFilter: "blur(10px)",
                      }}
                    />
                  </Box>

                  <CardContent
                    sx={{ p: 3, textAlign: "center", position: "relative" }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      sx={{
                        color: textPrimary,
                        fontSize: "1.3rem",
                        mb: 1,
                        lineHeight: 1.3,
                      }}
                    >
                      {cat.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.9rem",
                        opacity: 0.8,
                      }}
                    >
                      Browse medicines in this category
                    </Typography>

                    {/* Decorative Element */}
                    <Box
                      sx={{
                        width: 40,
                        height: 3,
                        bgcolor: "primary.main",
                        borderRadius: 2,
                        mx: "auto",
                        mt: 2,
                        transition: "all 0.3s ease",
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
}
