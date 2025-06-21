/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  Button,
  alpha,
  Avatar,
  CircularProgress,
  Stack,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTypeContext } from "../../../../context/UserType.context";
import { useAddToCart } from "../../../../lib/hooks/useCartAction";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { formatNumber } from "../../../../lib/utils/formateNumber";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import DistanceIndicator from "../../../Inventory/InventoryProfile/_components/DistanceIndicator";
import { buttonText } from "../../../../lib/utils/status-stock";
// import BadgePromtion from "../../../../components/Common/badge-promtion";

export default function CategoryDrugCard({
  dataInfo: item,
  checkPage,
  checkdistance,
}) {
  // navigation
  const navigate = useNavigate();

  //Context
  const { role } = useTypeContext();

  //Mutation
  const { mutate, isLoading } = useAddToCart();

  //Theme

  const {
    cardBackground,
    cardDetailsBackground,
    cardActiveBackground,
    transitionSmooth,
    textSecondary,
    textLink,
    textPrimary,
    border,
  } = useThemeConstants();
  return (
    <Paper
      component={motion.div}
      sx={{
        boxShadow: 8,
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        background: cardBackground,
        transition: transitionSmooth,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ":hover": {
          boxShadow: 7,
        },
      }}
    >
      {/* Stock Status Badge - Using your exact BadgeStock component */}
      {/* <BadgeStock stockStatus={stockStatus} /> */}

      {/* Promotion/Offer Badge */}

      {/* {item.promotion.isActive && <BadgePromtion promotion={item.promotion} />} */}
      {/* Header Section */}
      <Box
        sx={{
          p: 2.5,
          background: alpha(cardActiveBackground, 0.4),
          borderBottom: `1px solid ${border}`,
        }}
      >
        <Typography
          variant="h5"
          onClick={() => {
            if (role === "pharmacy") {
              return navigate(`/pharmacy/drugdetails/${item._id}`);
            }
          }}
          fontWeight="bold"
          sx={{
            cursor: role === "pharmacy" ? "pointer" : "auto",
            lineHeight: 1.2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: textLink,
            mb: 1,
            transition: transitionSmooth,
            "&:hover": {
              color: textLink,
            },
          }}
        >
          {item.name}
        </Typography>

        {/* Inventory Information */}
        {checkPage && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Avatar
              src={
                item.inventory?.image || "/placeholder.svg?height=32&width=32"
              }
              alt={item.inventory?.name || "Pharmacy"}
              sx={{
                width: 35,
                height: 35,
                mr: 1,
                border: `2px solid ${border}`,
              }}
            />
            <Typography
              variant="h6"
              onClick={() =>
                navigate(`/pharmacy/inventoryprofile/${item.inventory._id}`)
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
              {item.inventory?.name || "Unknown Pharmacy"}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Card Content */}
      <Box
        sx={{
          p: 2.5,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          background: cardDetailsBackground,
          justifyContent: "space-between",
        }}
      >
        {/* Price Section */}
        <Box>
          <Stack spacing={1.5}>
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
                ${formatNumber(item.discountedPrice)}
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
                  textDecoration: item.discount > 0 ? "line-through" : "none",
                  opacity: item.discount > 0 ? 0.6 : 1,
                  color: textSecondary,
                }}
              >
                ${formatNumber(item.price)}
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Distance Indicator */}
        {checkPage && checkdistance && (
          <Box sx={{ mt: 1.5 }}>
            <DistanceIndicator distance={item.distanceInKm} />
          </Box>
        )}
        {/* Add to Cart Button */}
        {role === "pharmacy" && (
          <Box sx={{ mt: 3 }}>
            <Button
              disabled={isLoading || item.stock <= 0}
              onClick={() => {
                mutate({
                  drugId: item._id,
                  quantity: 1,
                });
              }}
              variant="contained"
              color="primary"
              fullWidth
              startIcon={
                isLoading ? (
                  <CircularProgress size={16} color="inherit" />
                ) : (
                  <ShoppingCartIcon />
                )
              }
              sx={{
                borderRadius: 2,
                textTransform: "none",
                py: 1,
                fontWeight: 600,
                boxShadow: 2,
                "&:hover": {
                  boxShadow: 3,
                },
              }}
            >
              {buttonText(item.stock)}
            </Button>
          </Box>
        )}
      </Box>
    </Paper>
  );
}
