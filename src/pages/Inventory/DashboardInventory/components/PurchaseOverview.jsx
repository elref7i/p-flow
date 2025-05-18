/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import CardDashboardSkeleton from "../../../../components/Common/Loading/card_dashboard_skeleton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
const PurchaseOverview = ({ dataInfo, isLoading }) => {
  const {
    backgroundElevated,
    cardBackground,
    badgeBackground,
    textLink,
    textWarning,
    textError,
    border,
    borderHover,
    transitionDurationEnteringScreen,

    textPrimary,
  } = useThemeConstants();

  if (isLoading) return <CardDashboardSkeleton />;
  const { totalOrders, totalSales, orderStatuses } = dataInfo;
  const avgSalesPerOrder = totalSales / totalOrders;
  const purchaseData = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: <ShoppingCart />,
      iconBg: badgeBackground,
      iconColor: textPrimary,
    },
    {
      title: "Average Sales Order",
      value: avgSalesPerOrder.toFixed(2),
      icon: <AlignHorizontalLeftIcon />,
      iconBg: badgeBackground,
      iconColor: textLink,
    },
    {
      title: "Pending Order",
      value: orderStatuses.pending,
      icon: <AccessTimeIcon />,
      iconBg: badgeBackground,
      iconColor: textError,
    },
    {
      title: "Shipped",
      value: orderStatuses.shipped,
      icon: <LocalShippingIcon />,
      iconBg: badgeBackground,
      iconColor: textWarning,
    },
  ];

  return (
    <Card
      sx={{
        height: "100%",
        background: cardBackground,
        boxShadow: 1,
        border: `2px solid ${borderHover}`,
        transition: transitionDurationEnteringScreen,
        ":hover": {
          borderColor: border,
          boxShadow: 2,
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          sx={{ mb: 2 }}
        >
          Orders Overview
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
                    background: backgroundElevated,
                    boxShadow: 8,
                    "&:hover": {
                      boxShadow: 7,
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

export default PurchaseOverview;
