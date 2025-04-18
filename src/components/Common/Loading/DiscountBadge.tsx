import { Chip, styled } from "@mui/material";
export const DiscountBadge = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: -10,
  right: -30,
  rotate: "-45deg",
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  fontWeight: "bold",
  zIndex: 1,
}));
