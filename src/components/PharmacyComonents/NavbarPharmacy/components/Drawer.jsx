/* eslint-disable react/prop-types */
import {
  Typography,
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
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/pharmacy", icon: <HomeIcon /> },
  { name: "Drugs", path: "/pharmacy/drugs", icon: <MedicationIcon /> },
  { name: "Cart", path: "/pharmacy/cart", icon: <ShoppingCartIcon /> },
  { name: "Inventores", path: "/pharmacy/inventores", icon: <InventoryIcon /> },
  { name: "Orders", path: "/orders", icon: <AssignmentIcon /> },
];

export default function MoblieDrawer({ handleDrawerToggle, drawerOpen }) {
  // States
  const location = useLocation();

  // Handlers

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
        >
          Pharmacy
        </Typography>
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
