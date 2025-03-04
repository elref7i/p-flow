import { Avatar, Box, Paper, useTheme } from '@mui/material';
import PopoverModal from '../../../components/UserModal/PopoverModal/PopoverModal';
import { useTypeContext } from '../../../context/UserType.context';

export default function UploadProfileImage() {
  const theme = useTheme();
  const { userData } = useTypeContext();

  return (
    <Paper
      elevation={7}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: 170,
        height: 170,
        borderRadius: '50%',
        '&:hover .hover-box': {
          bottom: 0,
        },
      }}
    >
      <Avatar
        src={userData.profileImage}
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <Box
        className="hover-box"
        sx={{
          width: '100%',
          height: '25%',
          bottom: '-100%',
          left: '50%',
          transition: 'bottom 0.3s',
          transform: 'translateX(-50%)',
          bgcolor: theme.palette.background.button,
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          mx: 'auto',
        }}
      >
        <PopoverModal />
      </Box>
    </Paper>
  );
}
