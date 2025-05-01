import { useState } from "react";
import { TextField, Button, Box, Container, useTheme } from "@mui/material";
import { CustomHead } from "@/components/Common/CustomTypography";
import { useFormik } from "formik";
import CustomButton from "@/components/Common/ButtonStyle";
import { GradientLogo } from "@/components/Common/LogoImage";
import Logo from "../../../components/Common/LogoImage";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { verifySchema } from "@/lib/schemas/AuthSchema";
import { Helmet } from "react-helmet";
import { API_URL } from "../lib/api/api_url";

function VerifySendCoding() {
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const backgroundAuth = theme.palette.background.auth;
  const [remainingTime, setRemainingTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const navigator = useNavigate();

  const handleResend = () => {
    alert("Code resent!");
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
    const loading = toast.loading("watting");
    try {
      const options = {
        url: `${API_URL}/auth/verifyResetCode`,
        method: "POST",
        data: values,
      };
      const { data } = await axios.request(options);
      console.log(data);
      if (data.message === "success") {
        toast.success(data.message);
        navigator("/updatedpassword");
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
        resetCode: "",
      },
      validationSchema: verifySchema,
      onSubmit: verifySendCoding,
    });

  return (
    <>
      <Helmet>
        <title>Verfiy Code</title>
        <meta
          name="description"
          content="Enter the verification code sent to your email or phone to complete the verification process."
        />
        <meta
          name="keywords"
          content="verify code, authentication, security code, account verification, OTP"
        />
        <meta property="og:title" content="Verify Your Code" />
        <meta
          property="og:description"
          content="Enter the verification code to secure your account and complete the authentication process."
        />
      </Helmet>

      <Box
        component="main"
        sx={{
          background: backgroundAuth,
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            width: "100%",
          }}
        >
          <Container
            maxWidth="sm"
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Logo justifyContent="center" mb={3}>
              <GradientLogo />
            </Logo>

            <CustomHead
              variant="h1"
              style={{
                color: textColor,
                textAlign: "center",
              }}
            >
              Verify Code
            </CustomHead>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginTop: "2rem",
              }}
            >
              <TextField
                type="text"
                label="6-Digit Code"
                variant="outlined"
                sx={{ mb: 3, width: "100%", textAlign: "center" }}
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
                {isCounting ? `Resend in ${remainingTime}s` : "Verify"}
              </CustomButton>

              <Button
                variant="text"
                color="secondary"
                onClick={handleResend}
                disabled={isCounting}
                sx={{ mt: 2 }}
              >
                Resend Code
              </Button>
            </form>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default VerifySendCoding;
