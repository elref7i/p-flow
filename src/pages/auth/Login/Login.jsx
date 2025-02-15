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
} from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { CustomHead } from '@/components/Common/CustomTypography';
import axios from 'axios';
import toast from 'react-hot-toast';
import { CustomLink } from '@/components/Common/ButtonStyle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LeftAuth from '../../../components/Common/LeftAuth';
import { useTypeContext } from '../../../context/UserType.context';

export default function Login() {
  const { setToken, setRole } = useTypeContext();
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
        url: 'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/login',
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
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
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
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/*  */}
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
        <CustomHead variant="h1" align={'center'}>
          Sign in TO P-Flow
        </CustomHead>
        <form onSubmit={handleSubmit}>
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
          <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
            <InputLabel
              color={errors.email && touched.email ? 'error' : 'primary'}
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
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
          </FormControl>
          <Box component={'div'} mb={3}>
            <CustomButton type="submit" w="100%" sm="75%" md="50%">
              Login
            </CustomButton>
          </Box>
          <Box component={'div'} align={'center'}>
            <CustomLink
              bghover={true}
              to="/forgetpassword"
              textDecoration={'underline'}
            >
              Forget Password
            </CustomLink>
          </Box>
        </form>
      </Grid2>
    </Grid2>
  );
}
