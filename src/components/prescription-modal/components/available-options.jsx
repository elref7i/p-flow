/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { formatPrice } from "../../../lib/utils/price-formate";
import { ShoppingCart } from "@mui/icons-material";

export default function AvailableOptions({ medication }) {
  return (
    <Box>
      <Divider sx={{ my: 2 }} />
      <Typography
        variant="subtitle2"
        fontWeight={600}
        color="success.main"
        gutterBottom
      >
        Available Options:
      </Typography>
      {medication.matchedDrugs.map((drug, drugIndex) => (
        <Paper
          key={drugIndex}
          sx={{
            p: 2,
            mt: 1,
            borderRadius: 2,
            background: "rgba(76, 175, 80, 0.1)",
            border: "1px solid rgba(76, 175, 80, 0.2)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            mb={1}
          >
            <Avatar
              src={drug.inventory?.profileImage}
              sx={{
                width: 32,
                height: 32,
              }}
            />
            <Box flex={1}>
              <Typography
                variant="body2"
                fontWeight={600}
              >
                {drug.name}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
              >
                {drug.inventory?.name} • Stock: {drug.stock}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography
                variant="body2"
                fontWeight={700}
                color="success.main"
              >
                {formatPrice(drug.discountedPrice || drug.price)}
              </Typography>
              {drug.discountedPrice && drug.discountedPrice < drug.price && (
                <Typography
                  variant="caption"
                  sx={{
                    textDecoration: "line-through",
                  }}
                >
                  {formatPrice(drug.price)}
                </Typography>
              )}
            </Box>
          </Stack>
          <Button
            variant="contained"
            size="small"
            startIcon={<ShoppingCart />}
            fullWidth
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Add to Cart
          </Button>
        </Paper>
      ))}
    </Box>
  );
}
