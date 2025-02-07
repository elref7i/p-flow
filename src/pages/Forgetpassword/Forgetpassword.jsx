import { TextField, Typography, Grid2, Box } from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomHead } from '@/components/Common/CustomTypography';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigator = useNavigate();

  async function forgetpassword(values) {
    const loading = toast.loading('watting');

    try {
      const options = {
        url: 'https://pflow.koyeb.app/api/v1/auth/forgetpassword',
        method: 'POST',
        data: values,
      };
      const { data } = await axios.request(options);
      // console.log(data.message);
      if (data.message === 'Reset code sent successfully') {
        toast.success(data.message);
        navigator('/verifysendcoding');
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
      <Grid2
        size={{ xs: 12, md: 6 }}
        sx={{
          pt: 5,
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
          }}
        >
          <Box component={'header'} marginBottom={3}>
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
              w="100%"
              sm="75%"
              md="50%"
            >
              Send
            </CustomButton>
          </form>
        </Box>
      </Grid2>
    </Grid2>
  );
}
