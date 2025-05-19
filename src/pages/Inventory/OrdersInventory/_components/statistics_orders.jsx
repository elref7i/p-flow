import { Box, Card, Typography } from "@mui/material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { getStatValue } from "../../../../lib/utils/statistic_order";

export default function StatisticsOrders({ dataStatus, loadingStatus }) {
  //Temes
  const { chartsBackground, tableBorder, textLink, textSuccess, textWarning } =
    useThemeConstants();

  // Stats data
  const stats = [
    {
      label: "Total Orders ",
      value: getStatValue(loadingStatus, dataStatus?.totalOrders),
      color: textLink,
      dotColor: textLink,
    },
    {
      label: "Average Sales Per Order",
      value: getStatValue(
        loadingStatus,
        (dataStatus?.totalSales / dataStatus?.totalOrders)?.toFixed(2)
      ),
      color: textLink,
      dotColor: textLink,
    },
    {
      label: "Shipped Orders",
      value: getStatValue(loadingStatus, dataStatus?.orderStatuses?.shipped),
      color: textSuccess,
      dotColor: textSuccess,
    },
    {
      label: "Pending Orders",
      value: getStatValue(loadingStatus, dataStatus?.orderStatuses?.pending),
      color: textWarning,
      dotColor: textWarning,
    },
  ];

  return stats.map((stat, index) => (
    <Card
      key={index}
      sx={{
        p: 2,
        flex: "1 1 200px",
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
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Box
          sx={{
            width: 8,
            height: 8,
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
        variant="h4"
        sx={{ fontWeight: "bold", color: stat.color }}
      >
        {stat.value}
      </Typography>
    </Card>
  ));
}
