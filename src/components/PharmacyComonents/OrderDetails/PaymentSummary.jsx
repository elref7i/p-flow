/* eslint-disable react/prop-types */
import { Box, Grid, Typography, useTheme } from "@mui/material";

export default function PaymentSummary({ pricing }) {
  const theme = useTheme();

  return (
    <Box
      boxShadow={1}
      p={2}
      borderRadius={2}
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : "#ffebee",
        color: theme.palette.text.primary,
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
  );
}
