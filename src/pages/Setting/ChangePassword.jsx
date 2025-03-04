import { Box, CircularProgress, Divider, Stack, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import { updatesLoggedUserPass } from '@/lib/schemas/UserSchema';
import PasswordControl from '@/components/Common/PasswordControl';
import CustomButton from '@/components/Common/ButtonStyle';
import { useUpdatePassUSer } from '@/lib/hooks/useUserAction';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTypeContext } from '@/context/UserType.context';
import { CustomHead } from '@/components/Common/CustomTypography';
import { CustomParagraph } from '../../components/Common/CustomTypography';

export default function ChangePassword() {
  const { token } = useTypeContext();
  const { mutate, isError, isSuccess, isLoading } = useUpdatePassUSer();
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
      mutate({ token, values });
      console.log(values);
    },
  });

  return (
    <Box maxWidth={'lg'} margin="auto">
      <CustomHead color={theme.palette.text.primary} variant="h5" mb={1}>
        Update Your Password
      </CustomHead>
      <CustomParagraph mb={3}>
        Please enter your old password and set a new password to update your
        account security.
      </CustomParagraph>
      <Divider />

      <Stack spacing={2} mt={5} component="form" onSubmit={handleSubmit}>
        <PasswordControl
          name="oldPassword"
          value={values.oldPassword}
          touched={touched.oldPassword}
          error={errors.oldPassword}
          handleBlur={handleBlur}
          handleChange={handleChange}
          text="Old Password"
        />
        <PasswordControl
          name="newPassword"
          value={values.newPassword}
          touched={touched.newPassword}
          error={errors.newPassword}
          handleBlur={handleBlur}
          handleChange={handleChange}
          text="New Password"
        />

        <Box>
          <CustomButton
            type="submit"
            disabled={!dirty}
            variant="contained"
            sx={{ mt: 3, ml: 'auto', display: 'flex' }}
            marginInline={'auto 0'}
            startIcon={
              isLoading ? (
                <CircularProgress color="inherit" size={16} />
              ) : isError ? (
                <WarningAmberIcon color="warning" size={16} />
              ) : isSuccess ? (
                <CheckCircleIcon color="success" size={16} />
              ) : (
                ''
              )
            }
          >
            Change Password
          </CustomButton>
        </Box>
      </Stack>
    </Box>
  );
}
