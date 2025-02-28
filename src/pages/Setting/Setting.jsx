import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  Paper,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  InputLabel,
  CircularProgress,
} from '@mui/material';
import { useFormik } from 'formik';
import ImageAdmin from '@/assets/photo_2024-12-03_19-37-17.jpg';
import { useTypeContext } from '../../context/UserType.context';
import { useUpdateUser } from '../../hooks/useAdminAction';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Setting() {
  const theme = useTheme();
  const [tabIndex, setTabIndex] = useState(0);
  const { userData, token, setUserData } = useTypeContext();
  const { mutateAsync, isLoading, isError, isSuccess } = useUpdateUser();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    dirty,
    // resetForm,
  } = useFormik({
    initialValues: {
      name: userData?.name || '',
      ownerName: userData?.ownerName || '',
      phone: userData?.phone || '',
      city: userData?.city || '',
      governorate: userData?.governorate || '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const { data } = await mutateAsync({
          token,
          values,
          userId: userData?._id,
        });
        console.log(data.user);
        setUserData(data.user);
        localStorage.setItem('userData', JSON.stringify(data.user));
        resetForm({
          values: {
            name: data.user.name,
            ownerName: data.user.ownerName,
            phone: data.user.phone,
            city: data.user.city,
            governorate: data.user.governorate,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
  });
  // useEffect(() => {
  //   resetForm({
  //     values: {
  //       name: userData.name || '',
  //       ownerName: userData.ownerName || '',
  //       phone: userData.phone || '',
  //       city: userData.city || '',
  //       governorate: userData.governorate || '',
  //     },
  //   });
  // }, [userData, resetForm]);

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
        {tabIndex === 0 && (
          <Box component={'form'} onSubmit={handleSubmit}>
            <Typography variant="h5" fontWeight={'bold'} mb={2}>
              Profile Settings
            </Typography>
            <Divider sx={{ mb: 3 }} />
            {/* Profile Picture */}
            <Stack direction={'row'} alignItems={'center'} gap={3}>
              <Avatar src={ImageAdmin} sx={{ width: 90, height: 90 }} />
              <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
                <Button variant="contained">Change</Button>
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </Stack>
            </Stack>
            <Divider sx={{ my: 3 }} />
            {/* Inputs */}
            <Stack spacing={3}>
              <Box component={'div'}>
                <InputLabel htmlFor="profile-name" sx={{ mb: 1 }}>
                  Profile Name
                </InputLabel>
                <TextField
                  id="profile-name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
                  helperText={touched.name && errors.name}
                  fullWidth
                />
              </Box>
              <Box>
                <InputLabel htmlFor="owner-name" sx={{ mb: 1 }}>
                  Owner Name
                </InputLabel>
                <TextField
                  id="owner-name"
                  name="ownerName"
                  value={values.ownerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.ownerName && touched.ownerName}
                  helperText={touched.ownerName && errors.ownerName}
                  fullWidth
                />
              </Box>
              <Box>
                <InputLabel htmlFor="owner-phone" sx={{ mb: 1 }}>
                  Phone
                </InputLabel>
                <TextField
                  id="owner-phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone && touched.phone}
                  helperText={touched.phone && errors.phone}
                  fullWidth
                />
              </Box>
              <Box>
                <InputLabel htmlFor="owner-city" sx={{ mb: 1 }}>
                  City
                </InputLabel>
                <TextField
                  id="owner-city"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.city && touched.city}
                  helperText={touched.city && errors.city}
                  fullWidth
                />
              </Box>
              <Box>
                <InputLabel htmlFor="owner-governorate" sx={{ mb: 1 }}>
                  Governorate
                </InputLabel>
                <TextField
                  id="owner-governorate"
                  name="governorate"
                  value={values.governorate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.governorate && touched.governorate}
                  helperText={touched.governorate && errors.governorate}
                  fullWidth
                />
              </Box>
              {/* <Box>
                <Location setFieldValue={setFieldValue} errors={errors} />
              </Box> */}
            </Stack>

            <Button
              type="submit"
              disabled={!dirty}
              variant="contained"
              sx={{ mt: 3, ml: 'auto', display: 'flex' }}
              startIcon={
                isLoading ? (
                  <CircularProgress color="inherit" size={16} />
                ) : isError ? (
                  <WarningAmberIcon color="warning" size={16} />
                ) : isSuccess ? (
                  <CheckCircleIcon color="success" size={16} />
                ) : (
                  ''
                )
              }
            >
              Save Changes
            </Button>
          </Box>
        )}
        {tabIndex === 1 && <Typography>Change Password</Typography>}
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
