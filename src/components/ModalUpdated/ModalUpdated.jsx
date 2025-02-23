/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import Location from '../Loaction/Location';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { UpdateDataUser } from '../../schemas/AdminSchema';
import { useTypeContext } from '../../context/UserType.context';
import { getSpecificUser } from '../../api/adminApi';

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
  const handleClose = () => setOpen(false);
  const [dataSpecificUser, setDataSpecificUser] = useState(null);

  const fetchUserSpecific = async () => {
    try {
      const userData = await getSpecificUser({ token, userId });
      setDataSpecificUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  // async function updateDataUser(values) {
  //   const options = {
  //     url: `https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/users/${{
  //       userId,
  //       values,
  //     }}`,
  //     method: 'PUT',
  //     data: values,
  //     headers: {
  //       Authorization: {
  //         token: `Bearer ${token}`,
  //       },
  //     },
  //   };
  //   const { data } = await axios.request(options);
  //   console.log(data);
  // }

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    setFieldValue,
    errors,
    touched,
    setValues,
  } = useFormik({
    initialValues: {
      email: '',
      name: '',
      ownerName: '',
      phone: '',
      role: '',
      city: '',
      location: {
        type: '',
        coordinates: [],
      },
      governorate: '',
    },
    validationSchema: UpdateDataUser,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  useEffect(() => {
    if (dataSpecificUser) {
      const {
        email,
        name,
        ownerName,
        phone,
        role,
        city,
        location,
        governorate,
      } = dataSpecificUser;
      setValues({
        email: email || '',
        name: name || '',
        ownerName: ownerName || '',
        phone: phone || '',
        role: role || '',
        city: city || '',
        location: {
          type: location?.type || '',
          coordinates: location?.coordinates || [],
        },
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
        startIcon={<DeleteIcon />}
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
            <Location setFieldValue={setFieldValue} errors={errors} />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
