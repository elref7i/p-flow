import { TextField, Box, Stack, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import { useTypeContext } from "@/context/UserType.context";
import { loginSchema } from "@/lib/schemas/AuthSchema";
import PasswordControl from "@/components/Common/PasswordControl";
import { CustomParagraph } from "@/components/Common/CustomTypography";
import { GradientLogo } from "@/components/Common/LogoImage";
import Logo from "../../../components/Common/LogoImage";
import IconHomeAuth from "../../../components/Common/IconHomeAuth";
import { useThemeConstants } from "@/lib/constants/theme.constant";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export default function Login() {
  // Context
  const { login } = useTypeContext();

  //Themes
  const { textLink, textSecondary, textPrimary, authBackground, isMobile } =
    useThemeConstants();

  // Form
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: () => {
        login(values);
      },
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
        <meta
          property="og:title"
          content="Login to Your Account"
        />
        <meta
          property="og:description"
          content="Sign in to access your account and manage your profile securely."
        />
      </Helmet>

      <Box
        component={"main"}
        sx={{
          background: authBackground,
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
            <Logo
              justifyContent={"center"}
              mb={3}
            >
              <GradientLogo />
            </Logo>
            <Typography
              color={textPrimary}
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
              <Logo
                justifyContent={"center"}
                mb={2}
              >
                <GradientLogo />
              </Logo>
            )}
            <Typography
              color={textPrimary}
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
            <Box
              component={"div"}
              mt={1}
              ml={"auto "}
              width="fit-content"
            >
              <Button
                to="/forgetpassword"
                component={Link}
                variant="text"
                sx={{
                  p: 0,
                  color: textSecondary,
                  ":hover": {
                    color: textLink,
                    backgroundColor: "transparent",
                  },
                }}
              >
                Forgot Your Password ?
              </Button>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center" }}
              component={"div"}
              mt={5}
              mb={2}
            >
              <Button
                variant="contained"
                sx={{ flex: 1 }}
                type="submit"
              >
                Proceed to my account
              </Button>
            </Box>
            <Typography
              color={textSecondary}
              textAlign={"center"}
              component={"p"}
            >
              Don’t have an account?{" "}
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  ":active": {
                    color: textLink,
                  },
                }}
                to={"/signup"}
                component={Link}
              >
                Register
              </Button>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
