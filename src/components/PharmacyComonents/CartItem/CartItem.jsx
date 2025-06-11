/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  IconButton,
  Button,
  Avatar,
  Tooltip,
  Snackbar,
  Alert,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
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

export default function CartItem({
  inventoryInfo,
  onReadyToBuy,
  onForceEmpty,
}) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const navigate = useNavigate();
  const { token } = useTypeContext();
  const removeInventoryMutation = useRemoveInventory();
  const removeDrugMutation = useRemoveDrug();
  const updateQuantityMutation = useUpdateCartItem();

  const [showWarning, setShowWarning] = useState(false);
  const { data } = useGetAllInventoriesQuery({ token });
  const minimumOrderValue = data?.inventories.find(
    (inv) => inv._id === inventoryInfo.inventory.id
  )?.minimumOrderValue;

  if (!inventoryInfo || !inventoryInfo.inventory || !inventoryInfo.drugs) {
    return <LoadingSpinner />;
  }

  const { totalInventoryPrice, drugs, inventory } = inventoryInfo;

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        backgroundColor: isDarkMode ? "#0e1a2b" : "#F5F5F5",
        width: "100%",
        color: isDarkMode ? "#ffffff" : "#000000",
        boxShadow: "0px 2px 7px rgb(103, 161, 247)",
        mb: 1.5,
        mt: 4,
        "@media (max-width: 600px)": {
          p: 2,
          mb: 3,
        },
      }}
    >
      {/* Inventory Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          {inventory.name}
        </Typography>
        <IconButton
          color="error"
          onClick={() =>
            removeInventoryMutation.mutate(
              { inventoryId: inventory.id },
              {
                onSuccess: (data) => {
                  if (data?.data?.data?.inventories?.length === 0) {
                    onForceEmpty();
                  }
                },
              }
            )
          }
        >
          <Delete />
        </IconButton>
      </Box>

      {/* Drugs */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          maxHeight: 170,
          overflowY: "auto",
          pr: 3,
          mb: 2,
          "@media (max-width: 600px)": {
            gridTemplateColumns: "repeat(1, 1fr)",
            maxHeight: 250,
          },
        }}
      >
        {drugs.map(({ drug, quantity, price }) => {
          const drugId = drug.id;

          return (
            <Box
              key={drugId}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                px: 2,
                py: 1.5,
                width: "fit-content",
                minWidth: 300,
                backgroundColor: isDarkMode ? "#1e293b" : "#dddddd",
              }}
            >
              {/* Image */}
              <Avatar
                src="https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg"
                variant="rounded"
                sx={{ width: 50, height: 50, mr: 2 }}
              />

              {/* Texts */}
              <Box sx={{ flexGrow: 1, mr: 2, maxWidth: 140 }}>
                <Tooltip title={drug.name} arrow>
                  <Typography
                    variant="body1"
                    onClick={() => navigate(`/pharmacy/drugdetails/${drugId}`)}
                    sx={{
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                    noWrap
                  >
                    {drug.name}
                  </Typography>
                </Tooltip>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 12,
                    fontWeight: "bold",
                    mt: 1,
                    color: isDarkMode ? "#ccc" : "#555",
                  }}
                >
                  Price: {formatNumber(price)} EGP
                </Typography>
              </Box>

              {/* Quantity */}
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
                    sx={{ color: isDarkMode ? "#90caf9" : "#1976d2" }}
                  />
                </IconButton>
                <Typography mx={1}>{quantity}</Typography>
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
                    sx={{ color: isDarkMode ? "#90caf9" : "#1976d2" }}
                  />
                </IconButton>
              </Box>

              {/* Delete Icon */}
              <IconButton
                size="small"
                color="error"
                sx={{ ml: 1 }}
                onClick={() => removeDrugMutation.mutate({ drugId })}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          );
        })}
      </Box>

      {/* Bottom Buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            display: "inline-flex",
            alignItems: "center",
            color:
              totalInventoryPrice < `${minimumOrderValue}`
                ? "#ff5f5f"
                : "green",
          }}
        >
          <LocalAtmIcon sx={{ fontSize: "20", mr: 0.5 }} />
          Total Order : {formatNumber(totalInventoryPrice)} EGP
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: "#1976d2",
              color: "#1976d2",
              fontWeight: 600,
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
            sx={{ fontWeight: 600 }}
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

      {/* Snackbar warning */}
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
    </Box>
  );
}
