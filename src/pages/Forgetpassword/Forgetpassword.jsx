import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  Paper,
} from '@mui/material';
import CustomButton from '../../components/Common/ButtonStyle';
import { useFormik } from 'formik';
// import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export default function Forgetpassword() {
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
    <Box
      component={'section'}
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Paper sx={{ mt: 5, p: 3, borderRadius: 2 }} elevation={4}>
          <Box sx={{ mb: 5 }}>
            <Link to="login">
              <Link to="/login">Hover Me</Link>
            </Link>
          </Box>
          <Typography
            variant="h5"
            sx={{ fontSize: '40px', fontWeight: 'bold' }}
            align="center"
            gutterBottom
          >
            Forgetpassword
          </Typography>
          <TextField fullWidth label="Email" margin="normal" sx={{ mb: 3 }} />

          <CustomButton>Send</CustomButton>
        </Paper>
      </Container>
    </Box>
  );
}
