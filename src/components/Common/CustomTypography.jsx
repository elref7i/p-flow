import { Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const CustomHead = ({ children, ...props }) => {
  return (
    <Typography
      sx={{
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#2B273A',
        mb: 2,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
