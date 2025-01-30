import { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Stepper,
  Step,
  StepLabel,
  Box,
  Paper,
  styled,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const steps = [
  'Pharmacy information',
  'Owner information',
  'Location and details',
];

const SignupForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              fullWidth
              label="pharmacy Name"
              name="pharmacyName"
              margin="normal"
              type="text"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              margin="normal"
              type="email"
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="rePassword"
              type="password"
              margin="normal"
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              fullWidth
              label="ownerName"
              name="ownerName"
              margin="normal"
              type="text"
            />
            <TextField fullWidth label="phone" name="phone" margin="normal" />
            <TextField
              fullWidth
              label="identification Number"
              name="identificationNumber"
              margin="normal"
              type="number"
            />
            <TextField
              fullWidth
              label="registration Number"
              name="registrationNumber"
              margin="normal"
              type="number"
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              fullWidth
              label="city"
              name="city"
              margin="normal"
              type="text"
            />
            <TextField
              fullWidth
              label="governorate"
              name="governorate"
              margin="normal"
              type="text"
            />

            {/* UPload File */}
            <Box
              sx={{
                mt: 2,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                gap: '10px',
                width: '75%',
                mx: 'auto',
              }}
            >
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload image Of Pharmchy
                <VisuallyHiddenInput type="file" multiple />
              </Button>
              {/* Upload FIle */}
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload license Document
                <VisuallyHiddenInput type="file" multiple />
              </Button>
            </Box>
          </>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box>
      <Container maxWidth="sm" sx={{ bgcolor: 'white' }}>
        <Paper sx={{ p: 3 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 'bold', mb: 4 }}
            align="center"
            gutterBottom
          >
            Sign UP
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box mt={4}>
            {getStepContent(activeStep)}
            <Box mt={4} display="flex" justifyContent="space-between">
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Previous
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary">
                  Sign UP
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignupForm;
