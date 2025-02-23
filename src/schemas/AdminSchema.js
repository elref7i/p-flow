import * as Yup from 'yup';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegx = /^(02)?01[0125][0-9]{8}/;

const emailField = Yup.string()
  .matches(emailRegex, 'Invalid email')
  .required('Email is required');

export const UpdateDataUser = Yup.object().shape({
  name: Yup.string().required('User name is required'),
  email: emailField,
  ownerName: Yup.string().required('Owner name is required'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(phoneRegx, 'Invalid phone number'),
  city: Yup.string().required('City is required'),
  governorate: Yup.string().required('Governorate is required'),
  location: Yup.object()
    .shape({
      type: Yup.string().required('Type is required'),
      coordinates: Yup.array()
        .of(Yup.number().required('Coordinate is required'))
        .length(2, 'Coordinates must be an array of two numbers'),
    })
    .required('Location is Required'),
});
