import * as yup from 'yup';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegx = /^(02)?01[0125][0-9]{8}/;
export const validationSchema = yup.object().shape({
  name: yup.string().required('User name is required'),
  email: yup
    .string()
    .matches(emailRegex, 'Invalid email')
    .required('Email is required'),
  ownerName: yup.string().required('Owner name is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(phoneRegx, 'Invalid phone number'),
  registrationNumber: yup.string().required('Registration number is required'),
  identificationNumber: yup
    .string()
    .required('Identification number is required'),
  city: yup.string().required('City is required'),
  governorate: yup.string().required('Governorate is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  rePassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  role: yup
    .string()
    .oneOf(['pharmacy', 'inventory'], 'Invalid role')
    .required('Role is required'),
  location: yup
    .object()
    .shape({
      type: yup.string().required('Type is required'),
      coordinates: yup
        .array()
        .of(yup.number().required('Coordinate is required'))
        .length(2, 'Coordinates must be an array of two numbers'),
    })
    .required('Location is Required'),
});
