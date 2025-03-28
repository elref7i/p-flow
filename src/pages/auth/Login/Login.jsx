import {
  TextField,
  Box,
  useTheme,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomButton from "@/components/Common/ButtonStyle";
import { useFormik } from "formik";
import { useTypeContext } from "@/context/UserType.context";
import { loginSchema } from "@/lib/schemas/AuthSchema";
import PasswordControl from "@/components/Common/PasswordControl";
import { CustomLink } from "@/components/Common/ButtonStyle";
import { CustomParagraph } from "@/components/Common/CustomTypography";
import { GradientLogo } from "@/components/Common/LogoImage";
import Logo from "../../../components/Common/LogoImage";
import IconHomeAuth from "../../../components/Common/IconHomeAuth";
import { Helmet } from "react-helmet";
export default function Login() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { login } = useTypeContext();
  const backgroundAuth = theme.palette.background.auth;
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: login,
    });

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta
          name="description"
          content="Secure login to access your account and manage your profile."
        />
        <meta
          name="keywords"
          content="login, sign in, user authentication, account access, secure login"
        />
        <meta property="og:title" content="Login to Your Account" />
        <meta
          property="og:description"
          content="Sign in to access your account and manage your profile securely."
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
        {/* Icon Home */}
        <IconHomeAuth />

        {/* Left Auth */}
        <Stack
          maxWidth={"lg"}
          p={2}
          justifyContent={"center"}
          alignItems={"center"}
          direction={"row"}
          gap={10}
        >
          <Box
            width={"55%"}
            sx={{ display: { xs: "none", md: "block" }, textAlign: "center" }}
          >
            <Logo justifyContent={"center"} mb={3}>
              <GradientLogo />
            </Logo>
            <Typography
              color={theme.palette.text.primary}
              variant="h1"
              sx={{
                mb: 2,
                fontSize: "36px",
                fontWeight: 700,
                textWrap: "wrap",
              }}
            >
              Order and display medicines for stores and pharmacies
            </Typography>
            <CustomParagraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem sequi ex aspernatur sunt quia, aliquam totam odio
              facilis, debitis modi unde velit, hic magnam asperiores dolore.
              Voluptate earum beatae in?
            </CustomParagraph>
          </Box>
          <Box
            width={{ sm: "100%", md: "45%" }}
            component={"form"}
            sx={{ pt: 5 }}
            onSubmit={handleSubmit}
          >
            {isMobile && (
              <Logo justifyContent={"center"} mb={2}>
                <GradientLogo />
              </Logo>
            )}
            <Typography
              color={theme.palette.text.primary}
              variant="h5"
              sx={{
                mb: 5,
                fontSize: "20px",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              Welcome Back To P-Flow
            </Typography>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              sx={{
                color: "white",
                mb: 3,
              }}
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              helperText={touched.email && errors.email}
            />
            <PasswordControl
              name="password"
              error={errors.password}
              value={values.password}
              touched={touched.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              text="Password"
            />
            <Box component={"div"} mt={1} ml={"auto "} width="fit-content">
              <CustomLink
                bg={true}
                bghover={true}
                c={theme.palette.text.primary}
                chover={theme.palette.text.secondary}
                to="/forgetpassword"
              >
                Forgot Your Password ?
              </CustomLink>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center" }}
              component={"div"}
              mt={5}
              mb={2}
            >
              <CustomButton sx={{ flex: 1 }} type="submit">
                Proceed to my account
              </CustomButton>
            </Box>
            <Typography
              color={theme.palette.text.secondary}
              textAlign={"center"}
              component={"p"}
            >
              Don’t have an account?{" "}
              <CustomLink
                to={"/signup"}
                bghover={true}
                chover={true}
                c={"#5188FF"}
                display={"inline"}
                bg={true}
              >
                Register
              </CustomLink>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
