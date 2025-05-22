/* eslint-disable react/prop-types */
import { Box, Card, Typography, Grid } from "@mui/material";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import StatisticsOrdersSkeleton from "./common/status_skeleton";

export default function StatisticsOrders({ dataStatus, loadingStatus }) {
  //Temes
  const {
    chartsBackground,
    tableBorder,
    textError,
    textLink,
    textSuccess,
    textWarning,
  } = useThemeConstants();

  if (loadingStatus) return <StatisticsOrdersSkeleton />;

  // Stats data
  const stats = [
    {
      label: "Total Orders ",
      value: dataStatus?.totalOrders,
      color: textLink,
      dotColor: textLink,
    },
    {
      label: "Pending Orders",
      value: dataStatus?.orderStatuses?.pending,
      color: textWarning,
      dotColor: textWarning,
    },
    {
      label: "Shipped Orders",
      value: dataStatus?.orderStatuses?.shipped,
      color: textSuccess,
      dotColor: textSuccess,
    },
    {
      label: "delivered Orders ",
      value: dataStatus.orderStatuses?.delivered,
      color: textSuccess,
      dotColor: textSuccess,
    },
    {
      label: "Canceld Orders",
      value: dataStatus?.orderStatuses?.cancelled,
      color: textError,
      dotColor: textError,
    },
    {
      label: "rejected Orders",
      value: dataStatus?.orderStatuses?.rejected,
      color: textError,
      dotColor: textError,
    },
  ];

  return (
    <Grid
      container
      spacing={2}
      mb={2}
    >
      {stats.map((stat, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={4}
          lg={2}
        >
          <Card
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: 3,
              boxShadow: 7,
              border: tableBorder,
              background: chartsBackground,
              "&:hover": {
                boxShadow: 8,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Box
                sx={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  bgcolor: stat.dotColor,
                  mr: 1,
                }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {stat.label}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: stat.color }}
            >
              {stat.value}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
