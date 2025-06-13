import { Box, Grid, Skeleton, Card, CardContent, Stack } from "@mui/material";

export default function CategoryDrugSkeleton() {
  return (
    <Box
      sx={{
        background: (theme) =>
          theme.palette.mode === "light"
            ? "linear-gradient(to bottom, #f5f7fa, #e8ecf1)"
            : "linear-gradient(to bottom, #1e1e1e, #121212)",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      {/* Skeleton for Category Info Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(to right, #e3f2fd, #ffffff)"
              : "linear-gradient(to right, #2b2b2b, #1e1e1e)",
          padding: 3,
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          mb: 5,
          flexWrap: "wrap",
        }}
      >
        {/* Category Image */}
        <Skeleton
          variant="rectangular"
          width={120}
          height={120}
          sx={{ borderRadius: 3 }}
        />

        {/* Category Info */}
        <Box sx={{ flexGrow: 1 }}>
          <Skeleton variant="text" width="50%" height={38} />
          <Skeleton variant="text" width="70%" height={24} />
        </Box>
      </Box>

      {/* Grid of Skeleton Cards */}
      <Grid container spacing={4} sx={{ px: 3, pb: 4 }}>
        {Array.from(new Array(12)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                overflow: "hidden",
                position: "relative",
                height: "100%",
              }}
            >
              <CardContent>
                <Stack spacing={1}>
                  <Skeleton variant="text" width="80%" height={28} />
                  <Skeleton variant="text" width="40%" height={20} />
                  <Skeleton variant="text" width="30%" height={18} />

                  <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                    <Skeleton variant="text" width="30%" height={24} />
                    <Skeleton variant="text" width="20%" height={20} />
                  </Stack>

                  <Skeleton variant="rounded" width="100%" height={36} />
                </Stack>

                {/* Discount Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    width: 40,
                    height: 24,
                    borderRadius: 1,
                    backgroundColor: "rgba(0,0,0,0.1)",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
