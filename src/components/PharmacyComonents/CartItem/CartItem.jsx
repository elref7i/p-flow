/* eslint-disable react/prop-types */
import { Box, Typography, IconButton, Button, Avatar } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useContext } from "react";
import { cartContext } from "../../../context/Cart.context";
import LoadingSpinner from "../../Common/Loading/LoadingSpinner";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

export default function CartItem({ inventoryInfo }) {
  const {
    removeDrugFromCart,
    updateCartItemQuantity,
    removeInventoryFromCart,
  } = useContext(cartContext);

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  if (!inventoryInfo || !inventoryInfo.inventory || !inventoryInfo.drugs) {
    return <LoadingSpinner />;
  }

  const { totalInventoryPrice, drugs, inventory } = inventoryInfo;

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 4,
        backgroundColor: isDarkMode ? "#0e1a2b" : "#f2f0ee",
        width: "100%",
        color: isDarkMode ? "#ffffff" : "#000000",
      }}
    >
      {/* Inventory Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {inventory.name}
        </Typography>
        <IconButton
          color="error"
          onClick={() =>
            removeInventoryFromCart({ inventoryId: inventory._id })
          }
        >
          <Delete />
        </IconButton>
      </Box>

      {/* Drugs */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {drugs.map(({ drug, quantity }) => {
          const { _id } = drug;
          return (
            <Box
              key={_id}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: isDarkMode ? "#172b45" : "#e0e0e0",
                borderRadius: 3,
                px: 1.5,
                py: 1,
                width: "fit-content",
                minWidth: 280,
              }}
            >
              {/* Image */}
              <Avatar
                src="https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg"
                variant="rounded"
                sx={{ width: 50, height: 50, mr: 1 }}
              />

              {/* Texts */}
              <Box sx={{ flexGrow: 1, mr: 2 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 500, color: isDarkMode ? "#fff" : "#000" }}
                  noWrap
                >
                  {drug.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 12, color: isDarkMode ? "#ccc" : "#555" }}
                >
                  Consumer price: 25$
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 12, color: isDarkMode ? "#ccc" : "#555" }}
                >
                  Pharmacy price: 18$
                </Typography>
              </Box>

              {/* Quantity */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="small"
                  onClick={() => {
                    updateCartItemQuantity({
                      drugId: _id,
                      quantity: quantity + 1,
                    });
                  }}
                >
                  <AddCircleOutlineIcon
                    sx={{ color: isDarkMode ? "#90caf9" : "#1976d2" }}
                  />
                </IconButton>
                <Typography mx={1}>{quantity}</Typography>
                <IconButton
                  size="small"
                  onClick={() => {
                    updateCartItemQuantity({
                      drugId: _id,
                      quantity: quantity - 1,
                    });
                  }}
                >
                  <RemoveCircleOutlineIcon
                    sx={{ color: isDarkMode ? "#90caf9" : "#1976d2" }}
                  />
                </IconButton>
              </Box>

              {/* Delete Icon */}
              <IconButton
                size="small"
                color="error"
                sx={{ ml: 1 }}
                onClick={() => {
                  removeDrugFromCart({ drugId: _id });
                }}
              >
                <CloseIcon color="error" />
              </IconButton>
            </Box>
          );
        })}
      </Box>

      {/* Bottom Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        {/* <Typography color="error">{totalInventoryPrice}</Typography> */}
        <Typography
          sx={{ color: totalInventoryPrice < 1000 ? "#ff5f5f" : "green" }}
        >
          {totalInventoryPrice < 1000
            ? `Less Than 1000 L.E`
            : `Total Price ${totalInventoryPrice} L.E`}
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined" size="small">
            Buy More
          </Button>
          <Button variant="contained" color="secondary" size="small">
            Ready to buy
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
