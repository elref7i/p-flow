import {
  AppBar as MuiAppBar,
  Box,
  Container,
  IconButton,
  Stack,
  styled,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { MessageTwoTone } from "@mui/icons-material";
import { useThemeContext } from "../../../context/theme.context";
import { useTypeContext } from "../../../context/UserType.context";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

const drawerWidth = 240;

// Styled AppBar with drawer integration
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
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
  //Context
  const { token } = useTypeContext();
  const { open, toggleDrawer, isLargeScreen, isMediumScreen } =
    useThemeContext();

  // Theme
  const { textPrimary } = useThemeConstants();

  // Force open state on large screens for AppBar styling
  const isOpen = isLargeScreen ? true : open;

  return (
    <AppBar
      position="fixed"
      open={isOpen}
      sx={{
        bgcolor: "transparent",
        backgroundImage: "none",
        boxShadowL: "none",
      }}
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
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Spacer to push right-side elements */}
          <Box flexGrow={1} />

          {/* Right-side Icons & Links */}
          <Stack
            direction="row"
            spacing={0}
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
                    color: textPrimary,
                  }}
                >
                  <NotificationsIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  aria-label="messages"
                  size="medium"
                  sx={{
                    color: textPrimary,
                  }}
                >
                  <MessageTwoTone fontSize="inherit" />
                </IconButton>
              </>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
