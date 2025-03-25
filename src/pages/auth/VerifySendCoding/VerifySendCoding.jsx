import { useState } from 'react';
import { TextField, Button, Box, Container, useTheme } from '@mui/material';
import { CustomHead } from '@/components/Common/CustomTypography';
import { useFormik } from 'formik';
import CustomButton from '@/components/Common/ButtonStyle';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { verifySchema } from '@/lib/schemas/AuthSchema';

function VerifySendCoding() {
  const theme = useTheme();
  const backgroundAuth = theme.palette.background.auth;
  const [remainingTime, setRemainingTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const navigator = useNavigate();

  const handleResend = () => {
    alert('Code resent!');
    startCountdown();
  };

  const startCountdown = () => {
    setIsCounting(true);
    setRemainingTime(30);

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 1) {
          clearInterval(interval);
          setIsCounting(false);
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  async function verifySendCoding(values) {
    const loading = toast.loading('watting');
    try {
      const options = {
        url: 'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/verifyResetCode',
        method: 'POST',
        data: values,
      };
      const { data } = await axios.request(options);
      console.log(data);
      if (data.message === 'success') {
        toast.success(data.message);
        navigator('/updatedpassword');
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      toast.dismiss(loading);
    }
  }

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        resetCode: '',
      },
      validationSchema: verifySchema,
      onSubmit: verifySendCoding,
    });

  return (
    <Box
    component={'main'}
    sx={{
      background: backgroundAuth, // لون ثابت
      // backgroundImage: (theme) => theme.palette.background.authImage, // التدرج
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <CustomHead variant="h1">Verfiy Code</CustomHead>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="6-Digit Code"
            variant="outlined"
            sx={{ mb: 3, width: '100%' }}
            name="resetCode"
            value={values.resetCode}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.resetCode && touched.resetCode}
            helperText={touched.resetCode && errors.resetCode}
          />
          <CustomButton
            type="submit"
            disabled={isCounting}
            w="100%"
            sm="75%"
            md="50%"
          >
            {isCounting ? `Resend in ${remainingTime}s` : 'Verify'}
          </CustomButton>
          <Button
            type="submit"
            variant="text"
            color="secondary"
            onClick={handleResend}
            disabled={isCounting}
          >
            Resend Code
          </Button>
        </form>
      </Container>
    </Box>
    </Box>
  );
}

export default VerifySendCoding;
