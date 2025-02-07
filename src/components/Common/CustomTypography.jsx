import { Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const CustomHead = ({ mb, children, ...props }) => {
  return (
    <Typography
      sx={{
        fontSize: '45px',
        fontWeight: 'bold',
        color: '#2B273A',
        mb: mb || 2,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
