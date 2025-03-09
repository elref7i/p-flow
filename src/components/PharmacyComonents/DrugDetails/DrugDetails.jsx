import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useTheme,
  CardMedia,
  Grid2,
} from '@mui/material';
import CustomButton from '../../Common/ButtonStyle';

export default function DrugDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const [drug, setDrug] = useState(null);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  };

  // Mock data
  useEffect(() => {
    setTimeout(() => {
      setDrug({
        name: 'Nasomist Saline Nasal Spray',
        manufacturer: 'Pharma Co.',
        inventory: { name: 'Main Warehouse' },
        description: 'Effective nasal spray for cold relief.',
        price: 150,
        discount: 10,
        discountedPrice: 135,
        productionDate: '2024-01-01',
        expirationDate: '2026-01-01',
        distanceInKm: 5.2,
        image:
          'https://scontent.fcai20-5.fna.fbcdn.net/v/t39.30808-1/480147019_4012323662428731_6947705778976585090_n.jpg?stp=c0.374.1536.1536a_dst-jpg_s160x160_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_ohc=cth9geKyc-0Q7kNvgELlq_o&_nc_oc=Adj-0nDpAZ9qMgYvqX8MkysBue1HSDASGIeElSeeY-xdVQ3gULD3M2mQUlsQ96z32E4&_nc_zt=24&_nc_ht=scontent.fcai20-5.fna&_nc_gid=Ao8LSzpLUnJY_XYfYkve_aI&oh=00_AYHNcEvb9MNdYms8hUqPYVzBhLl83EDP9wZaqlHIVGbIBA&oe=67D38674',
      });
    }, 1000);
  }, []);

  if (!drug) {
    return (
      <Typography variant="h5" textAlign="center">
        Loading...
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3,
        bgcolor: theme.palette.background.default,
      }}
    >
      <Paper
        elevation={3}
        sx={{ maxWidth: 900, width: '100%', borderRadius: 2, p: 3 }}
      >
        <Grid2
          container
          spacing={3}
          justifyContent={'center'}
          alignItems="center"
        >
          {/* Image Section */}
          <Grid2 item size={{ xs: 12, sm: 6 }}>
            <CardMedia
              component="img"
              sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
              image={drug.image}
              alt={drug.name}
            />
          </Grid2>

          {/* Details Section */}
          <Grid2 item size={{ xs: 12, sm: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              {drug.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
              {drug.description}
            </Typography>

            <Stack spacing={1} sx={{ mb: 2 }}>
              <Typography variant="body1">
                <strong>Manufacturer:</strong> {drug.manufacturer}
              </Typography>
              <Typography variant="body1">
                <strong>Inventory:</strong> {drug.inventory?.name || 'N/A'}
              </Typography>
              <Typography variant="body1">
                <strong>Price:</strong>
                <Box
                  component="span"
                  sx={{ color: '#28A745', fontWeight: 'bold', ml: 1 }}
                >
                  {drug.discountedPrice.toFixed(2)} EGP
                </Box>
                <Box
                  component="span"
                  sx={{ textDecoration: 'line-through', color: 'gray', ml: 1 }}
                >
                  {drug.price.toFixed(2)} EGP
                </Box>
              </Typography>
              <Typography variant="body1">
                <strong>Discount:</strong> {drug.discount}%
              </Typography>
              <Typography variant="body1">
                <strong>Production Date:</strong>{' '}
                {formatDate(drug.productionDate)}
              </Typography>
              <Typography variant="body1">
                <strong>Expiration Date:</strong>{' '}
                {formatDate(drug.expirationDate)}
              </Typography>
              <Typography variant="body1">
                <strong>Distance:</strong> {drug.distanceInKm.toFixed(2)} km
              </Typography>
            </Stack>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <CustomButton
                variant="contained"
                pad={'4px 20px'}
                marginInline={true}
                fs={'15px'}
              >
                Add to Cart
              </CustomButton>
              <Button
                variant="outlined"
                color="warning"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
    </Box>
  );
}
