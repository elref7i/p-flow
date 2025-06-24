/* eslint-disable react/prop-types */
import { Box, Stack, Skeleton } from "@mui/material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function NotificationSkeleton({ count = 3 }) {
  // Themes
  const { cardHoverBackground } = useThemeConstants();

  // Create array for multiple skeleton items
  const skeletonItems = Array.from({ length: count }, (_, index) => index);

  return (
    <>
      {skeletonItems.map((_, index) => (
        <Stack
          key={index}
          py={2}
          px={2}
          direction="row"
          gap={2}
          mb={1}
          alignItems="flex-start"
          sx={{
            boxShadow: 1,
            background: "transparent",
            transition: "all 0.2s ease-in-out",
            ":hover": {
              background: cardHoverBackground,
              boxShadow: 2,
              transform: "translateY(-1px)",
            },
          }}
        >
          {/* Avatar Skeleton */}
          <Skeleton
            variant="circular"
            width={60}
            height={60}
            sx={{
              flexShrink: 0,
            }}
          />

          {/* Content Skeleton */}
          <Box
            flex={1}
            minWidth={0}
          >
            {/* Title and Chip Row */}
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              mb={0.5}
              flexWrap="wrap"
            >
              {/* Title Skeleton */}
              <Skeleton
                variant="text"
                width="60%"
                height={24}
                sx={{ mb: 0.5 }}
              />
              {/* Chip Skeleton */}
              <Skeleton
                variant="rounded"
                width={50}
                height={20}
                sx={{ borderRadius: 3 }}
              />
            </Stack>

            {/* Message Body Skeleton - Two lines */}
            <Box mb={1}>
              <Skeleton
                variant="text"
                width="90%"
                height={20}
                sx={{ mb: 0.3 }}
              />
              <Skeleton
                variant="text"
                width="70%"
                height={20}
              />
            </Box>

            {/* Time Row Skeleton */}
            <Stack
              direction="row"
              gap={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                gap={0.5}
                alignItems="center"
              >
                {/* Time Icon Skeleton */}
                <Skeleton
                  variant="circular"
                  width={16}
                  height={16}
                />
                {/* Time Text Skeleton */}
                <Skeleton
                  variant="text"
                  width={60}
                  height={16}
                />
              </Stack>
            </Stack>
          </Box>

          {/* Settings Button Skeleton */}
          <Skeleton
            variant="circular"
            width={24}
            height={24}
            sx={{ flexShrink: 0 }}
          />
        </Stack>
      ))}
    </>
  );
}
