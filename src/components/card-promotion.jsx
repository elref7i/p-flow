/* eslint-disable react/prop-types */
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useThemeConstants } from "../lib/constants/theme.constant";
import { useAddToCart } from "../lib/hooks/use-cart";
import BadgeStock from "./Common/badge-stock";
import { getStockStatus } from "../lib/utils/status-stock";
import BadgePromtion from "./Common/badge-promtion";
import { formatNumber } from "../lib/utils/formateNumber";
import { useNavigate } from "react-router-dom";

export default function CardPromotion({ drug }) {
  //Mutation
  const { mutate, isLoading: loadingAddCard } = useAddToCart();

  // Navigation
  const navigate = useNavigate();

  //Themes
  const { textPrimary, textSecondary, cardBackground, borderFocus } =
    useThemeConstants();

  const stockStatus = getStockStatus(drug?.stock);

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        boxShadow: 8,
        background: cardBackground,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          boxShadow: 7,
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
        <BadgePromtion promotion={drug.promotion} />

        {/* Stock Status */}
        <BadgeStock stockStatus={stockStatus} />
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Typography
          onClick={() => navigate(`/pharmacy/drugdetails/${drug._id}`)}
          variant="h5"
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
          {drug.name}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Avatar
            src={drug.inventory?.image || "/placeholder.svg?height=32&width=32"}
            alt={drug.inventory?.name || "Pharmacy"}
            sx={{
              width: 35,
              height: 35,
              mr: 1,
              border: `2px solid ${borderFocus}`,
            }}
          />
          <Typography
            variant="h6"
            onClick={() =>
              navigate(`/pharmacy/inventoryprofile/${drug.inventory._id}`)
            }
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              color: alpha(textSecondary, 0.8),
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              "&:hover": {
                color: textPrimary,
              },
            }}
          >
            {drug.inventory?.name || "Unknown Pharmacy"}
          </Typography>
        </Box>

        {/* Price Section */}
        <Box>
          <Stack spacing={1.5} py={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color={textSecondary}>
                Consumer Price:
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: textSecondary,
                }}
              >
                {formatNumber(drug.discountedPrice)} L.E
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" color={textSecondary}>
                Pharmacy Price:
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  textDecoration: drug.discount > 0 ? "line-through" : "none",
                  opacity: drug.discount > 0 ? 0.6 : 1,
                  color: textSecondary,
                }}
              >
                {formatNumber(drug.price)} L.E
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Button
          disabled={loadingAddCard || drug.stock <= 0}
          onClick={() => {
            mutate({
              drugId: drug._id,
              quantity: 1,
            });
          }}
          variant="contained"
          fullWidth
          startIcon={
            loadingAddCard ? <CircularProgress size={18} /> : <ShoppingCart />
          }
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
          {drug.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardContent>
    </Card>
  );
}
