/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Grid,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Visibility, Close, Receipt } from "@mui/icons-material";
import StepStatus from "./step_status";
import OrderSummary from "./order_summary";
import TableDrugsOrder from "./table_drugs_order";
import StatusHistory from "./status_history";
import OrderInformation from "./order_info";
import DeliveryInfo from "./delivery_info";
import PricingInfo from "./pricing_info";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function OrderDetailsModal({ order }) {
  //States
  const [open, setOpen] = useState(false);

  //Themes
  const theme = useTheme();
  const {
    textError,
    headerBackground,
    background,
    buttonBackground,
    buttonHover,
  } = useThemeConstants();

  //Variables
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //Functions
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Button */}
      <Button
        variant="contained"
        size="small"
        startIcon={<Visibility />}
        onClick={handleOpen}
        sx={{
          background: buttonBackground,
          borderRadius: "8px",
          boxShadow: 12,
          "&:hover": {
            bgcolor: buttonHover,
          },
        }}
      >
        Details
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
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
        {/* Title Modal */}
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
              sx={{ fontWeight: "bold" }}
            >
              Order Details
            </Typography>
          </Box>
          <IconButton
            onClick={handleClose}
            size="medium"
            sx={{ color: textError }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          {/* Order Status Stepper */}
          <StepStatus status={order.status} />

          <Box sx={{ p: 3 }}>
            {/* Order Summary Cards */}
            <OrderSummary order={order} />

            {/* Order Details Section */}
            <Grid
              container
              spacing={3}
            >
              {/* Left Column - Order Info */}
              <Grid
                item
                xs={12}
                md={4}
              >
                <Stack spacing={3}>
                  {/* Order Information */}
                  <OrderInformation order={order} />

                  {/* Delivery Info Card */}
                  <DeliveryInfo delivery={order.delivery} />

                  {/* Pricing Info Card */}
                  <PricingInfo pricing={order.pricing} />
                </Stack>
              </Grid>

              {/* Right Column - Products & History */}
              <Grid
                item
                xs={12}
                md={8}
              >
                <Stack spacing={3}>
                  {/* Products Card */}
                  <TableDrugsOrder
                    pricing={order.pricing}
                    drugs={order.drugs}
                  />

                  {/* Status History Card */}
                  {order.statusHistory && order.statusHistory.length > 0 && (
                    <StatusHistory statusHistory={order.statusHistory} />
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>

        {/* Actions */}
        <DialogActions
          sx={{
            px: 3,
            py: 2,
            bgcolor: "#f8f9fa",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          {/* Close */}
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              borderRadius: "8px",
              borderColor: "#5E5ADB",
              color: "#5E5ADB",
              "&:hover": {
                borderColor: "#4A47B1",
                bgcolor: "#5E5ADB10",
              },
            }}
          >
            Close
          </Button>

          {/* Print */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#5E5ADB",
              "&:hover": {
                bgcolor: "#4A47B1",
              },
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(94, 90, 219, 0.2)",
            }}
          >
            Print Order
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
