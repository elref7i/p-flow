/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import List, { ListItem } from "./common/list";
import { LocalShipping } from "@mui/icons-material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

export default function PricingInfo({ pricing }) {
  const { cardBackground, headerBackground, border, borderHover } =
    useThemeConstants();

  return (
    <Card
      elevation={8}
      sx={{
        background: cardBackground,
        borderRadius: 3,
        border: `1px solid ${border}`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: headerBackground,
          px: 3,
          py: 2,
          borderBottom: `1px solid ${borderHover}`,
          display: "flex",
          alignItems: "center",
          gap: 1,
          ":hover": {
            boxShadow: 6,
          },
        }}
      >
        {/* <LocalAtmIcon fontSize="small" color="primary" /> */}
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Pricing Information
        </Typography>
      </Box>
      <CardContent sx={{ p: 0 }}>
        <List>
          <ListItem
            icon={<LocalAtmIcon fontSize="small" />}
            label="Subtotal"
            value={`${pricing.subtotal.toFixed(2)} L.E`}
          />
          <ListItem
            icon={<LocalShipping fontSize="small" />}
            label="Shipping Cost"
            value={`${pricing.shippingCost.toFixed(2)} L.E`}
          />
          <Divider sx={{ mx: 3 }} />
          <ListItem
            icon={<LocalAtmIcon fontSize="small" />}
            label="Total"
            value={`${pricing.total.toFixed(2)} L.E`}
            bold
          />
        </List>
      </CardContent>
    </Card>
  );
}
