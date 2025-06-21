/* eslint-disable react/prop-types */
"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Skeleton,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function CardPromotionSkeleton() {
  const { cardBackground } = useThemeConstants();

  return (
    <Container
      maxWidth="xl"
      sx={{ py: 8 }}
    >
      <Grid
        container
        spacing={4}
      >
        {[...Array(8)].map((_, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
          >
            {/* Use animated version with staggered delays */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: 8,
                  background: cardBackground,
                }}
              >
                {/* Header Section with Animated Gradient */}
                <Box
                  sx={{
                    position: "relative",
                    height: 60,
                    overflow: "hidden",
                    background:
                      "linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 203, 243, 0.1))",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                      animation: "shimmer 2s infinite",
                    },
                  }}
                >
                  {/* Promotion Badge Skeleton */}
                  <Skeleton
                    variant="rectangular"
                    width={120}
                    height={24}
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      borderRadius: 3,
                    }}
                    animation="wave"
                  />

                  {/* Stock Badge Skeleton */}
                  <Skeleton
                    variant="rectangular"
                    width={80}
                    height={24}
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      borderRadius: 3,
                    }}
                    animation="wave"
                  />
                </Box>

                <CardContent sx={{ p: 3 }}>
                  {/* Drug Name Skeleton */}
                  <Skeleton
                    variant="text"
                    width="85%"
                    height={32}
                    sx={{
                      mb: 1,
                      borderRadius: 1,
                    }}
                    animation="wave"
                  />

                  {/* Price Section Skeleton */}
                  <Box>
                    <Stack
                      spacing={1.5}
                      py={4}
                    >
                      {/* Consumer Price Row */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Skeleton
                          variant="text"
                          width={120}
                          height={24}
                          sx={{ borderRadius: 1 }}
                          animation="wave"
                        />
                        <Skeleton
                          variant="text"
                          width={60}
                          height={24}
                          sx={{ borderRadius: 1 }}
                          animation="wave"
                        />
                      </Box>

                      {/* Pharmacy Price Row */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Skeleton
                          variant="text"
                          width={110}
                          height={24}
                          sx={{ borderRadius: 1 }}
                          animation="wave"
                        />
                        <Skeleton
                          variant="text"
                          width={55}
                          height={24}
                          sx={{ borderRadius: 1 }}
                          animation="wave"
                        />
                      </Box>
                    </Stack>
                  </Box>

                  {/* Button Skeleton */}
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={48}
                    sx={{
                      borderRadius: 3,
                      mt: 1,
                    }}
                    animation="wave"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
