/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  Button,
  alpha,
  Avatar,
  CircularProgress,
  Stack,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion } from "framer-motion";
import DistanceIndicator from "../../../pages/Inventory/InventoryProfile/_components/DistanceIndicator";
import { useAddToCart } from "../../../lib/hooks/use-cart";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../../lib/utils/formateNumber";
import { useTypeContext } from "../../../context/UserType.context";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import { buttonText } from "../../../lib/utils/status-stock";
import { BadgePromtionTwo } from "../../Common/badge-promtion";

const DrugCard = ({
  dataInfo: drug,
  checkPage,
  checkdistance,
  checkActive,
}) => {
  //Navigation
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

  // Function to get promotion text

  // Check if item has active promotion

  return (
    <Box position={"relative"}>
      {checkActive && drug.promotion.isActive && (
        <BadgePromtionTwo promotion={drug.promotion} />
      )}
      <Box
        elevation={0}
        component={motion.div}
        sx={{
          backgroundImage: "none",
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
        {/* Header Section */}
        <Box
          sx={{
            p: 2.5,
            background: alpha(cardActiveBackground, 0.4),
            borderBottom: `1px solid ${border}`,
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h5"
            onClick={() => {
              if (role === "pharmacy") {
                return navigate(`/pharmacy/drugdetails/${drug._id}`);
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
            {drug.name}
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
                  drug.inventory?.image || "/placeholder.svg?height=32&width=32"
                }
                alt={drug.inventory?.name || "Pharmacy"}
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
                <Typography
                  variant="h6"
                  color={textSecondary}
                >
                  Pharmacy Price:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    opacity: drug.discount > 0 ? 0.6 : 1,
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
                <Typography
                  variant="h6"
                  color={textSecondary}
                >
                  Consumer Price:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: textSecondary,
                    textDecoration: drug.discount > 0 ? "line-through" : "none",
                  }}
                >
                  {formatNumber(drug.price)} L.E
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Distance Indicator */}
          {checkPage && checkdistance && (
            <Box sx={{ mt: 1.5 }}>
              <DistanceIndicator distance={drug.distanceInKm} />
            </Box>
          )}
          {/* Add to Cart Button */}
          {role === "pharmacy" && (
            <Box sx={{ mt: 3 }}>
              <Button
                disabled={isLoading || drug.stock <= 0}
                onClick={() => {
                  mutate({
                    drugId: drug._id,
                    quantity: 1,
                  });
                }}
                variant="contained"
                color="primary"
                fullWidth
                startIcon={
                  isLoading ? (
                    <CircularProgress
                      size={16}
                      color="inherit"
                    />
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
                {buttonText(drug.stock)}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DrugCard;
