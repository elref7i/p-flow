import { Card, CardContent, Grid, Skeleton } from "@mui/material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function CategoriesSkeleton() {
  const { cardBackground } = useThemeConstants();
  return (
    <Grid
      container
      spacing={4}
    >
      {[...Array(8)].map((_, idx) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={idx}
        >
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 2,
              background: cardBackground,
              overflow: "hidden",
            }}
          >
            <Skeleton
              variant="rectangular"
              animation="wave"
              height={220}
              sx={{ width: "100%" }}
            />
            <CardContent sx={{ p: 3, textAlign: "center" }}>
              <Skeleton
                variant="text"
                animation="wave"
                width="60%"
                height={28}
                sx={{ mx: "auto", mb: 1 }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="40%"
                height={20}
                sx={{ mx: "auto", mb: 2 }}
              />
              <Skeleton
                variant="rectangular"
                width={40}
                height={4}
                sx={{ mx: "auto", borderRadius: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
