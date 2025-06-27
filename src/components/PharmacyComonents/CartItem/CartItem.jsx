/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  IconButton,
  Button,
  Snackbar,
  Alert,
  Dialog,
  Stack,
} from "@mui/material";
import LoadingSpinner from "../../Common/Loading/LoadingSpinner";
import { formatNumber } from "@/lib/utils/formateNumber";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CloseIcon from "@mui/icons-material/Close";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTypeContext } from "@/context/UserType.context";
import { useQueryClient } from "@tanstack/react-query";
import {
  useRemoveDrug,
  useRemoveInventory,
  useUpdateCartItem,
} from "@/lib/hooks/use-cart";
import { useGetAllInventoriesQuery } from "../../../lib/hooks/use-pharmacy";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function CartItem({
  inventoryInfo,
  onReadyToBuy,
  selectedInventory,
  setSelectedInventory,
}) {
  const [showWarning, setShowWarning] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const navigate = useNavigate();
  const { token } = useTypeContext();
  const removeInventoryMutation = useRemoveInventory();
  const removeDrugMutation = useRemoveDrug();
  const updateQuantityMutation = useUpdateCartItem();
  const queryClient = useQueryClient();
  const { data } = useGetAllInventoriesQuery({ token });

  const {
    textPrimary,
    cardDetailsBackground,
    cardActiveBackground,
    textSecondary,
    backgroundBlue,
    buttonText,
  } = useThemeConstants();

  const minimumOrderValue = data?.inventories.find(
    (inv) => inv._id === inventoryInfo.inventory.id
  )?.minimumOrderValue;

  if (!inventoryInfo || !inventoryInfo.inventory || !inventoryInfo.drugs) {
    return <LoadingSpinner />;
  }

  const { totalInventoryPrice, drugs, inventory } = inventoryInfo;

  const handleRemoveInventory = () => {
    setOpenConfirmDialog(false);
    removeInventoryMutation.mutate(
      { inventoryId: inventory.id },
      {
        onSuccess: (data) => {
          const inventories = data?.data?.data?.inventories ?? [];
          if (inventory.id === selectedInventory?.inventory?.id) {
            setSelectedInventory(null);
          }
          if (inventories.length === 0) {
            queryClient.setQueryData(["cart"], (old) => ({
              ...old,
              data: { ...old.data, inventories: [] },
            }));
          } else {
            queryClient.invalidateQueries(["cart"]);
          }
        },
      }
    );
  };

  return (
    <Box
      sx={{
        p: { xs: 1.5, sm: 2, md: 3 },
        borderRadius: 3,
        backgroundColor: cardDetailsBackground,
        width: "100%",
        color: textPrimary,
        boxShadow: 7,
        mb: { xs: 1.5, sm: 2, md: 2.5 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1,
          p: 2,
          backgroundColor: cardDetailsBackground,
          boxShadow: 8,
          borderRadius: 2,
          ":hover": {
            boxShadow: 7,
          },
        }}
      >
        <Typography
          variant="h6"
          onClick={() => navigate(`/pharmacy/inventoryprofile/${inventory.id}`)}
          sx={{
            cursor: "pointer",
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
            wordBreak: "break-word",
          }}
        >
          {inventory.name}
        </Typography>
        <IconButton
          color="error"
          size="small"
          onClick={() => setOpenConfirmDialog(true)}
        >
          <CloseIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr" },
          gridTemplateRows: { xs: "auto", sm: "repeat(2, 1fr)" },
          gap: { xs: 1.5, sm: 2 },
          maxHeight: { xs: 300, sm: 170 },
          overflowY: "auto",
          overflowX: "hidden",
          my: 3,
          pr: 1,
          mb: { xs: 2, sm: 2.5 },
        }}
      >
        {drugs.map(({ drug, quantity, price }) => {
          const drugId = drug.id;
          const hasPromotion = drug?.promotion?.isActive === true;
          return (
            <Box
              key={drugId}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                px: { xs: 1.5, sm: 2 },
                py: 2,
                background: cardActiveBackground,
                boxShadow: 8,
                ":hover": {
                  boxShadow: 7,
                },
                overflow: "visible",
                mt: hasPromotion ? { xs: 1, sm: 1.5 } : 0,
                mr: hasPromotion ? { xs: 1, sm: 1.5 } : 0,
              }}
            >
              {hasPromotion && (
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: -6, sm: -8 },
                    right: { xs: -6, sm: -8 },
                    transform: "rotate(15deg)",
                    backgroundColor: "#ff4d4f",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: { xs: "0.6rem", sm: "0.7rem" },
                    px: { xs: 1, sm: 1.2 },
                    py: { xs: 0.3, sm: 0.4 },
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 0.2, sm: 0.3 },
                    boxShadow: 8,
                    zIndex: 10,
                    minWidth: "fit-content",
                    whiteSpace: "nowrap",
                  }}
                >
                  <LocalOfferIcon
                    sx={{ fontSize: { xs: 10, sm: 12 }, color: textPrimary }}
                  />
                  {drug.promotion.buyQuantity} + {drug.promotion.freeQuantity}
                </Box>
              )}
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box
                  title={drug.name}
                  arrow
                >
                  <Typography
                    variant="body1"
                    onClick={() => navigate(`/pharmacy/drugdetails/${drugId}`)}
                    sx={{
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                      minWidth: "20px",
                      maxWidth: { sm: "250px", md: "150px" },
                      textWrap: "nowrap",
                      display: "-webkit-box",
                      WebkitLineClamp: { xs: 2, sm: 2 },
                      WebkitBoxOrient: "vertical",
                      lineHeight: 1.2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      mb: 0.5,
                    }}
                  >
                    {drug.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
                      fontWeight: "bold",
                      color: textSecondary,
                      order: { xs: 2, sm: 1 },
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Price: {formatNumber(price)} L.E
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 0.2, sm: 0.3 },
                    order: { xs: 1, sm: 2 },
                    justifyContent: { xs: "center", sm: "flex-end" },
                  }}
                >
                  {" "}
                  <IconButton
                    size="small"
                    onClick={() =>
                      updateQuantityMutation.mutate({
                        drugId,
                        quantity: quantity - 1,
                      })
                    }
                    sx={{ p: { xs: 0.3, sm: 0.5 } }}
                  >
                    <RemoveCircleOutlineIcon
                      sx={{ fontSize: { xs: 16, sm: 18 } }}
                    />
                  </IconButton>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      mx: { xs: 0.5, sm: 0.8 },
                    }}
                  >
                    {quantity}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() =>
                      updateQuantityMutation.mutate({
                        drugId,
                        quantity: quantity + 1,
                      })
                    }
                    sx={{ p: { xs: 0.3, sm: 0.5 } }}
                  >
                    <AddCircleOutlineIcon
                      sx={{ fontSize: { xs: 16, sm: 18 } }}
                    />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => removeDrugMutation.mutate({ drugId })}
                    sx={{ p: { xs: 0.3, sm: 0.5 } }}
                  >
                    <CloseIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
                  </IconButton>
                </Box>
              </Stack>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          gap: { xs: 2, sm: 2 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: backgroundBlue,
            color: buttonText,
            px: { xs: 1.5, sm: 2 },
            py: { xs: 1, sm: 1 },
            borderRadius: 2,
            order: { xs: 2, sm: 1 },
          }}
        >
          <LocalAtmIcon sx={{ mr: 1, fontSize: { xs: 20, sm: 24 } }} />
          <Typography
            fontWeight={600}
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Total Price : {formatNumber(totalInventoryPrice)} L.E
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1.5, sm: 2 },
            flexDirection: { xs: "row", sm: "row" },
            justifyContent: { xs: "space-between", sm: "flex-end" },
            order: { xs: 1, sm: 2 },
          }}
        >
          <Button
            variant="outlined"
            onClick={() => navigate("/pharmacy/drugs")}
            sx={{
              flex: { xs: 1, sm: "none" },
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              px: { xs: 2, sm: 3 },
            }}
          >
            Buy More
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              if (totalInventoryPrice < `${minimumOrderValue}`) {
                setShowWarning(true);
                return;
              }
              onReadyToBuy();
            }}
            sx={{
              flex: { xs: 1, sm: "none" },
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              px: { xs: 2, sm: 3 },
            }}
          >
            Ready to buy
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={showWarning}
        autoHideDuration={3000}
        onClose={() => setShowWarning(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="warning"
          onClose={() => setShowWarning(false)}
        >
          Your Total Order must be at least {minimumOrderValue} L.E to proceed.
        </Alert>
      </Snackbar>

      <Dialog
        open={openConfirmDialog}
        onClose={() => setOpenConfirmDialog(false)}
        fullWidth
        maxWidth="xs"
      >
        <Box sx={{ p: { xs: 2, sm: 3 }, minWidth: { xs: 280, sm: 300 } }}>
          <Typography
            variant="h6"
            mb={2}
            sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
          >
            Confirm Deletion
          </Typography>
          <Typography
            variant="body2"
            mb={3}
            sx={{ fontSize: { xs: "0.85rem", sm: "0.875rem" } }}
          >
            Are you sure you want to remove this inventory from your cart?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: { xs: 1, sm: 1 },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setOpenConfirmDialog(false)}
              sx={{
                order: { xs: 2, sm: 1 },
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleRemoveInventory}
              sx={{
                order: { xs: 1, sm: 2 },
                fontSize: { xs: "0.8rem", sm: "0.875rem" },
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
