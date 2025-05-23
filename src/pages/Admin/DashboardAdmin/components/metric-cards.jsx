import { Box, Typography, Paper, Grid2, IconButton } from "@mui/material";
import { KeyboardArrowRight as ArrowRightIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { useAdminStatstics } from "../../../../lib/hooks/useAdminAction";
import LoadingSpinner from "../../../../components/Common/Loading/LoadingSpinner";

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

const PercentageChange = styled(Typography)(() => ({
  fontSize: "0.8rem",
  display: "flex",
  alignItems: "center",
}));

export default function MetricCards() {
  const { statsSecondaryBackground } = useThemeConstants();
  const { data, isLoading } = useAdminStatstics();
  console.log("Raw data:", data);
  const statistics = data?.data ?? {};
  console.log("Total users:", statistics.totalUsers);

  const metrics = [
    {
      title: "Balance",
      value: "$321,010.18",
      change: "↑ 26% vs last month",
      variant: "positive",
      color: "primary.main",
    },
    {
      title: "Income",
      value: "$78,301.15",
      change: "↑ 12% vs last month",
      variant: "positive",
      color: "info.main",
    },
    {
      title: "Expense",
      value: "$25,502.23",
      change: "↓ 8% vs last month",
      variant: "negative",
      color: "error.main",
    },
    {
      title: "Inventory Value",
      value: "$779.72",
      change: "↑ 8% vs last month",
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
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: metric.color,
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "0.75rem",
                    }}
                  >
                    $
                  </Box>
                  {metric.title}
                </Box>
              </Typography>
              <IconButton size="small">
                <ArrowRightIcon fontSize="small" />
              </IconButton>
            </Box>
            <MetricValue>{metric.value}</MetricValue>
            <PercentageChange
              sx={{
                color:
                  metric.variant === "positive" ? "success.main" : "error.main",
              }}
            >
              {metric.change}
            </PercentageChange>
          </MetricCard>
        </Grid2>
      ))}
    </Grid2>
  );
}
