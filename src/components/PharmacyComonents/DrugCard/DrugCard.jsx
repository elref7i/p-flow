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
import DistanceIndicator from "../../../pages/Inventory/InventoryProfile/_components/DistanceIndicator";
import { useAddToCart } from "../../../lib/hooks/useCartAction";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../../lib/utils/formateNumber";
import { useTypeContext } from "../../../context/UserType.context";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import { DiscountBadge } from "../../Common/Loading/DiscountBadge";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const DrugCard = ({ dataInfo: drug, checkPage, checkdistance }) => {
  //Navigation
  const navigate = useNavigate();

  //Context
  const { role } = useTypeContext();

  //Mutation
  const addToCartMutation = useAddToCart();

  // console.log(drug);

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
      {drug.discount > 0 && (
        <DiscountBadge
          label={`${drug.discount.toFixed(0)}%`}
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
              return navigate(`/pharmacy/drugdetails/${drug._id}`);
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
          {drug.name}
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
            onClick={() =>
              navigate(`/pharmacy/inventoryprofile/${drug.inventory._id}`)
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

      <Box sx={{ background: cardDetailsBackground }}>
        {/* Distance Indicator */}
        {checkPage && checkdistance && (
          <DistanceIndicator distance={drug.distanceInKm} />
        )}

        {/* Price and Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
            >
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
          {role === "pharmacy" && (
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
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DrugCard;
