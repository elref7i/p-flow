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
} from '@mui/material';
import { useFormik } from 'formik';
import ImageAdmin from '@/assets/photo_2024-12-03_19-37-17.jpg';
import { useTypeContext } from '../../context/UserType.context';
import { useUpdateUser } from '../../hooks/useAdminAction';

export default function Setting() {
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();
  const { userData, token } = useTypeContext();
  const {
    name,
    ownerName,
    phone,
    city,
    governorate,
    // role,
    _id,
    // identificationNumber,
    // registrationNumber,
    // email,
  } = userData;
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };
  const { mutate, isLoading, isError } = useUpdateUser();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    // setFieldValue,
    errors,
    touched,
    dirty,
  } = useFormik({
    initialValues: {
      name,
      ownerName,
      phone,
      city,
      // location: {
      //   type: '',
      //   coordinates: [],
      // },
      governorate,
      // password: '',
      // rePassword: '',
    },
    onSubmit: (values) => {
      mutate({ token, values, userId: _id });
    },
  });
  console.log(handleChange);

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
              sx={{ mt: 3, ml: 'auto', display: 'block' }}
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
