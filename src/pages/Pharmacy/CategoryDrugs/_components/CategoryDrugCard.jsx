/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  Button,
  useTheme,
  alpha,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTypeContext } from "../../../../context/UserType.context";
import { useAddToCart } from "../../../../lib/hooks/useCartAction";
import { motion } from "framer-motion";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { formatNumber } from "../../../../lib/utils/formateNumber";
import { DiscountBadge } from "../../../../components/Common/Loading/DiscountBadge";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function CategoryDrugCard({ dataInfo: item, checkPage }) {
  const navigate = useNavigate();

  //Context
  const { role } = useTypeContext();

  //Mutation
  const addToCartMutation = useAddToCart();

  //Theme
  const theme = useTheme();
  const {
    cardBackground,
    cardDetailsBackground,
    textPrimary,
    textSecondary,
    shadow2,
    typography,
  } = useThemeConstants();

  return (
    <Box
      component={motion.div}
      whileHover={{ y: -3, boxShadow: shadow2 }}
      transition={{ type: "spring", stiffness: 300 }}
      sx={{
        p: 2,
        borderRadius: 2,
        background: cardBackground,
        boxShadow: shadow2,
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        position: "relative",
        // overflow: "hidden",
        color: textPrimary,
        fontSize: typography.h1.fontSize,
        fontWeight: typography.h1.fontWeight,
        lineHeight: typography.h1.lineHeight,
      }}
    >
      {/* Category Badge */}
      {item.discount > 0 && (
        <DiscountBadge
          label={`${item.discount.toFixed(0)}%`}
          color="error"
          size="small"
          icon={<LocalOfferIcon />}
        />
      )}

      {/* Drug Name and Active Ingredient */}
      <Box sx={{ mb: 2, mt: 0.5 }}>
        <Typography
          variant="h6"
          onClick={() => {
            if (role === "pharmacy") {
              return navigate(`/pharmacy/drugdetails/${item._id}`);
            }
          }}
          fontWeight="bold"
          sx={{
            cursor: role === "pharmacy" ? "pointer" : "auto",
            lineHeight: 1.2,
            maxWidth: "250px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {item.name}
        </Typography>
      </Box>

      {/* Inventory Information */}
      {checkPage && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            pb: 1.5,
          }}
        >
          <Avatar
            src={item.inventory?.image || "/placeholder.svg?height=32&width=32"}
            alt={item.inventory?.name || "Pharmacy"}
            sx={{
              width: 24,
              height: 24,
              mr: 1,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            }}
          />
          <Typography
            variant="caption"
            onClick={() =>
              navigate(`/pharmacy/inventoryprofile/${item.inventory._id}`)
            }
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "20px",
              color: textSecondary,
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {item.inventory?.name || "Unknown Pharmacy"}
          </Typography>
        </Box>
      )}

      <Box sx={{ background: cardDetailsBackground }}>
        {/* Price and Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              ${formatNumber(item.discountedPrice)}
            </Typography>
            {item.discount > 0 && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  textDecoration: "line-through",
                  display: "block",
                  mt: -0.5,
                }}
              >
                ${formatNumber(item.price)}
              </Typography>
            )}
          </Box>
          {role === "pharmacy" && (
            <Box sx={{ display: "flex" }}>
              <Button
                onClick={() => {
                  addToCartMutation.mutate({
                    drugId: item._id,
                    quantity: 1,
                  });
                }}
                variant="contained"
                color="primary"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  borderRadius: 1,
                  textTransform: "none",
                  boxShadow: "none",
                }}
              >
                Add to Cart
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
