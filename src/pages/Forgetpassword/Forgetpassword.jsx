import { TextField, Typography, Grid2, Box } from '@mui/material';
import CustomButton from '../../components/Common/ButtonStyle';
import { useFormik } from 'formik';
// import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default function ForgetPassword() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Required')
      .matches(emailRegex, 'Invalid email'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
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
      <Grid2
        size={{ xs: 12, md: 6 }}
        sx={{
          pt: 5,
        }}
      >
        <Box
          sx={{
            height: '100%', // يخليه ياخد الطول بالكامل
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            // gap: 9, // المسافة بين العناصر بدل marginBottom
          }}
        >
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
              Forget Password
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '15px', color: '#939494' }}
            >
              Please enter your registered email address to receive a password
              reset link. If you don&apos;t remember your email address, contact
              our support team for assistance.
            </Typography>
          </Box>
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

            <CustomButton type="submit" w="100%" sm="75%" md="50%">
              Send
            </CustomButton>
          </form>
        </Box>
      </Grid2>
    </Grid2>
  );
}
