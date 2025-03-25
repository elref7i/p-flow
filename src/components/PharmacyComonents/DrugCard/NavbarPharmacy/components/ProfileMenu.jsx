/* eslint-disable react/prop-types */
import { Avatar, IconButton } from '@mui/material';

import {} from '@mui/icons-material';
import { user } from '../utils/data';

export default function ProfileMenu({ setAnchorEl }) {
  //Stats

  //Handlers
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <IconButton
      edge="end"
      aria-label="account of current user"
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <Avatar alt={user.name} src={user.image} sx={{ width: 32, height: 32 }} />
    </IconButton>
  );
}
