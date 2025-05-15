/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Typography } from "@mui/material";
import List, { ListItem } from "./common/list";
import { LocalShipping, LocationOn, Phone } from "@mui/icons-material";

export default function DeliveryInfo({ delivery }) {
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
            value={delivery.contactPhone}
          />
          <ListItem
            icon={<LocationOn fontSize="small" />}
            label="Coordinates"
            value={`${delivery.location.coordinates[0]}, ${delivery.location.coordinates[1]}`}
          />
        </List>
      </CardContent>
    </Card>
  );
}
