import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Typography,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
  Grid2,
  Box,
  TextField,
  Container,
} from "@mui/material";
import CustomButton from "@/components/Common/ButtonStyle";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { CustomHead } from "@/components/Common/CustomTypography";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LeftAuth from "../../../components/Common/LeftAuth";

export default function UpdatedPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const navigator = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegx = /^.{8,}$/;
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  async function updatedPassword(values) {
    const loading = toast.loading("waiting...");
    try {
      const options = {
        url: "https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/resetPassword",
        method: "PUT",
        data: values,
      };
      const { data } = await axios.request(options);
      console.log(data);
      if (data.message === "success") {
        toast.success(data.message);
        navigator("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      toast.dismiss(loading);
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Required")
      .matches(emailRegex, "Invalid email"),
    newPassword: Yup.string()
      .required("Required")
      .matches(
        passwordRegx,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
      ),
  });
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        email: "",
        newPassword: "",
      },
      validationSchema,
      onSubmit: updatedPassword,
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
      <LeftAuth />
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
        <Container maxWidth="sm">
          <Box component={"header"} marginBottom={3}>
            <CustomHead variant="h1" align="left">
              Update Your Password
            </CustomHead>
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", color: "#939494" }}
            >
              Please create a new password for your account. Ensure it meets the
              required criteria to keep your account secure.
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
            <FormControl fullWidth sx={{ mb: 3 }} variant="outlined">
              <InputLabel
                sx={{ fontSize: "11px" }}
                htmlFor="outlined-adornment-new-password"
              >
                New Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-new-password"
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.newPassword && touched.newPassword}
                helperText={touched.newPassword && errors.newPassword}
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
            <CustomButton
              type="submit"
              // @ts-ignore
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
  );
}
