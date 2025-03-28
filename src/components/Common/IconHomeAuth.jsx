import { Box } from '@mui/material';
import { CustomLink } from './ButtonStyle';
import HomeIcon from '@mui/icons-material/Home';

export default function IconHomeAuth() {
  return (
    <Box sx={{ position: 'absolute', top: 15, left: 50 }}>
      <CustomLink
        to={'/landing'}
        bghover={true}
        bg={true}
        fs={'30px'}
        fw="bold"
      >
        <HomeIcon color="primary"></HomeIcon>
      </CustomLink>
    </Box>
  );
}
