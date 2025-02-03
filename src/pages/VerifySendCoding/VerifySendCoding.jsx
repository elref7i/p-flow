import { useState } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';
import { CustomHead } from '../../components/Common/CustomTypography';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import CustomButton from '../../components/Common/ButtonStyle';

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
    resetCode: Yup.string()
      .required('Required')
      .matches(codeRegx, 'Invalid code'),
  });
  const { handleBlur, handleChange, handleSubmit, values } = useFormik({
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
        <form onSubmit={handleSubmit}>
          <TextField
            type="number"
            label="6-Digit Code"
            variant="outlined"
            sx={{ mb: 3, width: '100%' }}
            name="resetCode"
            value={values.resetCode}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <CustomButton disabled={isCounting} w="100%" sm="75%" md="50%">
            {isCounting ? `Resend in ${remainingTime}s` : 'Verify'}
          </CustomButton>
          <Button
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
  );
}

export default VerifySendCoding;
