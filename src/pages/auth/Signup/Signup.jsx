import { useState } from 'react';
import {
  Box,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Grid2,
  Typography,
  useTheme,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import * as yup from 'yup';
import axios from 'axios';
import { useFormik } from 'formik';
import { CustomHead } from '../../../components/Common/CustomTypography';
import toast from 'react-hot-toast';
import { CustomLink } from '../../../components/Common/ButtonStyle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LeftAuth from '../../../components/Common/LeftAuth';

const SignupForm = () => {
  const theme = useTheme();
  console.log(theme.palette.mode === 'light');

  const [activeStep, setActiveStep] = useState(0);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegx = /^(02)?01[0125][0-9]{8}/;

  const steps = [
    'Personal Information',
    'Contact Information',
    'Location & Role',
  ];

  async function signup(values) {
    const toastloading = toast.loading('Waiting...');
    try {
      // console.log('Submitting values:', values);
      const options = {
        url: 'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/login',
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
    location: yup
      .object()
      .shape({
        type: yup.string().required('Type is required'),
        coordinates: yup
          .array()
          .of(yup.number().required('Coordinate is required'))
          .length(2, 'Coordinates must be an array of two numbers'),
      })
      .required('Loaction is Required'),
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

            {/* <Box sx={{ mb: 1 }}>
              <label htmlFor="pharmacy" color="primary">
                Pharmacy
              </label>
              <input
                id="pharmacy"
                type="radio"
                name="role"
                value="pharmacy"
                checked={values.role === 'pharmacy'}
                onChange={() => setFieldValue('role', 'pharmacy')}
              />
              <label htmlFor="inventory">Inventory</label>
              <input
                id="inventory"
                color={'error'}
                type="radio"
                name="role"
                value="inventory"
                checked={values.role === 'inventory'}
                onChange={() => setFieldValue('role', 'inventory')}
              />

              {errors.role && touched.role && (
                <Typography variant="p" color={'error'}>
                  {errors.role}
                </Typography>
              )}
            </Box> */}
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
        <LeftAuth />
        <Grid2 size={{ xs: 12, md: 8 }} sx={{ bg: 'red', pt: 5 }}>
          <CustomLink
            to={'/landing'}
            bghover={true}
            display={'flex'}
            alignItems={'center'}
          >
            <ArrowBackIosIcon />
            Back To Home
          </CustomLink>
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
