import {
  Box,
  Typography,
  Avatar,
  Button,
  Tooltip,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCreateOrder } from "@/lib/hooks/useOrdersAction";
import { formatNumber } from "@/lib/utils/formateNumber";
import { useCart } from "@/lib/hooks/use-cart";

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
        width: { xs: "100%", sm: "100%", md: "380px" },
        height: { xs: "auto", sm: 600, md: 600 },
        minHeight: { xs: 400, sm: 600 },
        maxHeight: { xs: "70vh", sm: 600 },
        mt: { xs: 2, sm: 4 },
        backgroundColor: isDarkMode ? "#0e1a2b" : "#F5F5F5",
        boxShadow: "0px 2px 7px rgb(103, 161, 247)",
        color: textColor,
        borderRadius: 2,
        p: { xs: 1.5, sm: 2.5 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 1.5, sm: 2 },
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            gap: { xs: 0.5, sm: 1 },
          }}
        >
          <Box
            sx={{
              bgcolor: "#007bff",
              borderRadius: 1,
              p: { xs: 0.3, sm: 0.5 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShoppingCartIcon
              sx={{ color: "white", fontSize: { xs: 24, sm: 28 } }}
            />
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
            }}
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
          pr: { xs: 1, sm: 2 },
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
                  p: { xs: 0.8, sm: 1 },
                  mb: { xs: 1.5, sm: 2 },
                  backgroundColor: isDarkMode ? "#1e293b" : "#e4e4e4",
                  flexDirection: { xs: "row", sm: "row" },
                  gap: { xs: 0.5, sm: 0 },
                }}
              >
                <Avatar
                  src="https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg"
                  variant="rounded"
                  sx={{
                    width: { xs: 48, sm: 56 },
                    height: { xs: 48, sm: 56 },
                    mr: { xs: 0.8, sm: 1 },
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    overflow: "hidden",
                    minWidth: 0,
                  }}
                >
                  <Tooltip
                    title={drug.name}
                    arrow
                  >
                    <Typography
                      fontSize={{ xs: 13, sm: 14 }}
                      fontWeight="bold"
                      style={{ color: textColor }}
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        cursor: "pointer",
                        lineHeight: { xs: 1.3, sm: 1.4 },
                      }}
                    >
                      {drug.name}
                    </Typography>
                  </Tooltip>
                  <Typography
                    fontSize={{ xs: 11, sm: 12 }}
                    color="text.secondary"
                    sx={{ mt: { xs: 0.2, sm: 0.5 } }}
                  >
                    Price: {formatNumber(price)} EGP
                  </Typography>
                </Box>

                <Typography
                  fontSize={{ xs: 13, sm: 14 }}
                  fontWeight="bold"
                  style={{ color: textColor }}
                  sx={{ mr: { xs: 0.5, sm: 1 } }}
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
                p: { xs: 1.5, sm: 2 },
              }}
            >
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
              >
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
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          py: { xs: 1, sm: 1.5 },
          mt: { xs: 1, sm: 0 },
        }}
        disabled={drugs.length === 0}
      >
        Order Now
      </Button>
    </Box>
  );
}
