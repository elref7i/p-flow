/* eslint-disable react/prop-types */
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Close, Receipt } from "@mui/icons-material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import StepStatus from "../../Inventory/OrdersInventory/_components/step_status";
import OrderSummary from "../../Inventory/OrdersInventory/_components/order_summary";
import OrderInformation from "../../Inventory/OrdersInventory/_components/order_info";
import DeliveryInfo from "../../Inventory/OrdersInventory/_components/delivery_info";
import PricingInfo from "../../Inventory/OrdersInventory/_components/pricing_info";
import TableDrugsOrder from "../../Inventory/OrdersInventory/_components/table_drugs_order";
import StatusHistory from "../../Inventory/OrdersInventory/_components/status_history";

export default function OrderDetails({ order: rawOrder, open, onClose }) {
  const order = rawOrder?.data || rawOrder;
  const theme = useTheme();
  const { textError, textPrimary, headerBackground, background } =
    useThemeConstants();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!order) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          background: background,
          boxShadow: 9,
          overflow: "hidden",
        },
      }}
      fullScreen={isMobile}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: headerBackground,
          boxShadow: 3,
          mb: 4,
          color: "white",
          py: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Receipt fontSize="large" />
          <Typography
            variant="h1"
            component="div"
            sx={{ fontWeight: "bold", color: textPrimary }}
          >
            Order Details
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="medium" sx={{ color: textError }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        <StepStatus status={order.status} />

        <Box sx={{ p: 3 }}>
          <OrderSummary order={order} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <OrderInformation order={order} />
                <DeliveryInfo delivery={order.delivery} />
                <PricingInfo pricing={order.pricing} />
              </Stack>
            </Grid>

            <Grid item xs={12} md={8}>
              <Stack spacing={3}>
                <TableDrugsOrder pricing={order.pricing} drugs={order.drugs} />
                {order.statusHistory?.length > 0 && (
                  <StatusHistory statusHistory={order.statusHistory} />
                )}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
