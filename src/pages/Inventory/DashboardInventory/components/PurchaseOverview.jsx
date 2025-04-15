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
  ShoppingCart,
  Cancel,
  AttachMoney,
  AssignmentReturn,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const PurchaseOverview = () => {
  const theme = useTheme();

  const purchaseData = [
    {
      title: "No of Purchase",
      value: "45",
      icon: <ShoppingCart />,
      iconBg: theme.palette.secondary.light,
      iconColor: theme.palette.secondary.main,
    },
    {
      title: "Cancel Order",
      value: "04",
      icon: <Cancel />,
      iconBg: theme.palette.error.light,
      iconColor: theme.palette.error.main,
    },
    {
      title: "Cost",
      value: "786",
      icon: <AttachMoney />,
      iconBg: theme.palette.warning.light,
      iconColor: theme.palette.warning.main,
    },
    {
      title: "Returns",
      value: "07",
      icon: <AssignmentReturn />,
      iconBg: theme.palette.info.light,
      iconColor: theme.palette.info.main,
    },
  ];

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Purchase Overview
        </Typography>
        <Grid
          container
          spacing={2}
        >
          {purchaseData.map((item, index) => (
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

export default PurchaseOverview;
