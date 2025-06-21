/* eslint-disable react/prop-types */
import { Chip } from "@mui/material";
import { getPromotionText } from "../../lib/utils/promotion-formate";
import { useThemeConstants } from "../../lib/constants/theme.constant";

export default function BadgePromtion({ medicine }) {
  const { badgeBackground, textLink } = useThemeConstants();
  return (
    <Chip
      label={getPromotionText(medicine.promotion)}
      sx={{
        position: "absolute",
        top: 10,
        left: 10,
        bgcolor: badgeBackground,
        color: textLink,
        fontWeight: 700,
        fontSize: "0.8rem",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      }}
    />
  );
}
