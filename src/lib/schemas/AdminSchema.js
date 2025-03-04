import * as Yup from 'yup';
import { emailField, passwordField, phoneRegx } from './Regx';

const confirmPasswordField = Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required('Confirm password is required');

export const UpdateDataUser = Yup.object().shape({
  name: Yup.string().required('User name is required'),
  ownerName: Yup.string().required('Owner name is required'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(phoneRegx, 'Invalid phone number'),
  city: Yup.string().required('City is required'),
  governorate: Yup.string().required('Governorate is required'),
});

export const AdminAddUser = Yup.object().shape({
  name: Yup.string().required('User name is required'),
  email: emailField,
  ownerName: Yup.string().required('Owner name is required'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(phoneRegx, 'Invalid phone number'),
  registrationNumber: Yup.string().required('Registration number is required'),
  identificationNumber: Yup.string().required(
    'Identification number is required'
  ),
  city: Yup.string().required('City is required'),
  governorate: Yup.string().required('Governorate is required'),
  password: passwordField,
  rePassword: confirmPasswordField,
  role: Yup.string()
    .oneOf(['pharmacy', 'inventory'], 'Invalid role')
    .required('Role is required'),
});
