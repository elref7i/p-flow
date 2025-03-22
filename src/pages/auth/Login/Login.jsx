import { TextField, Box, useTheme, Stack, Typography } from '@mui/material';
import CustomButton from '@/components/Common/ButtonStyle';
import { useFormik } from 'formik';
import { useTypeContext } from '@/context/UserType.context';
import { loginSchema } from '@/lib/schemas/AuthSchema';
import PasswordControl from '@/components/Common/PasswordControl';
import { CustomLink } from '@/components/Common/ButtonStyle';
import {
  CustomHead,
  CustomParagraph,
} from '../../../components/Common/CustomTypography';
import HomeIcon from '@mui/icons-material/Home';
export default function Login() {
  const theme = useTheme();
  const { login } = useTypeContext();
  const backgroundAuth = theme.palette.background.auth;
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit: login,
    });

  return (
    <Box
      component={'main'}
      sx={{
        background: backgroundAuth, // لون ثابت
        // backgroundImage: (theme) => theme.palette.background.authImage, // التدرج
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', top: 15, left: 50 }}>
        <CustomLink
          to={'/landing'}
          bghover={true}
          bg={true}
          fs={'30px'}
          fw="bold"
        >
          <HomeIcon color="primary"></HomeIcon>
        </CustomLink>
      </Box>
      <Stack
        maxWidth={'lg'}
        p={2}
        justifyContent={'center'}
        alignItems={'center'}
        direction={'row'}
        gap={10}
      >
        <Box
          width={'55%'}
          sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}
        >
          <CustomHead color="primary">FLOW</CustomHead>
          <Typography
            color={theme.palette.text.primary}
            variant="h1"
            sx={{
              mb: 2,
              fontSize: '36px',
              fontWeight: 700,
              textWrap: 'wrap',
            }}
          >
            Order and display medicines for stores and pharmacies
          </Typography>
          <CustomParagraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sequi ex aspernatur sunt quia, aliquam totam odio facilis, debitis
            modi unde velit, hic magnam asperiores dolore. Voluptate earum
            beatae in?
          </CustomParagraph>
        </Box>
        <Box
          width={{ sm: '100%', md: '45%' }}
          component={'form'}
          sx={{ pt: 5 }}
          onSubmit={handleSubmit}
        >
          <Typography
            color={theme.palette.text.primary}
            variant="h5"
            sx={{
              mb: 5,
              fontSize: '20px',
              textAlign: 'center',
              fontWeight: 700,
            }}
          >
            Welcome Back To P-Flow
          </Typography>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            sx={{
              color: 'white',
              mb: 3,
            }}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={touched.email && errors.email}
          />
          <PasswordControl
            name="password"
            error={errors.password}
            value={values.password}
            touched={touched.password}
            handleBlur={handleBlur}
            handleChange={handleChange}
            text="Password"
          />
          <Box component={'div'} mt={1} ml={'auto '} width="fit-content">
            <CustomLink
              bg={true}
              bghover={true}
              c={theme.palette.text.primary}
              chover={theme.palette.text.secondary}
              to="/forgetpassword"
            >
              Forgot Your Password ?
            </CustomLink>
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'center' }}
            component={'div'}
            mt={5}
            mb={2}
          >
            <CustomButton sx={{ flex: 1 }} type="submit">
              Proceed to my account
            </CustomButton>
          </Box>
          <Typography
            color={theme.palette.text.secondary}
            textAlign={'center'}
            component={'p'}
          >
            Don’t have an account?{' '}
            <CustomLink
              to={'/signup'}
              bghover={true}
              chover={true}
              c={'#5188FF'}
              display={'inline'}
              bg={true}
            >
              Register
            </CustomLink>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
