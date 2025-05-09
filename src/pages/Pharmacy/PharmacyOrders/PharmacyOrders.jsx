import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  Stack,
  useTheme,
  Tooltip,
  Divider,
} from "@mui/material";
import { useOrders, useCancelOrder } from "@/lib/hooks/useOrdersAction";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import LoadingSpinner from "@/components/Common/Loading/LoadingSpinner";
import { formatNumber } from "../../../lib/utils/formateNumber";
import { useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import { Helmet } from "react-helmet";

export default function PharmacyOrders() {
  const { data, isLoading } = useOrders();
  const cancelOrder = useCancelOrder();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isCanceling, setIsCanceling] = useState(false);
  const [cancelingOrderId, setCancelingOrderId] = useState(null);

  if (isLoading) return <LoadingSpinner />;

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setModalOpen(false);
  };

  const handleCancel = (orderId) => {
    setIsCanceling(true);
    setCancelingOrderId(orderId);

    cancelOrder.mutate(
      { orderId },
      {
        onSuccess: () => {
          setIsCanceling(false);
          setCancelingOrderId(null);
        },
        onError: () => {
          setIsCanceling(false);
          setCancelingOrderId(null);
        },
      }
    );
  };

  return (
    <>
      <Helmet>
        <title>Pharmacy Orders</title>
        <meta
          name="description"
          content="View and manage your pharmacy orders including medications, pricing, and status."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pharmacy Orders" />
        <meta
          property="og:description"
          content="Manage and track all your pharmacy orders in one place."
        />
      </Helmet>

      <Box sx={{ px: 2, py: 2 }}>
        {data.data.map((order) => (
          <Card
            key={order._id}
            sx={{
              backgroundColor: isDark ? "#101926" : "#FFFFFF",
              color: isDark ? "white" : "black",
              mb: 3,
              borderRadius: 2,
              p: 2,
              boxShadow: "0px 2px 7px rgb(103, 161, 247)",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Typography variant="h6">Order: #{order.orderNumber}</Typography>
              <Typography
                variant="caption"
                sx={{
                  backgroundColor:
                    order.status === "pending"
                      ? "orange"
                      : order.status === "completed"
                      ? "green"
                      : order.status === "cancelled"
                      ? "darkred"
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

            <Grid container spacing={1.5}>
              {order.drugs.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.drug._id}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: isDark ? "#353e4f" : "#dddddd",
                      color: isDark ? "white" : "black",
                      borderRadius: 2,
                      height: "100%",
                      p: 2,
                      boxShadow: 1,
                    }}
                  >
                    {/* <CardMedia
                      component="img"
                      image={
                        item.drug.image ||
                        "https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg"
                      }
                      alt={item.drug.name}
                      sx={{
                        width: 80,
                        height: 80,
                        objectFit: "contain",
                        mb: 1,
                      }}
                    /> */}
                    <Tooltip title={item.drug.name} arrow>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        noWrap
                        sx={{ maxWidth: "100%", textAlign: "center" }}
                      >
                        {item.drug.name}
                      </Typography>
                    </Tooltip>
                    <Typography
                      variant="body2"
                      sx={{ mt: 0.5, fontSize: "0.85rem" }}
                    >
                      Price: {formatNumber(item.drug.price)} EGP
                    </Typography>
                    <Typography variant="caption" sx={{ fontSize: "0.80rem" }}>
                      Quantity: {item.paidQuantity}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Divider
              sx={{
                mt: 3,
                borderColor: isDark ? "#2f3947" : "lightgray",
              }}
            />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Typography
                variant="body2"
                fontSize="17px"
                sx={{ display: "inline-flex", alignItems: "center" }}
              >
                <LocalAtmIcon sx={{ fontSize: "20", mr: 0.5 }} />
                Total Order : {formatNumber(order.pricing.total)} L.E
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => handleCancel(order._id)}
                  disabled={order.status === "cancelled" || isCanceling}
                >
                  {isCanceling && cancelingOrderId === order._id
                    ? "Canceling..."
                    : "Cancel"}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => handleOpenModal(order)}
                >
                  Order Details
                </Button>
              </Box>
            </Stack>
          </Card>
        ))}

        <OrderDetails
          open={modalOpen}
          onClose={handleCloseModal}
          order={selectedOrder}
        />
      </Box>
    </>
  );
}
