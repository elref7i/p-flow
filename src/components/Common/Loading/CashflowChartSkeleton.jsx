import { Box, Typography, Skeleton, Stack, Card } from "@mui/material";

const CashflowChartSkeleton = () => {
  return (
    <Card sx={{ p: 2, borderRadius: 3 }}>
      {/* Title and Filter */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold">
          Cashflow
        </Typography>
        <Skeleton variant="rounded" width={120} height={32} />
      </Stack>

      {/* Chart Bars */}
      <Box
        sx={{
          mt: 3,
          px: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          height: 220,
        }}
      >
        {/* Simulated Bars (Income + Expense for each month) */}
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={0.5}
          >
            <Skeleton
              variant="rounded"
              width={14}
              height={Math.random() * 60 + 60}
            />
            <Skeleton
              variant="rounded"
              width={14}
              height={Math.random() * 40 + 40}
              sx={{ bgcolor: "grey.400" }}
            />
          </Box>
        ))}
      </Box>

      {/* Legend */}
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Skeleton
            variant="circular"
            width={12}
            height={12}
            sx={{ bgcolor: "blue" }}
          />
          <Skeleton variant="text" width={50} height={20} />
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Skeleton
            variant="circular"
            width={12}
            height={12}
            sx={{ bgcolor: "grey.600" }}
          />
          <Skeleton variant="text" width={60} height={20} />
        </Box>
      </Stack>
    </Card>
  );
};

export default CashflowChartSkeleton;
