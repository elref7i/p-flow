import { Box, Typography, useTheme } from '@mui/material';
import { CustomHead } from './CustomTypography';

// eslint-disable-next-line react/prop-types
export default function FixedHead({ children }) {
  const theme = useTheme();
  return (
    <CustomHead variant="h1" mb={7} align="center">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {children}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0.5, // زودت المسافة شوية عشان تبقى أوضح
          }}
        >
          <Box
            component="span"
            sx={{
              bgcolor: theme.palette.text.primary,
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              fontSize: '30px', // زودت حجم الخط عشان يكون متناسق مع الحجم
            }}
          >
            P
          </Box>
          <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }}>
            -
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }}>
            Flow
          </Typography>
        </Box>
      </Box>
    </CustomHead>
  );
}
