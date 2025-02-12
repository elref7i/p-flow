import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Grid2,
  Typography,
  Stack,
} from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import * as yup from 'yup';
import axios from 'axios';
import { useFormik } from 'formik';
import { CustomHead } from '../../../components/Common/CustomTypography';

const SignupForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegx = /^(02)?01[0125][0-9]{8}/;

  const steps = [
    'Personal Information',
    'Contact Information',
    'Location & Role',
  ];

  async function signup(values) {
    try {
      // console.log('Submitting values:', values);
      const options = {
        url: 'https://pflow.koyeb.app/api/v1/auth/signup',
        method: 'POST',
        data: values,
      };
      const { data } = await axios.request(options);

      console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const validationSchema = yup.object().shape({
    name: yup.string().required('User name is required'),
    email: yup
      .string()
      .matches(emailRegex, 'Invalid email')
      .required('Email is required'),
    ownerName: yup.string().required('Owner name is required'),
    phone: yup
      .string()
      .required('Phone is required')
      .matches(phoneRegx, 'Invalid phone number'),
    registrationNumber: yup
      .string()
      .required('Registration number is required'),
    identificationNumber: yup
      .string()
      .required('Identification number is required'),
    city: yup.string().required('City is required'),
    governorate: yup.string().required('Governorate is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    rePassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    role: yup
      .string()
      .oneOf(['pharmacy', 'inventory'], 'Invalid role')
      .required('Role is required'),
    location: yup.object().shape({
      type: yup.string().required('Type is required'),
      coordinates: yup
        .array()
        .of(yup.number().required('Coordinate is required'))
        .length(2, 'Coordinates must be an array of two numbers'),
    }),
  });

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
    validationSchema,
    onSubmit: signup,
  });
  // console.log(errors);

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
              label="ConsfirmPassword"
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

            <Box sx={{ my: 2 }}>
              <Stack direction={'row'} gap={2}>
                <Box>
                  <input
                    id="pharmacy"
                    type="radio"
                    name="role"
                    value="pharmacy"
                    checked={values.role === 'pharmacy'}
                    onChange={() => setFieldValue('role', 'pharmacy')}
                  />
                  <label htmlFor="pharmacy">Pharmacy</label>
                </Box>
                <Box>
                  <input
                    id="inventory"
                    type="radio"
                    name="role"
                    value="inventory"
                    checked={values.role === 'inventory'}
                    onChange={() => setFieldValue('role', 'inventory')}
                  />
                  <label htmlFor="inventory">Inventory</label>
                </Box>
              </Stack>

              {errors.role && touched.role && (
                <Typography variant="p">{errors.role}</Typography>
              )}
            </Box>
            <Button
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                bgcolor: '#1976d2',
                color: '#fff',
                px: 2,
                py: 1,
                borderRadius: '3px',
                '&:hover': { bgcolor: '#1565c0' },
              }}
              startIcon={<MyLocationIcon />}
              onClick={handleGetLocation}
            >
              Get Location
            </Button>
            {/* {errors.location?.type && (
              <Typography variant="p">{errors.location.type}</Typography>
            )} */}
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
          minHeight: '80vh',
          mt: 5,
          p: 3,
          borderRadius: 2,
        }}
      >
        <Grid2
          size={{ md: 6 }}
          sx={{
            display: { xs: 'none', md: 'block' },
            bgcolor: '#DDDDDD',
            borderRadius: '10px',
            boxShadow: '0px 2px 3px',
          }}
        ></Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ bg: 'red', pt: 5 }}>
          <CustomHead mb={2} variant="h1" align={'center'}>
            Sign Up
          </CustomHead>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ my: 2 }}>{renderStepContent(activeStep)}</Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <CustomButton
              disabled={activeStep === 0}
              type="button"
              onClick={handleBack}
              fs="15px"
              hoverColor={true}
              hoverbgColor={true}
              marginInline={true}
            >
              Back
            </CustomButton>
            {activeStep === steps.length - 1 ? (
              <form onSubmit={handleSubmit}>
                <CustomButton type="submit">Sign Up</CustomButton>
              </form>
            ) : (
              <CustomButton
                type="button"
                onClick={handleNext}
                fs="15px"
                hoverColor={true}
                hoverbgColor={true}
                marginInline={true}
              >
                Next Up
              </CustomButton>
            )}
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default SignupForm;
