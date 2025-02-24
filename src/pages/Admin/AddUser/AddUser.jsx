import { CircularProgress, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import Role from '../../../components/Role/Role';
import CustomButton from '../../../components/Common/ButtonStyle';
import { useAdminAddUser } from '../../../hooks/useAdminAction';
import { AdminAddUser } from '../../../schemas/AdminSchema';
import { useTypeContext } from '../../../context/UserType.context';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function AddUser() {
  const { token } = useTypeContext();
  const { mutate, isLoading, isError } = useAdminAddUser();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: '',
      name: '',
      ownerName: '',
      phone: '',
      role: '',
      city: '',

      governorate: '',
      registrationNumber: '',
      identificationNumber: '',
      password: '',
      rePassword: '',
    },
    validationSchema: AdminAddUser,
    onSubmit: (values) => {
      console.log('Submitting values:', values);
      mutate({ token, values });
    },
  });
  return (
    <Stack
      component={'form'}
      onSubmit={handleSubmit}
      maxWidth={'lg'}
      marginInline={'auto'}
      gap={0}
    >
      <Stack direction={'row'} gap={1}>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name}
          helperText={touched.name && errors.name}
        />
        <TextField
          fullWidth
          label="Owner Name"
          name="ownerName"
          margin="normal"
          type="text"
          value={values.ownerName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.ownerName && touched.ownerName}
          helperText={touched.ownerName && errors.ownerName}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && touched.email}
          helperText={touched.email && errors.email}
        />
      </Stack>
      <Stack direction={'row'} gap={1}>
        <TextField
          fullWidth
          label="Registration Number"
          name="registrationNumber"
          margin="normal"
          type="number"
          value={values.registrationNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.registrationNumber && touched.registrationNumber}
          helperText={touched.registrationNumber && errors.registrationNumber}
        />
        <TextField
          fullWidth
          label="Identification Number"
          name="identificationNumber"
          margin="normal"
          type="number"
          value={values.identificationNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.identificationNumber && touched.identificationNumber}
          helperText={
            touched.identificationNumber && errors.identificationNumber
          }
        />

        <TextField
          fullWidth
          label="Phone"
          name="phone"
          margin="normal"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone && touched.phone}
          helperText={touched.phone && errors.phone}
        />
      </Stack>
      <Stack direction={'row'} gap={1}>
        <TextField
          fullWidth
          label="City"
          name="city"
          margin="normal"
          type="text"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.city && touched.city}
          helperText={touched.city && errors.city}
        />

        <TextField
          fullWidth
          label="Governorate"
          name="governorate"
          margin="normal"
          type="text"
          value={values.governorate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.governorate && touched.governorate}
          helperText={touched.governorate && errors.governorate}
        />
      </Stack>
      <TextField
        fullWidth
        label="Password"
        name="password"
        margin="normal"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password && touched.password}
        helperText={touched.password && errors.password}
      />
      <TextField
        fullWidth
        label="Confirm Password"
        name="rePassword"
        margin="normal"
        type="password"
        value={values.rePassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.rePassword && touched.rePassword}
        helperText={touched.rePassword && errors.rePassword}
      />
      <Role
        errors={errors}
        touched={touched}
        setFieldValue={setFieldValue}
        values={values}
      />
      <CustomButton
        type="submit"
        marginInline={'auto 0'}
        sx={{ display: 'flex' }}
        startIcon={
          isLoading ? (
            <CircularProgress color="inherit" size={20} />
          ) : isError ? (
            <WarningAmberIcon color="error" size={20} />
          ) : (
            ''
          )
        }
      >
        Add User
      </CustomButton>
    </Stack>
  );
}
