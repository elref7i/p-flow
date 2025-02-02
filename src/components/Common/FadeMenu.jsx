import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { UserTypeContext } from '../../context/UserType.context';
import CustomButton from './ButtonStyle';

export default function FadeMenu() {
  const { userType, setUserType } = React.useContext(UserTypeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseInventory = () => {
    setAnchorEl(null);
    setUserType('Inventory'.toLowerCase());
  };
  const handleClosPharmacy = () => {
    setAnchorEl(null);
    setUserType('pharmacy'.toLowerCase());
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CustomButton
        hoverColor={true}
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {' '}
        Signup
      </CustomButton>
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
              onClick={handleCloseInventory}
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
              onClick={handleClosPharmacy}
            >
              Pharmacy
            </Link>
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
}
