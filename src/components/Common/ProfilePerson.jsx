/* eslint-disable react/prop-types */
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  Avatar,
  ListItemIcon,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useTypeContext } from '@/context/UserType.context';
import { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Logout } from '@mui/icons-material';

export default function ProfilePerson({ open }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const { logout, userData } = useTypeContext();

  const openMenue = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Stack
        aria-controls={openMenue ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenue ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          cursor: 'pointer',
          p: open ? 1 : 0,
          borderRadius: 2,
          ':hover': { bgcolor: theme.palette.grey[400] },
        }}
        py={2}
        direction={'row'}
        gap={open ? 2 : 0}
        alignItems={'center'}
        justifyContent={open ? 'start' : 'center'}
        textAlign={'center'}
        marginInline={open ? 2 : 0}
      >
        {userData ? (
          <>
            <Avatar
              alt={userData.name}
              src={userData.profileImage}
              sx={{
                width: open ? 50 : 40,
                height: open ? 50 : 40,
              }}
            />
            <Stack flex={open ? 1 : 0} alignItems={'start'}>
              <Typography
                textTransform={'capitalize'}
                variant="h2"
                fontWeight={'bold'}
                fontSize={open ? 17 : 0}
                mb={0.5}
              >
                {userData.name}
              </Typography>
              <Typography
                textTransform={'capitalize'}
                variant="h3"
                fontSize={open ? 14 : 0}
                color="error"
                fontWeight={'bold'}
              >
                {userData?.role}
              </Typography>
            </Stack>
          </>
        ) : (
          'Loading'
        )}

        {open ? <MoreHorizIcon /> : null}
      </Stack>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={openMenue}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <MenuItem
          onClick={logout}
          sx={{
            ':hover': { bgcolor: theme.palette.action.selected },
            borderRadius: 1,
          }}
        >
          Logout
          <ListItemIcon>
            <Logout fontSize="small" sx={{ ml: 2 }} color="error" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </div>
  );
}
