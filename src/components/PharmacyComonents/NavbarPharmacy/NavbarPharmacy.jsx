/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import NavLinkDesktop from "./components/NavLink";
import MoblieDrawer from "./components/Drawer";
import AccountMenu from "./components/AccountMenu";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import Logo, { GradientLogo } from "../../Common/LogoImage";
import NotificationsModal from "../../notifications/notifications-modal";

// Hide AppBar on scroll down, show on scroll up
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  );
}

export default function NavbarPhamracy() {
  //States
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //Theme
  const {
    navbarPharmacyBackground,
    textPrimary,
    transitionDurationStandard,
    isMobile,
    isSmallMobile,
  } = useThemeConstants();

  //Handlers
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Detect scroll for enhanced styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={0}
          sx={{
            boxShadow: 9,
            border: "none",
            background: navbarPharmacyBackground,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            ":hover": {
              boxShadow: 2,
            },
          }}
          position="sticky"
        >
          <Toolbar
            sx={{
              gap: "30px",
              px: { xs: 3, sm: 4, md: 5 },
              py: { xs: 1, md: 1.5 },
              color: textPrimary,
              width: "100%",
              backgroundImage: "none",
              justifyContent: "space-between",
              alignItems: "center",
              transition: transitionDurationStandard,
              "&:hover": {
                transform: "translateY(-1px)",
              },
            }}
          >
            {/* Mobile menu icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  p: 1.5,
                  borderRadius: "12px",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Logo */}
            {!isSmallMobile && (
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
            )}

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flex: 1,
                }}
              >
                <NavLinkDesktop />
              </Box>
            )}

            {/* Right side icons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                ml: "auto",
              }}
            >
              {/* Notifications */}
              <Box
                sx={{
                  "& > *": {
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <NotificationsModal />
              </Box>

              {/* Avatar */}
              <Box
                sx={{
                  "& > *": {
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <AccountMenu />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Drawer Mobile */}
      <MoblieDrawer
        handleDrawerToggle={handleDrawerToggle}
        drawerOpen={drawerOpen}
      />
    </>
  );
}
