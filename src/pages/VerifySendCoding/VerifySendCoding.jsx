import { useState } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';
import { CustomHead } from '../../components/Common/CustomTypography';
import * as Yup from 'yup';
import { useFormik } from 'formik';

function VerifySendCoding() {
  const codeRegx = /^\d{6}$/;
  const [remainingTime, setRemainingTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

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

  const validationSchema = Yup.object({
    email: Yup.string().required('Required').matches(codeRegx, 'Invalid code'),
  });
  const formik = useFormik({
    initialValues: {
      resetCode: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
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
        <TextField
          label="6-Digit Code"
          variant="outlined"
          sx={{ mb: 3, width: '100%' }}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={isCounting}
          sx={{ width: '100%', mb: 2 }}
        >
          {isCounting ? `Resend in ${remainingTime}s` : 'Verify'}
        </Button>
        <Button
          variant="text"
          color="secondary"
          onClick={handleResend}
          disabled={isCounting}
        >
          Resend Code
        </Button>
      </Container>
    </Box>
  );
}

export default VerifySendCoding;
