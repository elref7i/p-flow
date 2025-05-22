import { Card, CardContent, Skeleton, Box, Grid, Stack } from "@mui/material";

const InventoryCardSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ borderRadius: 3, boxShadow: 3, mt: 5 }}>
        <Box display="flex" justifyContent="center" pt={2}>
          <Skeleton variant="circular" width={64} height={64} />
        </Box>
        <CardContent>
          <Stack spacing={1.2}>
            {/* Name */}
            <Skeleton
              variant="text"
              height={30}
              width="50%"
              sx={{ mx: "auto" }}
            />

            {/* Location */}
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width="70%" height={20} />
            </Box>

            {/* Phone */}
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width="60%" height={20} />
            </Box>

            {/* Distance */}
            <Box display="flex" alignItems="center" gap={1}>
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width="30%" height={20} />
            </Box>

            {/* Progress bar placeholder */}
            <Skeleton variant="rectangular" width="100%" height={10} />

            {/* Minimum Order */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={1}
            >
              <Skeleton variant="text" width="40%" height={20} />
              <Skeleton variant="text" width={60} height={20} />
            </Box>

            {/* View Profile Button */}
            <Skeleton variant="rounded" width="100%" height={36} />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default InventoryCardSkeleton;
