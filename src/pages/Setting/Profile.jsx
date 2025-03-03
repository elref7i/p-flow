import {
  Box,
  Divider,
  Stack,
  TextField,
  Typography,
  InputLabel,
  CircularProgress,
} from '@mui/material';
import { useFormik } from 'formik';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomButton from '@/components/Common/ButtonStyle';
import Location from '@/components/Loaction/Location';
import { loggedUserSchema } from '../../lib/schemas/UserSchema';
import { useTypeContext } from '@/context/UserType.context';
import { useUpdateLoggedUser } from '@/lib/hooks/useUserAction';
import MapModal from '../../components/UserModal/MapComponent/MapComponent';
import UploadProfileImage from './UploadImage/UploadImage';

export default function Profile() {
  const { userData, token, fetchUserData } = useTypeContext();
  const { mutateAsync, isLoading, isError, isSuccess } = useUpdateLoggedUser();
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    dirty,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: userData?.name || '',
      ownerName: userData?.ownerName || '',
      phone: userData?.phone || '',
      city: userData?.city || '',
      governorate: userData?.governorate || '',
      location: {
        type: userData.location?.type || 'Point',
        coordinates: [
          userData.location?.coordinates[0] || 0,
          userData.location?.coordinates[1] || 0,
        ],
      },
    },
    validationSchema: loggedUserSchema,
    onSubmit: async (values, { resetForm }) => {
      const { data } = await mutateAsync({
        token,
        values,
      });

      if (data.message === 'success') {
        fetchUserData(token);
        resetForm({ values });
      }
    },
  });
  useFormik(() => {
    if (userData) {
      resetForm({
        values: {
          name: userData.name || '',
          ownerName: userData.ownerName || '',
          phone: userData.phone || '',
          city: userData.city || '',
          governorate: userData.governorate || '',
        },
      });
    }
  }, [userData, resetForm]);
  return (
    <>
      <Typography variant="h5" fontWeight={'bold'} mb={2}>
        Profile Settings
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Update your profile details, including your name, contact information,
        and location.
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Stack
        component={'form'}
        direction={{ xs: 'column', md: 'row' }}
        gap={5}
        onSubmit={handleSubmit}
      >
        <Box flex={1}>
          <Stack spacing={3}>
            <Box component={'div'}>
              <InputLabel htmlFor="profile-name" sx={{ mb: 1 }}>
                Profile Name
              </InputLabel>
              <TextField
                id="profile-name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name}
                helperText={touched.name && errors.name}
                fullWidth
              />
            </Box>
            <Box>
              <InputLabel htmlFor="owner-name" sx={{ mb: 1 }}>
                Owner Name
              </InputLabel>
              <TextField
                id="owner-name"
                name="ownerName"
                value={values.ownerName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.ownerName && touched.ownerName}
                helperText={touched.ownerName && errors.ownerName}
                fullWidth
              />
            </Box>
            <Box>
              <InputLabel htmlFor="owner-phone" sx={{ mb: 1 }}>
                Phone
              </InputLabel>
              <TextField
                id="owner-phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone && touched.phone}
                helperText={touched.phone && errors.phone}
                fullWidth
              />
            </Box>
            <Box>
              <InputLabel htmlFor="owner-city" sx={{ mb: 1 }}>
                City
              </InputLabel>
              <TextField
                id="owner-city"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.city && touched.city}
                helperText={touched.city && errors.city}
                fullWidth
              />
            </Box>
            <Box>
              <InputLabel htmlFor="owner-governorate" sx={{ mb: 1 }}>
                Governorate
              </InputLabel>
              <TextField
                id="owner-governorate"
                name="governorate"
                value={values.governorate}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.governorate && touched.governorate}
                helperText={touched.governorate && errors.governorate}
                fullWidth
              />
            </Box>
            <Box>
              <Location setFieldValue={setFieldValue} errors={errors} />
            </Box>
            <Box></Box>
          </Stack>

          <CustomButton
            type="submit"
            disabled={!dirty}
            variant="contained"
            marginInline={'auto 0'}
            sx={{ mt: 3, ml: 'auto', display: 'flex' }}
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
            Save Changes
          </CustomButton>
        </Box>
        <Stack
          order={{ xs: -1, md: 0 }}
          direction={'column'}
          alignItems={'center'}
          gap={3}
        >
          <UploadProfileImage />
          <MapModal location={userData?.location} />
        </Stack>
      </Stack>
    </>
  );
}
