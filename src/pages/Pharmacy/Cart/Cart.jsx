import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Helmet } from "react-helmet";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Invoice from "@/components/PharmacyComonents/Invoice/Invoice";
import CartItem from "@/components/PharmacyComonents/CartItem/CartItem";

import CartSkeleton from "./_components/CartSkeleton";
import { useNavigate } from "react-router-dom";
import { useCart, useClearCart } from "@/lib/hooks/use-cart";

export default function Cart() {
  const [selectedInventoryId, setSelectedInventoryId] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const { data: cartInfo, isLoading } = useCart();
  const clearCartMutation = useClearCart();

  if (!cartInfo && isLoading) return <CartSkeleton />;

  if (!cartInfo || !cartInfo.data || cartInfo.data.inventories.length <= 0) {
    return (
      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          bgcolor: isDark ? theme.palette.background.paper : "#f9f9f9",
          borderRadius: 4,
          boxShadow: isDark
            ? "0 4px 20px rgba(255, 255, 255, 0.05)"
            : "0 4px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography
          variant="h4"
          color="text.primary"
          fontWeight="bold"
        >
          🛒 Your Cart is Empty
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
        >
          Looks like you haven&apos;t added anything yet.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, px: 4, py: 1 }}
          onClick={() => navigate("/pharmacy/drugs")}
        >
          Back to Drugs
        </Button>
      </Paper>
    );
  }

  return (
    <>
      <Helmet>
        <title>Pharmacy Cart</title>
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

        {/* Clear Cart Button - Always at bottom */}
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
          <Button
            variant="outlined"
            color="error"
            startIcon={<Delete />}
            onClick={() => clearCartMutation.mutate()}
            sx={{
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontWeight: "bold",
            }}
          >
            Clear Cart
          </Button>
        </Box>
      </Box>
    </>
  );
}
