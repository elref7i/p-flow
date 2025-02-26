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
} from '@mui/material';
import { useFormik } from 'formik';
// import Location from '../../components/Loaction/Location';
import ImageAdmin from '@/assets/photo_2024-12-03_19-37-17.jpg';
import { useTypeContext } from '../../context/UserType.context';

export default function Setting() {
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();
  const { userData } = useTypeContext();
  const {
    name,
    ownerName,
    phone,
    city,
    governorate,
    // role,
    // _id,
    // identificationNumber,
    // registrationNumber,
    // email,
  } = userData;
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    // setFieldValue,
    errors,
    touched,
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
      console.log(values);
    },
  });

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
            }}
          />
          <Tab
            label="Security"
            sx={{
              color: theme.palette.text.primary, // لون النص
              '&.Mui-selected': {
                color: theme.palette.action.active, // لون النص عند التحديد
              },
            }}
          />
          <Tab
            label="Preferences"
            sx={{
              color: theme.palette.text.primary, // لون النص
              '&.Mui-selected': {
                color: theme.palette.action.active, // لون النص عند التحديد
              },
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
              <TextField
                label="Profile Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name}
                helperText={touched.name && errors.name}
                fullWidth
              />
              <TextField
                label="Owner Name"
                name="ownerName"
                value={values.ownerName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.ownerName && touched.ownerName}
                helperText={touched.ownerName && errors.ownerName}
                fullWidth
              />
              <TextField
                label="Phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone && touched.phone}
                helperText={touched.phone && errors.phone}
                fullWidth
              />
              <TextField
                label="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.city && touched.city}
                helperText={touched.city && errors.city}
                fullWidth
              />
              <TextField
                label="Governorate"
                name="governorate"
                value={values.governorate}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.governorate && touched.governorate}
                helperText={touched.governorate && errors.governorate}
                fullWidth
              />
              {/* <Box>
                <Location setFieldValue={setFieldValue} errors={errors} />
              </Box> */}
            </Stack>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, ml: 'auto', display: 'block' }}
            >
              Save Changes
            </Button>
          </Box>
        )}
        {tabIndex === 1 && (
          <Typography>Security Settings (Under Development)</Typography>
        )}
        {tabIndex === 2 && (
          <Typography>Preferences Settings (Under Development)</Typography>
        )}
      </Paper>
    </Stack>
  );
}
