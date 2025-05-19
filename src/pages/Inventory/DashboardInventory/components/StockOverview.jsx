/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import CardDashboardSkeleton from "../../../../components/Common/Loading/card_dashboard_skeleton";

const StockOverview = ({ isLoading, dataInfo }) => {
  //Themes
  const { badgeBackground, gradientChart } = useThemeConstants();

  if (isLoading) return <CardDashboardSkeleton />;
  const { lowStockDrugs } = dataInfo;
  console.log(dataInfo);

  const stockData = [
    { title: "Low Stock Items", value: lowStockDrugs },
    { title: "Item Group", value: "20" },
    { title: "No of Items", value: "104" },
  ];

  return (
    <Card
      sx={{
        minHeight: "100%",
        background: badgeBackground,
        boxShadow: 7,
        ":hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          sx={{ mb: 2 }}
        >
          Stock Overview
        </Typography>
        <Grid
          container
          spacing={2}
        >
          {stockData.map((item, index) => (
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
                    justifyContent: "space-between",
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 8,
                    background: gradientChart,
                    ":hover": {
                      boxShadow: 7,
                    },
                  }}
                >
                  <Typography variant="body1">{item.title}</Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StockOverview;
