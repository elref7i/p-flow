"use client";

import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Skeleton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

const CardDashboardSkeleton = () => {
  // Themes
  const {
    backgroundElevated,
    cardBackground,
    badgeBackground,
    border,
    borderHover,
    transitionDurationEnteringScreen,
  } = useThemeConstants();

  // Create an array of 4 items for the skeleton
  const skeletonItems = Array(4).fill(null);

  return (
    <Card
      sx={{
        height: "100%",
        background: cardBackground,
        boxShadow: 2,
        border: `2px solid ${border}`,
        transition: transitionDurationEnteringScreen,
        ":hover": {
          borderColor: borderHover,
          boxShadow: 1,
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          sx={{ mb: 2 }}
        >
          <Skeleton width="60%" />
        </Typography>
        <Grid
          container
          spacing={2}
        >
          {skeletonItems.map((_, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 2,
                    background: backgroundElevated,
                    boxShadow: 7,
                    "&:hover": {
                      boxShadow: 8,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      width: 48,
                      height: 48,
                      backgroundColor: badgeBackground,
                      mr: 2,
                    }}
                  >
                    <Skeleton
                      variant="circular"
                      width={24}
                      height={24}
                    />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      <Skeleton width="80%" />
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                    >
                      <Skeleton width="50%" />
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardDashboardSkeleton;
