import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
  Slide,
  Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo, { GradientLogo } from '../Common/LogoImage';
const navItems = [
  { name: 'Features', id: 'features' },
  { name: 'How It Works', id: 'how-it-works' },
  { name: 'Testimonials', id: 'testimonials' },
  { name: 'Contact', id: 'contact' },
];

const NavbarLanding = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        textAlign: 'center',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #1976d2 30%, #00bcd4 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          P-FLOW
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleDrawerToggle}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {navItems.map((item, index) => (
          <ListItem
            key={item.id}
            disablePadding
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              fullWidth
              onClick={() => {
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  handleDrawerToggle();
                }
              }}
              sx={{ py: 2 }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  variant: 'h6',
                  align: 'center',
                  fontWeight: 'medium',
                }}
              />
            </Button>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3 }}>
        <Button
          component={Link}
          to={'/login'}
          variant="outlined"
          fullWidth
          sx={{ mb: 2, height: 48 }}
          color="primary"
        >
          Log In
        </Button>
        <Button
          component={Link}
          to={'/signup'}
          variant="contained"
          fullWidth
          sx={{ height: 48 }}
          color="primary"
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );

  const DarkAuth = 'linear-gradient(to right,#021524 50% , #1A1A1A)';
  const LightAuth = 'linear-gradient(to right,#B79FFE  , #EEE9FF ,#B8DCFF)';
  return (
    <>
      <Slide appear={false} direction="down" in={!scrolled}>
        {/* Wrapper div for Slide component */}
        <AppBar
          position="fixed"
          color="default"
          elevation={scrolled ? 4 : 0}
          sx={{
            background: scrolled
              ? '#ffffff77'
              : theme.palette.mode === 'dark'
              ? DarkAuth
              : LightAuth,
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            transition: 'all 0.3s ease',
            py: scrolled ? 0.8 : 1,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Fade in={false} timeout={1000}>
                <Logo>
                  <GradientLogo />
                </Logo>
              </Fade>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {navItems.map((item, index) => (
                    <Fade key={item.id} in={true} timeout={(index + 1) * 500}>
                      <Button
                        onClick={() => {
                          const element = document.getElementById(item.id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        sx={{
                          mx: 1,
                          color: 'text.primary',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '0%',
                            height: '2px',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'primary.main',
                            transition: 'width 0.3s',
                          },
                          '&:hover::after': {
                            width: '80%',
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    </Fade>
                  ))}
                  <Fade in={true} timeout={2500}>
                    <Button
                      component={Link}
                      to={'/login'}
                      variant="outlined"
                      sx={{
                        ml: 2,
                        borderWidth: 2,
                        '&:hover': {
                          borderWidth: 2,
                        },
                      }}
                    >
                      Log In
                    </Button>
                  </Fade>
                  <Fade in={true} timeout={3000}>
                    <Button
                      component={Link}
                      to={'/signup'}
                      variant="contained"
                      sx={{
                        ml: 2,
                        px: 3,
                        boxShadow: '0 4px 14px 0 rgba(25, 118, 210, 0.39)',
                      }}
                    >
                      Get Started
                    </Button>
                  </Fade>
                </Box>
              )}

              {/* Mobile Navigation */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '50%',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Toolbar placeholder to prevent content from going under the AppBar */}
      <Toolbar sx={{ mb: 2 }} />
    </>
  );
};

export default NavbarLanding;
