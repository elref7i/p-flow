/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import CardDashboardSkeleton from "../../../../components/Common/Loading/card_dashboard_skeleton";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MedicationIcon from "@mui/icons-material/Medication";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
const InventoryOverview = ({ isLoading, dataInfo }) => {
  const {
    badgeBackground,
    textSuccess,
    textWarning,
    transitionDurationEnteringScreen,
    borderHover,
    border,
    textLink,
    gradientChart,
  } = useThemeConstants();

  if (isLoading) return <CardDashboardSkeleton />;

  const { totalSales, totalDrugs, orderStatuses, totalOrders } = dataInfo;
  const avgSalesPerDrug = totalSales / totalDrugs;
  const pendingOrdersPercentage = (orderStatuses.pending / totalOrders) * 100;
  const shippedOrdersPercentage = (orderStatuses.shipped / totalOrders) * 100;

  const inventoryData = [
    {
      title: "Total Drugs",
      value: totalDrugs,
      icon: <MedicalInformationIcon />,
      iconBg: badgeBackground,
      iconColor: textSuccess,
    },
    {
      title: "Average Sales Drug",
      value: avgSalesPerDrug.toFixed(2),
      icon: <MedicationIcon />,
      iconBg: badgeBackground,
      iconColor: textWarning,
    },
    {
      title: "Pending Orders",
      value: pendingOrdersPercentage.toFixed(2) + "%",
      icon: <HourglassBottomIcon />,
      iconBg: badgeBackground,
      iconColor: textWarning,
    },
    {
      title: "Shipped Orders",
      value: shippedOrdersPercentage.toFixed(2) + "%",
      icon: <LocalShippingIcon />,
      iconBg: badgeBackground,
      iconColor: textLink,
    },
  ];

  return (
    <Card
      sx={{
        height: "100%",
        background: badgeBackground,
        boxShadow: 6,
        border: `2px solid ${border}`,
        transition: transitionDurationEnteringScreen,
        ":hover": {
          borderColor: borderHover,
          boxShadow: 7,
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
                    background: gradientChart,
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
