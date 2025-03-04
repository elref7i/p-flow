import * as Yup from 'yup';
import { phoneRegx, passwordRegx } from './Regx';

export const loggedUserSchema = Yup.object().shape({
  name: Yup.string().required('User name is required'),
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
    .required('Loaction is Required'),
});

export const updatesLoggedUserPass = Yup.object({
  oldPassword: Yup.string()
    .required('Old password is required.')
    .matches(passwordRegx, 'Old password must be at least 8 characters long.'),

  newPassword: Yup.string()
    .required('New password is required.')
    .min(8, 'New password must be at least 8 characters long.')
    .matches(passwordRegx, 'New password must be at least 8 characters long.')
    .notOneOf(
      [Yup.ref('oldPassword')],
      'New password must be different from the old password.'
    ),
});
