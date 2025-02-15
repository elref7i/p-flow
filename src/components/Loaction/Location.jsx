import {
  Button,
  CircularProgress,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useState } from 'react';
import toast from 'react-hot-toast';

// eslint-disable-next-line react/prop-types
export default function Location({ setFieldValue, errors }) {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true); //
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            type: 'Point',
            coordinates: [position.coords.longitude, position.coords.latitude],
          };
          setFieldValue('location', newLocation);
          setIsLoading(false);
          toast.success('Location fetched successfully!');
          console.log('Updated location:', newLocation);
        },
        (error) => {
          console.error('Error fetching location:', error);
          setIsLoading(false);
          toast.error(`${errors.location}`);
        }
      );
    } else {
      toast.error('Geolocation is not supported by your browser.');
    }
  };
  return (
    <Paper
      elevation={9}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        p: '15px 10px',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        maxWidth: 300,
        margin: '0 auto',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Select Your Location
      </Typography>
      <Button
        variant="contained"
        startIcon={
          isLoading ? (
            <CircularProgress size={24} sx={{ color: 'white' }} />
          ) : (
            <MyLocationIcon />
          )
        }
        onClick={handleGetLocation}
        disabled={isLoading}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          boxShadow: theme.shadows[3],
          borderRadius: 2,
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          minWidth: 150,
        }}
      >
        {isLoading ? 'Fetching...' : 'Get Location'}
      </Button>
    </Paper>
  );
}
