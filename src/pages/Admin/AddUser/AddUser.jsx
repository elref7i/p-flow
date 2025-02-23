import { Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import Role from '../../../components/Role/Role';

export default function AddUser() {
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
    // validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Stack component={'form'} maxWidth={'lg'} marginInline={'auto'} gap={0}>
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
    </Stack>
  );
}
