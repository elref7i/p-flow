/* eslint-disable react/prop-types */
import {
  Box,
  Typography,
  Avatar,
  Button,
  Tooltip,
  useTheme,
} from "@mui/material";
import { formatNumber } from "../../../lib/utils/formateNumber";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Invoice({ selectedInventory }) {
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  const drugs = selectedInventory?.drugs || [];

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "380px" },
        minHeight: 500,
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: "0px 4px 8px rgba(0,0,0,0.05)",
        p: 2.5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        position: "relative",
        ml: { md: 4 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box
          sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap: 1 }}
        >
          <Box
            sx={{
              bgcolor: "#007bff",
              borderRadius: 2,
              p: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShoppingCartIcon sx={{ color: "white", fontSize: 28 }} />
          </Box>

          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            Your Cart
          </Typography>
        </Box>
      </Box>

      {drugs.length > 0 ? (
        drugs.map(({ drug, quantity, Price }) => (
          <Box
            key={drug._id}
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "background.default",
              borderRadius: 2,
              p: 1.5,
              mb: 1,
              boxShadow: 1,
            }}
          >
            <Avatar
              src="https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg"
              variant="rounded"
              sx={{ width: 56, height: 56, mr: 2 }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                overflow: "hidden",
              }}
            >
              <Tooltip title={drug.name} arrow>
                <Typography
                  fontSize={14}
                  fontWeight="bold"
                  style={{ color: textColor }}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    cursor: "pointer",
                  }}
                >
                  {drug.name}
                </Typography>
              </Tooltip>
              <Typography fontSize={12} color="text.secondary">
                Price: {formatNumber(Price)} $
              </Typography>
            </Box>

            <Typography
              fontSize={14}
              fontWeight="bold"
              style={{ color: textColor }}
              sx={{ ml: 1 }}
            >
              x{quantity}
            </Typography>
          </Box>
        ))
      ) : (
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 2,
          }}
        >
          <Typography variant="h6" color="text.secondary">
            No items selected yet
          </Typography>
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: "auto", py: 1.5, fontWeight: "bold", fontSize: "18px" }}
        disabled={drugs.length === 0}
      >
        Approach Now
      </Button>
    </Box>
  );
}
