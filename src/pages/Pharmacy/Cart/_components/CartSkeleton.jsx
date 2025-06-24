import { Box, Skeleton, Stack, Grid } from "@mui/material";

export default function CartSkeleton() {
  return (
    <Grid container spacing={3} mt={2}>
      {/* Left Section */}
      <Grid item xs={12} md={9}>
        {Array.from({ length: 2 }).map((_, userIndex) => (
          <Box
            key={userIndex}
            sx={{
              borderRadius: 3,
              p: 3,
              boxShadow: 3,
              mb: 3,
            }}
          >
            {/* Customer name */}
            <Skeleton variant="text" width={180} height={28} sx={{ mb: 2 }} />

            {/* Cart Items */}
            <Stack spacing={2}>
              {Array.from({ length: 3 }).map((_, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <Skeleton variant="rounded" width={55} height={55} />
                  <Box flex={1}>
                    <Skeleton variant="text" width="70%" height={20} />
                    <Skeleton variant="text" width="40%" height={18} />
                  </Box>
                  <Skeleton variant="circular" width={30} height={30} />
                  <Skeleton variant="text" width={20} height={18} />
                  <Skeleton variant="circular" width={30} height={30} />
                  <Skeleton variant="circular" width={25} height={25} />
                </Box>
              ))}
            </Stack>

            {/* Total and Buttons */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={3}
              flexWrap="wrap"
              gap={2}
            >
              <Skeleton variant="text" width={200} height={28} />
              <Box display="flex" gap={2}>
                <Skeleton variant="rounded" width={90} height={36} />
                <Skeleton variant="rounded" width={110} height={36} />
              </Box>
            </Box>
          </Box>
        ))}

        {/* Clear Cart Button */}
        <Box textAlign="center" mt={1}>
          <Skeleton variant="rounded" width={160} height={40} />
        </Box>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            borderRadius: 3,
            p: 3,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box>
            <Skeleton variant="text" width={130} height={30} />
            <Skeleton variant="text" width="80%" height={20} sx={{ mt: 1 }} />
            <Skeleton variant="text" width="60%" height={20} sx={{ mt: 1 }} />
          </Box>

          <Skeleton variant="rounded" width="100%" height={48} sx={{ mt: 4 }} />
        </Box>
      </Grid>
    </Grid>
  );
}
