import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { LocalOffer } from "@mui/icons-material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

import { usePromotions } from "../../../../lib/hooks/usepromotion";
import { useTypeContext } from "../../../../context/UserType.context";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import CardPromotion from "../../../../components/card-promotion";
import { useNavigate } from "react-router-dom";

export default function PromotionsSection() {
  // Context
  const { token } = useTypeContext();

  //Themes
  const { textPrimary } = useThemeConstants();

  //Navigation
  const navigate = useNavigate();

  //Queries
  const { data: promotionalMedicines, isLoading } = usePromotions({ token });

  // Conditions
  if (isLoading) {
    return (
      <Container
        maxWidth="xl"
        sx={{ py: 8 }}
      >
        <Box
          display="flex"
          justifyContent="center"
        >
          <Typography>Loading promotions...</Typography>
        </Box>
      </Container>
    );
  }

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
              Active Promotions
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
            Special offers on medicines - Limited time deals!
          </Typography>
        </Box>
      </motion.div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
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
        <Grid
          container
          spacing={4}
        >
          {promotionalMedicines.data.data.map((drug, index) => (
            <SwiperSlide key={drug._id}>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={drug._id}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <CardPromotion drug={drug} />
                </motion.div>
              </Grid>
            </SwiperSlide>
          ))}
        </Grid>
      </Swiper>

      {/* View All Promotions Button */}
      <Box
        textAlign="center"
        mt={6}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => {
              navigate("/pharmacy/promotions");
            }}
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 600,
              textTransform: "none",
              borderColor: "primary.main",
              color: "primary.main",
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
                transform: "translateY(-2px)",
              },
            }}
          >
            View All Promotions
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
}
