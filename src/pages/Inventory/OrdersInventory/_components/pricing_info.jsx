/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import List, { ListItem } from "./common/list";
import { AttachMoney, LocalShipping } from "@mui/icons-material";

export default function PricingInfo({ pricing }) {
  return (
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
            value={`$${pricing.subtotal.toFixed(2)}`}
          />
          <ListItem
            icon={<LocalShipping fontSize="small" />}
            label="Shipping Cost"
            value={`$${pricing.shippingCost.toFixed(2)}`}
          />
          <Divider sx={{ mx: 3 }} />
          <ListItem
            icon={<AttachMoney fontSize="small" />}
            label="Total"
            value={`$${pricing.total.toFixed(2)}`}
            bold
          />
        </List>
      </CardContent>
    </Card>
  );
}
