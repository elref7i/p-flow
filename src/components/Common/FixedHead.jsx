import { Box, Typography, useTheme } from '@mui/material';
import { CustomHead } from './CustomTypography';

// eslint-disable-next-line react/prop-types
export default function FixedHead({ children }) {
  const theme = useTheme();

  return (
    <CustomHead variant="h1" mb={2} align="center">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          fontSize: { xs: '28px', sm: '45px' },
          textWrap: 'nowrap',
        }}
      >
        {children}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0.5, // زيادة المسافة بين العناصر
          }}
        >
          {/* الدائرة مع الحرف "P" */}
          <Box
            component="span"
            sx={{
              bgcolor: theme.palette.text.primary, // لون الخلفية
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: theme.palette.secondary.main, // لون النص
              fontWeight: 'bold',
              fontSize: { xs: '28px', sm: '30px' }, // حجم الخط
            }}
          >
            P
          </Box>

          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '30px',
              color: theme.palette.text.primary, // لون النص
            }}
          >
            -
          </Typography>

          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '30px',
              color: theme.palette.text.primary, // لون النص
            }}
          >
            Flow
          </Typography>
        </Box>
      </Box>
    </CustomHead>
  );
}
