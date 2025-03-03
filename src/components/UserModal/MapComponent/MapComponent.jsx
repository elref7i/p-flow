/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Modal, Box, Typography } from '@mui/material';
import CustomButton from '../../Common/ButtonStyle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function MapModal({ location }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!location || !location.coordinates) return <p>Loading map...</p>;

  const [longitude, latitude] = location.coordinates;

  return (
    <div>
      {/* زر لفتح الخريطة */}
      <CustomButton
        variant="contained"
        fs={'14px'}
        pad={6}
        marginInline={'0 auto '}
        fontWeight={'none'}
        onClick={handleOpen}
      >
        Show Map
      </CustomButton>

      {/* Modal لعرض الخريطة */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="map-modal-title"
        aria-describedby="map-modal-description"
      >
        <Box sx={style}>
          <Typography id="map-modal-title" variant="h6" component="h2" mb={2}>
            الخريطة
          </Typography>
          <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            style={{ width: '100%', height: '80%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[latitude, longitude]}>
              <Popup>الموقع الحالي</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Modal>
    </div>
  );
}
