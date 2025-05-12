import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Inventory } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const InventoryOverview = () => {
  const { badgeBackground, textSuccess, textWarning, backgroundElevated } =
    useThemeConstants();

  const inventoryData = [
    {
      title: "Quantity in Hand",
      value: "214",
      icon: <Inventory />,
      iconBg: badgeBackground,
      iconColor: textSuccess,
    },
    {
      title: "Will be Received",
      value: "64",
      icon: <Inventory />,
      iconBg: badgeBackground,
      iconColor: textWarning,
    },
  ];

  return (
    <Card
      sx={{
        height: "100%",
        background: badgeBackground,
        boxShadow: 8,
        ":hover": {
          boxShadow: 4,
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
                    boxShadow: 8,
                    background: backgroundElevated,
                    ":hover": {
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

export default InventoryOverview;
