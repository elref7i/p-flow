import { useState } from "react";
import {
  Box,
  TextField,
  Container,
  Button,
  useTheme,
  Stack,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import CustomizedSteppers from "@/components/Common/Stepper";
import { signupSchema } from "@/lib/schemas/AuthSchema";
import Location from "@/components/Loaction/Location";
import Role from "@/components/Role/Role";
import IconHomeAuth from "../../../components/Common/IconHomeAuth";
import Logo, { GradientLogo } from "../../../components/Common/LogoImage";
import { Helmet } from "react-helmet";
import { API_URL } from "../../../lib/api/api_url";

const SignupForm = () => {
  const theme = useTheme();
  const backgroundAuth = theme.palette.background.auth;
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Personal Information",
    "Contact Information",
    "Location & Role",
  ];

  async function signup(values) {
    const toastloading = toast.loading("Waiting...");
    try {
      const options = {
        url: `${API_URL}/auth/signup`,
        method: "POST",
        data: values,
      };
      const { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error:", error);
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
      email: "",
      name: "",
      ownerName: "",
      phone: "",
      role: "",
      city: "",
      location: {
        type: "",
        coordinates: [],
      },
      governorate: "",
      registrationNumber: "",
      identificationNumber: "",
      password: "",
      rePassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: signup,
  });

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

            <Role
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              values={values}
            />
            <Stack
              direction={"row"}
              justifyContent={"center"}
              mb={2}
            >
              <Location
                setFieldValue={setFieldValue}
                errors={errors}
              />
            </Stack>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <>
        <Helmet>
          <title>Sign Up</title>
          <meta
            name="description"
            content="Create a new account to access exclusive features and manage your profile."
          />
          <meta
            name="keywords"
            content="sign up, register, create account, user registration, new account"
          />
          <meta
            property="og:title"
            content="Sign Up - Create Your Account"
          />
          <meta
            property="og:description"
            content="Join us today! Sign up to access exclusive features and manage your profile."
          />
        </Helmet>
        <Box
          component={"main"}
          sx={{
            background: backgroundAuth,
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Icon Home */}
          <IconHomeAuth />

          <Container maxWidth="sm">
            <Logo
              justifyContent={"center"}
              mb={3}
            >
              <GradientLogo />
            </Logo>
            <CustomizedSteppers activeStep={activeStep} />

            <Box sx={{ my: 2, pt: 3 }}>{renderStepContent(activeStep)}</Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Box
                  component={"form"}
                  onSubmit={handleSubmit}
                >
                  <Button
                    type="submit"
                    variant="contained"
                  >
                    Signup
                  </Button>
                </Box>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
          </Container>
        </Box>
      </>
    </>
  );
};

export default SignupForm;
