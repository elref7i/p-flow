import { useState } from "react";
import {
  AppBar,
  Toolbar,
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
import NavLinkDesktop from "./components/NavLink";
import MoblieDrawer from "./components/Drawer";

import AccountMenu from "./components/AccountMenu";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import Logo, { GradientLogo } from "../../Common/LogoImage";

export default function NavbarPhamracy() {
  //States
  const [drawerOpen, setDrawerOpen] = useState(false);

  //Theme
  const theme = useTheme();
  const { navbarPharmacyBackground, textPrimary, pharmacyBackground } =
    useThemeConstants();

  //Media query
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  //Handlers
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        sx={{
          boxShadow: "none",
          border: "none",
          background: pharmacyBackground,
        }}
        position="sticky"
      >
        <Toolbar
          sx={{
            gap: "30px",

            width: "fit-content",
            mx: "auto",
            boxShadow: 1,
            color: textPrimary,
            borderRadius: "30px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
          <Logo>
            <GradientLogo />
          </Logo>

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
