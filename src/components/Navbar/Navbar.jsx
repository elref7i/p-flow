import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button, Container } from '@mui/material';
import FadeMenu from '../Common/FadeMenu';
import InputSearch from '../Common/InputSearch';
import { Link } from 'react-router-dom';
import AvatarCircle from '../Common/Avatar';
import imageLogo from '../../assets/pflow-high-resolution-logo-transparent.png';
import LogoImage from '../Common/LogoImage';

export default function Navbar() {
  const token = false;
  return (
    <AppBar sx={{ bgcolor: '#fff', display: 'fixed', py: 1 }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Link to="/" style={{ color: 'white' }}>
            <Typography
              variant="h6"
              noWrap
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
            </Typography>
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
                <Button
                  sx={{
                    py: 1,
                    px: 3,
                    bgcolor: '#00A9FF',
                    color: 'white',
                    ':hover': {
                      bgcolor: '#00A9FFee',
                      transition: '.4s colors',
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
              <FadeMenu />
            </Box>
          )}
        </Toolbar>
      </Container>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </AppBar>
  );
}
