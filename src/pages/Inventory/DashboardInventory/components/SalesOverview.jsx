/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import CardDashboardSkeleton from "../../../../components/Common/Loading/card_dashboard_skeleton";

const SalesOverview = ({ dataInfo, isLoading }) => {
  //Themes
  const { badgeBackground, gradientChart } = useThemeConstants();

  if (isLoading) return <CardDashboardSkeleton />;

  const { totalDrugs, soldPercentage } = dataInfo;

  const soldDrugs = Math.round((soldPercentage / 100) * totalDrugs);
  const unsoldDrugs = totalDrugs - soldDrugs;
  //Varaiables
  const slalesData = [
    { title: "Sold Percentage", value: soldPercentage.toFixed(2) + "%" },
    { title: "Sold Drugs", value: soldDrugs },
    { title: "Unsold Drugs", value: unsoldDrugs },
  ];

  return (
    <Card
      sx={{
        minHeight: "100%",
        background: badgeBackground,
        boxShadow: 6,
        ":hover": {
          boxShadow: 7,
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
          {slalesData.map((item, index) => (
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
                    boxShadow: 7,
                    background: gradientChart,
                    ":hover": {
                      boxShadow: 8,
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

export default SalesOverview;
