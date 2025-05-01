import {
  Typography,
  Grid2,
  Box,
  TextField,
  Container,
  useTheme,
} from "@mui/material";
import CustomButton from "@/components/Common/ButtonStyle";
import { useFormik } from "formik";
import { CustomHead } from "@/components/Common/CustomTypography";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CustomLink } from "@/components/Common/ButtonStyle";
import HomeIcon from "@mui/icons-material/Home";
import { updateAuthSchema } from "@/lib/schemas/AuthSchema";
import PasswordControl from "@/components/Common/PasswordControl";
import { GradientLogo } from "@/components/Common/LogoImage";
import Logo from "../../../components/Common/LogoImage";
import { Helmet } from "react-helmet";
import { API_URL } from "../lib/api/api_url";

export default function UpdatedPassword() {
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const backgroundAuth = theme.palette.background.auth;
  const navigator = useNavigate();

  async function updatedPassword(values) {
    const loading = toast.loading("waiting...");
    try {
      const options = {
        url: `${API_URL}/auth/resetPassword`,
        method: "PUT",
        data: values,
      };
      const { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success(data.message);
        navigator("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(loading);
    }
  }

  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        email: "",
        newPassword: "",
      },
      validationSchema: updateAuthSchema,
      onSubmit: updatedPassword,
    });

  return (
    <>
      <Helmet>
        <title>Updated Password</title>
        <meta
          name="description"
          content="Your password has been successfully updated. You can now log in with your new credentials."
        />
        <meta
          name="keywords"
          content="password updated, reset password, change password, security update"
        />
        <meta property="og:title" content="Password Successfully Updated" />
        <meta
          property="og:description"
          content="Your password has been updated. Log in now with your new credentials."
        />
      </Helmet>

      <Box
        component={"main"}
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
          <Box sx={{ position: "absolute", top: 15, left: 50 }}>
            <CustomLink
              to={"/landing"}
              bghover={true}
              bg={true}
              fs={"30px"}
              fw="bold"
            >
              <HomeIcon color="primary" />
            </CustomLink>
          </Box>
          <Grid2
            size={{ xs: 12, md: 8 }}
            sx={{
              pt: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Container maxWidth="sm">
              <Box
                component={"header"}
                marginBottom={3}
                sx={{ textAlign: "center" }}
              >
                <Logo justifyContent={"center"} mb={2}>
                  <GradientLogo />
                </Logo>
                <CustomHead
                  variant="h1"
                  align="center"
                  style={{ color: textColor }}
                >
                  Update Your Password
                </CustomHead>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "15px",
                    color: "#939494",
                    textAlign: "center",
                  }}
                >
                  Please create a new password for your account. Ensure it meets
                  the required criteria to keep your account secure.
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
                  sx={{ mt: 3 }}
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
      </Box>
    </>
  );
}
