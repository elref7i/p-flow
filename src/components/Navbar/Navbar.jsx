import {
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
import MuiAppBar from '@mui/material/AppBar';
import InputSearch from '../Common/InputSearch';

import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useThemeContext } from '../../context/theme.context';
import ProfilePerson from '../Common/ProfilePerson';
import { CustomLink } from '../Common/ButtonStyle';
import { MessageTwoTone } from '@mui/icons-material';
import { useTypeContext } from '../../context/UserType.context';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export default function Navbar() {
  const theme = useTheme();
  const { token } = useTypeContext();
  const { setMode, open, handleDrawerOpen } = useThemeContext();
  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
      sx={{ bgcolor: theme.palette.background.navbar }}
    >
      <Container maxWidth={'xl'}>
        <Toolbar sx={{ px: 5 }}>
          {token && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                open && { display: 'none' },
              ]}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap color="text.primary">
            <CustomLink
              to={'/landing'}
              bg={true}
              c={theme.palette.primary.main}
              hoverbg={true}
              hoverColor={true}
            >
              P-Flow
            </CustomLink>
          </Typography>
          {token && <InputSearch />}
          <Box component={'div'} flexGrow={1} />
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            {theme.palette.mode === 'light'.toLowerCase() ? (
              <IconButton
                onClick={() => {
                  setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                  );
                  localStorage.setItem(
                    'mode',
                    theme.palette.mode === 'dark' ? 'light' : 'dark'
                  );
                }}
                aria-label="delete"
                size="medium"
              >
                <LightModeSharpIcon fontSize="inherit" />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                  );
                  localStorage.setItem(
                    'mode',
                    theme.palette.mode === 'dark' ? 'light' : 'dark'
                  );
                }}
                color="lightBackground"
                aria-label="delete"
                size="medium"
              >
                <ModeNightIcon fontSize="inherit" />
              </IconButton>
            )}
            {token && (
              <>
                <IconButton color="inherit" aria-label="delete" size="medium">
                  <NotificationsIcon fontSize="inherit" />
                </IconButton>
                <IconButton color="inherit" aria-label="delete" size="medium">
                  <MessageTwoTone fontSize="inherit" />
                </IconButton>
                <ProfilePerson />
              </>
            )}
            {!token && (
              <>
                <CustomLink
                  to={'/login'}
                  p={'10px'}
                  fs={'20px'}
                  fw={'bold'}
                  br={'5px'}
                >
                  Login
                </CustomLink>
                <CustomLink
                  to={'/signup'}
                  p={'10px'}
                  fs={'20px'}
                  fw={'bold'}
                  br={'5px'}
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
