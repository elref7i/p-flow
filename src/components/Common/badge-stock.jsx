/* eslint-disable react/prop-types */
import { Chip } from "@mui/material";
import { useThemeConstants } from "../../lib/constants/theme.constant";

export default function BadgeStock({ stockStatus }) {
  const { success, error, warning } = useThemeConstants();
  return (
    <Chip
      label={stockStatus.text}
      sx={{
        position: "absolute",
        top: 10,
        right: 10,
        bgcolor:
          stockStatus.color === "success"
            ? success
            : stockStatus.color === "warning"
            ? warning
            : error,
        color: "white",
        fontWeight: 600,
        fontSize: "0.75rem",
      }}
    />
  );
}
