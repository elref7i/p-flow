import * as Yup from 'yup';

// تعريف الـ Regex في مكان واحد
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegx = /^(02)?01[0125][0-9]{8}/;
const passwordRegx = /^.{8,}$/;
const codeRegx = /^\d{6}$/;

const emailField = Yup.string()
  .matches(emailRegex, 'Invalid email')
  .required('Email is required');

const passwordField = Yup.string()
  .min(passwordRegx, 'Password must be at least 8 characters')
  .required('Password is required');

const confirmPasswordField = Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required('Confirm password is required');

export const SignupSchema = Yup.object().shape({
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
  location: Yup.object()
    .shape({
      type: Yup.string().required('Type is required'),
      coordinates: Yup.array()
        .of(Yup.number().required('Coordinate is required'))
        .length(2, 'Coordinates must be an array of two numbers'),
    })
    .required('Location is Required'),
});

export const loginSchema = Yup.object({
  email: emailField,
  password: passwordField,
});

export const forgetSchema = Yup.object({
  email: emailField,
});

export const updateAuthSchema = Yup.object({
  email: emailField,
  newPassword: passwordField,
});

export const verifySchema = Yup.object({
  resetCode: Yup.string()
    .required('Required')
    .matches(codeRegx, 'Invalid code'),
});
