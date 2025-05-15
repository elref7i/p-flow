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
  Divider,
  Card,
  CardContent,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Visibility,
  Close,
  LocalShipping,
  AttachMoney,
  Phone,
  LocationOn,
  CalendarToday,
  Receipt,
  ShoppingBag,
  Person,
} from "@mui/icons-material";
import StepStatus from "./step_status";
import OrderSummary from "./order_summary";
import TableDrugsOrder from "./table_drugs_order";
import StatusHistory from "./status_history";

export default function OrderDetailsModal({ order }) {
  //States
  const [open, setOpen] = useState(false);
  console.log("refai");

  console.log(order);

  //Themes
  const theme = useTheme();

  //Variables
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //Functions
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Format date to a readable format
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Custom List Item Component
  const List = ({ children }) => {
    return <Box sx={{ py: 1 }}>{children}</Box>;
  };

  const ListItem = ({ icon, label, value, bold = false }) => {
    return (
      <Box
        sx={{
          display: "flex",
          px: 3,
          py: 1.5,
          borderBottom: "1px solid #f0f0f0",
          "&:last-child": {
            borderBottom: "none",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "40%" }}>
          <Box sx={{ color: "#5E5ADB", mr: 1.5 }}>{icon}</Box>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {label}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontWeight: bold ? "bold" : "regular",
            color: bold ? "#5E5ADB" : "text.primary",
            flex: 1,
          }}
        >
          {value}
        </Typography>
      </Box>
    );
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
          bgcolor: "#5E5ADB",
          "&:hover": {
            bgcolor: "#4A47B1",
          },
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(94, 90, 219, 0.2)",
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
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
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
            bgcolor: "#5E5ADB",
            color: "white",
            py: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Receipt fontSize="medium" />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Order Details
            </Typography>
          </Box>
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{ color: "white" }}
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
                  {/* Basic Info Card */}
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      border: "1px solid #e0e0e0",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#f8f9fa",
                        px: 3,
                        py: 2,
                        borderBottom: "1px solid #e0e0e0",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Receipt
                        fontSize="small"
                        color="primary"
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Order Information
                      </Typography>
                    </Box>
                    <CardContent sx={{ p: 0 }}>
                      <List>
                        <ListItem
                          icon={<CalendarToday fontSize="small" />}
                          label="Created Date"
                          value={formatDate(order.createdAt)}
                        />
                        <ListItem
                          icon={<Person fontSize="small" />}
                          label="Inventory"
                          value={order.inventory.name}
                        />
                        <ListItem
                          icon={<ShoppingBag fontSize="small" />}
                          label="Number of Products"
                          value={order.drugs.length}
                        />
                      </List>
                    </CardContent>
                  </Card>

                  {/* Delivery Info Card */}
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      border: "1px solid #e0e0e0",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#f8f9fa",
                        px: 3,
                        py: 2,
                        borderBottom: "1px solid #e0e0e0",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <LocalShipping
                        fontSize="small"
                        color="primary"
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Delivery Information
                      </Typography>
                    </Box>
                    <CardContent sx={{ p: 0 }}>
                      <List>
                        <ListItem
                          icon={<Phone fontSize="small" />}
                          label="Contact Phone"
                          value={order.delivery.contactPhone}
                        />
                        <ListItem
                          icon={<LocationOn fontSize="small" />}
                          label="Coordinates"
                          value={`${order.delivery.location.coordinates[0]}, ${order.delivery.location.coordinates[1]}`}
                        />
                      </List>
                    </CardContent>
                  </Card>

                  {/* Pricing Info Card */}
                  <Card
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      border: "1px solid #e0e0e0",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#f8f9fa",
                        px: 3,
                        py: 2,
                        borderBottom: "1px solid #e0e0e0",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <AttachMoney
                        fontSize="small"
                        color="primary"
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Pricing Information
                      </Typography>
                    </Box>
                    <CardContent sx={{ p: 0 }}>
                      <List>
                        <ListItem
                          icon={<AttachMoney fontSize="small" />}
                          label="Subtotal"
                          value={`$${order.pricing.subtotal.toFixed(2)}`}
                        />
                        <ListItem
                          icon={<LocalShipping fontSize="small" />}
                          label="Shipping Cost"
                          value={`$${order.pricing.shippingCost.toFixed(2)}`}
                        />
                        <Divider sx={{ mx: 3 }} />
                        <ListItem
                          icon={<AttachMoney fontSize="small" />}
                          label="Total"
                          value={`$${order.pricing.total.toFixed(2)}`}
                          bold
                        />
                      </List>
                    </CardContent>
                  </Card>
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
