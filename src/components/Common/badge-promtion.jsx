/* eslint-disable react/prop-types */
import { Chip } from "@mui/material";
import { getPromotionText } from "../../lib/utils/promotion-formate";
import { useThemeConstants } from "../../lib/constants/theme.constant";

export default function BadgePromtion({ promotion }) {
  const { badgeBackground, textLink } = useThemeConstants();
  return (
    <Chip
      label={getPromotionText(promotion)}
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

export function BadgePromtionTwo({ promotion }) {
  return (
    <Chip
      label={getPromotionText(promotion)}
      sx={{
        position: "absolute",
        top: -2,
        right: -19,
        bgcolor: "red",
        color: "white",
        fontWeight: 500,
        fontSize: ".7rem",
        rotate: "30deg",
        boxShadow: 12,
        zIndex: 88,
      }}
    />
  );
}
