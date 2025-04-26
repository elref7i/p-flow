import { Chip, styled } from "@mui/material";
export const DiscountBadge = styled(Chip)(({ theme }) => ({
  position: "absolute",
  top: -5,
  right: -25,
  rotate: "-30deg",
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  fontWeight: "bold",
  fontSize: "12px",
  zIndex: 1,
}));
