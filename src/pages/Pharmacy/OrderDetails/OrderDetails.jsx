/* eslint-disable react/prop-types */
// // OrderDetails.jsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import OrderHeader from "../../../components/PharmacyComonents/OrderDetails/OrderHeader";
import OrderTimeline from "../../../components/PharmacyComonents/OrderDetails/OrderTimeline";
import OrderInfoSection from "../../../components/PharmacyComonents/OrderDetails/OrderInfoSection";
import DrugsTable from "../../../components/PharmacyComonents/OrderDetails/DrugsTable";
import PaymentSummary from "../../../components/PharmacyComonents/OrderDetails/PaymentSummary";

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
          <OrderHeader
            status={status}
            paymentStatus={paymentStatus}
            createdAt={createdAt}
          />
          <OrderTimeline steps={timelineSteps} />
          <Divider />
          <OrderInfoSection inventory={inventory} delivery={delivery} />
          <DrugsTable drugs={drugs} />
          <PaymentSummary pricing={pricing} />
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
