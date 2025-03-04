/* eslint-disable react/prop-types */
import { Typography, useTheme } from '@mui/material';

export const CustomHead = ({ mb, fs, fw, children, ...props }) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        fontSize: fs || { xs: '25px', md: '35px' },
        fontWeight: fw || 700,
        color: theme.palette.text.primary,
        mb: mb || 2,
        textWrap: 'nowrap',
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
export const CustomParagraph = ({ children, ...props }) => {
  return (
    <Typography variant="body2" fontSize={'12px'} color="GrayText" {...props}>
      {children}
    </Typography>
  );
};
