import { Box, Paper, Skeleton, Stack } from "@mui/material";

export default function UserStatisticsSkeleton() {
  return (
    <Paper
      elevation={0}
      sx={{
        mt: 3,
        p: 3,
        borderRadius: 3,
        width: "100%",
        maxWidth: 400,
        minHeight: 380,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Title + Filter */}
      <Box sx={{ mb: 2 }}>
        <Skeleton variant="text" width="40%" height={28} />
        <Skeleton variant="rounded" width={110} height={30} sx={{ mt: 1 }} />
      </Box>

      {/* Circular Chart */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Skeleton variant="circular" width={130} height={130} />
      </Box>

      {/* Legend */}
      <Stack spacing={1.2} sx={{ mt: 2 }}>
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Skeleton variant="circular" width={12} height={12} />
              <Skeleton variant="text" width={100} height={20} />
            </Box>
            <Skeleton variant="text" width={20} height={20} />
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
