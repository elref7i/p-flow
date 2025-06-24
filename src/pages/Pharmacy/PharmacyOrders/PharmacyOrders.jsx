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
      {data.data.length === 0 ? (
        <Typography
          textAlign={"center"}
          width={"100%"}
          fontSize={20}
          fontWeight={700}
          color={textPrimary}
        >
          No orders found
        </Typography>
      ) : (
        <Box
          sx={{
            px: { xs: 1, sm: 2, md: 3, lg: 4 },
            py: { xs: 2, sm: 3 },
            minHeight: "100vh",
          }}
        >
          {data.data.map((order) => {
            const statusInfo = getStatusColor(order.status);

            return (
              <Card
                key={order._id}
                sx={{
                  background: isDark
                    ? "linear-gradient(145deg, #1e293b 0%, #334155 100%)"
                    : "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
                  mb: { xs: 3, sm: 4 },
                  borderRadius: { xs: 2, sm: 3 },
                  overflow: "hidden",
                  boxShadow: isDark
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                    : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  border: isDark ? "1px solid #334155" : "1px solid #e2e8f0",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: {
                      xs: "translateY(-2px)",
                      sm: "translateY(-4px)",
                    },
                    boxShadow: isDark
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                      : "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                {/* Order Header */}
                <Box
                  sx={{
                    background: isDark
                      ? "linear-gradient(90deg, #1e40af 0%, #7c3aed 100%)"
                      : "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
                    p: { xs: 2, sm: 2.5, md: 2 },
                    color: "white",
                  }}
                >
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    justifyContent="space-between"
                    spacing={{ xs: 2, sm: 0 }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={{ xs: 1.5, sm: 2 }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "rgba(255,255,255,0.2)",
                          width: { xs: 40, sm: 48 },
                          height: { xs: 40, sm: 48 },
                        }}
                      >
                        <ShoppingCartIcon
                          sx={{ fontSize: { xs: 20, sm: 24 } }}
                        />
                      </Avatar>
                      <Box>
                        <Typography
                          variant={{ xs: "subtitle1", sm: "h6" }}
                          sx={{ fontWeight: 600 }}
                        >
                          Order #{order.orderNumber}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            opacity: 0.9,
                            fontSize: { xs: "0.75rem", sm: "0.875rem" },
                          }}
                        >
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
                        fontSize: { xs: "0.7rem", sm: "0.75rem" },
                        height: { xs: 28, sm: 32 },
                        alignSelf: { xs: "flex-end", sm: "auto" },
                        "& .MuiChip-label": {
                          px: { xs: 1.5, sm: 2 },
                        },
                      }}
                    />
                  </Stack>
                </Box>

                <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                  {/* Drugs Grid */}
                  <Grid
                    container
                    spacing={{ xs: 1.5, sm: 2 }}
                    sx={{ mb: { xs: 2, sm: 3 } }}
                  >
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
                          elevation={0}
                          sx={{
                            p: { xs: 1.5, sm: 2 },
                            height: "100%",
                            background: isDark
                              ? "linear-gradient(145deg, #334155 0%, #475569 100%)"
                              : "linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%)",
                            borderRadius: { xs: 1.5, sm: 2 },
                            border: isDark
                              ? "1px solid #475569"
                              : "1px solid #cbd5e1",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              transform: {
                                xs: "translateY(-1px)",
                                sm: "translateY(-2px)",
                              },
                              boxShadow: isDark
                                ? "0 8px 25px rgba(0,0,0,0.3)"
                                : "0 8px 25px rgba(0,0,0,0.1)",
                            },
                          }}
                        >
                          <Stack
                            spacing={{ xs: 1, sm: 1.5 }}
                            alignItems="center"
                            textAlign="center"
                          >
                            <Tooltip title={item.drug.name} arrow>
                              <Typography
                                variant={{ xs: "body2", sm: "subtitle2" }}
                                fontWeight="600"
                                noWrap
                                sx={{
                                  maxWidth: "100%",
                                  color: isDark ? "#f1f5f9" : "#1e293b",
                                  fontSize: { xs: "0.8rem", sm: "0.875rem" },
                                }}
                              >
                                {item.drug.name}
                              </Typography>
                            </Tooltip>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                mt: 1,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: isDark ? "#10b981" : "#059669",
                                  fontWeight: 600,
                                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                                }}
                              >
                                Price: {formatNumber(item.drug.price)} EGP
                              </Typography>

                              <Typography
                                variant="caption"
                                sx={{
                                  color: "text.secondary",
                                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                                }}
                              >
                                Qty: {item.paidQuantity}
                              </Typography>
                            </Box>
                          </Stack>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>

                  <Divider
                    sx={{
                      borderColor: isDark ? "#475569" : "#cbd5e1",
                      borderWidth: 1,
                    }}
                  />
                </CardContent>

                {/* Order Footer */}
                <CardActions
                  sx={{
                    pt: 0,
                    pb: { xs: 2, sm: 2.5, md: 2 },
                    px: { xs: 2, sm: 2.5, md: 3 },
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "stretch", sm: "center" },
                    gap: { xs: 2, sm: 0 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", sm: "flex-start" },
                      background: isDark
                        ? "linear-gradient(90deg, #059669 0%, #10b981 100%)"
                        : "linear-gradient(90deg, #10b981 0%, #34d399 100%)",
                      color: "white",
                      px: { xs: 2, sm: 2.5 },
                      py: { xs: 1.25, sm: 1.5 },
                      borderRadius: 2,
                      boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    <LocalAtmIcon
                      sx={{ mr: 1, fontSize: { xs: 18, sm: 20 } }}
                    />
                    <Typography
                      variant={{ xs: "subtitle1", sm: "h6" }}
                      fontWeight="600"
                    >
                      Total Order : {formatNumber(order.pricing.total)} EGP
                    </Typography>
                  </Box>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1.5, sm: 2 }}
                    sx={{ width: { xs: "100%", sm: "auto" } }}
                  >
                    <Button
                      variant="outlined"
                      color="error"
                      size="medium"
                      startIcon={
                        <CancelIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                      }
                      onClick={() => {
                        setSelectedOrder(order);
                        setConfirmCancelModalOpen(true);
                      }}
                      disabled={
                        order.status === "cancelled" ||
                        order.status === "delivered" ||
                        order.status === "shipped" ||
                        order.status === "rejected" ||
                        order.status === "confirmed"
                      }
                      sx={{
                        borderRadius: 2,
                        px: { xs: 2, sm: 3 },
                        py: 1,
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                        minHeight: { xs: 40, sm: 44 },
                        "&:hover": {
                          transform: "translateY(-1px)",
                          boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
                        },
                      }}
                    >
                      Cancel
                    </Button>

                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={
                        <VisibilityIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                      }
                      onClick={() => handleOpenModal(order)}
                      sx={{
                        background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                        borderRadius: 2,
                        px: { xs: 2, sm: 3 },
                        py: 1,
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                        minHeight: { xs: 40, sm: 44 },
                        boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #2563eb, #7c3aed)",
                          transform: "translateY(-1px)",
                          boxShadow: "0 6px 16px rgba(59, 130, 246, 0.4)",
                        },
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
