import { Box, Skeleton } from "@mui/material";

export default function WishlistSkeleton() {
  return (
    <Box sx={{ px: 3 }}>
      {/* Title and Buttons */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        mt={5}
      >
        <Skeleton variant="text" width={250} height={40} />
        <Box display="flex" gap={2}>
          <Skeleton variant="rounded" width={100} height={36} />
          <Skeleton variant="text" width={80} height={30} />
        </Box>
      </Box>

      {/* Cards */}
      <Box display="flex" flexWrap="wrap" gap={4}>
        {Array.from({ length: 6 }).map((_, idx) => (
          <Box
            key={idx}
            sx={{
              width: 300,
              p: 2,
              borderRadius: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            {/* Top: Image and Name + Balance */}
            <Box display="flex" alignItems="center" gap={2}>
              <Skeleton variant="circular" width={50} height={50} />
              <Box flex={1}>
                <Skeleton variant="text" width="80%" height={20} />
                <Skeleton variant="rounded" width={60} height={20} />
              </Box>
              <Skeleton variant="circular" width={24} height={24} />
            </Box>

            {/* Address */}
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width="70%" height={20} />
            </Box>

            {/* Phone */}
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="text" width="60%" height={20} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
