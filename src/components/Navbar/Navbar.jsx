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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { MessageTwoTone } from '@mui/icons-material';
import InputSearch from '../Common/InputSearch';
import { useThemeContext } from '../../context/theme.context';
import { CustomLink, LogoLink } from '../Common/ButtonStyle';
import { useTypeContext } from '../../context/UserType.context';

const drawerWidth = 240;

// Styled AppBar with drawer integration
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Navbar() {
  const theme = useTheme();
  const { token, role } = useTypeContext();
  const { setMode, open, handleDrawerOpen } = useThemeContext();

  // Toggle theme mode and store in localStorage
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    localStorage.setItem(
      'mode',
      theme.palette.mode === 'dark' ? 'light' : 'dark'
    );
  };

  return (
    <AppBar
      position="fixed"
      open={open}
      elevation={1}
      sx={{ bgcolor: theme.palette.background.navbar }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ px: 5 }}>
          {/* Menu Icon for Sidebar Toggle (visible only when authenticated) */}
          {token && (
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ marginRight: 5, display: open ? 'none' : 'block' }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo Link */}
          <Typography variant="h6" noWrap color="text.primary">
            <LogoLink>P-Flow</LogoLink>
          </Typography>

          {/* Search Bar (visible for non-admin users) */}
          {token && role !== 'admin' && <InputSearch />}

          {/* Spacer to push right-side elements */}
          <Box flexGrow={1} />

          {/* Right-side Icons & Links */}
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            {/* Theme Toggle Button */}
            <IconButton
              onClick={toggleTheme}
              aria-label="toggle theme"
              size="medium"
            >
              {theme.palette.mode === 'light' ? (
                <LightModeSharpIcon fontSize="inherit" />
              ) : (
                <ModeNightIcon fontSize="inherit" />
              )}
            </IconButton>

            {/* Notifications & Messages (only if authenticated) */}
            {token && (
              <>
                <IconButton aria-label="notifications" size="medium">
                  <NotificationsIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="messages" size="medium">
                  <MessageTwoTone fontSize="inherit" />
                </IconButton>
              </>
            )}

            {/* Authentication Links (Login / Signup) for non-authenticated users */}
            {!token && (
              <>
                <CustomLink to="/login" p="10px" fs="20px" fw="bold" br="5px">
                  Login
                </CustomLink>
                <CustomLink to="/signup" p="10px" fs="20px" fw="bold" br="5px">
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
