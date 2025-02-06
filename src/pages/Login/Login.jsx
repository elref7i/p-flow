import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  TextField,
  Box,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Grid2,
} from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CustomHead } from '@/components/Common/CustomTypography';
import axios from 'axios';
import toast from 'react-hot-toast';
import { UserTypeContext } from '../../context/UserType.context';

export default function Login() {
  const { setToken, setRole } = useContext(UserTypeContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegx = /^.{8,}$/;
  const navigator = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  async function login(values) {
    const loading = toast.loading('watting');
    try {
      const options = {
        url: 'https://pflow.koyeb.app/api/v1/auth/login',
        method: 'POST',
        data: values,
      };
      const { data } = await axios.request(options);
      console.log(data);
      if (data.message === 'success') {
        toast.success(data.message);
        setRole(data.user.role);
        setToken(data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role);
        navigator('/');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(loading);
    }
  }
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
    onSubmit: login,
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
        <CustomHead variant="h1" align={'left'}>
          Login
        </CustomHead>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            sx={{ mb: 3 }}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
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
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Link
              to="/forgetpassword"
              style={{ fontStyle: 'italic', color: '#2B273A' }}
            >
              Forget Password
            </Link>
          </Box>

          <CustomButton type="submit" w="100%" sm="75%" md="50%">
            Login
          </CustomButton>
        </form>
      </Grid2>
    </Grid2>
  );
}
