/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  Button,
  useTheme,
  alpha,
  Avatar,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion } from "framer-motion";
import DistanceIndicator from "../../../pages/Inventory/InventoryProfile/components/DistanceIndicator";
import { useAddToCart } from "../../../lib/hooks/useCartAction";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../../lib/utils/formateNumber";
const DrugCard = ({ dataInfo: drug, checkPage }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const addToCartMutation = useAddToCart();
  return (
    <Box
      component={motion.div}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: "background.paper",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Category Badge */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          bgcolor: alpha(theme.palette.primary.light, 0.2),
          color: theme.palette.primary.main,
          borderRadius: 10,
          px: 1.5,
          py: 0.5,
          fontSize: "0.75rem",
          fontWeight: "medium",
        }}
      >
        {drug.discount}
      </Box>

      {/* Drug Name and Active Ingredient */}
      <Box sx={{ mb: 2, mt: 0.5 }}>
        <Typography
          variant="h6"
          onClick={() => {
            navigate(`/pharmacy/drugdetails/${drug._id}`);
          }}
          fontWeight="bold"
          sx={{
            cursor: "pointer",
            lineHeight: 1.2,
            maxWidth: "300px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {drug.name}
        </Typography>
        {/* <Typography
          variant="body2"
          color="text.secondary"
        >
          {drug.activeIngredient}
        </Typography> */}
      </Box>

      {/* Inventory Information */}
      {checkPage && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            pb: 1.5,
            borderBottom: `1px dashed ${alpha(theme.palette.divider, 0.5)}`,
          }}
        >
          <Avatar
            src={drug.inventory?.image || "/placeholder.svg?height=32&width=32"}
            alt={drug.inventory?.name || "Pharmacy"}
            sx={{
              width: 24,
              height: 24,
              mr: 1,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            }}
          />
          <Typography
            variant="caption"
            onClick={() => navigate(`/inventoryprofile/${drug.inventory._id}`)}
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "20px",
              color: theme.palette.text.secondary,
              maxWidth: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {drug.inventory?.name || "Unknown Pharmacy"}
          </Typography>
        </Box>
      )}

      {/* Dosage and Units */}
      {/* <Box sx={{ display: "flex", gap: 2, mb: 2 }}> */}
      {/* <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="span"
            sx={{
              color: "text.secondary",
              mr: 1,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <DuoRounded />
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {drug.dosage}
          </Typography>
        </Box> */}
      {/* <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="span"
            sx={{
              color: "text.secondary",
              mr: 1,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <DuoRounded />
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {drug.units} units
          </Typography>
        </Box> */}
      {/* </Box> */}

      {/* Distance Indicator */}
      {checkPage && <DistanceIndicator distance={drug.distanceInKm} />}

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
            ${formatNumber(drug.discountedPrice)}
          </Typography>
          {drug.discount > 0 && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                textDecoration: "line-through",
                display: "block",
                mt: -0.5,
              }}
            >
              ${formatNumber(drug.price)}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button
            onClick={() => {
              addToCartMutation.mutate({
                drugId: drug._id,
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
      </Box>
    </Box>
  );
};

export default DrugCard;
