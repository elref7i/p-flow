import { Grid2, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { CustomLink } from './ButtonStyle';
import imageStore from '../../assets/Alto ángulo del carrito de compras con espacio de copia y láminas de pastillas _ Foto Premium.jpg';

export default function LeftAuth() {
  const theme = useTheme();

  return (
    <Grid2
      size={{ md: 4 }}
      sx={{
        display: {
          xs: 'none',
          md: 'block',
        },
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${imageStore})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          flexDirection: 'column',
          minHeight: '80%',
        }}
      >
        <CustomLink
          to={'/signup'}
          p={'10px 75px'}
          fs={'30px'}
          fw={'bold'}
          br={'5px'}
          bg={theme.palette.primary.main}
          bghover={
            theme.palette.mode === 'dark' && theme.palette.secondary.main
          }
          chover={theme.palette.mode === 'dark' && theme.palette.primary.main}
        >
          Sign Up
        </CustomLink>
      </Box>
    </Grid2>
  );
}
