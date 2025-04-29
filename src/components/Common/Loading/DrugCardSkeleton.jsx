/* eslint-disable react/prop-types */
"use client";

import { Box, Skeleton, useTheme, alpha, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function DrugCardSkeleton({ count }) {
  // Theme
  const theme = useTheme();
  const { cardBackground, cardDetailsBackground, shadow2, typography } =
    useThemeConstants();

  return (
    <Grid
      container
      spacing={4}
      sx={{ px: 3, py: 2 }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Grid
          item
          xs={12} // على الشاشات الصغيرة يأخذ الكل الصف
          sm={6} // على الشاشات المتوسطة يأخذ نصف الصف (2 كروت)
          md={4} // على الشاشات الكبيرة يأخذ ثلث الصف (3 كروت)
          key={`skeleton-${index}`}
        >
          <Box
            component={motion.div}
            whileHover={{ y: -3, boxShadow: shadow2 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              p: 2,
              borderRadius: 2,
              background: cardBackground,
              boxShadow: shadow2,
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              position: "relative",
              fontSize: typography?.h1?.fontSize,
              fontWeight: typography?.h1?.fontWeight,
              lineHeight: typography?.h1?.lineHeight,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* باقي محتوى الكارد كما هو */}
            {/* Discount Badge Skeleton */}
            <Box sx={{ position: "absolute", top: 0, right: 0, p: 1 }}>
              <Skeleton
                variant="rectangular"
                width={45}
                height={24}
                sx={{ borderRadius: 1 }}
              />
            </Box>

            {/* Drug Name */}
            <Box sx={{ mb: 2, mt: 0.5 }}>
              <Skeleton
                variant="text"
                width="80%"
                height={28}
                animation="wave"
                sx={{
                  borderRadius: 0.5,
                  maxWidth: "250px",
                }}
              />
            </Box>

            {/* Inventory Information */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                pb: 1.5,
              }}
            >
              <Skeleton
                variant="circular"
                width={24}
                height={24}
                animation="wave"
                sx={{
                  mr: 1,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                }}
              />
              <Skeleton
                variant="text"
                width={120}
                height={20}
                animation="wave"
                sx={{
                  maxWidth: "200px",
                }}
              />
            </Box>

            {/* Details Background */}
            <Box
              sx={{
                background: cardDetailsBackground,
                mt: "auto",
              }}
            >
              {/* Distance Indicator */}
              <Skeleton
                variant="text"
                width={80}
                height={20}
                animation="wave"
                sx={{ mb: 1 }}
              />

              {/* Price and Actions */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Skeleton
                    variant="text"
                    width={60}
                    height={24}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    width={50}
                    height={16}
                    animation="wave"
                    sx={{ mt: -0.5 }}
                  />
                </Box>
                <Skeleton
                  variant="rectangular"
                  width={120}
                  height={36}
                  animation="wave"
                  sx={{
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
