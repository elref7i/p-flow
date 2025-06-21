/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { calculateSavings } from "../pages/Pharmacy/HomePharmacy/utils/formate-data";
import { ShoppingCart } from "@mui/icons-material";
import { useThemeConstants } from "../lib/constants/theme.constant";
import { useAddToCart } from "../lib/hooks/useCartAction";
import BadgeStock from "./Common/badge-stock";
import { getStockStatus } from "../lib/utils/status-stock";
import BadgePromtion from "./Common/badge-promtion";
import { formatPrice } from "../lib/utils/price-formate";

export default function CardPromotion({ medicine }) {
  //Mutation
  const { mutate, isLoading: loadingAddCard } = useAddToCart();

  //Themes
  const { textPrimary, textScondary } = useThemeConstants();

  const stockStatus = getStockStatus(medicine?.stock);
  const savings = calculateSavings(medicine?.price, medicine?.discountedPrice);

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          transform: "translateY(-10px) scale(1.02)",
          "& .medicine-image": {
            transform: "scale(1.1)",
          },
          "& .promotion-overlay": {
            opacity: 0.9,
          },
        },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "relative",
          height: 60,
          overflow: "hidden",
        }}
      >
        {/* Gradient Overlay */}
        <Box
          className="promotion-overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(33, 150, 243, 0.8), rgba(33, 203, 243, 0.8))",
            opacity: 0.7,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Promotion Badge */}
        <BadgePromtion medicine={medicine} />

        {/* Stock Status */}
        <BadgeStock stockStatus={stockStatus} />
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          fontWeight={700}
          gutterBottom
          sx={{
            color: textPrimary,
            mb: 1,
            lineHeight: 1.2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {medicine.name}
        </Typography>

        {/* Pricing */}
        <Box mb={2}>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            mb={1}
          >
            <Typography
              variant="h6"
              sx={{
                color: textPrimary,
                fontWeight: 700,
              }}
            >
              {formatPrice(medicine.discountedPrice)}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: textScondary,
                textDecoration: "line-through",
              }}
            >
              {formatPrice(medicine.price)}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: textPrimary,
              fontWeight: 600,
            }}
          >
            Save {formatPrice(savings)}
          </Typography>
        </Box>
        <Button
          onClick={() => {
            mutate({
              drugId: medicine._id,
              quantity: 1,
            });
          }}
          variant="contained"
          fullWidth
          startIcon={
            loadingAddCard ? <CircularProgress size={18} /> : <ShoppingCart />
          }
          disabled={medicine.stock === 0}
          sx={{
            borderRadius: 3,
            py: 1.2,
            fontWeight: 600,
            textTransform: "none",
            background: "linear-gradient(45deg, #2196F3, #21CBF3)",
            "&:hover": {
              opacity: 0.9,
              transform: "translateY(-2px)",
            },
            "&:disabled": {
              background: "grey.300",
              color: "grey.500",
            },
          }}
        >
          {medicine.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardContent>
    </Card>
  );
}
