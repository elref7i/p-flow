import { Box, Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Invoice from "@/components/PharmacyComonents/Invoice/Invoice";
import CartItem from "@/components/PharmacyComonents/CartItem/CartItem";
import CartSkeleton from "./_components/CartSkeleton";
import { useCart, useClearCart } from "@/lib/hooks/use-cart";
import ButtonDelete from "../../../components/button-delete";
import EmptyPage from "../../../components/Common/empty-page";

export default function Cart() {
  const [selectedInventoryId, setSelectedInventoryId] = useState(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { data: cartInfo, isLoading } = useCart();
  const { mutate: ClearCart, isLoading: LoadingDelete } = useClearCart();

  if (!cartInfo && isLoading) return <CartSkeleton />;

  if (!cartInfo || !cartInfo.data || cartInfo.data.inventories.length <= 0) {
    return (
      <EmptyPage
        nameButton={"View All Drugs"}
        title={"Your wishlist is empty"}
        subtitle={"You haven’t added any items yet"}
        customMessage={" Browse products and save your favorites for later"}
        linkPage="/pharmacy/drugs"
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Cart</title>
        <meta
          name="description"
          content="Review and manage the drugs you've added to your pharmacy cart. Adjust quantities, remove items, and proceed to checkout."
        />
        <meta
          name="keywords"
          content="pharmacy cart, medicine cart, pharmacy checkout, drug order, cart page, pharmacy shopping"
        />
        <meta
          name="author"
          content="Your Pharmacy Website"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          property="og:title"
          content="Your Pharmacy Cart"
        />
        <meta
          property="og:description"
          content="You've selected your pharmacy items. View and manage your cart before purchasing."
        />
      </Helmet>

      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
        <Grid
          container
          spacing={5}
          sx={{ flexGrow: 1 }}
        >
          {/* cart items */}
          <Grid
            item
            xs={12}
            md={9}
          >
            <Box
              display="flex"
              flexDirection="column"
            >
              {cartInfo.data.inventories.map((inventory) => (
                <CartItem
                  key={inventory.inventory.id}
                  inventoryInfo={inventory}
                  onReadyToBuy={() =>
                    setSelectedInventoryId(inventory.inventory.id)
                  }
                  selectedInventoryId={selectedInventoryId}
                />
              ))}
            </Box>
          </Grid>

          {/* invoice */}
          <Grid
            item
            xs={12}
            md={3}
          >
            <Box>
              <Invoice
                selectedInventory={cartInfo.data.inventories.find(
                  (inv) => inv.inventory.id === selectedInventoryId
                )}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Clear Cart Button */}
        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 3, sm: 4 },
            pb: { xs: 2, sm: 3 },
            borderTop: {
              xs: `1px solid ${isDark ? "#333" : "#e0e0e0"}`,
              sm: "none",
            },
            pt: { xs: 2, sm: 0 },
          }}
        >
          <ButtonDelete
            nameButton="Clear Cart"
            nameItems="Cart"
            handleAction={ClearCart}
            isDeleting={LoadingDelete}
          />
        </Box>
      </Box>
    </>
  );
}
