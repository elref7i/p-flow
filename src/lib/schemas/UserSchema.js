import * as Yup from 'yup';
const phoneRegx = /^(02)?01[0125][0-9]{8}/;
const passwordRegx = /^\d{8,}$/;

const passwordField = Yup.string()
  .matches(passwordRegx, 'Password must be exactly 8 digits') // ✅ تصحيح التحقق من الباسورد
  .required('Password is required');

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
    .matches(passwordField, 'Old password must be at least 8 characters long.'),

  newPassword: Yup.string()
    .required('New password is required.')
    .min(8, 'New password must be at least 8 characters long.')
    .matches(passwordField, 'New password must be at least 8 characters long.')
    .notOneOf(
      [Yup.ref('oldPassword')],
      'New password must be different from the old password.'
    ),
});
