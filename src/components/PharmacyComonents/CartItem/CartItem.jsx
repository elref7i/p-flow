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
import { formatNumber } from "@/lib/utils/formateNumber";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
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

export default function CartItem({
  inventoryInfo,
  onReadyToBuy,
  selectedInventory,
  setSelectedInventory,
}) {
  //States
  const [showWarning, setShowWarning] = useState(false);

  //Navigation
  const navigate = useNavigate();

  //Context
  const { token } = useTypeContext();

  // Themes
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  // Mutation
  const removeInventoryMutation = useRemoveInventory();
  const removeDrugMutation = useRemoveDrug();
  const updateQuantityMutation = useUpdateCartItem();
  const queryClient = useQueryClient();
  const { data } = useGetAllInventoriesQuery({ token });

  // Variables
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
        p: { xs: 1.5, sm: 2 },
        borderRadius: 2,
        backgroundColor: isDarkMode ? "#0e1a2b" : "#F5F5F5",
        width: "100%",
        color: isDarkMode ? "#ffffff" : "#000000",
        boxShadow: "0px 2px 7px rgb(103, 161, 247)",
        mb: { xs: 2, sm: 1.5 },
        mt: { xs: 2, sm: 4 },
      }}
    >
      {/* Inventory Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 0.5,
          flexWrap: { xs: "wrap", sm: "nowrap" },
          gap: { xs: 1, sm: 0 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
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
          onClick={() =>
            removeInventoryMutation.mutate(
              { inventoryId: inventory.id },
              {
                onSuccess: (data) => {
                  const inventories = data?.data?.data?.inventories ?? [];
                  // * update
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
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          },
          gap: { xs: 1.5, sm: 2 },
          maxHeight: { xs: 300, sm: 250, md: 170 },
          overflowY: "auto",
          pr: { xs: 1, sm: 3 },
          mb: 2,
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
                px: { xs: 1.5, sm: 2 },
                py: { xs: 1, sm: 1.5 },
                width: "100%",
                minWidth: { xs: "auto", sm: 300 },
                backgroundColor: isDarkMode ? "#1e293b" : "#dddddd",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1, sm: 0 },
              }}
            >
              {/* Image and Text Container */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  width: { xs: "100%", sm: "auto" },
                  mb: { xs: 1, sm: 0 },
                }}
              >
                {/* Image */}
                <Avatar
                  src="https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg"
                  variant="rounded"
                  sx={{
                    width: { xs: 40, sm: 50 },
                    height: { xs: 40, sm: 50 },
                    mr: { xs: 1.5, sm: 2 },
                  }}
                />

                {/* Texts */}
                <Box
                  sx={{
                    flexGrow: 1,
                    mr: { xs: 1, sm: 2 },
                    maxWidth: { xs: "none", sm: 140 },
                    minWidth: 0,
                  }}
                >
                  <Tooltip
                    title={drug.name}
                    arrow
                  >
                    <Typography
                      variant="body1"
                      onClick={() =>
                        navigate(`/pharmacy/drugdetails/${drugId}`)
                      }
                      sx={{
                        fontWeight: 600,
                        cursor: "pointer",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        wordBreak: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: { xs: "normal", sm: "nowrap" },
                        display: { xs: "block", sm: "-webkit-box" },
                        WebkitLineClamp: { xs: 2, sm: 1 },
                        WebkitBoxOrient: { xs: "vertical", sm: "horizontal" },
                      }}
                    >
                      {drug.name}
                    </Typography>
                  </Tooltip>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: 11, sm: 12 },
                      fontWeight: "bold",
                      mt: { xs: 0.5, sm: 1 },
                      color: isDarkMode ? "#ccc" : "#555",
                    }}
                  >
                    Price: {formatNumber(price)} EGP
                  </Typography>
                </Box>
              </Box>

              {/* Controls Container */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "space-between", sm: "flex-end" },
                  width: { xs: "100%", sm: "auto" },
                  gap: { xs: 1, sm: 0 },
                }}
              >
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
                </Box>

                {/* Delete Icon */}
                <IconButton
                  size="small"
                  color="error"
                  sx={{ ml: { xs: 0, sm: 1 } }}
                  onClick={() => removeDrugMutation.mutate({ drugId })}
                >
                  <CloseIcon
                    sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
                  />
                </IconButton>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Bottom Buttons */}
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
        <Typography
          sx={{
            fontWeight: "bold",
            display: "inline-flex",
            alignItems: "center",
            color:
              totalInventoryPrice < `${minimumOrderValue}`
                ? "#ff5f5f"
                : "green",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            wordBreak: "break-word",
          }}
        >
          <LocalAtmIcon
            sx={{
              fontSize: { xs: "18px", sm: "20px" },
              mr: 0.5,
            }}
          />
          Total Order : {formatNumber(totalInventoryPrice)} EGP
        </Typography>

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

      {/* Snackbar warning */}
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
    </Box>
  );
}
