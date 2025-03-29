'use client';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Divider,
  Stack,
  useTheme,
  styled,
  Grid2,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// Helper function to format dates
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Styled components
const DiscountBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  padding: '4px 8px',
  borderRadius: 16,
  fontWeight: 'bold',
  zIndex: 1,
}));

const ThumbnailImage = styled(Box)(({ theme, selected }) => ({
  width: 64,
  height: 64,
  border: `1px solid ${
    selected ? theme.palette.primary.main : theme.palette.divider
  }`,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.2s',
  boxShadow: selected ? `0 0 0 2px ${theme.palette.primary.main}` : 'none',
}));

export default function DrugDetails() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const backgroundAuth = theme.palette.background.cart;

  // Mock data - replace with your actual data fetching
  const data = {
    id: '1',
    name: 'Nasomist Saline Nasal Spray',
    description:
      'A saline nasal spray that helps moisturize and clear nasal passages for better breathing.',
    manufacturer: 'Pharma Solutions Inc.',
    createdBy: { name: 'Central Pharmacy' },
    price: 85.0,
    discountedPrice: 68.0,
    discount: 20,
    productionDate: '2023-05-15',
    expirationDate: '2025-05-15',
    images: [
      'https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg',
      'https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_1.jpg',
      'https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_3.jpg',
    ],
  };

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <Box sx={{ p: 2, maxWidth: 1100, mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          color="primary"
          variant="h5"
          component="h1"
          fontWeight="bold"
        >
          Drug Details
        </Typography>
      </Box>

      <Grid2 container spacing={{ xs: 0, md: 5 }} rowGap={{ xs: 2, md: 0 }}>
        {/* Left column - Images */}
        <Grid2 item size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={3}
            sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
          >
            {data.discount > 0 && (
              <DiscountBadge>{data.discount}% OFF</DiscountBadge>
            )}
            <CardMedia
              component="img"
              image={data.images[selectedImage]}
              alt={data.name}
              sx={{
                width: '100%',
                height: 'auto',
                aspectRatio: '1/1',
                objectFit: 'contain',
                p: 2,
                background: backgroundAuth,
              }}
            />
          </Paper>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 2, overflowX: 'auto', pb: 1 }}
          >
            {data.images.map((image, index) => (
              <ThumbnailImage
                key={index}
                selected={selectedImage === index}
                onClick={() => setSelectedImage(index)}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`${data.name} view ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ThumbnailImage>
            ))}
          </Stack>
        </Grid2>

        {/* Right column - Details */}
        <Grid2 item size={{ xs: 12, md: 7 }}>
          <Card
            elevation={3}
            sx={{ borderRadius: 2, background: backgroundAuth }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    component="h2"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {data.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.manufacturer}
                  </Typography>
                </Box>
                <IconButton
                  onClick={toggleFavorite}
                  color={isFavorite ? 'error' : 'default'}
                  sx={{ border: 1, borderColor: 'divider' }}
                >
                  {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Box>

              <Typography variant="body1" sx={{ my: 2 }}>
                {data.description}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1" fontWeight="medium">
                    Inventory
                  </Typography>
                  <Typography variant="body1">
                    {data.createdBy?.name || 'N/A'}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1" fontWeight="medium">
                    Production Date
                  </Typography>
                  <Typography variant="body1" color="success.main">
                    {formatDate(data.productionDate)}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1" fontWeight="medium">
                    Expiration Date
                  </Typography>
                  <Typography variant="body1" color="error.main">
                    {formatDate(data.expirationDate)}
                  </Typography>
                </Box>
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Grid2 container spacing={2} alignItems={'center'} sx={{ mb: 3 }}>
                <Grid2 item size={{ xs: 12, md: 6 }}>
                  <Typography variant="caption" color="text.secondary">
                    Consumer Price
                  </Typography>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    {data.discountedPrice.toFixed(2)} EGP
                  </Typography>
                  {data.discount > 0 && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textDecoration: 'line-through' }}
                    >
                      {data.price.toFixed(2)} EGP
                    </Typography>
                  )}
                </Grid2>
                <Grid2 textAlign={'end'} item size={{ xs: 12, md: 6 }}>
                  <Typography variant="caption" color="text.secondary">
                    Pharmacy Price
                  </Typography>
                  <Typography variant="h6" color="error" fontWeight="medium">
                    {data.price.toFixed(2)} EGP
                  </Typography>
                </Grid2>
              </Grid2>

              <Button
                variant="contained"
                size="large"
                startIcon={<AddShoppingCartIcon />}
                sx={{ py: 1.5, fontSize: '1.1rem' }}
                fullWidth
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
