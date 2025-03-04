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

// مخطط التحقق باستخدام Yup

export const UploadImageSchema = Yup.object().shape({
  imageProfile: Yup.mixed()
    .required('Please select an image file.')
    .test(
      'fileType',
      'Invalid file type. Please upload a JPEG, PNG, or GIF image.',
      (value) => {
        if (!value) return false;
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        return allowedTypes.includes(value.type);
      }
    )
    .test(
      'fileSize',
      'File size is too large. Please upload an image less than 5MB.',
      (value) => {
        if (!value) return false;
        const maxSize = 5 * 1024 * 1024; // 5MB
        return value.size <= maxSize;
      }
    ),
});
