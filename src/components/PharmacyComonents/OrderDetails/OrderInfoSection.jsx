/* eslint-disable react/prop-types */
import { Box, Grid, Stack, Typography, Button, useTheme } from "@mui/material";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function OrderInfoSection({ inventory, delivery }) {
  const theme = useTheme();

  const boxStyle = {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.paper
        : "#f0f7ff",
    color: theme.palette.text.primary,
    boxShadow: "0px 2px 7px rgba(103, 161, 247, 0.3)",
  };

  const iconColor = theme.palette.primary.main;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box p={2} borderRadius={2} sx={boxStyle}>
          <Typography variant="h6" gutterBottom>
            Inventory Information
          </Typography>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Inventory2Icon fontSize="small" sx={{ color: iconColor }} />
              <Typography>Name: {inventory?.name || "N/A"}</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocalPharmacyIcon fontSize="small" sx={{ color: iconColor }} />
              <Typography>ID: {inventory?._id}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box p={2} borderRadius={2} sx={boxStyle}>
          <Typography variant="h6" gutterBottom>
            Delivery Information
          </Typography>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOnIcon fontSize="small" sx={{ color: iconColor }} />
              <Typography>
                Location:
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ ml: 1 }}
                  onClick={() => {
                    const [lng, lat] = delivery?.location?.coordinates || [];
                    if (lat && lng) {
                      const url = `https://www.google.com/maps?q=${lat},${lng}`;
                      window.open(url, "_blank");
                    }
                  }}
                >
                  View on Map
                </Button>
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <LocalShippingIcon fontSize="small" sx={{ color: iconColor }} />
              <Typography>Contact Phone: {delivery?.contactPhone}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
