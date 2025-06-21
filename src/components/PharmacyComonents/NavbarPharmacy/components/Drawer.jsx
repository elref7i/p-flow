/* eslint-disable react/prop-types */
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import {
  Close as CloseIcon,
  Home as HomeIcon,
  Medication as MedicationIcon,
  ShoppingCart as ShoppingCartIcon,
  Assignment as AssignmentIcon,
  Inventory as InventoryIcon,
  Category as CategoryIcon,
  LocalOffer as LocalOfferIcon,
  // Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";
import Logo, { GradientLogo } from "../../../Common/LogoImage";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const navLinks = [
  { name: "Home", path: "/pharmacy", icon: <HomeIcon /> },
  { name: "Drugs", path: "/pharmacy/drugs", icon: <MedicationIcon /> },
  { name: "Cart", path: "/pharmacy/cart", icon: <ShoppingCartIcon /> },
  {
    name: "Inventories",
    path: "/pharmacy/inventories",
    icon: <InventoryIcon />,
  },
  { name: "Orders", path: "/pharmacy/orders", icon: <AssignmentIcon /> },
  {
    name: "Wishlist",
    path: "/pharmacy/wishlist",
    icon: <FavoriteBorderIcon />,
  },
  { name: "Offers", path: "/pharmacy/promotions", icon: <LocalOfferIcon /> },
  {
    name: "categories",
    path: "/pharmacy/categories",
    icon: <CategoryIcon />,
  },
];

export default function MoblieDrawer({ handleDrawerToggle, drawerOpen }) {
  // States
  const location = useLocation();

  // Thems
  const { menuBackground } = useThemeConstants();

  const drawer = (
    <Box
      sx={{ width: 250, background: menuBackground, height: "100vh" }}
      role="presentation"
    >
      {/* Header */}
      <Box
        sx={{
          boxShadow: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box
          sx={{
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Logo>
            <GradientLogo />
          </Logo>
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Divider />
      <List>
        {navLinks.map((link) => (
          <ListItem
            button
            key={link.path}
            component={Link}
            to={link.path}
            selected={location.pathname === link.path}
          >
            <ListItemIcon
              sx={{
                color:
                  location.pathname === link.path
                    ? "primary.main"
                    : "text.secondary",
              }}
            >
              {link.icon}
            </ListItemIcon>
            <ListItemText
              primary={link.name}
              primaryTypographyProps={{
                color:
                  location.pathname === link.path ? "primary" : "textSecondary",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile
      }}
    >
      {drawer}
    </Drawer>
  );
}
