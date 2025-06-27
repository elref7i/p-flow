import { Box, Grid, Skeleton, Card, CardContent, Stack } from "@mui/material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function CategoryDrugSkeleton() {
  const { backgroundElevated, cardBackground } = useThemeConstants();
  return (
    <Box
      sx={{
        background: backgroundElevated,
        minHeight: "100vh",
        padding: 2,
      }}
    >
      {/* Header Skeleton */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          background: cardBackground,
          padding: 3,
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          mb: 5,
          flexWrap: "wrap",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={100}
          height={100}
          sx={{ borderRadius: 2 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Skeleton
            variant="text"
            width="40%"
            height={34}
          />
          <Skeleton
            variant="text"
            width="60%"
            height={20}
            sx={{ mt: 1 }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton
            variant="rectangular"
            width={80}
            height={32}
            sx={{ borderRadius: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width={80}
            height={32}
            sx={{ borderRadius: 2 }}
          />
        </Box>
      </Box>

      {/* Drug Cards Skeleton */}
      <Grid
        container
        spacing={4}
        sx={{ px: 3, pb: 4 }}
      >
        {Array.from({ length: 15 }).map((_, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                height: "100%",
                backgroundColor: cardBackground,
              }}
            >
              <CardContent>
                <Stack spacing={1}>
                  <Skeleton
                    variant="text"
                    width="85%"
                    height={24}
                  />
                  <Skeleton
                    variant="text"
                    width="50%"
                    height={20}
                  />
                  <Skeleton
                    variant="text"
                    width="40%"
                    height={18}
                  />

                  <Box>
                    <Skeleton
                      variant="text"
                      width="40%"
                      height={18}
                    />
                    <Skeleton
                      variant="text"
                      width="30%"
                      height={18}
                    />
                  </Box>

                  <Skeleton
                    variant="rounded"
                    width="100%"
                    height={36}
                    sx={{ mt: 2, borderRadius: 2 }}
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
