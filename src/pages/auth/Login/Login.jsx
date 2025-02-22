import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Grid2,
  Box,
  Container,
} from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import { useFormik } from 'formik';
import { useState } from 'react';
import { CustomLink } from '@/components/Common/ButtonStyle';
import LeftAuth from '../../../components/Common/LeftAuth';

import FixedHead from '../../../components/Common/FixedHead';
import { useTypeContext } from '../../../context/UserType.context';
import { loginSchema } from '../../../schemas/AuthSchema';

export default function Login() {
  const { login } = useTypeContext();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit: login,
    });

  return (
    <Grid2
      spacing={5}
      container
      sx={{
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <LeftAuth namePage="Sign Up" path="/signup"></LeftAuth>
      <Grid2
        size={{ xs: 12, md: 8 }}
        sx={{
          pt: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="sm">
          <FixedHead>Sign in to</FixedHead>
          <Box component={'form'} sx={{ pt: 5 }} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              sx={{ mb: 3 }}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              helperText={touched.email && errors.email}
            />
            <FormControl fullWidth sx={{ mb: 8 }} variant="outlined">
              <InputLabel
                color={errors.email && touched.email ? 'error' : 'primary'}
                htmlFor="outlined-adornment-password"
              >
                Password
              </InputLabel>
              <OutlinedInput
                sx={{ mb: 2 }}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password}
                helperText={touched.password && errors.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? 'hide the password'
                          : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {/* <Box component={'div'} width={'fit-content'} align={'end'}> */}
              <CustomLink bghover={true} to="/forgetpassword" ml={'auto'}>
                Forgot Your Password ?
              </CustomLink>
              {/* </Box> */}
            </FormControl>
            <Box component={'div'} mb={3}>
              <CustomButton type="submit" w="100%" sm="45%">
                Login
              </CustomButton>
            </Box>
          </Box>
        </Container>
      </Grid2>
    </Grid2>
  );
}
