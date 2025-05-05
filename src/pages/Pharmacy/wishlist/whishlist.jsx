import { Grid2 } from "@mui/material";
import CardWhishlist from "../../../components/CardWhishlist/CardWhishlist";

export default function Whishlist() {
  return (
    <Grid2
      container
      spacing={2}
      sx={{ pt: "20px" }}
    >
      <CardWhishlist />
      <CardWhishlist />
      <CardWhishlist />
    </Grid2>
  );
}
