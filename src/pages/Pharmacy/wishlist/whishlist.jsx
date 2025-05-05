import { Grid2 } from "@mui/material";
import CardWhishlist from "../../../components/CardWhishlist/CardWhishlist";

export default function Whishlist() {
  return (
    <Grid2
      container
      spacing={2}
      sx={{ pt: "20px" }}
    >
      <Grid2
        item
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <CardWhishlist />
      </Grid2>
      <Grid2
        item
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <CardWhishlist />
      </Grid2>
      <Grid2
        item
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <CardWhishlist />
      </Grid2>
      <Grid2
        item
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <CardWhishlist />
      </Grid2>
    </Grid2>
  );
}
