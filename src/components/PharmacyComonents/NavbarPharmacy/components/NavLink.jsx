import { Box } from "@mui/material";
import {
  Home as HomeIcon,
  Medication as MedicationIcon,
  ShoppingCart as ShoppingCartIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { NavLink } from "../utils/style-nav";
// import { navLinks } from "../utils/links";
const navLinks = [
  { name: "Home", path: "/pharmacy", icon: <HomeIcon /> },
  { name: "Drugs", path: "/pharmacy/drugs", icon: <MedicationIcon /> },
  { name: "Cart", path: "/pharmacy/cart", icon: <ShoppingCartIcon /> },
  { name: "Orders", path: "/orders", icon: <AssignmentIcon /> },
];
export default function NavLinkDesktop() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flex: 1,
        gap: 5,
        justifyContent: "center",
      }}
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          component={Link}
          to={link.path}
          active={location.pathname === link.path ? 1 : 0}
          startIcon={link.icon}
        >
          {link.name}
        </NavLink>
      ))}
    </Box>
  );
}
