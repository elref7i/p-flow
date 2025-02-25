// import {
//   Avatar,
//   Box,
//   Button,
//   Divider,
//   Stack,
//   TextField,
//   Typography,
//   InputLabel, // استيراد InputLabel
// } from '@mui/material';
// import { CustomHead } from '../../components/Common/CustomTypography';
// import ImageAdmin from '@/assets/photo_2024-12-03_19-37-17.jpg';
// import Location from '../../components/Loaction/Location';
// import { useFormik } from 'formik';

// export default function Setting() {
//   const {
//     handleSubmit,
//     handleBlur,
//     handleChange,
//     values,
//     setFieldValue,
//     errors,
//     touched,
//   } = useFormik({
//     initialValues: {
//       name: '',
//       ownerName: '',
//       phone: '',
//       city: '',
//       location: {
//         type: '',
//         coordinates: [],
//       },
//       governorate: '',
//       password: '',
//       rePassword: '',
//     },
//     // validationSchema: signupSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   return (
//     <Box maxWidth={'lg'} mx={'auto'}>
//       <Box component={'form'} onSubmit={handleSubmit}>
//         <CustomHead fw={'normal'}>My Profile</CustomHead>
//         <Divider />
//         <Box py={2}>
//           <Typography
//             variant="h2"
//             fontSize={'20px'}
//             color="secondary"
//             fontWeight={'400'}
//             pb={2}
//           >
//             Profile Picture
//           </Typography>
//           <Stack
//             direction={'row'}
//             gap={3}
//             flexWrap={'wrap'}
//             alignItems={'center'}
//           >
//             <Box>
//               <Avatar
//                 alt="Ahmed Refai"
//                 src={ImageAdmin}
//                 sx={{
//                   width: 90,
//                   height: 90,
//                 }}
//               />
//             </Box>
//             <Stack direction={'row'} gap={1}>
//               <Button variant="contained" color="primary">
//                 Change Picture
//               </Button>
//               <Button variant="contained" color="error">
//                 Delete Picture
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//         <Stack direction={'row'} gap={2} flexWrap={'wrap'} fullWidth>
//           <Box flex={1}>
//             <InputLabel
//               htmlFor="profile-name"
//               sx={{
//                 fontSize: '20px',
//                 color: 'secondary.main',
//                 fontWeight: 400,
//               }}
//             >
//               Profile name
//             </InputLabel>
//             <TextField
//               id="profile-name"
//               fullWidth
//               margin="normal"
//               type="text"
//               name="name"
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={errors.name && touched.name}
//               helperText={touched.name && errors.name}
//               sx={{ p: 1 }}
//             />
//           </Box>
//           <Box flex={1}>
//             <InputLabel
//               htmlFor="owner-name"
//               sx={{
//                 fontSize: '20px',
//                 color: 'secondary.main',
//                 fontWeight: 400,
//               }}
//             >
//               Owner Name
//             </InputLabel>
//             <TextField
//               id="owner-name"
//               fullWidth
//               margin="normal"
//               type="text"
//               name="ownerName"
//               value={values.ownerName}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={errors.ownerName && touched.ownerName}
//               helperText={touched.ownerName && errors.ownerName}
//             />
//           </Box>
//         </Stack>
//         <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
//           <Box flex={1}>
//             <InputLabel
//               htmlFor="Phone"
//               sx={{
//                 fontSize: '20px',
//                 color: 'secondary.main',
//                 fontWeight: 400,
//               }}
//             >
//               Phone
//             </InputLabel>
//             <TextField
//               id="Phone"
//               fullWidth
//               margin="normal"
//               type="tel"
//               name="phone"
//               value={values.phone}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={errors.phone && touched.phone}
//               helperText={touched.phone && errors.phone}
//             />
//           </Box>
//           <Box flex={1}>
//             <InputLabel
//               htmlFor="city"
//               sx={{
//                 fontSize: '20px',
//                 color: 'secondary.main',
//                 fontWeight: 400,
//               }}
//             >
//               City
//             </InputLabel>
//             <TextField
//               id="city"
//               fullWidth
//               margin="normal"
//               type="text"
//               name="city"
//               value={values.city}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={errors.city && touched.city}
//               helperText={touched.city && errors.city}
//             />
//           </Box>
//         </Stack>
//         <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
//           <Box flex={1}>
//             <InputLabel
//               htmlFor="governorate"
//               sx={{
//                 fontSize: '20px',
//                 color: 'secondary.main',
//                 fontWeight: 400,
//               }}
//             >
//               governorate
//             </InputLabel>
//             <TextField
//               id="governorate"
//               fullWidth
//               margin="normal"
//               type="text"
//               name="governorate"
//               value={values.governorate}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={errors.governorate && touched.governorate}
//               helperText={touched.governorate && errors.governorate}
//             />
//           </Box>
//         </Stack>
//         <Location setFieldValue={setFieldValue} errors={errors} />
//         <Button
//           type="submit"
//           variant="contained"
//           fs={'15px'}
//           sx={{ ml: 'auto', display: 'block' }}
//           marginInline={'auto 0'}
//         >
//           Save Changes
//         </Button>
//       </Box>
//     </Box>
//   );
// }

import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  InputLabel,
  Paper,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useFormik } from 'formik';
import Location from '../../components/Loaction/Location';
import ImageAdmin from '@/assets/photo_2024-12-03_19-37-17.jpg';

export default function Setting() {
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: '',
      ownerName: '',
      phone: '',
      city: '',
      location: {
        type: '',
        coordinates: [],
      },
      governorate: '',
      password: '',
      rePassword: '',
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
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Profile" />
          <Tab label="Security" />
          <Tab label="Preferences" />
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
              <Box>
                <Location setFieldValue={setFieldValue} errors={errors} />
              </Box>
            </Stack>

            <Button
              type="submit"
              variant="contained"
              // disabled
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
