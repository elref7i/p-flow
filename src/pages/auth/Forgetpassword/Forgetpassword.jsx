import { TextField, Typography, Grid2, Box, Container } from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomHead } from '@/components/Common/CustomTypography';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LeftAuth from '../../../components/Common/LeftAuth';
import { useForgetPassword } from '../../../context/Forget.context';

export default function ForgetPassword() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigator = useNavigate();

  const { setForgetCompleted } = useForgetPassword();
  async function forgetpassword(values) {
    const loading = toast.loading('watting');

    try {
      const options = {
        url: 'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/forgetpassword',
        method: 'POST',
        data: values,
      };
      const { data } = await axios.request(options);
      // console.log(data.message);
      if (data.message === 'Reset code sent successfully') {
        toast.success(data.message);
        setForgetCompleted(true);
        setTimeout(() => {
          navigator('/verifysendcoding');
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      toast.dismiss(loading);
    }
  }
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Required')
      .matches(emailRegex, 'Invalid email'),
  });
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema,
      onSubmit: forgetpassword,
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
      <LeftAuth namePage="Sign in" path="/login"></LeftAuth>
      <Grid2
        size={{ xs: 12, md: 8 }}
        sx={{
          bg: 'red',
          pt: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth={'sm'}>
          <Box component={'header'} paddingBottom={4}>
            <CustomHead variant="h1" align="left">
              Forget Password
            </CustomHead>
            <Typography
              variant="body1"
              sx={{ fontSize: '15px', color: '#939494' }}
            >
              Please enter your registered email address to receive a password
              reset link. If you don&apos;t remember your email address, contact
              our support team for assistance.
            </Typography>
          </Box>
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

            <CustomButton
              type="submit"
              // @ts-ignore
              w="75%"
              sm="75%"
              md="50%"
            >
              Send
            </CustomButton>
          </form>
        </Container>
      </Grid2>
    </Grid2>
  );
}
