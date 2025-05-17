/* eslint-disable react/prop-types */
import { Box, Paper, Typography } from "@mui/material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export default function DetailsPromotion({ promotion }) {
  //Variabled
  const { originalDrugId, freeQuantity, buyQuantity } = promotion;
  const { typography, textPrimary, cardBackground } = useThemeConstants();
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        mb: 3,
        borderRadius: "8px",
        position: "relative",
        background: cardBackground,
        boxShadow: 9,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <ShoppingCartIcon
          color="primary"
          sx={{ mr: 1 }}
        />
        <Typography
          variant="h6"
          sx={{
            fontSize: typography.body1.fontSize,
            fontWeight: "bold",
          }}
        >
          Buy: {buyQuantity ? <strong>{buyQuantity}</strong> : 0} items
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <CardGiftcardIcon
          color="success"
          sx={{ mr: 1 }}
        />
        <Typography
          variant="body1"
          sx={{
            fontSize: typography.body1.fontSize,
            fontWeight: "bold",
          }}
        >
          Get: {freeQuantity ? <strong>{freeQuantity}</strong> : 0} free
        </Typography>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mt: 2,
          fontSize: typography.h6.fontSize,
          fontWeight: typography.h6.fontWeight,
          color: textPrimary,
        }}
      >
        Drug ID:{" "}
        <Box
          component={"strong"}
          sx={{
            mt: 2,
            fontSize: typography.body2.fontSize,
            color: textPrimary,
          }}
        >
          {originalDrugId ? originalDrugId : "Not Offer"}
        </Box>
      </Typography>
    </Paper>
  );
}
