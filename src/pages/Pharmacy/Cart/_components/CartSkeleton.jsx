import { Box, Skeleton, Stack } from "@mui/material";

export default function CartSkeleton() {
  return (
    <Box display="flex" flexWrap="wrap" gap={4}>
      {/* Left Section - Cart Items */}
      <Box
        sx={{
          flex: 1,
          minWidth: 700,
          bgcolor: "#1c1f2e",
          borderRadius: 3,
          p: 3,
          boxShadow: 3,
          mt: 3,
        }}
      >
        {/* Customer name */}
        <Skeleton variant="text" width={200} height={30} sx={{ mb: 3 }} />

        {/* Medicines List */}
        <Stack spacing={2}>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                bgcolor: "#2b2f40",
                borderRadius: 2,
                p: 2,
              }}
            >
              <Skeleton variant="rounded" width={50} height={50} />
              <Box flex={1}>
                <Skeleton variant="text" width="80%" height={20} />
                <Skeleton variant="text" width="50%" height={20} />
              </Box>
              <Skeleton variant="circular" width={30} height={30} />
              <Skeleton variant="text" width={20} height={20} />
              <Skeleton variant="circular" width={30} height={30} />
              <Skeleton variant="circular" width={25} height={25} />
            </Box>
          ))}
        </Stack>

        {/* Total & Buttons */}
        <Box
          mt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <Skeleton variant="text" width={180} height={30} />
          <Box display="flex" gap={2}>
            <Skeleton variant="rounded" width={100} height={40} />
            <Skeleton variant="rounded" width={120} height={40} />
          </Box>
        </Box>

        {/* Clear Cart Button */}
        <Box mt={3} textAlign="center">
          <Skeleton variant="rounded" width={150} height={40} />
        </Box>
      </Box>

      {/* Right Section - Summary */}
      <Box
        sx={{
          width: 300,
          bgcolor: "#1c1f2e",
          borderRadius: 3,
          mt: 3,
          p: 3,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Skeleton variant="text" width={120} height={30} />
          <Skeleton variant="text" width={180} height={20} sx={{ mt: 1 }} />
        </Box>

        <Skeleton variant="rounded" width="100%" height={50} sx={{ mt: 4 }} />
      </Box>
    </Box>
  );
}
