import { Grid2, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { CustomLink } from './ButtonStyle';
import imageStore from '../../assets/Alto ángulo del carrito de compras con espacio de copia y láminas de pastillas _ Foto Premium.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// eslint-disable-next-line react/prop-types
export default function LeftAuth({ namePage, path }) {
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
        boxShadow: '0px .5px 5px 0px #9E9E9E',
        p: 4,
      }}
    >
      <CustomLink
        to={'/landing'}
        // bghover={true}
        display={'flex'}
        alignItems={'center'}
        bg={theme.palette.secondary.main}
        p={'10px'}
        br={6}
      >
        <ArrowBackIosIcon />
        Back To Home
      </CustomLink>
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
          to={path}
          p={'10px 75px'}
          fs={'30px'}
          fw={'bold'}
          br={'5px'}
          textWrap={'nowrap'}
          bg={theme.palette.primary.main}
          bghover={
            theme.palette.mode === 'dark' && theme.palette.secondary.main
          }
          chover={theme.palette.mode === 'dark' && theme.palette.primary.main}
        >
          {namePage}
        </CustomLink>
      </Box>
    </Grid2>
  );
}
