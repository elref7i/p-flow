import { TextField, Typography, Grid2, Box, useTheme } from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CustomHead } from '@/components/Common/CustomTypography';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CustomLink } from '../../../components/Common/ButtonStyle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import imageStore from '../../../assets/Alto ángulo del carrito de compras con espacio de copia y láminas de pastillas _ Foto Premium.jpg';

export default function ForgetPassword() {
  const theme = useTheme();
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
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Grid2
        size={{ md: 4 }}
        sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${imageStore})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            flexDirection: 'column',
            minHeight: '80%',
          }}
        >
          <CustomLink
            to={'/login'}
            p={'10px 75px'}
            fs={'30px'}
            fw={'bold'}
            br={'5px'}
            bg={theme.palette.primary.main}
            bghover={
              theme.palette.mode === 'dark' && theme.palette.secondary.main
            }
            chover={theme.palette.mode === 'dark' && theme.palette.primary.main}
            display={'inline-block'}
          >
            Sign In
          </CustomLink>
        </Box>
      </Grid2>
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
        <Box
          sx={{
            pt: 5,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
          }}
        >
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
        </Box>
      </Grid2>
    </Grid2>
  );
}
