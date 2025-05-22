/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import CardDashboardSkeleton from "../../../../components/Common/Loading/card_dashboard_skeleton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
const InventoryOverview = ({ isLoading, dataInfo }) => {
  const {
    badgeBackground,
    textSuccess,
    textWarning,
    transitionDurationEnteringScreen,
    borderHover,
    border,
    backgroundElevated,
    cardBackground,
  } = useThemeConstants();

  if (isLoading) return <CardDashboardSkeleton />;

  const { totalSales, totalDrugs, orderStatuses, totalOrders } = dataInfo;

  const inventoryData = [
    {
      title: "Total Drugs",
      value: totalDrugs,
      icon: <MedicalInformationIcon />,
      iconBg: badgeBackground,
      iconColor: textSuccess,
    },
    {
      title: "Total Orders",
      value: totalOrders,
      icon: <ShoppingCartCheckoutIcon />,
      iconBg: badgeBackground,
      iconColor: textWarning,
    },
    {
      title: "Total Sales",
      value: totalSales,
      icon: <AttachMoneyIcon />,
      iconBg: badgeBackground,
      iconColor: textWarning,
    },
    {
      title: "Total Delivered Orders",
      value: orderStatuses.delivered,
      icon: <LocalShippingIcon />,
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
          Inventory Overview
        </Typography>
        <Grid
          container
          spacing={2}
        >
          {inventoryData.map((item, index) => (
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

export default InventoryOverview;
