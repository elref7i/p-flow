/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CircularProgress, TextField } from '@mui/material';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useTypeContext } from '@/context/UserType.context';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Role from '../../Role/Role';
import { AdminAddUser } from '../../../lib/schemas/AdminSchema';
import { useAdminAddUser } from '../../../lib/hooks/useAdminAction';
import PasswordControl from '../../Common/PasswordControl';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
  overflow: 'auto',
};

export default function ModalAdd() {
  const { token } = useTypeContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { mutate, isLoading, reset, isError, isSuccess } = useAdminAddUser();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
    errors,
    touched,
    resetForm,
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
      mutate(
        { token, values },
        {
          onSuccess: () => {
            handleClose();
            resetForm();
          },
        }
      );
    },
  });

  return (
    <Box>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="info"
        sx={{
          fontSize: { xs: '10px', md: '15px', textTransform: 'capitalize' },
        }}
        startIcon={<PersonAddIcon />}
      >
        Add User
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component={'form'}
            onSubmit={handleSubmit}
            sx={{ overflow: 'auto' }}
          >
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
              helperText={
                touched.registrationNumber && errors.registrationNumber
              }
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
              error={
                errors.identificationNumber && touched.identificationNumber
              }
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
            <PasswordControl
              name="password"
              error={errors.password}
              value={values.password}
              touched={touched.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              text="Password"
            />
            <PasswordControl
              name="rePassword"
              error={errors.rePassword}
              value={values.rePassword}
              touched={touched.rePassword}
              handleBlur={handleBlur}
              handleChange={handleChange}
              text="Confirm Password"
            />
            <Role
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              values={values}
            />
            <Box sx={{ mx: 'auto', mt: 3, width: 'fit-content' }}>
              <Button
                type="submit"
                variant="contained"
                color={isError ? 'error' : 'info'}
                sx={{
                  fontSize: { xs: '10px', md: '18px', mx: 'auto' },
                  px: 5,
                  fontWeight: 'bold',
                }}
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
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
