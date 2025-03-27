/* eslint-disable react/prop-types */
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Sidebaritem({ item, open }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (item.text === 'Sign out') {
      return;
    }
    navigate(item.path);
  };
  return (
    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        onClick={handleClick}
        sx={{
          minHeight: 48,
          px: 2.4,
          bgcolor:
            pathname === item.path
              ? theme.palette.mode === 'dark'
                ? '#363C44'
                : '#D1D5DA'
              : 'transparent',
          justifyContent: open ? 'initial' : 'center',
          borderRadius: '5px',
        }}
      >
        <ListItemIcon
          sx={[
            {
              minWidth: 0,
              justifyContent: 'center',
            },
            open
              ? {
                  mr: 3,
                }
              : {
                  mr: 'auto',
                },
          ]}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          sx={[
            open
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                },
          ]}
        />
      </ListItemButton>
    </ListItem>
  );
}
