import { useContext, useRef } from 'react';
import { Box, Button, Grid2, styled, TextField } from '@mui/material';
import { UserTypeContext } from '@/context/UserType.context';
import CustomButton from '@/components/Common/ButtonStyle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const SignupForm = () => {
  const { userType } = useContext(UserTypeContext);

  const handleUser = () => {
    if (userType === 'pharmacy'.toLowerCase()) {
      return 'pharmacy';
    } else {
      return 'Inventory';
    }
  };
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

  const inputName = useRef(null);

  // const getStepContent = (step) => {
  //   switch (step) {
  //     case 0:
  //       return (
  //         <>
  //
  //
  //
  //         </>
  //       );
  //     case 1:
  //       return (
  //         <>
  //
  //
  //         </>
  //       );
  //     case 2:
  //       return (
  //         <>
  //

  //           <Box
  //             sx={{
  //               my: 2,
  //               display: 'flex',
  //               justifyContent: 'space-between',
  //               flexDirection: 'column',
  //               gap: '10px',
  //               width: '75%',
  //               mx: 'auto',
  //             }}
  //           >
  //             {userType === 'pharmacy'.toLowerCase() && (
  //
  //             )}
  //             <Button
  //               component="label"
  //               role={undefined}
  //               variant="contained"
  //               tabIndex={-1}
  //               startIcon={<CloudUploadIcon />}
  //             >
  //               Upload license Document
  //               <VisuallyHiddenInput type="file" multiple />
  //             </Button>
  //           </Box>
  //
  //         </>
  //       );
  //     default:
  //       return 'Unknown step';
  //   }
  // };

  return (
    <>
      <Grid2 spacing={5} container sx={{ borderRadius: 2 }}>
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
          sx={{ py: 2, minHeight: '100%', maxHeight: '100%' }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(inputName.current?.value);
            }}
          >
            <Grid2 container spacing={1}>
              <Grid2 item size={6}>
                <TextField
                  fullWidth
                  inputRef={inputName}
                  label={`${handleUser()} Name`}
                  name={`${handleUser()}Name`}
                  margin="normal"
                  type="text"
                />
                <TextField
                  fullWidth
                  label="ownerName"
                  name="ownerName"
                  margin="normal"
                  type="text"
                />
                <TextField
                  fullWidth
                  label="registration Number"
                  name="registrationNumber"
                  margin="normal"
                  type="number"
                />
                <TextField
                  fullWidth
                  label="city"
                  name="city"
                  margin="normal"
                  type="text"
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  margin="normal"
                />
              </Grid2>
              <Grid2 item size={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  margin="normal"
                  type="email"
                />

                <TextField
                  fullWidth
                  label="phone"
                  name="phone"
                  margin="normal"
                  type="tel"
                />

                <TextField
                  fullWidth
                  label="identification Number"
                  name="identificationNumber"
                  margin="normal"
                  type="number"
                />
                <TextField
                  fullWidth
                  label="governorate"
                  name="governorate"
                  margin="normal"
                  type="text"
                />
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="rePassword"
                  type="password"
                  margin="normal"
                />
              </Grid2>
            </Grid2>
            <Box
              sx={{
                my: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: { xs: '100%', md: '50%' },
                mx: 'auto',
              }}
            >
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{ textWrap: 'nowrap' }}
              >
                Upload image Of Pharmchy
                <VisuallyHiddenInput type="file" multiple />
              </Button>
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
              >
                Get Location
              </Button>
            </Box>
            <CustomButton type="submit" w="100%" sm="75%" md="50%">
              Sign Up
            </CustomButton>
          </form>
        </Grid2>
      </Grid2>
    </>
  );
};

export default SignupForm;
