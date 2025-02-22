import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import Location from '../Loaction/Location';
import { useState } from 'react';

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
  overflow: 'auto',
};

export default function ModalUpdated() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="warning"
        sx={{ fontSize: { xs: '10px', md: '15px' } }}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component={'form'} sx={{ overflow: 'auto' }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              margin="normal"
              type="email"
            />
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              type="text"
              name="name"
            />
            <TextField
              fullWidth
              label="Owner Name"
              name="ownerName"
              margin="normal"
              type="text"
            />
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              margin="normal"
              type="tel"
            />
            <TextField fullWidth label="City" name="city" margin="normal" />
            <TextField
              fullWidth
              label="Governorate"
              name="governorate"
              margin="normal"
              type="text"
            />
            <Location />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
