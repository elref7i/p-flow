import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import { updatesLoggedUserPass } from '../../lib/schemas/UserSchema';
import PasswordControl from '../../components/Common/PasswordControl';
import CustomButton from '../../components/Common/ButtonStyle';

export default function ChangePassword() {
  const theme = useTheme();
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    dirty,
    errors,
    touched,
    values,
  } = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
    },
    validationSchema: updatesLoggedUserPass,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box maxWidth={'lg'} margin="auto">
      <Typography color={theme.palette.text.primary} variant="h5" mb={1}>
        Update Your Password
      </Typography>
      <Typography variant="body2" color={theme.palette.text.secondary} mb={3}>
        Please enter your old password and set a new password to update your
        account security.
      </Typography>
      <Divider />

      <Stack spacing={2} mt={5} component="form" onSubmit={handleSubmit}>
        {/* New Password */}
        <PasswordControl
          name="newPassword"
          value={values.newPassword}
          touched={touched.newPassword}
          error={errors.newPassword}
          handleBlur={handleBlur}
          handleChange={handleChange}
          text="New Password"
        />

        {/* Old Password */}
        <PasswordControl
          name="oldPassword"
          value={values.oldPassword}
          touched={touched.oldPassword}
          error={errors.oldPassword}
          handleBlur={handleBlur}
          handleChange={handleChange}
          text="Old Password"
        />

        <Box>
          <CustomButton
            type="submit"
            disabled={!dirty}
            variant="contained"
            sx={{ mt: 3, ml: 'auto', display: 'flex' }}
            marginInline={'auto 0'}
          >
            Change Password
          </CustomButton>
        </Box>
      </Stack>
    </Box>
  );
}
