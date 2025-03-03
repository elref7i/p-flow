import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { updatesLoggedUserPass } from '../../lib/schemas/UserSchema';

export default function ChangePassword() {
  // const f = { handleBlur, handleChange, handleSubmit, errors, touched, values };
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
    },
    validationSchema: updatesLoggedUserPass,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return <Box></Box>;
}
