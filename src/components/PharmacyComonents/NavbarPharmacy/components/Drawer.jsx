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
import { styled, alpha } from "@mui/material/styles";
import {
  Search as SearchIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Medication as MedicationIcon,
  ShoppingCart as ShoppingCartIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { SearchIconWrapper, StyledInputBase } from "../utils/style-nav";
// import { navLinks } from "../utils/links";

const navLinks = [
  { name: "Home", path: "/pharmacy", icon: <HomeIcon /> },
  { name: "Drugs", path: "/pharmacy/drugs", icon: <MedicationIcon /> },
  { name: "Cart", path: "/pharmacy/cart", icon: <ShoppingCartIcon /> },
  { name: "Orders", path: "/orders", icon: <AssignmentIcon /> },
];

// Styled components
const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

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
      <Box sx={{ p: 2 }}>
        <SearchWrapper>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            fullWidth
          />
        </SearchWrapper>
      </Box>
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
