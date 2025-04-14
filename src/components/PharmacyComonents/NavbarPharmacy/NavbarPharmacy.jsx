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
  Search as SearchIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import NavLinkDesktop from "./components/NavLink";
import MoblieDrawer from "./components/Drawer";
import {
  SearchIconWrapper,
  SearchWrapper,
  StyledInputBase,
} from "./utils/style-nav";
import AccountMenu from "./components/AccountMenu";

export default function NavbarPhamracy() {
  // States
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  //Theme
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const inentory = theme.palette.background.navbarPharmacy;

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
        sx={{ background: inentory }}
        position="sticky"
        color="default"
        elevation={1}
      >
        <Toolbar>
          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, background: inentory }}
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

          {/* Search - Desktop */}
          <SearchWrapper
            sx={{ display: { xs: "none", md: "block" }, flexGrow: 1, mx: 2 }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              fullWidth
            />
          </SearchWrapper>

          {/* Search - Mobile */}
          {isMobile && !mobileSearchOpen && (
            <IconButton
              color="inherit"
              onClick={() => setMobileSearchOpen(true)}
              sx={{ ml: "auto", mr: 1 }}
            >
              <SearchIcon />
            </IconButton>
          )}

          {isMobile && mobileSearchOpen && (
            <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
              <SearchWrapper sx={{ flexGrow: 1 }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  autoFocus
                  fullWidth
                />
              </SearchWrapper>
              <IconButton
                color="inherit"
                onClick={() => setMobileSearchOpen(false)}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          )}

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
