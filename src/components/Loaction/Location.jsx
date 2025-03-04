/* eslint-disable react/prop-types */
import { CircularProgress, Paper, Typography, useTheme } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import CustomButton from '../Common/ButtonStyle';

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
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Select Your Location
      </Typography>
      <CustomButton
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
          boxShadow: theme.shadows[4],
          borderRadius: 2,
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          minWidth: 150,
          display: 'flex',
        }}
      >
        {isLoading ? 'Fetching...' : 'Get Location'}
      </CustomButton>
    </Paper>
  );
}
