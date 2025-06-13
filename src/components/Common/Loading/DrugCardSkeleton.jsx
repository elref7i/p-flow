/* eslint-disable react/prop-types */

import { Box, Skeleton, useTheme, alpha, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

export default function DrugCardSkeleton({ count }) {
  // Theme
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={4}
      sx={{ py: 2 }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={`skeleton-${index}`}
        >
          <Paper
            component={motion.div}
            whileHover={{ y: -5, boxShadow: theme.shadows[10] }}
            transition={{ type: "spring", stiffness: 300 }}
            elevation={3}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              position: "relative",
              transition: "all 0.3s ease",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            {/* Discount Badge Skeleton */}
            <Box sx={{ position: "absolute", top: 12, right: 12, zIndex: 2 }}>
              <Skeleton
                variant="rectangular"
                width={45}
                height={24}
                sx={{ borderRadius: 1 }}
              />
            </Box>

            {/* Header Section */}
            <Box
              sx={{
                p: 2.5,
                background: alpha(theme.palette.primary.main, 0.05),
                borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              }}
            >
              {/* Drug Name */}
              <Skeleton
                variant="text"
                width="80%"
                height={28}
                animation="wave"
                sx={{
                  borderRadius: 0.5,
                  mb: 1,
                }}
              />

              {/* Inventory Information */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <Skeleton
                  variant="circular"
                  width={28}
                  height={28}
                  animation="wave"
                  sx={{
                    mr: 1,
                    border: `2px solid ${alpha(
                      theme.palette.primary.main,
                      0.3
                    )}`,
                  }}
                />
                <Skeleton
                  variant="text"
                  width={120}
                  height={20}
                  animation="wave"
                />
              </Box>

              {/* Distance Indicator */}
              <Box sx={{ mt: 1.5 }}>
                <Skeleton
                  variant="text"
                  width={80}
                  height={20}
                  animation="wave"
                />
              </Box>
            </Box>

            {/* Price Section */}
            <Box
              sx={{
                p: 2.5,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Price Information */}
              <Box>
                {/* Consumer Price */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1.5,
                  }}
                >
                  <Skeleton
                    variant="text"
                    width={90}
                    height={20}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    width={60}
                    height={24}
                    animation="wave"
                  />
                </Box>

                {/* Pharmacy Price */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Skeleton
                    variant="text"
                    width={90}
                    height={20}
                    animation="wave"
                  />
                  <Skeleton
                    variant="text"
                    width={60}
                    height={24}
                    animation="wave"
                  />
                </Box>
              </Box>

              {/* Add to Cart Button */}
              <Box sx={{ mt: 3 }}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={40}
                  animation="wave"
                  sx={{
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
