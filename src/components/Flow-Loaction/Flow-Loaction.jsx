/* eslint-disable react/prop-types */
import { Stack, Typography, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import PlaceIcon from '@mui/icons-material/Place';

const LocationComponent = ({ distanceInKm }) => {
  // تحديد لون الـ Progress
  const getProgressColor = () => {
    if (distanceInKm < 12) return 'success'; // أخضر
    if (distanceInKm <= 50) return 'primary'; // أزرق
    return 'warning'; // أصفر
  };

  return (
    <Stack component="location" direction="row" gap={1} alignItems="center">
      {/* أيقونة مع أنيميشن */}
      <Stack direction="row" alignItems="center" sx={{ pr: 1 }}>
        {/* <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        > */}
        <PlaceIcon color={getProgressColor()} />
        {/* </motion.div> */}
        <Typography
          variant="body2"
          sx={{ fontWeight: 'bold' }}
          aria-label={`Distance: ${
            distanceInKm ? `${distanceInKm.toFixed(2)} km` : 'N/A'
          }`}
        >
          {distanceInKm ? `${distanceInKm.toFixed(2)} km` : 'N/A'}
        </Typography>
      </Stack>

      {/* شريط التقدم */}
      <LinearProgress
        variant="determinate"
        value={Math.min((distanceInKm / 50) * 100, 100)}
        sx={{
          width: '100px',
          height: 8,
          borderRadius: 4,
          bgcolor: 'grey.300',
          '& .MuiLinearProgress-bar': {
            bgcolor:
              getProgressColor() === 'success'
                ? 'green'
                : getProgressColor() === 'primary'
                ? 'blue'
                : 'orange',
          },
        }}
      />
    </Stack>
  );
};

export default LocationComponent;
