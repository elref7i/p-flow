"use client";

import {
  Box,
  Typography,
  Avatar,
  Skeleton,
  Container,
  Paper,
  Chip,
} from "@mui/material";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import { useGetAllInventoriesQuery } from "../../../../lib/hooks/pharmacy.action";
import { useTypeContext } from "../../../../context/UserType.context";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { Verified, Store } from "@mui/icons-material";

export default function InventorySection() {
  const { token } = useTypeContext();
  const { data, isLoading } = useGetAllInventoriesQuery({ token });
  const inventories = data?.inventories || [];
  const { textPrimary, paperBackground } = useThemeConstants();

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        position: "relative",
      }}
    >
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
              Trusted Inventories
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
              Connect with verified pharmaceutical warehouses and suppliers
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
            {[...Array(8)].map((_, idx) => (
              <Paper
                key={idx}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  textAlign: "center",
                  minWidth: 160,
                }}
              >
                <Skeleton
                  variant="circular"
                  width={90}
                  height={90}
                  sx={{ mx: "auto", mb: 2 }}
                />
                <Skeleton
                  variant="text"
                  width={120}
                  height={24}
                  sx={{ mx: "auto", mb: 1 }}
                />
                <Skeleton
                  variant="text"
                  width={80}
                  height={20}
                  sx={{ mx: "auto" }}
                />
              </Paper>
            ))}
          </Box>
        ) : (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            loop
            slidesPerView={6}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              250: { slidesPerView: 1, spaceBetween: 15 },
              400: { slidesPerView: 2, spaceBetween: 20 },
              600: { slidesPerView: 3, spaceBetween: 20 },
              900: { slidesPerView: 4, spaceBetween: 25 },
              1200: { slidesPerView: 6, spaceBetween: 25 },
            }}
          >
            {inventories.map((inv, index) => (
              <SwiperSlide key={inv._id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      color: textPrimary,
                      borderRadius: 4,
                      bgcolor: paperBackground,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.2)",
                      minHeight: 180,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      "&:hover": {
                        boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                        transform: "translateY(-8px)",
                        "& .inventory-avatar": {
                          transform: "scale(1.1)",
                          boxShadow: "0 8px 25px rgba(33, 150, 243, 0.3)",
                        },
                        "& .verified-badge": {
                          transform: "scale(1.1)",
                        },
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 3,
                        background: "linear-gradient(90deg, #2196F3, #21CBF3)",
                      },
                    }}
                  >
                    {/* Verified Badge */}
                    <Chip
                      icon={<Verified sx={{ fontSize: 16 }} />}
                      label="Verified"
                      className="verified-badge"
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        bgcolor: "rgba(76, 175, 80, 0.1)",
                        color: "success.main",
                        fontSize: "0.7rem",
                        height: 24,
                        transition: "all 0.3s ease",
                        "& .MuiChip-icon": {
                          color: "success.main",
                        },
                      }}
                    />

                    <Box sx={{ position: "relative", mb: 2 }}>
                      <Avatar
                        src={inv.profileImage}
                        alt={inv.name}
                        className="inventory-avatar"
                        sx={{
                          width: 80,
                          height: 80,
                          mx: "auto",
                          border: "4px solid",
                          borderColor: "primary.main",
                          transition: "all 0.4s ease",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                        }}
                      />

                      {/* Store Icon Background */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -5,
                          right: "50%",
                          transform: "translateX(50%)",
                          bgcolor: "primary.main",
                          borderRadius: "50%",
                          width: 28,
                          height: 28,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "3px solid white",
                        }}
                      >
                        <Store sx={{ fontSize: 14, color: "white" }} />
                      </Box>
                    </Box>

                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        fontSize: "1rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        mb: 0.5,
                        px: 1,
                      }}
                    >
                      {inv.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.8rem",
                        opacity: 0.8,
                      }}
                    >
                      Pharmaceutical Supplier
                    </Typography>
                  </Paper>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Container>
    </Box>
  );
}
