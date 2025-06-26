import { Box, useTheme, Divider, CircularProgress } from "@mui/material";
import { Formik, Form } from "formik";
import { updateMinimumOrderSchema } from "../../lib/schemas/UserSchema";
import MinimumOrderControl from "../../components/Common/MinimumOrderControl";
import { useUpdateLoggedUser } from "../../lib/hooks/useUserAction";
import { useContext } from "react";
import { UserTypeContext } from "../../context/UserType.context";
import { CustomHead } from "@/components/Common/CustomTypography";
import { CustomParagraph } from "../../components/Common/CustomTypography";
import CustomButton from "@/components/Common/ButtonStyle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function UpdateMinimumOrderValue() {
  const { mutate, isLoading, isError, isSuccess } = useUpdateLoggedUser();
  const { token } = useContext(UserTypeContext);
  const theme = useTheme();
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    mutate(
      { token, values: { minimumOrderValue: values.minimumOrderValue } },
      {
        onSuccess: () => {
          resetForm();
        },
        onSettled: () => {
          setSubmitting(false);
        },
      }
    );
  };

  return (
    <Box maxWidth={"lg"} margin="auto">
      <CustomHead color={theme.palette.text.primary} variant="h5" mb={1}>
        Update Minimum Order Value
      </CustomHead>
      <CustomParagraph mb={3}>
        Please enter a new value for your minimum order amount to .
      </CustomParagraph>
      <Divider />

      <Formik
        initialValues={{ minimumOrderValue: "" }}
        validationSchema={updateMinimumOrderSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, dirty }) => (
          <Form noValidate>
            <MinimumOrderControl
              name="minimumOrderValue"
              text="Minimum Order Value"
              value={values.minimumOrderValue}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors.minimumOrderValue}
              touched={touched.minimumOrderValue}
              endAdornment="EGP"
            />

            <CustomButton
              type="submit"
              disabled={!dirty}
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
                ) : (
                  ""
                )
              }
            >
              Save Changes
            </CustomButton>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
