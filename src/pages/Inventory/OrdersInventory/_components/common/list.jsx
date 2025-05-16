/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { useThemeConstants } from "../../../../../lib/constants/theme.constant";

export default function List({ children }) {
  return <Box sx={{ py: 1 }}>{children}</Box>;
}

export function ListItem({ icon, label, value, bold = false }) {
  const {
    border,

    textLink,
  } = useThemeConstants();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        gap: 5,
        py: 1.5,
        borderBottom: `1px solid ${border}`,
        "&:last-child": {
          borderBottom: "none",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ color: textLink, mr: 1.5 }}>{icon}</Box>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ textWrap: "nowrap" }}
        >
          {label}:
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontWeight: bold ? "bold" : "regular",
          color: bold ? textLink : "text.primary",
          flex: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
