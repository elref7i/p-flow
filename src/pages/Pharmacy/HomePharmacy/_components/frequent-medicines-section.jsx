import { Box, Container, Grid2, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { TrendingUp } from "@mui/icons-material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { useInfiniteDrugs } from "../../../../lib/hooks/useDrugAction";
import { useTypeContext } from "../../../../context/UserType.context";
import { flattenedDrugs } from "../../../../lib/constants/infinte-data";
import DrugCard from "../../../../components/PharmacyComonents/DrugCard/DrugCard";

export default function FrequentMedicinesSection() {
  // Context
  const { token } = useTypeContext();

  //Queries
  const { data, isLoading } = useInfiniteDrugs(token, { limit: 10 });

  // Themes
  const { textPrimary } = useThemeConstants();

  // Flatten the data from all pages
  const flattenData = flattenedDrugs({ data });
  5;
  if (isLoading) return <p>Loading...</p>;

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
          {flattenData.map((drug, index) => (
            <SwiperSlide key={drug.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Grid2
                  key={drug._id}
                  size={{ xs: 12, md: 6, lg: 4 }}
                >
                  <DrugCard
                    dataInfo={drug}
                    checkPage={true}
                    checkdistance={true}
                  />
                </Grid2>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
