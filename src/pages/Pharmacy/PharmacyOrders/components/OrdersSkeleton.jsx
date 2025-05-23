import { Box, Skeleton, Stack } from "@mui/material";

export default function OrdersSkeleton() {
  return (
    <Stack spacing={4}>
      {Array.from({ length: 2 }).map((_, orderIdx) => (
        <Box
          key={orderIdx}
          mt={5}
          sx={{
            borderRadius: 3,
            p: 3,
            boxShadow: 3,
            color: "white",
            mt: 5,
          }}
        >
          {/* Order Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Skeleton variant="text" width={200} height={30} />
            <Skeleton
              variant="rounded"
              width={80}
              height={30}
              sx={{ borderRadius: "15px" }}
            />
          </Box>

          {/* Order Items */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mb: 2,
            }}
          >
            {Array.from({ length: 4 }).map((_, itemIdx) => (
              <Box
                key={itemIdx}
                sx={{
                  width: { xs: "100%", sm: "48%", md: "23%" },
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Skeleton variant="text" width="80%" height={20} />
                <Skeleton variant="text" width="60%" height={20} />
                <Skeleton variant="text" width="40%" height={20} />
              </Box>
            ))}
          </Box>

          {/* Total & Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Skeleton variant="text" width={150} height={25} />

            <Box sx={{ display: "flex", gap: 2 }}>
              <Skeleton variant="rounded" width={80} height={35} />
              <Skeleton variant="rounded" width={120} height={35} />
            </Box>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
