/* eslint-disable react/prop-types */
import { Chip, Stack, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";

export default function OrderHeader({ status, paymentStatus, createdAt }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
    >
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Chip sx={{ fontWeight: "bold" }} label={status} color="success" />
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
  );
}
