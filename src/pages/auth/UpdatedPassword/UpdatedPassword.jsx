import { Typography, Grid2, Box, TextField, Container } from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import { useFormik } from 'formik';
import { CustomHead } from '@/components/Common/CustomTypography';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LeftAuth from '@/components/Common/LeftAuth';
import { updateAuthSchema } from '@/lib/schemas/AuthSchema';
import PasswordControl from '../../../components/Common/FormControl';

export default function UpdatedPassword() {
  const navigator = useNavigate();

  async function updatedPassword(values) {
    const loading = toast.loading('waiting...');
    try {
      const options = {
        url: 'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/resetPassword',
        method: 'PUT',
        data: values,
      };
      const { data } = await axios.request(options);
      console.log(data);
      if (data.message === 'success') {
        toast.success(data.message);
        navigator('/login');
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      toast.dismiss(loading);
    }
  }

  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        email: '',
        newPassword: '',
      },
      validationSchema: updateAuthSchema,
      onSubmit: updatedPassword,
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
      <LeftAuth />
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
        <Container maxWidth="sm">
          <Box component={'header'} marginBottom={3}>
            <CustomHead variant="h1" align="left">
              Update Your Password
            </CustomHead>
            <Typography
              variant="body1"
              sx={{ fontSize: '15px', color: '#939494' }}
            >
              Please create a new password for your account. Ensure it meets the
              required criteria to keep your account secure.
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

            <PasswordControl
              name="newPassword"
              error={errors.newPassword}
              value={values.newPassword}
              touched={touched.newPassword}
              handleBlur={handleBlur}
              handleChange={handleChange}
              text="New Password"
            />
            <CustomButton
              type="submit"
              // @ts-ignore
              w="100%"
              sm="50%"
              md="40%"
            >
              Update
            </CustomButton>
          </form>
        </Container>
      </Grid2>
    </Grid2>
  );
}
