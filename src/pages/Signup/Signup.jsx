import { useContext, useState } from 'react';
import {
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Box,
  styled,
  Grid2,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CustomHead } from '@/components/Common/CustomTypography';
import { UserTypeContext } from '@/context/UserType.context';
import CustomButton from '@/components/Common/ButtonStyle';

const SignupForm = () => {
  const { userType } = useContext(UserTypeContext);
  const [activeStep, setActiveStep] = useState(0);
  const handleUser = () => {
    console.log(userType);

    if (userType === 'pharmacy'.toLowerCase()) {
      return 'pharmacy';
    } else {
      return 'Inventory';
    }
  };

  const steps = [
    `${handleUser()} information`,
    'Owner information',
    'Location and details',
  ];

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
              label={`${handleUser()} Name`}
              name={`${handleUser()}Name`}
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

            <Box
              sx={{
                my: 2,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                gap: '10px',
                width: '75%',
                mx: 'auto',
              }}
            >
              {userType === 'pharmacy'.toLowerCase() && (
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
              )}
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
            <Button>Get Location</Button>
          </>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <Grid2
        spacing={5}
        container
        sx={{
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
            minHeight: '100%',
            maxHeight: '100%',
          }}
        ></Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ bg: 'red', py: 2, minHeight: '100%', maxHeight: '100%' }}
        >
          <CustomHead variant="h1" align="center">
            Signup {handleUser()}
          </CustomHead>
          <Stepper sx={{ mt: 5 }} activeStep={activeStep} alternativeLabel>
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
                <CustomButton hoverColor={true} marginInline={true}>
                  Sign UP
                </CustomButton>
              ) : (
                <CustomButton
                  hoverColor={true}
                  marginInline={true}
                  onClick={handleNext}
                >
                  Next
                </CustomButton>
              )}
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default SignupForm;
