import { Box, Grid } from "@mui/material";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { useTypeContext } from "../../../context/UserType.context";
import { useQueryParams } from "../../../context/params.context";
import { Helmet } from "react-helmet";
import EnhancedInventoryCard from "../../../components/InventoryComponents/CardInventory/CardInventory";
import { useGetAllInventoriesQuery } from "../../../lib/hooks/use-pharmacy";
import EmptyPage from "../../../components/Common/empty-page";
import InventoriesSkeleton from "../../../components/Common/Loading/inventories-skeleton";

export default function Inventories() {
  //Context
  const { token } = useTypeContext();

  const { debouncedParams } = useQueryParams();

  // Quieries
  const { data: payload, isLoading } = useGetAllInventoriesQuery({
    token,
    params: debouncedParams,
  });

  //Loading State
  if (isLoading) return <InventoriesSkeleton />;

  return (
    <>
      <Helmet>
        <title>Inventories</title>
        <meta
          name="description"
          content="Browse and manage available medicine inventories from trusted warehouses."
        />
        <meta
          name="keywords"
          content="inventories, medicine, pharmacy, warehouse, stock, healthcare"
        />
        <meta
          property="og:title"
          content="Inventories"
        />
        <meta
          property="og:description"
          content="Explore detailed inventories of medical supplies and pharmacies."
        />
        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <Box sx={{ p: 3 }}>
        <Box mb={3}>
          <SearchBar />
        </Box>
        <Grid
          container
          spacing={3}
        >
          {payload.inventories.map((inventory) => (
            <EnhancedInventoryCard
              key={inventory._id}
              inventory={inventory}
            />
          ))}
        </Grid>
      </Box>
      {payload.inventories.length <= 0 && (
        <EmptyPage
          title={"Inventory is Empty"}
          subtitle={"There are no products in your inventory"}
          customMessage={"Add new items to keep your inventory up to date"}
        />
      )}
    </>
  );
}
