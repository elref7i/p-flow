import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  TextField,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Grid2,
  Box,
  useTheme,
} from "@mui/material";
import CustomButton from "@/components/Common/ButtonStyle";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { CustomHead } from "@/components/Common/CustomTypography";
import axios from "axios";
import toast from "react-hot-toast";
import { UserTypeContext } from "@/context/UserType.context";
import { CustomLink } from "@/components/Common/ButtonStyle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import imageStore from "../../../assets/Alto ángulo del carrito de compras con espacio de copia y láminas de pastillas _ Foto Premium.jpg";

export default function Login() {
  const theme = useTheme();
  const { setToken, setRole } = useContext(UserTypeContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegx = /^.{8,}$/;
  const navigator = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  async function login(values) {
    const loading = toast.loading("watting");
    try {
      const options = {
        url: "https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/login",
        method: "POST",
        data: values,
      };
      const { data } = await axios.request(options);
      console.log(data);
      if (data.message === "success") {
        toast.success(data.message);
        setRole(data.user.role);
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        navigator("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(loading);
    }
  }
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Required")
      .matches(emailRegex, "Invalid email"),
    password: Yup.string()
      .required("Required")
      .matches(
        passwordRegx,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
      ),
  });
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: login,
    });

  return (
    <Grid2
      spacing={5}
      container
      sx={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Grid2
        size={{ md: 4 }}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${imageStore})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            flexDirection: "column",
            minHeight: "80%",
          }}
        >
          <CustomLink
            to={"/signup"}
            p={"10px 75px"}
            fs={"30px"}
            fw={"bold"}
            br={"5px"}
            bg={theme.palette.primary.main}
            bghover={
              theme.palette.mode === "dark" && theme.palette.secondary.main
            }
            chover={theme.palette.mode === "dark" && theme.palette.primary.main}
            display={"inline-block"}
          >
            Sign Up
          </CustomLink>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 8 }} sx={{ bg: "red", pt: 5 }}>
        <CustomLink
          to={"/landing"}
          bghover={true}
          display={"flex"}
          alignItems={"center"}
        >
          <ArrowBackIosIcon />
          Back To Home
        </CustomLink>
        <CustomHead variant="h1" align={"center"}>
          Sign in TO P-Flow
        </CustomHead>
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
          <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
            <InputLabel
              color={errors.email && touched.email ? "error" : "primary"}
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password}
              helperText={touched.password && errors.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Box component={"div"} mb={3}>
            <CustomButton type="submit" w="100%" sm="75%" md="50%">
              Login
            </CustomButton>
          </Box>
          <Box component={"div"} align={"center"}>
            <CustomLink
              bghover={true}
              to="/forgetpassword"
              textDecoration={"underline"}
            >
              Forget Password
            </CustomLink>
          </Box>
        </form>
      </Grid2>
    </Grid2>
  );
}
