import { Box, Typography, Skeleton, Stack, Card } from "@mui/material";

const CashflowChartSkeleton = () => {
  return (
    <Card
      sx={{
        mt: 3,
        p: 2,
        borderRadius: 3,
        minHeight: 360,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
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
          height: 180,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={0.5}
          >
            {/* Income Bar */}
            <Skeleton variant="rounded" width={14} height={80} />
            {/* Expense Bar */}
            <Skeleton
              variant="rounded"
              width={14}
              height={50}
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
