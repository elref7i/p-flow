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
  Chip,
  Avatar,
  CardContent,
  CardActions,
  Paper,
} from "@mui/material";
import { useOrders, useCancelOrder } from "@/lib/hooks/useOrdersAction";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { formatNumber } from "../../../lib/utils/formateNumber";
import { useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import { Helmet } from "react-helmet";
import ConfirmCancelModal from "./components/ConfirmCancelModal";
import OrdersSkeleton from "./components/OrdersSkeleton";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function PharmacyOrders() {
  const { data, isLoading } = useOrders();
  const cancelOrder = useCancelOrder();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { textPrimary } = useThemeConstants();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isCanceling, setIsCanceling] = useState(false);
  const [cancelingOrderId, setCancelingOrderId] = useState(null);
  const [confirmCancelModalOpen, setConfirmCancelModalOpen] = useState(false);

  if (isLoading) return <OrdersSkeleton />;

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
          setConfirmCancelModalOpen(false);
        },
        onError: () => {
          setIsCanceling(false);
          setCancelingOrderId(null);
        },
      }
    );
  };

  const getStatusColor = (status) => {
    const statusColors = {
      pending: { bg: "#FFF3CD", color: "#856404", icon: "⏳" },
      confirmed: { bg: "#D4EDDA", color: "#155724", icon: "✅" },
      rejected: { bg: "#F8D7DA", color: "#721C24", icon: "❌" },
      delivered: { bg: "#E2E3F1", color: "#383D41", icon: "📦" },
      shipped: { bg: "#FFF3CD", color: "#856404", icon: "🚚" },
      cancelled: { bg: "#F8D7DA", color: "#721C24", icon: "🚫" },
    };
    return (
      statusColors[status] || { bg: "#E9ECEF", color: "#495057", icon: "❓" }
    );
  };

  return (
    <>
      <Helmet>
        <title>Orders</title>
      </Helmet>
      {data.data.length === 0 ? (
        <Typography
          textAlign="center"
          width="100%"
          fontSize={20}
          fontWeight={700}
          color={textPrimary}
          mt={5}
        >
          No orders yet
        </Typography>
      ) : (
        <Box sx={{ px: { xs: 1, sm: 2, md: 3, lg: 4 }, py: { xs: 2, sm: 3 } }}>
          {data.data.map((order) => {
            const statusInfo = getStatusColor(order.status);
            return (
              <Card
                key={order._id}
                sx={{
                  backgroundColor: isDark ? "#0e1a2b" : "#f9f9f9",
                  mb: { xs: 3, sm: 4 },
                  borderRadius: { xs: 2, sm: 3 },
                  boxShadow: "0px 3px 10px rgba(103, 161, 247, 0.3)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box sx={{ p: { xs: 2, sm: 2.5, md: 2 } }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    justifyContent="space-between"
                    spacing={{ xs: 2, sm: 0 }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ width: 48, height: 48 }}>
                        <ShoppingCartIcon />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          Order #{order.orderNumber}
                        </Typography>
                        <Typography variant="body2" opacity={0.8}>
                          {order.drugs.length} item
                          {order.drugs.length > 1 ? "s" : ""}
                        </Typography>
                      </Box>
                    </Stack>
                    <Chip
                      label={`${statusInfo.icon} ${order.status.toUpperCase()}`}
                      sx={{
                        backgroundColor: statusInfo.bg,
                        color: statusInfo.color,
                        fontWeight: "bold",
                      }}
                    />
                  </Stack>
                </Box>

                <CardContent sx={{ pt: 0.5, px: { xs: 1.5, sm: 2 }, pb: 0 }}>
                  <Divider
                    sx={{
                      borderColor: isDark ? "#475569" : "#cbd5e1",
                      borderWidth: 1.5,
                      mb: { xs: 1.5, sm: 2 },
                    }}
                  />

                  <Grid container spacing={2}>
                    {order.drugs.map((item) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={item.drug._id}
                      >
                        <Paper
                          sx={{
                            p: 2,
                            backgroundColor: isDark ? "#1e293b" : "#dddddd",
                            borderRadius: 2,
                          }}
                        >
                          <Tooltip title={item.drug.name}>
                            <Typography
                              variant="subtitle2"
                              fontWeight={600}
                              noWrap
                            >
                              {item.drug.name}
                            </Typography>
                          </Tooltip>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mt: 1,
                            }}
                          >
                            <Typography variant="body2">
                              Price : {formatNumber(item.drug.price)} L.E
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Qty: {item.paidQuantity}
                            </Typography>
                          </Box>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>

                  <Divider
                    sx={{
                      borderColor: isDark ? "#475569" : "#cbd5e1",
                      borderWidth: 1.5,
                      mt: 2,
                    }}
                  />
                </CardContent>
                <CardActions
                  sx={{
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "stretch", sm: "center" },
                    p: { xs: 1.5, sm: 2.5 },
                    gap: { xs: 2, sm: 1 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", sm: "flex-start" },
                      background: isDark
                        ? "linear-gradient(90deg, #2563EB 0%, #1D4ED8 100%)"
                        : "linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)",
                      color: "white",
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 1, sm: 1.25 },
                      borderRadius: 2,
                      minWidth: { xs: "100%", sm: "auto" },
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    <LocalAtmIcon
                      sx={{ mr: 1, fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
                    />
                    <Typography
                      fontWeight={600}
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        textAlign: { xs: "center", sm: "left" },
                        wordBreak: "break-word",
                      }}
                    >
                      Total Order : {formatNumber(order.pricing.total)} L.E
                    </Typography>
                  </Box>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1.5, sm: 2 }}
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                      alignItems: { xs: "stretch", sm: "center" },
                    }}
                  >
                    <Button
                      sx={{
                        mt: { xs: 0, sm: 1 },
                        fontSize: { xs: "0.85rem", sm: "0.875rem" },
                        py: { xs: 1, sm: 0.75 },
                        minWidth: { xs: "100%", sm: "auto" },
                      }}
                      variant="outlined"
                      color="error"
                      startIcon={
                        <CancelIcon
                          sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
                        />
                      }
                      onClick={() => {
                        setSelectedOrder(order);
                        setConfirmCancelModalOpen(true);
                      }}
                      disabled={[
                        "cancelled",
                        "delivered",
                        "shipped",
                        "rejected",
                        "confirmed",
                      ].includes(order.status)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={
                        <VisibilityIcon
                          sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
                        />
                      }
                      onClick={() => handleOpenModal(order)}
                      sx={{
                        background: isDark
                          ? "linear-gradient(90deg, #2563EB 0%, #1D4ED8 100%)"
                          : "linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)",
                        fontSize: { xs: "0.85rem", sm: "0.875rem" },
                        py: { xs: 1, sm: 0.75 },
                        minWidth: { xs: "100%", sm: "auto" },
                      }}
                    >
                      Order Details
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            );
          })}

          {selectedOrder && (
            <OrderDetails
              open={modalOpen}
              onClose={handleCloseModal}
              order={selectedOrder}
            />
          )}
          <ConfirmCancelModal
            open={confirmCancelModalOpen}
            onClose={() => setConfirmCancelModalOpen(false)}
            onConfirm={() => handleCancel(selectedOrder._id)}
            loading={isCanceling && cancelingOrderId === selectedOrder?._id}
          />
        </Box>
      )}
    </>
  );
}
