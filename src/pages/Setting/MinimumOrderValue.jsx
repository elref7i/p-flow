/* eslint-disable react/prop-types */
import { Box, useTheme, Divider, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { updateMinimumOrderSchema } from "../../lib/schemas/UserSchema";
import MinimumOrderControl from "../../components/Common/MinimumOrderControl";
import { useUpdateLoggedUser } from "../../lib/hooks/useUserAction";
import { useContext, useEffect } from "react";
import { UserTypeContext } from "../../context/UserType.context";
import {
  CustomHead,
  CustomParagraph,
} from "../../components/Common/CustomTypography";
import CustomButton from "@/components/Common/ButtonStyle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function MinimumOrderValue({ userData }) {
  const { mutateAsync, isLoading, isError, isSuccess } = useUpdateLoggedUser();
  const { token, fetchUserData } = useContext(UserTypeContext);
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      minimumOrderValue: userData?.minimumOrderValue || "",
    },
    validationSchema: updateMinimumOrderSchema,
    onSubmit: async (values, { resetForm }) => {
      const { data } = await mutateAsync({
        token,
        values: {
          minimumOrderValue: values.minimumOrderValue,
        },
      });

      if (data?.message === "success") {
        fetchUserData(token);
        resetForm({ values });
      }
    },
  });

  useEffect(() => {
    if (userData?.minimumOrderValue !== undefined) {
      formik.resetForm({
        values: {
          minimumOrderValue: userData.minimumOrderValue,
        },
      });
    }
  }, [userData]);

  return (
    <Box maxWidth="lg" margin="auto">
      <CustomHead color={theme.palette.text.primary} variant="h5" mb={1}>
        Update Minimum Order Value
      </CustomHead>
      <CustomParagraph mb={3}>
        Please enter a new value for your minimum order amount.
      </CustomParagraph>
      <Divider sx={{ mb: 3 }} />

      <form noValidate onSubmit={formik.handleSubmit}>
        <MinimumOrderControl
          name="minimumOrderValue"
          text="Minimum Order Value"
          value={formik.values.minimumOrderValue}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          error={formik.errors.minimumOrderValue}
          touched={formik.touched.minimumOrderValue}
          endAdornment="EGP"
        />

        <CustomButton
          type="submit"
          disabled={!formik.dirty}
          variant="contained"
          sx={{ mt: 3, ml: "auto", display: "flex" }}
          mx={"auto 0"}
          startIcon={
            isLoading ? (
              <CircularProgress color="inherit" size={16} />
            ) : isError ? (
              <WarningAmberIcon color="warning" size={16} />
            ) : isSuccess ? (
              <CheckCircleIcon color="success" size={16} />
            ) : null
          }
        >
          Save Changes
        </CustomButton>
      </form>
    </Box>
  );
}
