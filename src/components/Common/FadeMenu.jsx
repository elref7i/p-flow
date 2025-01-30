import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{
          py: 1,
          px: 3,
          bgcolor: '#00A9FF',
          color: 'white',
          ':hover': { bgcolor: '#00A9FFee', transition: '.4s colors' },
        }}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Signup
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Box sx={{ p: 1 }}>
          <MenuItem>
            <Link
              style={{
                display: 'block',
                fontSize: '16px',
                textAlign: 'center',
                fontWeight: 'bold',
                textDecoration: 'none',
                marginBottom: '2px',
                color: 'black',
              }}
              to={'/signup'}
              onClick={handleClose}
            >
              Inventory
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              style={{
                display: 'block',
                fontSize: '16px',
                textAlign: 'center',
                fontWeight: 'bold',
                textDecoration: 'none',
                marginBottom: '2px',
                color: 'black',
              }}
              to={'/signup'}
              onClick={handleClose}
            >
              Pharmacy
            </Link>
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
}
