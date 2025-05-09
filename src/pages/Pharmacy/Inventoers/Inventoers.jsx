import { Box, Grid } from "@mui/material";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { useGetAllInventoriesQuery } from "../../../lib/hooks/pharmacy.action";
import EnhancedInventoryCard from "../../../components/InventoryComponents/CardInventory/CardInventory";
import { useTypeContext } from "../../../context/UserType.context";
import { useQueryParams } from "../../../context/params.context";
import LoadingSpinner from "../../../components/Common/Loading/LoadingSpinner";

export default function Inventoers() {
  //Context
  const { token } = useTypeContext();

  const { debouncedParams } = useQueryParams();

  // Quieries
  const { data: payload, isLoading } = useGetAllInventoriesQuery({
    token,
    params: debouncedParams,
  });

  //Loading State
  if (isLoading) return <LoadingSpinner />;

  console.log(payload);

  return (
    <Box sx={{ p: 3 }}>
      <Box mb={3}>
        <SearchBar />
      </Box>
      <Grid container spacing={3}>
        {payload.inventories.map((inventory) => (
          <EnhancedInventoryCard key={inventory._id} inventory={inventory} />
        ))}
      </Grid>
    </Box>
  );
}
