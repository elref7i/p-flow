import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Typography,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Grid2,
  Box,
} from '@mui/material';
import CustomButton from '../../components/Common/ButtonStyle';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export default function UpdatedPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const passwordRegx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Required')
      .matches(
        passwordRegx,
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character'
      ),
    rePassword: Yup.string()
      .required('* Please confirm your password.')
      .oneOf([Yup.ref('password')], '* Passwords must match.'),
  });
  const formik = useFormik({
    initialValues: {
      password: '',
      rePassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
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
        <Box component={'header'} marginBottom={3}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#2B273A',
              textAlign: 'left',
              mb: 2,
            }}
          >
            Updated Password
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '15px', color: '#939494' }}
          >
            Please create a new password for your account. Ensure it meets the
            required criteria to keep your account secure.
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
          </FormControl>
          <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showConfirmPassword
                        ? 'hide the password'
                        : 'display the password'
                    }
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>

          <CustomButton type="submit" w="100%" sm="75%" md="50%">
            Updated
          </CustomButton>
        </form>
      </Grid2>
    </Grid2>
  );
}
