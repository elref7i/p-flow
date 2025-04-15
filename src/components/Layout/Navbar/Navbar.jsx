"use client";

import {
  AppBar as MuiAppBar,
  Box,
  Container,
  IconButton,
  Stack,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { MessageTwoTone } from "@mui/icons-material";
// import InputSearch from "../../Common/InputSearch";
import { useThemeContext } from "../../../context/theme.context";
import { CustomLink, LogoLink } from "../../Common/ButtonStyle";
import { useTypeContext } from "../../../context/UserType.context";

const drawerWidth = 240;

// Styled AppBar with drawer integration
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "transparent", // Transparent background
  color: theme.palette.mode === "dark" ? "#fff" : "#000",
  boxShadow: "none", // Remove shadow
  borderBottom: "1px solid",
  borderColor:
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Navbar() {
  const theme = useTheme();
  const { token, role } = useTypeContext();
  const { open, toggleDrawer, isLargeScreen, isMediumScreen } =
    useThemeContext();

  // Force open state on large screens for AppBar styling
  const isOpen = isLargeScreen ? true : open;

  return (
    <AppBar
      position="fixed"
      open={isOpen}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ px: { xs: 1, sm: 2, md: 1 } }}>
          {/* Menu Icon for Sidebar Toggle - only visible on md screens and smaller */}
          {token && isMediumScreen && (
            <IconButton
              aria-label="toggle drawer"
              onClick={toggleDrawer}
              edge="start"
              sx={{
                marginRight: 2,
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo Link */}
          <Typography
            variant="h6"
            noWrap
            fontWeight="bold"
            sx={{
              color: theme.palette.mode === "dark" ? "#fff" : "#000",
            }}
          >
            <LogoLink
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": {
                  color:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.8)"
                      : "rgba(0,0,0,0.8)",
                },
              }}
            >
              P-Flow
            </LogoLink>
          </Typography>

          {/* Search Bar (visible for non-admin users)
          {token && role !== "admin" && (
            <Box sx={{ ml: 4, flexGrow: 0.3 }}>
              <InputSearch />
            </Box>
          )} */}

          {/* Spacer to push right-side elements */}
          <Box flexGrow={1} />

          {/* Right-side Icons & Links */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
            }}
          >
            {/* Notifications & Messages (only if authenticated) */}
            {token && (
              <>
                <IconButton
                  aria-label="notifications"
                  size="medium"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                  }}
                >
                  <NotificationsIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  aria-label="messages"
                  size="medium"
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                  }}
                >
                  <MessageTwoTone fontSize="inherit" />
                </IconButton>
              </>
            )}

            {/* Authentication Links (Login / Signup) for non-authenticated users */}
            {!token && (
              <>
                <CustomLink
                  to="/login"
                  sx={{
                    padding: "8px 16px",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    textDecoration: "none",
                    "&:hover": {
                      color:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.8)"
                          : "rgba(0,0,0,0.8)",
                    },
                  }}
                >
                  Login
                </CustomLink>
                <CustomLink
                  to="/signup"
                  sx={{
                    padding: "8px 16px",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    textDecoration: "none",
                    "&:hover": {
                      color:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.8)"
                          : "rgba(0,0,0,0.8)",
                    },
                  }}
                >
                  Sign up
                </CustomLink>
              </>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
