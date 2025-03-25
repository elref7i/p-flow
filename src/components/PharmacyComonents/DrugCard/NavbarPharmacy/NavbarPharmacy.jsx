'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  useMediaQuery,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Search as SearchIcon,
  Chat as ChatIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import NavLinkDesktop from './components/NavLink';
import MoblieDrawer from './components/Drawer';
import {
  SearchIconWrapper,
  SearchWrapper,
  StyledInputBase,
} from './utils/style-nav';
import { user } from './utils/data';
import ProfileMenu from './components/ProfileMenu';

export default function NavbarPhamracy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // States
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // Mock user data

  //Handlers

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Profile menu
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} disabled>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle1">{user.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
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
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              mr: 2,
            }}
          >
            Pharmacy
          </Typography>

          {/* Desktop Navigation */}
          <NavLinkDesktop />

          {/* Search - Desktop */}
          <SearchWrapper
            sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1, mx: 2 }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              fullWidth
            />
          </SearchWrapper>

          {/* Search - Mobile */}
          {isMobile && !mobileSearchOpen && (
            <IconButton
              color="inherit"
              onClick={() => setMobileSearchOpen(true)}
              sx={{ ml: 'auto', mr: 1 }}
            >
              <SearchIcon />
            </IconButton>
          )}

          {isMobile && mobileSearchOpen && (
            <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
              <SearchWrapper sx={{ flexGrow: 1 }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
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
          <Box sx={{ display: 'flex', ml: 'auto' }}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <ChatIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {/* Avatar */}
            <ProfileMenu setAnchorEl={setAnchorEl} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <MoblieDrawer
        handleDrawerToggle={handleDrawerToggle}
        drawerOpen={drawerOpen}
      />

      {/* Profile Menu */}
      {renderMenu}
    </>
  );
}
