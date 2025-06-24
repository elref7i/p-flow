import { Box, Skeleton, Stack } from "@mui/material";

export default function OrdersSkeleton() {
  return (
    <Stack spacing={4} mt={3}>
      {Array.from({ length: 3 }).map((_, orderIdx) => (
        <Box
          key={orderIdx}
          sx={{
            borderRadius: 4,
            boxShadow: 3,
            p: 0,
            overflow: "hidden",
          }}
        >
          {/* Header (gradient bar + status) */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 3,
              py: 2,
            }}
          >
            <Skeleton variant="text" width={220} height={28} />
            <Skeleton
              variant="rounded"
              width={90}
              height={28}
              sx={{ borderRadius: "20px" }}
            />
          </Box>

          {/* Order Items Grid */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              p: 3,
            }}
          >
            {Array.from({ length: 6 }).map((_, itemIdx) => (
              <Box
                key={itemIdx}
                sx={{
                  flex: "1 1 180px",
                  minWidth: 160,
                  borderRadius: 3,
                  p: 2,
                  boxShadow: 1,
                }}
              >
                <Box mb={1}>
                  <Skeleton variant="circular" width={30} height={30} />
                </Box>
                <Skeleton variant="text" width="80%" height={18} />
                <Skeleton variant="text" width="60%" height={16} />
                <Skeleton variant="text" width="30%" height={16} />
              </Box>
            ))}
          </Box>

          {/* Footer - total + buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              px: 3,
              py: 2,
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <Skeleton variant="text" width={180} height={26} />
            <Box display="flex" gap={2}>
              <Skeleton variant="rounded" width={90} height={36} />
              <Skeleton variant="rounded" width={120} height={36} />
            </Box>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
