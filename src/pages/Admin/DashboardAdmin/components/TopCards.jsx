import { Box, Typography, Paper, Grid2, Grid, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { useAdminStatstics } from "../../../../lib/hooks/useAdminAction";
import { formatNumber } from "../../../../lib/utils/formateNumber";

const MetricCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
}));

const MetricValue = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "1.8rem",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(0.5),
}));

export default function TopCards() {
  const { statsSecondaryBackground } = useThemeConstants();
  const { data: statistics, isLoading } = useAdminStatstics();
  const totalPrices = statistics?.totalPrices;

  if (isLoading)
    return (
      <Grid container spacing={3}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                height: 100,
                background: "linear-gradient(to right, #f9fafb, #ffffff)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Skeleton width="60%" height={20} />
              <Skeleton width="50%" height={30} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    );

  const metrics = [
    {
      title: "Total Inventories",
      value: statistics?.totalInventories,
      variant: "positive",
      color: "info.main",
    },
    {
      title: "Total Pharmacies",
      value: statistics?.totalPharmacies,
      variant: "negative",
      color: "error.main",
    },
    {
      title: "Total Orders",
      value: statistics?.totalOrders,
      variant: "positive",
      color: "primary.main",
    },
    {
      title: "Total Prices",
      value: formatNumber(totalPrices),
      variant: "positive",
      color: "success.main",
    },
  ];

  return (
    <Grid2 container spacing={1} sx={{ mb: 3, p: 1 }}>
      {metrics.map((metric, index) => (
        <Grid2 item size={{ xs: 12, md: 6, lg: 3 }} key={index}>
          <MetricCard
            sx={{
              bgcolor: statsSecondaryBackground,
              boxShadow: 5,
              "&:hover": {
                boxShadow: 8,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                <Box
                  component="span"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  {metric.title}
                </Box>
              </Typography>
            </Box>
            <MetricValue>{metric.value}</MetricValue>
          </MetricCard>
        </Grid2>
      ))}
    </Grid2>
  );
}
