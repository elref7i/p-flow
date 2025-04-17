import {
  TextField,
  Typography,
  Grid2,
  Box,
  Container,
  useTheme,
} from "@mui/material";
import CustomButton from "@/components/Common/ButtonStyle";
import { useFormik } from "formik";
import { CustomHead } from "@/components/Common/CustomTypography";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CustomLink } from "@/components/Common/ButtonStyle";
import LoginIcon from "@mui/icons-material/Login";
import { useForgetPassword } from "@/context/Forget.context";
import { forgetSchema } from "@/lib/schemas/AuthSchema";
import { Helmet } from "react-helmet";

export default function ForgetPassword() {
  const theme = useTheme();
  const backgroundAuth = theme.palette.background.auth;
  const navigator = useNavigate();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  const { setForgetCompleted } = useForgetPassword();
  async function forgetpassword(values) {
    const loading = toast.loading("waiting...");

    try {
      const options = {
        url: "https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/forgetpassword",
        method: "POST",
        data: values,
      };
      const { data } = await axios.request(options);
      // console.log(data.message);
      if (data.message === "Reset code sent successfully") {
        toast.success(data.message);
        setForgetCompleted(true);
        setTimeout(() => {
          navigator("/verifysendcoding");
        }, 2000);
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
        email: "",
      },
      validationSchema: forgetSchema,
      onSubmit: forgetpassword,
    });

  return (
    <>
      <Helmet>
        <title>Forget Password</title>
        <meta
          name="description"
          content="Reset your password securely and regain access to your account."
        />
        <meta
          name="keywords"
          content="forgot password, reset password, account recovery, login help"
        />
        <meta
          property="og:title"
          content="Forget Password - Account Recovery"
        />
        <meta
          property="og:description"
          content="Easily reset your password and regain access to your account."
        />
      </Helmet>

      <Box
        component={"main"}
        sx={{
          background: backgroundAuth, // لون ثابت
          // backgroundImage: (theme) => theme.palette.background.authImage, // التدرج
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: 15, left: 50 }}>
          <CustomLink
            to={"/login"}
            bghover={true}
            bg={true}
            fs={"30px"}
            fw="bold"
          >
            <LoginIcon color="primary"></LoginIcon>
          </CustomLink>
        </Box>
        <Grid2
          spacing={5}
          container
          sx={{
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid2
            size={{ xs: 12, md: 8 }}
            sx={{
              bg: "red",
              pt: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Container maxWidth={"sm"}>
              <Box component={"header"} paddingBottom={4}>
                <CustomHead
                  variant="h1"
                  align="left"
                  style={{ color: textColor }}
                >
                  Forget Password
                </CustomHead>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "15px", color: "#939494" }}
                >
                  Please enter your registered email address to receive a
                  password reset link. If you don&apos;t remember your email
                  address, contact our support team for assistance.
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
            </Container>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
