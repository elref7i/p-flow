import { Box, Card, CardContent, Skeleton, Typography } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
    <Box mb={5}>
      <Typography
        variant="h5"
        borderRadius={2}
        fontWeight={600}
        gutterBottom
        sx={{ mb: 3, color: textPrimary }}
      >
        Drug Categories
      </Typography>
      {isLoading ? (
        <Box sx={{ display: "flex", gap: 2 }}>
          {[...Array(4)].map((_, idx) => (
            <Card key={idx} sx={{ width: 200, borderRadius: 1 }}>
              <Skeleton variant="rectangular" height={150} />
              <CardContent>
                <Skeleton
                  variant="text"
                  width="60%"
                  height={20}
                  sx={{ mx: "auto" }}
                />
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop
          breakpoints={{
            250: { slidesPerView: 1 },
            450: { slidesPerView: 2 },
            760: { slidesPerView: 3 },
            980: { slidesPerView: 4 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat._id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  onClick={() => {
                    if (role === "pharmacy") {
                      return navigate(`/pharmacy/categorydrugs/${cat._id}`);
                    }
                  }}
                  sx={{
                    borderRadius: 1,
                    boxShadow: "0px 0px 7px rgb(103, 161, 247)",
                    bgcolor: paperBackground,
                    mb: 2,
                  }}
                >
                  <img
                    src={cat.imageCover}
                    alt={cat.name}
                    style={{ width: "100%", height: 150, objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography align="center" fontWeight="bold">
                      {cat.name}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
}
