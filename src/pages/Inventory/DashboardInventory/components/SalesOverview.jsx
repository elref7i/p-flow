"use client";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ShoppingBag,
  TrendingUp,
  AttachMoney,
  BarChart,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const SalesOverview = () => {
  const theme = useTheme();

  const salesData = [
    {
      title: "Total Sales",
      value: "786",
      icon: <ShoppingBag />,
      iconBg: theme.palette.info.light,
      iconColor: theme.palette.info.main,
    },
    {
      title: "Revenue",
      value: "17584",
      icon: <TrendingUp />,
      iconBg: theme.palette.warning.light,
      iconColor: theme.palette.warning.main,
    },
    {
      title: "Cost",
      value: "12487",
      icon: <AttachMoney />,
      iconBg: theme.palette.error.light,
      iconColor: theme.palette.error.main,
    },
    {
      title: "Profit",
      value: "5097",
      icon: <BarChart />,
      iconBg: theme.palette.success.light,
      iconColor: theme.palette.success.main,
    },
  ];

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography
          variant="h6"
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
                    backgroundColor: theme.palette.background.default,
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
