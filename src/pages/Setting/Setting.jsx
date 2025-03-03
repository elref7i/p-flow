import { useState } from 'react';
import {
  Stack,
  Typography,
  Paper,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
export default function Setting() {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

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
              backgroundColor: theme.palette.action.active, // لون المؤشر
            },
          }}
        >
          <Tab
            label="Profile"
            sx={{
              color: theme.palette.text.primary, // لون النص
              '&.Mui-selected': {
                color: theme.palette.action.active, // لون النص عند التحديد
              },
              textTransform: 'capitalize',
            }}
          />
          <Tab
            label="Change Password"
            sx={{
              color: theme.palette.text.primary, // لون النص
              '&.Mui-selected': {
                color: theme.palette.action.active, // لون النص عند التحديد
              },
              textTransform: 'capitalize',
            }}
          />
          <Tab
            label="Security"
            sx={{
              color: theme.palette.text.primary, // لون النص
              '&.Mui-selected': {
                color: theme.palette.action.active, // لون النص عند التحديد
              },
              textTransform: 'capitalize',
            }}
          />
          <Tab
            label="Preferences"
            sx={{
              color: theme.palette.text.primary, // لون النص
              '&.Mui-selected': {
                color: theme.palette.action.active, // لون النص عند التحديد
              },
              textTransform: 'capitalize',
            }}
          />
        </Tabs>
      </Paper>

      {/* Content */}
      <Paper sx={{ flex: 1, p: 4, borderRadius: 2 }}>
        {tabIndex === 0 && <Profile />}
        {tabIndex === 1 && <ChangePassword />}
        {tabIndex === 2 && (
          <Typography>Preferences Settings (Under Development)</Typography>
        )}
        {tabIndex === 3 && (
          <Typography>Preferences Settings (Under Development)</Typography>
        )}
      </Paper>
    </Stack>
  );
}
