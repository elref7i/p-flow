import { Typography, useTheme } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const CustomHead = ({ mb, fs, fw, children, ...props }) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        fontSize: fs || { sm: '30px', md: '38px' },
        fontWeight: fw || 700,
        color: theme.palette.text.primary,
        mb: mb || 2,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
