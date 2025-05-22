// Loading Skeleton Component

import { Box, Skeleton } from "@mui/material";

export default function HeaderProfileSkeleton() {
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

      {/* Text */}
      <Box sx={{ display: "flex", justifyContent: "space-around", mb: 3 }}>
        <Skeleton
          variant="text"
          width={80}
          height={40}
        />
      </Box>

      {/* rectangular */}
      <Skeleton
        variant="rectangular"
        height={40}
        sx={{ mb: 2, borderRadius: 1 }}
      />
    </>
  );
}
