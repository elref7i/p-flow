import { Box, Typography, Avatar, Skeleton } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { useGetAllInventoriesQuery } from "../../../../lib/hooks/pharmacy.action";
import { useTypeContext } from "../../../../context/UserType.context";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function InventorySection() {
  const { token } = useTypeContext();
  const { data, isLoading } = useGetAllInventoriesQuery({ token });
  const inventories = data?.inventories || [];
  const { textPrimary } = useThemeConstants();

  return (
    <Box mb={6} sx={{ color: textPrimary }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Inventories
      </Typography>
      {isLoading ? (
        <Box sx={{ display: "flex", gap: 2 }}>
          {[...Array(5)].map((_, idx) => (
            <Box key={idx} sx={{ textAlign: "center" }}>
              <Skeleton
                variant="circular"
                width={60}
                height={60}
                sx={{ mx: "auto", mb: 1 }}
              />
              <Skeleton
                variant="text"
                width={80}
                height={20}
                sx={{ mx: "auto" }}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          loop
          slidesPerView={8}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            250: { slidesPerView: 1 },
            400: { slidesPerView: 2 },
            760: { slidesPerView: 3 },
            980: { slidesPerView: 4 },
            1280: { slidesPerView: 8 },
          }}
        >
          {inventories.map((inv) => (
            <SwiperSlide key={inv._id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Box sx={{ textAlign: "center", color: textPrimary }}>
                  <Avatar
                    src={inv.profileImage}
                    alt={inv.name}
                    sx={{ width: 60, height: 60, mx: "auto", mb: 1 }}
                  />
                  <Typography variant="body2" fontWeight="bold" noWrap>
                    {inv.name}
                  </Typography>
                </Box>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
}
