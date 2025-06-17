"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const slides = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/doctor-consulting-patient-clinic_23-2148821526.jpg",
    title: "Find Medicines Easily",
    subtitle: "Search and discover drugs with active ingredient suggestions.",
    cta: "Browse Medicines",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611197.jpg",
    title: "Real-time Inventories",
    subtitle: "Connect with trusted warehouses and view their available stock.",
    cta: "View Inventories",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/portrait-smiling-female-doctor-standing-with-stethoscope-hospital_23-2148812346.jpg",
    title: "Order and Track Instantly",
    subtitle: "Place orders from multiple warehouses and track their status.",
    cta: "Start Ordering",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611197.jpg",
    title: "Smart Wishlist",
    subtitle: "Save drugs you need and get notified when they're back.",
    cta: "Create Wishlist",
  },
];

export default function HeroSection() {
  const { textPrimary } = useThemeConstants();

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        color: textPrimary,
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        style={{ height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                position: "relative",
                height: "100vh",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={slide.img}
                alt={slide.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "scale(1.1)",
                  animation: "slowZoom 8s ease-in-out infinite alternate",
                }}
              />

              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(
                    135deg, 
                    rgba(0,0,0,0.7) 0%, 
                    rgba(0,0,0,0.4) 50%, 
                    rgba(0,0,0,0.6) 100%
                  )`,
                }}
              />

              {/* Content */}
              <Container
                maxWidth="lg"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  zIndex: 2,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Typography
                    variant="h2"
                    component="h1"
                    fontWeight={800}
                    gutterBottom
                    sx={{
                      textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
                      fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                      lineHeight: 1.2,
                      mb: 3,
                    }}
                  >
                    {slide.title}
                  </Typography>

                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
                      fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                      mb: 4,
                      maxWidth: "600px",
                      mx: "auto",
                      opacity: 0.95,
                    }}
                  >
                    {slide.subtitle}
                  </Typography>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        borderRadius: 3,
                        background:
                          "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                        boxShadow: "0 8px 25px rgba(33, 150, 243, 0.3)",
                        textTransform: "none",
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #1976D2 30%, #1CB5E0 90%)",
                          boxShadow: "0 12px 35px rgba(33, 150, 243, 0.4)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {slide.cta}
                    </Button>
                  </motion.div>
                </motion.div>
              </Container>

              {/* Floating Elements */}
              <Box
                sx={{
                  position: "absolute",
                  top: "20%",
                  right: "10%",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  animation: "float 6s ease-in-out infinite",
                  display: { xs: "none", md: "block" },
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: "30%",
                  left: "15%",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  animation: "float 8s ease-in-out infinite reverse",
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 12px !important;
          height: 12px !important;
        }

        .swiper-pagination-bullet-active {
          background: #2196f3 !important;
          transform: scale(1.2);
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: rgba(255, 255, 255, 0.8) !important;
          background: rgba(0, 0, 0, 0.2) !important;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50% !important;
          backdrop-filter: blur(10px) !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.4) !important;
          color: white !important;
        }
      `}</style>
    </Box>
  );
}
