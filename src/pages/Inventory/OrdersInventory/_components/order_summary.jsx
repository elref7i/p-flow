/* eslint-disable react/prop-types */
import { AttachMoney, Receipt } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  getPaymentStatusColor,
  getStatusColor,
  getStatusIcon,
} from "../utils/status_functions";

export default function OrderSummary({ order }) {
  return (
    <Grid
      container
      spacing={3}
      sx={{ mb: 4 }}
    >
      {/* Order ID Card */}
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            height: "100%",
            transition: "all 0.3s",
            "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.08)" },
          }}
        >
          <CardContent>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Avatar
                sx={{
                  bgcolor: "#EBF2FF",
                  color: "#5E5ADB",
                  width: 48,
                  height: 48,
                }}
              >
                <Receipt />
              </Avatar>
              <Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Order Number
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
                  noWrap
                >
                  {order.orderNumber}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      {/* Status Card */}
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            height: "100%",
            transition: "all 0.3s",
            "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.08)" },
          }}
        >
          <CardContent>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Avatar
                sx={{
                  bgcolor: `${getStatusColor(order.status)}20`,
                  color: getStatusColor(order.status),
                  width: 48,
                  height: 48,
                }}
              >
                {getStatusIcon(order.status)}
              </Avatar>
              <Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Order Status
                </Typography>
                <Chip
                  label={order.status}
                  size="small"
                  sx={{
                    bgcolor: `${getStatusColor(order.status)}20`,
                    color: getStatusColor(order.status),
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      {/* Payment Status Card */}
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            height: "100%",
            transition: "all 0.3s",
            "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.08)" },
          }}
        >
          <CardContent>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Avatar
                sx={{
                  bgcolor: `${getPaymentStatusColor(order.paymentStatus)}20`,
                  color: getPaymentStatusColor(order.paymentStatus),
                  width: 48,
                  height: 48,
                }}
              >
                <AttachMoney />
              </Avatar>
              <Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Payment Status
                </Typography>
                <Chip
                  label={order.paymentStatus}
                  size="small"
                  sx={{
                    bgcolor: `${getPaymentStatusColor(order.paymentStatus)}20`,
                    color: getPaymentStatusColor(order.paymentStatus),
                    fontWeight: "bold",
                    mt: 0.5,
                  }}
                />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      {/* Total Card */}
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            border: "1px solid #e0e0e0",
            height: "100%",
            bgcolor: "#5E5ADB10",
            transition: "all 0.3s",
            "&:hover": { boxShadow: "0 4px 20px rgba(0,0,0,0.08)" },
          }}
        >
          <CardContent>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Avatar
                sx={{
                  bgcolor: "#5E5ADB",
                  color: "white",
                  width: 48,
                  height: 48,
                }}
              >
                <AttachMoney />
              </Avatar>
              <Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Total Amount
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    color: "#5E5ADB",
                    fontSize: "1.1rem",
                  }}
                >
                  ${order.pricing.total.toFixed(2)}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
