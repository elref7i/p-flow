/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  IconButton,
  Button,
  Tooltip,
  Snackbar,
  Alert,
  Divider,
  Dialog,
} from "@mui/material";
import LoadingSpinner from "../../Common/Loading/LoadingSpinner";
import { formatNumber } from "../../../lib/utils/formateNumber";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  useRemoveDrug,
  useRemoveInventory,
  useUpdateCartItem,
} from "../../../lib/hooks/useCartAction";
import { useState } from "react";
import { useGetAllInventoriesQuery } from "../../../lib/hooks/pharmacy.action";
import { useTypeContext } from "../../../context/UserType.context";
import { useQueryClient } from "@tanstack/react-query";

export default function CartItem({
  inventoryInfo,
  onReadyToBuy,
  selectedInventory,
  setSelectedInventory,
}) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const navigate = useNavigate();
  const { token } = useTypeContext();
  const removeInventoryMutation = useRemoveInventory();
  const removeDrugMutation = useRemoveDrug();
  const updateQuantityMutation = useUpdateCartItem();
  const queryClient = useQueryClient();

  const [showWarning, setShowWarning] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const { data } = useGetAllInventoriesQuery({ token });
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
              data: {
                ...old.data,
                inventories: [],
              },
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
        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        backgroundColor: isDarkMode ? "#0e1a2b" : "#f9f9f9",
        width: "100%",
        color: isDarkMode ? "#ffffff" : "#000000",
        boxShadow: "0px 3px 10px rgba(103, 161, 247, 0.3)",
        mb: { xs: 2, sm: 2.5 },
        mt: { xs: 2, sm: 3.5 },
      }}
    >
      {/* Inventory Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 1,
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h6"
          onClick={() => navigate(`/pharmacy/inventoryprofile/${inventory.id}`)}
          sx={{
            cursor: "pointer",
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
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
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Drugs */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
          },
          gap: 2,
          maxHeight: { xs: 320, sm: 260, md: 200 },
          overflowY: "auto",
          pr: { xs: 1, sm: 2 },
          mb: 2.5,
        }}
      >
        {drugs.map(({ drug, quantity, price }) => {
          const drugId = drug.id;

          return (
            <Box
              key={drugId}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                borderRadius: 2,
                px: { xs: 1.5, sm: 2 },
                py: { xs: 1, sm: 1.5 },
                minWidth: { xs: "auto", sm: 300 },
                backgroundColor: isDarkMode ? "#1e293b" : "#dddddd",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Tooltip title={drug.name} arrow>
                <Typography
                  variant="body1"
                  onClick={() => navigate(`/pharmacy/drugdetails/${drugId}`)}
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    wordBreak: "break-word",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  {drug.name}
                </Typography>
              </Tooltip>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: 11, sm: 12 },
                    fontWeight: "bold",
                    color: isDarkMode ? "#ccc" : "#555",
                  }}
                >
                  Price: {formatNumber(price)} EGP
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    size="small"
                    onClick={() =>
                      updateQuantityMutation.mutate({
                        drugId,
                        quantity: quantity + 1,
                      })
                    }
                  >
                    <AddCircleOutlineIcon
                      sx={{
                        color: isDarkMode ? "#90caf9" : "#1976d2",
                        fontSize: { xs: "1.2rem", sm: "1.5rem" },
                      }}
                    />
                  </IconButton>

                  <Typography
                    mx={1}
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      minWidth: "20px",
                      textAlign: "center",
                    }}
                  >
                    {quantity}
                  </Typography>

                  <IconButton
                    size="small"
                    onClick={() =>
                      updateQuantityMutation.mutate({
                        drugId,
                        quantity: quantity - 1,
                      })
                    }
                  >
                    <RemoveCircleOutlineIcon
                      sx={{
                        color: isDarkMode ? "#90caf9" : "#1976d2",
                        fontSize: { xs: "1.2rem", sm: "1.5rem" },
                      }}
                    />
                  </IconButton>

                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => removeDrugMutation.mutate({ drugId })}
                  >
                    <CloseIcon
                      sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Bottom Actions */}
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          mt: { xs: 2, sm: 4 },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" },
            bgcolor: "#007bff",
            color: "white",
            px: { xs: 2, sm: 2.5 },
            py: { xs: 1.25, sm: 1.5 },
            borderRadius: 2,
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <LocalAtmIcon sx={{ mr: 1, fontSize: { xs: 18, sm: 20 } }} />
          <Typography variant={{ xs: "subtitle1", sm: "h6" }} fontWeight="600">
            Total Price : {formatNumber(totalInventoryPrice)} EGP
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2 },
            width: { xs: "100%", sm: "auto" },
            flexDirection: { xs: "column", xxs: "row" },
            "@media (max-width: 400px)": {
              flexDirection: "column",
            },
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: "#1976d2",
              color: "#1976d2",
              fontWeight: 600,
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              flex: { xs: 1, sm: "none" },
              "&:hover": {
                backgroundColor: "#e3f2fd",
              },
            }}
            onClick={() => navigate("/pharmacy/drugs")}
          >
            Buy More
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
              flex: { xs: 1, sm: "none" },
            }}
            onClick={() => {
              if (totalInventoryPrice < `${minimumOrderValue}`) {
                setShowWarning(true);
                return;
              }
              onReadyToBuy();
            }}
          >
            Ready to buy
          </Button>
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={showWarning}
        autoHideDuration={3000}
        onClose={() => setShowWarning(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="warning" onClose={() => setShowWarning(false)}>
          Your Total Order must be at least {minimumOrderValue} L.E to proceed.
        </Alert>
      </Snackbar>

      {/* Confirm Delete Dialog */}
      <Dialog
        open={openConfirmDialog}
        onClose={() => setOpenConfirmDialog(false)}
      >
        <Box sx={{ p: 3, minWidth: 300 }}>
          <Typography variant="h6" mb={2}>
            Confirm Deletion
          </Typography>
          <Typography variant="body2" mb={3}>
            Are you sure you want to remove this inventory from your cart?
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button
              variant="outlined"
              onClick={() => setOpenConfirmDialog(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleRemoveInventory}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
