import { useState } from 'react';
import {
  Stack,
  Paper,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import EmailUser from './EmailUser';
import { useTypeContext } from '../../context/UserType.context';
import DeactivateAcount from './DeactivateAcount';

export default function Setting() {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { userData } = useTypeContext();

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Stack
      maxWidth={'lg'}
      mx={'auto'}
      py={4}
      direction={{ sm: 'column', md: 'row' }}
      gap={4}
    >
      {/* Sidebar */}
      <Paper sx={{ p: 2, borderRadius: 2 }}>
        <Tabs
          orientation={isSmallScreen ? 'horizontal' : 'vertical'}
          value={tabIndex}
          onChange={handleTabChange}
          sx={{
            borderRight: 1,
            borderColor: 'divider',
            '& .MuiTabs-indicator': {
              backgroundColor: theme.palette.action.active,
            },
          }}
        >
          <Tab
            label="Profile"
            sx={{
              color: theme.palette.text.primary,
              '&.Mui-selected': {
                color: theme.palette.action.active,
              },
              textTransform: 'capitalize',
            }}
          />
          <Tab
            label="Change Password"
            sx={{
              color: theme.palette.text.primary,
              '&.Mui-selected': {
                color: theme.palette.action.active,
              },
              textTransform: 'capitalize',
            }}
          />
          <Tab
            label="Email"
            sx={{
              color: theme.palette.text.primary,
              '&.Mui-selected': {
                color: theme.palette.action.active,
              },
              textTransform: 'capitalize',
            }}
          />
          <Tab
            label="deactivate your account"
            sx={{
              color: theme.palette.text.primary,
              '&.Mui-selected': {
                color: theme.palette.action.active,
              },
              textTransform: 'capitalize',
            }}
          />
        </Tabs>
      </Paper>

      {/* Content */}
      <Paper sx={{ flex: 1, p: 4, borderRadius: 2 }}>
        {tabIndex === 0 && <Profile userData={userData} />}
        {tabIndex === 1 && <ChangePassword />}
        {tabIndex === 2 && <EmailUser userData={userData} />}
        {tabIndex === 3 && <DeactivateAcount />}
      </Paper>
    </Stack>
  );
}
