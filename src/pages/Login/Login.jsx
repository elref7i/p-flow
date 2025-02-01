import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Paper,
} from '@mui/material';
import CustomButton from '../../components/Common/ButtonStyle';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Required')
      .matches(emailRegex, 'Invalid email'),
    password: Yup.string()
      .required('Required')
      .matches(
        passwordRegx,
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character'
      ),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Paper sx={{ mt: 5, p: 3, borderRadius: 2 }} elevation={4}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontSize: '40px', fontWeight: 'bold' }}
          >
            Login
          </Typography>
          <TextField fullWidth label="Email" margin="normal" sx={{ mb: 3 }} />
          <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
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
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Link to="/forgetpassword" style={{ fontStyle: 'italic' }}>
              Forget Password
            </Link>
          </Box>
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <FormLabel component="legend">User Type</FormLabel>
            <RadioGroup row>
              <FormControlLabel
                value="pharmacy"
                control={<Radio />}
                label="Pharmacy"
              />
              <FormControlLabel
                value="store"
                control={<Radio />}
                label="Store"
              />
            </RadioGroup>
          </FormControl>

          <CustomButton>Login</CustomButton>
        </Paper>
      </Container>
    </Box>
  );
}
