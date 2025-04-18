// Loading Skeleton Component

import { Box, Grid, Skeleton } from "@mui/material";

export default function LoadingProfileSkeleton() {
  return (
    <>
      {/* Instagram-like loading skeleton */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Skeleton
          variant="circular"
          width={86}
          height={86}
          sx={{ mr: 3 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Skeleton
            variant="text"
            width="40%"
            height={24}
            sx={{ mb: 1 }}
          />
          <Skeleton
            variant="text"
            width="60%"
            height={20}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-around", mb: 3 }}>
        <Skeleton
          variant="text"
          width={80}
          height={40}
        />
      </Box>

      <Skeleton
        variant="rectangular"
        height={40}
        sx={{ mb: 2, borderRadius: 1 }}
      />

      <Grid
        container
        spacing={1}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={item}
          >
            <Skeleton
              variant="rectangular"
              height={120}
              sx={{ borderRadius: 1 }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
