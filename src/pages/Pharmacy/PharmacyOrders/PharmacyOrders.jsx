import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";
import { useOrders } from "@/lib/hooks/useOrdersAction";
import LoadingSpinner from "@/components/Common/Loading/LoadingSpinner";
import { formatNumber } from "../../../lib/utils/formateNumber";
import { useCancelOrder } from "../../../lib/hooks/useOrdersAction";

export default function PharmacyOrders() {
  const { data, isLoading } = useOrders();
  const cancelOrder = useCancelOrder();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  if (isLoading) return <LoadingSpinner />;

  const orders = data.data.map((order) => ({
    id: order._id,
    inventoryName: order.inventory.name,
    deliveryDate: order.createdAt,
    status: order.status,
    total: order.pricing.total,
    products: order.drugs.map((item) => ({
      id: item.drug._id,
      name: item.drug.name,
      price: item.drug.price,
      quantity: item.quantity,
      image:
        "https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg",
    })),
  }));

  return (
    <Box sx={{ px: 2, py: 4 }}>
      {orders.map((order) => (
        <Card
          key={order.id}
          sx={{
            backgroundColor: isDark ? "#101926" : "#f5f5f5",
            color: isDark ? "white" : "black",
            mb: 3,
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Typography variant="h6">{order.inventoryName}</Typography>
              <Typography
                variant="caption"
                sx={{
                  backgroundColor:
                    order.status === "pending"
                      ? "orange"
                      : order.status === "completed"
                      ? "green"
                      : "gray",
                  color: "white",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {order.status}
              </Typography>
            </Stack>

            <Grid container spacing={2}>
              {order.products.map((product) => (
                <Grid item xs={12} sm={6} key={product.id}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <CardMedia
                      component="img"
                      height="60"
                      image={product.image}
                      alt={product.name}
                      sx={{ width: 60, borderRadius: 1 }}
                    />
                    <Box>
                      <Typography variant="h6" noWrap>
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={isDark ? "gray" : "text.secondary"}
                      >
                        Price: {formatNumber(product.price)} L.E
                      </Typography>
                      <Typography
                        variant="caption"
                        color={isDark ? "gray" : "text.secondary"}
                      >
                        Quantity: {product.quantity}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Divider
              sx={{ my: 2, borderColor: isDark ? "#2f3947" : "lightgray" }}
            />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" color="primary" fontWeight="bold">
                Total Order Price: {formatNumber(order.total)} L.E
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => cancelOrder.mutate({ orderId: order.id })}
                >
                  Cancel
                </Button>
                <Button variant="contained" color="primary" size="small">
                  Order Details
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
