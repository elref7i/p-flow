import * as Yup from 'yup';

export const phoneRegx = /^(02)?01[0125][0-9]{8}/;
export const codeRegx = /^\d{6}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegx = /^\d{8,}$/;

export const emailField = Yup.string()
  .matches(emailRegex, 'Invalid email')
  .required('Email is required');

export const passwordField = Yup.string()
  .matches(passwordRegx, 'Password must be exactly 8 digits')
  .required('Password is required');

export const confirmPasswordField = Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required('Confirm password is required');
