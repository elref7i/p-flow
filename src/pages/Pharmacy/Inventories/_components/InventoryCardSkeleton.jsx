import { Card, CardContent, Skeleton, Box, Grid } from "@mui/material";

const InventoryCardSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <Skeleton variant="rectangular" height={180} animation="wave" />
        <CardContent>
          <Skeleton variant="text" height={30} width="60%" animation="wave" />
          <Skeleton variant="text" height={20} width="40%" animation="wave" />
          <Box sx={{ mt: 2 }}>
            <Skeleton
              variant="rounded"
              height={36}
              width="50%"
              animation="wave"
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default InventoryCardSkeleton;
