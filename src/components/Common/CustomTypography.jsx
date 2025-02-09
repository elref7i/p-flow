import { Typography, useTheme } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const CustomHead = ({ mb, children, ...props }) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        fontSize: '45px',
        fontWeight: 'bold',
        color: theme.palette.text.primary,
        mb: mb || 2,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
