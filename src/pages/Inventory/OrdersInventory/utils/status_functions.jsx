import {
  Inventory,
  CheckCircle,
  PendingActions,
  LocalShippingOutlined,
  ReceiptLong,
} from "@mui/icons-material";

// Get status color
export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "#FF8A00";
    case "confirmed":
      return "#5E5ADB";
    case "processing":
      return "#9C27B0";
    case "shipped":
      return "#2196F3";
    case "delivered":
      return "#4CAF50";
    case "cancelled":
      return "#F44336";
    default:
      return "#757575";
  }
};

// Get payment status color
export const getPaymentStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "paid":
      return "#4CAF50";
    case "pending":
      return "#FF8A00";
    case "failed":
      return "#F44336";
    default:
      return "#757575";
  }
};

// // Get status icon
export const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return <PendingActions />;
    case "confirmed":
      return <CheckCircle />;
    case "processing":
      return <Inventory />;
    case "shipped":
      return <LocalShippingOutlined />;
    case "delivered":
      return <CheckCircle />;
    default:
      return <ReceiptLong />;
  }
};

// Get active step for stepper
export const getActiveStep = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return 0;
    case "confirmed":
      return 1;
    case "processing":
      return 2;
    case "shipped":
      return 3;
    case "delivered":
      return 4;
    default:
      return 0;
  }
};
