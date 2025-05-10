import {
  Box,
  Typography,
  Avatar,
  Button,
  Tooltip,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCreateOrder } from "../../../lib/hooks/useOrdersAction";
import { useCart } from "../../../lib/hooks/useCartAction";
import { formatNumber } from "../../../lib/utils/formateNumber";

/* eslint-disable react/prop-types */
export default function Invoice({ selectedInventory }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const textColor = isDarkMode ? "#fff" : "#000";

  const { data: cartInfo } = useCart();
  const createOrderMutation = useCreateOrder();

  const drugs = selectedInventory?.drugs || [];

  const inventoryId = selectedInventory?.inventory?.id;

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "380px" },
        height: 600,
        mt: 3,
        backgroundColor: isDarkMode ? "#0e1a2b" : "#F5F5F5",
        boxShadow: "0px 2px 7px rgb(103, 161, 247)",
        color: textColor,
        borderRadius: 2,
        p: 2.5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap: 1 }}
        >
          <Box
            sx={{
              bgcolor: "#007bff",
              borderRadius: 1,
              p: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShoppingCartIcon sx={{ color: "white", fontSize: 28 }} />
          </Box>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            Your Cart
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          minHeight: 0,
          pr: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          {drugs.length > 0 ? (
            drugs.map(({ drug, quantity, price }) => (
              <Box
                key={drug.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 1,
                  p: 1,
                  mb: 2,
                  // transition: "all 0.3s ease-in-out",
                  backgroundColor: isDarkMode ? "#1e293b" : "#e4e4e4",
                }}
              >
                <Avatar
                  src="https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg"
                  variant="rounded"
                  sx={{ width: 56, height: 56, mr: 1 }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    overflow: "hidden",
                  }}
                >
                  <Tooltip title={drug.name} arrow>
                    <Typography
                      fontSize={14}
                      fontWeight="bold"
                      style={{ color: textColor }}
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        cursor: "pointer",
                      }}
                    >
                      {drug.name}
                    </Typography>
                  </Tooltip>
                  <Typography fontSize={12} color="text.secondary">
                    Price: {formatNumber(price)} EGP
                  </Typography>
                </Box>

                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  style={{ color: textColor }}
                  sx={{ mr: 1 }}
                >
                  x{quantity}
                </Typography>
              </Box>
            ))
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "center",
                p: 2,
              }}
            >
              <Typography variant="h6" color="text.secondary">
                No items selected yet
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Button
        onClick={() => {
          createOrderMutation.mutate({
            cartId: cartInfo.data.id,
            inventoryId,
          });
        }}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ fontWeight: "bold", fontSize: "20px" }}
        disabled={drugs.length === 0}
      >
        Order Now
      </Button>
    </Box>
  );
}
