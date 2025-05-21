import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const slides = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/doctor-consulting-patient-clinic_23-2148821526.jpg",
    title: "Find Medicines Easily",
    subtitle: "Search and discover drugs with active ingredient suggestions.",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611197.jpg",
    title: "Real-time Inventories",
    subtitle: "Connect with trusted warehouses and view their available stock.",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/portrait-smiling-female-doctor-standing-with-stethoscope-hospital_23-2148812346.jpg",
    title: "Order and Track Instantly",
    subtitle: "Place orders from multiple warehouses and track their status.",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-coat_23-2149611197.jpg",
    title: "Smart Wishlist",
    subtitle: "Save drugs you need and get notified when they're back.",
  },
];

export default function HeroSection() {
  const { textPrimary } = useThemeConstants();
  return (
    <Box sx={{ mb: 5, color: textPrimary }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  height: { xs: 200, sm: 280, md: 350 },
                  boxShadow: 3,
                }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.45)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    sx={{ textShadow: "1px 1px 5px rgba(0,0,0,0.8)" }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
                  >
                    {slide.subtitle}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
