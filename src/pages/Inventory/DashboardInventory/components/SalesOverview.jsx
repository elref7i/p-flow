import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import {
  ShoppingBag,
  TrendingUp,
  AttachMoney,
  BarChart,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const SalesOverview = () => {
  const {
    backgroundElevated,
    cardBackground,
    badgeBackground,
    textLink,
    textSuccess,
    textWarning,
    textError,
    border,
    borderHover,
    transitionDurationEnteringScreen,
  } = useThemeConstants();

  const salesData = [
    {
      title: "Total Sales",
      value: "786",
      icon: <ShoppingBag />,
      iconBg: badgeBackground,
      iconColor: textLink,
    },
    {
      title: "Revenue",
      value: "17584",
      icon: <TrendingUp />,
      iconBg: badgeBackground,
      iconColor: textWarning,
    },
    {
      title: "Cost",
      value: "12487",
      icon: <AttachMoney />,
      iconBg: badgeBackground,
      iconColor: textError,
    },
    {
      title: "Profit",
      value: "5097",
      icon: <BarChart />,
      iconBg: badgeBackground,
      iconColor: textSuccess,
    },
  ];

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
          Sales Overview
        </Typography>
        <Grid
          container
          spacing={2}
        >
          {salesData.map((item, index) => (
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
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                      mr: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                    >
                      {item.value}
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

export default SalesOverview;
