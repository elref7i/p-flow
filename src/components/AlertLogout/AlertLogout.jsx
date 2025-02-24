/* eslint-disable react/prop-types */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTheme } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #f44336',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
};

export default function AlertLogout({ handleAction }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <LogoutIcon onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              color="error"
            >
              Logout
            </Typography>
            <Typography
              id="transition-modal-description"
              color={theme.palette.text.primary}
              sx={{ mt: 2, mb: 3 }}
            >
              Are you sure you want to delete this user?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                onClick={handleAction}
                variant="contained"
                color="error"
                // startIcon={
                //   isDeleting ? (
                //     <CircularProgress color="inherit" size={16} />
                //   ) : (
                //     <DeleteIcon />
                //   )
                // }
              >
                Delete
              </Button>
              <Button
                onClick={handleClose}
                variant="outlined"
                color="primary"
                startIcon={<CancelIcon />}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
