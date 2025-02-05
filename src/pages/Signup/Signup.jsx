import { useContext, useRef, useState } from 'react';
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ownerName: '',
    phone: '',
    registrationNumber: '',
    identificationNumber: '',
    city: '',
    governorate: '',
    password: '',
    rePassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              console.log(formData);
            }}
          >
            <Grid2 container spacing={1}>
              <Grid2 item size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label={`${handleUser()} Name`}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  type="text"
                />
                <TextField
                  fullWidth
                  label="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  margin="normal"
                  type="text"
                />
                <TextField
                  fullWidth
                  label="registration Number"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  margin="normal"
                  type="number"
                />
                <TextField
                  fullWidth
                  label="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  margin="normal"
                  type="text"
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  margin="normal"
                />
              </Grid2>
              <Grid2 item size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  type="email"
                />

                <TextField
                  fullWidth
                  label="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  margin="normal"
                  type="tel"
                />

                <TextField
                  fullWidth
                  label="identification Number"
                  name="identificationNumber"
                  value={formData.identificationNumber}
                  onChange={handleChange}
                  margin="normal"
                  type="number"
                />
                <TextField
                  fullWidth
                  label="governorate"
                  name="governorate"
                  value={formData.governorate}
                  onChange={handleChange}
                  margin="normal"
                  type="text"
                />
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="rePassword"
                  value={formData.rePassword}
                  onChange={handleChange}
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
                width: { xs: '100%', md: '75%' },
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
