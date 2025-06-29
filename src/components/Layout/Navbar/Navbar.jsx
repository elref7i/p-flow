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
import { useThemeContext } from "../../../context/theme.context";
import { useTypeContext } from "../../../context/UserType.context";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsModal from "../../notifications/notifications-modal";

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
  const { open, toggleDrawer, isLargeScreen, isMediumScreen, borderHover } =
    useThemeContext();

  // Theme
  const { shadow3 } = useThemeConstants();

  // Force open state on large screens for AppBar styling
  const isOpen = isLargeScreen ? true : open;

  return (
    <AppBar
      position="fixed"
      open={isOpen}
      elevation={0}
      sx={{
        bgcolor: "transparent",
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            px: { xs: 1, sm: 2, md: 1 },
            background: "transparent",
            backgroundImage: "none",
            boxShadowL: 2,
          }}
        >
          {/* Menu Icon for Sidebar Toggle - only visible on md screens and smaller */}
          {token && isMediumScreen && (
            <IconButton
              aria-label="toggle drawer"
              onClick={toggleDrawer}
              edge="start"
              sx={{
                border: `1px solid ${borderHover}`,
                boxShadow: shadow3,
                position: "absolute",
                borderRadius: open && "0px 40px 40px 0px",
                left: open ? -12 : 0,
                top: 8,
              }}
            >
              {open ? (
                <CloseIcon
                  color="error"
                  sx={{
                    fontSize: "1.5rem",
                  }}
                />
              ) : (
                <MenuIcon />
              )}
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
            {token && <NotificationsModal />}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
