/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function OrderDetails({ open, onClose, order }) {
  if (!order) return null;

  const {
    orderNumber,
    status,
    paymentStatus,
    createdAt,
    inventory,
    pricing,
    drugs,
    delivery,
  } = order;

  const timelineSteps = [
    {
      title: "Order Confirmed",
      time: new Date(createdAt).toLocaleTimeString(),
      icon: <LocalMallIcon sx={{ color: "#2196f3" }} />,
      description: "Order confirmed and medications reviewed",
      color: "#e3f2fd",
    },
    {
      title: "Processing Order",
      time: "Mar 15, 05:30 PM",
      icon: <Inventory2Icon sx={{ color: "#ff9800" }} />,
      description: "Order is being prepared in the warehouse",
      color: "#fff3e0",
    },
    {
      title: "Order Shipped",
      time: "Mar 15, 05:31 PM",
      icon: <LocalShippingOutlinedIcon sx={{ color: "#9c27b0" }} />,
      description: "Order handed to shipping company - Tracking number: XYZ123",
      color: "#f3e5f5",
    },
    {
      title: "Order Delivered",
      time: "Mar 15, 05:31 PM",
      icon: <CheckCircleIcon sx={{ color: "#4caf50" }} />,
      description: "Order successfully delivered to pharmacy",
      color: "#e8f5e9",
    },
  ];

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h6" gutterBottom>
          Order #{orderNumber}
        </Typography>
      </DialogTitle>

      <DialogContent dividers>
        <Stack spacing={4}>
          {/* Header Summary */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              alignItems="center"
            >
              <Chip
                sx={{ fontWeight: "bold" }}
                label={status}
                color="success"
              />
              <Chip
                sx={{ fontWeight: "bold" }}
                label={paymentStatus}
                color="success"
              />
              <Chip
                sx={{ fontWeight: "bold" }}
                icon={<PaymentIcon />}
                label="Payment: Cash"
                variant="outlined"
              />
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontWeight: "bold",
                whiteSpace: "nowrap",
                mt: { xs: 1, md: 0 },
              }}
            >
              Created: {new Date(createdAt).toLocaleString()}
            </Typography>
          </Stack>

          {/* Order Timeline */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Order Timeline
            </Typography>
            <Grid container spacing={2}>
              {timelineSteps.map((step, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Stack
                    spacing={1}
                    alignItems="center"
                    sx={{
                      backgroundColor: step.color,
                      p: 2,
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                  >
                    {step.icon}
                    <Typography variant="subtitle2" align="center">
                      {step.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {step.time}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {step.description}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider />

          {/* Inventory Info + Delivery Info side-by-side */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                p={2}
                borderRadius={2}
                sx={{
                  backgroundColor: "#f0f7ff",
                  boxShadow: "0px 2px 7px rgb(103, 161, 247)",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Inventory Information
                </Typography>
                <Stack spacing={1}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Inventory2Icon
                      fontSize="small"
                      sx={{ color: "#2196f3" }}
                    />
                    <Typography>Name: {inventory?.name || "N/A"}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocalPharmacyIcon
                      fontSize="small"
                      sx={{ color: "#2196f3" }}
                    />
                    <Typography>ID: {inventory?._id}</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                p={2}
                borderRadius={2}
                sx={{
                  backgroundColor: "#f0f7ff",
                  boxShadow: "0px 2px 7px rgb(103, 161, 247)",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Delivery Information
                </Typography>
                <Stack spacing={1}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ color: "#2196f3" }}
                    />
                    <Typography>
                      Location:
                      <Button size="small" variant="outlined" sx={{ ml: 1 }}>
                        View on Map
                      </Button>
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocalShippingIcon
                      fontSize="small"
                      sx={{ color: "#2196f3" }}
                    />
                    <Typography>
                      Contact Phone: {delivery?.contactPhone}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>

          {/* Ordered Medications */}
          <Box>
            {/* <Typography variant="h6" gutterBottom>
              Ordered Drugs
            </Typography> */}
            <TableContainer
              component={Paper}
              variant="outlined"
              sx={{
                overflowX: "auto",
              }}
            >
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Medication Name</TableCell>
                    <TableCell align="right">Unit Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {drugs.map((item, index) => {
                    const hasPromo = item.drug?.promotion?.isActive;
                    return (
                      <TableRow key={index}>
                        <TableCell>
                          <Typography>{item.drug?.name}</Typography>
                          {hasPromo && (
                            <Chip
                              label="Promo"
                              size="small"
                              sx={{
                                ml: 1,
                                backgroundColor: "#ffebee",
                                color: "#c62828",
                                fontWeight: "bold",
                                border: "1px solid #c62828",
                                px: 1.2,
                                fontSize: "0.7rem",
                                textTransform: "uppercase",
                              }}
                              icon={
                                <LocalMallIcon
                                  sx={{ color: "#c62828", fontSize: 16 }}
                                />
                              }
                            />
                          )}
                        </TableCell>
                        <TableCell align="right">
                          {item.drug?.price.toFixed(2)} EGP
                        </TableCell>
                        <TableCell align="right">{item.paidQuantity}</TableCell>
                        <TableCell align="right">
                          {(item.paidQuantity * item.drug?.price).toFixed(2)}{" "}
                          EGP
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Payment Summary + Delivery Info side-by-side */}

          <Box
            boxShadow={1}
            p={2}
            borderRadius={2}
            sx={{
              backgroundColor: "#ffebee",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Payment Summary :
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography>Subtotal:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right">
                  {pricing.subtotal.toFixed(2)} EGP
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Shipping:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right">
                  {pricing.shippingCost === 0
                    ? "Free"
                    : `${pricing.shippingCost.toFixed(2)} EGP`}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontWeight="bold">Total:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontWeight="bold" align="right">
                  {pricing.total.toFixed(2)} EGP
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
