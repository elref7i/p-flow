import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import {
  ShoppingCart,
  Cancel,
  AttachMoney,
  AssignmentReturn,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const PurchaseOverview = () => {
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

  const purchaseData = [
    {
      title: "No of Purchase",
      value: "45",
      icon: <ShoppingCart />,
      iconBg: badgeBackground,
      iconColor: textPrimary,
    },
    {
      title: "Cancel Order",
      value: "04",
      icon: <Cancel />,
      iconBg: badgeBackground,
      iconColor: textError,
    },
    {
      title: "Cost",
      value: "786",
      icon: <AttachMoney />,
      iconBg: badgeBackground,
      iconColor: textWarning,
    },
    {
      title: "Returns",
      value: "07",
      icon: <AssignmentReturn />,
      iconBg: badgeBackground,
      iconColor: textLink,
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
