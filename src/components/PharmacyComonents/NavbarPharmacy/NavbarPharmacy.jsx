"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import NavLinkDesktop from "./components/NavLink";
import MoblieDrawer from "./components/Drawer";

import AccountMenu from "./components/AccountMenu";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function NavbarPhamracy() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  //Theme
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { shadow2, navbarPharmacyBackground } = useThemeConstants();

  //Handlers
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // const isMenuOpen = Boolean(anchorEl);

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      <AppBar
        sx={{ background: navbarPharmacyBackground, boxShadow: shadow2 }}
        position="sticky"
        color="default"
      >
        <Toolbar>
          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, background: navbarPharmacyBackground }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              mr: 2,
            }}
          >
            Pharmacy
          </Typography>

          {/* Desktop Navigation */}
          <NavLinkDesktop />

          {/* Right side icons */}
          <Box sx={{ display: "flex", ml: "auto" }}>
            <IconButton color="inherit">
              <Badge
                badgeContent={4}
                color="error"
              >
                <ChatIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge
                badgeContent={17}
                color="error"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* Avatar */}
            <AccountMenu />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <MoblieDrawer
        handleDrawerToggle={handleDrawerToggle}
        drawerOpen={drawerOpen}
      />
    </>
  );
}
