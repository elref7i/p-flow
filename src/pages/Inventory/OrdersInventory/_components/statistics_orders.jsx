import { Box, Card, Typography } from "@mui/material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { getStatValue } from "../../../../lib/utils/statistic_order";

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

  console.log(dataStatus);

  // Stats data
  const stats = [
    {
      label: "Total Orders ",
      value: getStatValue(loadingStatus, dataStatus?.totalOrders),
      color: textLink,
      dotColor: textLink,
    },
    {
      label: "Pending Orders",
      value: getStatValue(loadingStatus, dataStatus?.orderStatuses?.pending),
      color: textWarning,
      dotColor: textWarning,
    },
    {
      label: "Shipped Orders",
      value: getStatValue(loadingStatus, dataStatus?.orderStatuses?.shipped),
      color: textSuccess,
      dotColor: textSuccess,
    },
    {
      label: "delivered Orders ",
      value: getStatValue(loadingStatus, dataStatus.orderStatuses?.delivered),
      color: textSuccess,
      dotColor: textSuccess,
    },
    {
      label: "Canceld Orders",
      value: getStatValue(loadingStatus, dataStatus?.orderStatuses?.cancelled),
      color: textError,
      dotColor: textError,
    },
    {
      label: "rejected Orders",
      value: getStatValue(loadingStatus, dataStatus?.orderStatuses?.rejected),
      color: textError,
      dotColor: textError,
    },
  ];

  return stats.map((stat, index) => (
    <Card
      key={index}
      sx={{
        p: 2,
        width: "165px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "wrap",
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
  ));
}
