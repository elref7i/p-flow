import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import imageLogo from '@/assets/pflow-high-resolution-logo-transparent.png';
import { useContext } from 'react';
import { UserTypeContext } from '@/context/UserType.context';
import LogoImage from '../Common/LogoImage';
import InputSearch from '../Common/InputSearch';
import AvatarCircle from '../Common/Avatar';
import CustomButton from '../Common/ButtonStyle';

export default function Navbar() {
  const { token, logout } = useContext(UserTypeContext);
  return (
    <AppBar sx={{ bgcolor: '#DDDDDD', display: 'fixed' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Link to="/" style={{ color: 'white' }}>
            <Box
              component="div"
              sx={{
                display: {
                  xs: 'none',
                  sm: 'block',
                  fontWeight: 'bold',
                  fontSize: '25px',
                },
              }}
            >
              <LogoImage src={imageLogo} alt="logo" />
            </Box>
          </Link>
          {token && <InputSearch />}
          <Box sx={{ flexGrow: 1 }} />
          {token && (
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <AvatarCircle />
            </Box>
          )}
          {!token && (
            <Box sx={{ display: 'flex', gap: '4px' }}>
              <Link to="/login">
                <CustomButton hoverColor={true}>Login</CustomButton>
              </Link>
              <Link to="/signup">
                <CustomButton hoverColor={true}>Signup</CustomButton>
              </Link>
            </Box>
          )}
          {token && (
            <Box sx={{ display: 'flex', gap: '4px' }}>
              <Link to="/login">
                <CustomButton hoverColor={true} onClick={logout}>
                  Sign out
                </CustomButton>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
