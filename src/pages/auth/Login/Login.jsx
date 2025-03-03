import { TextField, Grid2, Box, Container } from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import { useFormik } from 'formik';
import LeftAuth from '@/components/Common/LeftAuth';
import FixedHead from '@/components/Common/FixedHead';
import { useTypeContext } from '@/context/UserType.context';
import { loginSchema } from '@/lib/schemas/AuthSchema';
import PasswordControl from '../../../components/Common/FormControl';

export default function Login() {
  const { login } = useTypeContext();

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
            <PasswordControl
              error={errors.password}
              value={values.password}
              touched={touched.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
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
