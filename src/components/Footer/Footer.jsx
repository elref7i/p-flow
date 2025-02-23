import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    // * Box => Group
    <Box
      id="footer"
      //^ Design
      sx={{
        textAlign: 'center',
        py: 3,
        bgcolor: 'grey.200',
        left: '0',
        right: '0',
        bottom: '0',
        position: 'fixed',
      }}
      component={'div'}
    >
      <Typography variant="body2">
        &copy; 2025 P-Flow. All rights reserved.
      </Typography>
    </Box>
  );
}
