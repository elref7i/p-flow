import { useState } from 'react';
import {
  Box,
  TextField,
  Grid2,
  Typography,
  useTheme,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Container,
  Button,
  CircularProgress,
} from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import LeftAuth from '../../../components/Common/LeftAuth';
import FixedHead from '../../../components/Common/FixedHead';
import CustomizedSteppers from '../../../components/Common/Stepper';
import { validationSchema } from './Schema';

const SignupForm = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    'Personal Information',
    'Contact Information',
    'Location & Role',
  ];

  async function signup(values) {
    const toastloading = toast.loading('Waiting...');
    try {
      const options = {
        url: 'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/signup',
        method: 'POST',
        data: values,
      };
      const { data } = await axios.request(options);
      if (data.message === 'success') {
        toast.success(data.message);
      }
      console.log('Response:', data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error('Error:', error);
    } finally {
      toast.dismiss(toastloading);
    }
  }

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
      email: '',
      name: '',
      ownerName: '',
      phone: '',
      role: '',
      city: '',
      location: {
        type: '',
        coordinates: [],
      },
      governorate: '',
      registrationNumber: '',
      identificationNumber: '',
      password: '',
      rePassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: signup,
  });

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            type: 'Point',
            coordinates: [position.coords.longitude, position.coords.latitude],
          };
          setFieldValue('location', newLocation);
          console.log('Updated location:', newLocation);
        },
        (error) => {
          console.error('Error fetching location:', error);
          alert('Unable to fetch location. Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name && touched.name}
              helperText={touched.name && errors.name}
            />
            <TextField
              fullWidth
              label="Owner Name"
              name="ownerName"
              margin="normal"
              type="text"
              value={values.ownerName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.ownerName && touched.ownerName}
              helperText={touched.ownerName && errors.ownerName}
            />
            <TextField
              fullWidth
              label="Registration Number"
              name="registrationNumber"
              margin="normal"
              type="number"
              value={values.registrationNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.registrationNumber && touched.registrationNumber}
              helperText={
                touched.registrationNumber && errors.registrationNumber
              }
            />
            <TextField
              fullWidth
              label="Identification Number"
              name="identificationNumber"
              margin="normal"
              type="number"
              value={values.identificationNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.identificationNumber && touched.identificationNumber
              }
              helperText={
                touched.identificationNumber && errors.identificationNumber
              }
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              fullWidth
              label="Email"
              name="email"
              margin="normal"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              helperText={touched.email && errors.email}
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              margin="normal"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone && touched.phone}
              helperText={touched.phone && errors.phone}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              margin="normal"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password}
              helperText={touched.password && errors.password}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="rePassword"
              margin="normal"
              type="password"
              value={values.rePassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.rePassword && touched.rePassword}
              helperText={touched.rePassword && errors.rePassword}
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              fullWidth
              label="City"
              name="city"
              margin="normal"
              type="text"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.city && touched.city}
              helperText={touched.city && errors.city}
            />

            <TextField
              fullWidth
              label="Governorate"
              name="governorate"
              margin="normal"
              type="text"
              value={values.governorate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.governorate && touched.governorate}
              helperText={touched.governorate && errors.governorate}
            />

            <FormControl sx={{ my: 1, ml: 1 }}>
              <FormLabel
                sx={{ fontSize: '20px', fontWeight: 'bold' }}
                id="demo-row-radio-buttons-group-label"
              >
                Role
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="pharmacy"
                  control={<Radio />}
                  label="pharmacy"
                  checked={values.role === 'pharmacy'}
                  onChange={() => setFieldValue('role', 'pharmacy')}
                  sx={{ color: theme.palette.text.primary }}
                />
                <FormControlLabel
                  value="inventory"
                  control={<Radio />}
                  label="Inventory"
                  checked={values.role === 'inventory'}
                  onChange={() => setFieldValue('role', 'inventory')}
                  sx={{ color: theme.palette.text.primary }}
                />
              </RadioGroup>
              {errors.role && touched.role && (
                <Typography variant="p" marginLeft={2} color={'error'}>
                  {errors.role}
                </Typography>
              )}
            </FormControl>
            <CustomButton
              marginInline={'7px 0px'}
              startIcon={<MyLocationIcon />}
              onClick={handleGetLocation}
              bgcolor={theme.palette.primary.main}
              border={`1px solid ${theme.palette.secondary.main}`}
              hoverbgColor={theme.palette.action.active}
            >
              Get Location
            </CustomButton>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                p: 3,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[2],
                maxWidth: 300,
                margin: '0 auto',
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', textAlign: 'center' }}
              >
                Select Your Location
              </Typography>
              <Button
                variant="contained"
                startIcon={
                  isLoading ? (
                    <CircularProgress size={24} sx={{ color: 'white' }} />
                  ) : (
                    <MyLocationIcon />
                  )
                }
                onClick={handleGetLocation}
                disabled={isLoading} // تعطيل الزر أثناء التحميل
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                  boxShadow: theme.shadows[3],
                  borderRadius: 2,
                  padding: '10px 20px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  minWidth: 150, // لتجنب تغيير حجم الزر أثناء التحميل
                }}
              >
                {isLoading ? 'Fetching...' : 'Get Location'}
              </Button>
            </Box>
            {errors.location && (
              <Box marginTop={1} marginLeft={2}>
                <Typography variant="p" color={'error'}>
                  {errors.location.type + ' ' + errors.location.coordinates}
                </Typography>
              </Box>
            )}
          </>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <Grid2
        spacing={5}
        container
        sx={{
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <LeftAuth namePage="Sign in" path="/login"></LeftAuth>
        <Grid2
          size={{
            xs: 12,
            md: 8,
          }}
          sx={{
            bg: 'red',
            pt: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Container maxWidth="sm">
            <FixedHead>Sign Up to</FixedHead>
            <CustomizedSteppers activeStep={activeStep} />

            <Box sx={{ my: 2, pt: 3 }}>{renderStepContent(activeStep)}</Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Box component={'form'} onSubmit={handleSubmit}>
                  <Button type="submit" variant="contained">
                    Signup
                  </Button>
                </Box>
              ) : (
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              )}
            </Box>
          </Container>
        </Grid2>
      </Grid2>
    </>
  );
};

export default SignupForm;
