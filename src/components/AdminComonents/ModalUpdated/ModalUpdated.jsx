/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CircularProgress, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { UpdateDataUser } from '@/schemas/AdminSchema';
import { useTypeContext } from '@/context/UserType.context';
import { getSpecificUser } from '@/api/adminApi';
import { useUpdateUser } from '@/hooks/useAdminAction';
import EditIcon from '@mui/icons-material/Edit';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

export default function ModalUpdated({ userId }) {
  const { token } = useTypeContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const [dataSpecificUser, setDataSpecificUser] = useState(null);

  //* Function GET SPECIFIC USER
  const fetchUserSpecific = async () => {
    try {
      const userData = await getSpecificUser({ token, userId });
      setDataSpecificUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, isError, mutate, reset, isSuccess } = useUpdateUser();

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setValues,
  } = useFormik({
    initialValues: {
      name: '',
      ownerName: '',
      phone: '',
      city: '',
      governorate: '',
    },
    validationSchema: UpdateDataUser,
    onSubmit: (values) => {
      mutate(
        { userId, token, values },
        {
          onSuccess: () => {
            handleClose();
          },
        }
      );
    },
  });

  useEffect(() => {
    if (dataSpecificUser) {
      const { name, ownerName, phone, city, governorate } = dataSpecificUser;
      setValues({
        name: name || '',
        ownerName: ownerName || '',
        phone: phone || '',
        city: city || '',
        governorate: governorate || '',
      });
    }
  }, [dataSpecificUser]);

  return (
    <Box>
      <Button
        onClick={async () => {
          await fetchUserSpecific();
          handleOpen();
        }}
        variant="contained"
        color="warning"
        sx={{ fontSize: { xs: '10px', md: '15px' } }}
        startIcon={<EditIcon />}
      >
        Updated
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

            <Box sx={{ mx: 'auto', mt: 3, width: 'fit-content' }}>
              <Button
                type="submit"
                variant="contained"
                color={isError ? 'error' : 'warning'}
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
                Updated
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
