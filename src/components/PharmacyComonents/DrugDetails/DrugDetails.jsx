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
import { formatDate } from '@/lib/utils/dateUtils';
import { useTypeContext } from '../../../context/UserType.context';
import { getSpecificDrug } from '../../../lib/api/drugApi';
import LoadingSpinner from '../../Common/Loading/LoadingSpinner';

export default function DrugDetails() {
  const { id } = useParams();
  console.log(id);

  const { token } = useTypeContext();

  const navigate = useNavigate();
  const theme = useTheme();
  const [drug, setDrug] = useState(null);

  const fetchSpecificDrug = async ({ token, id }) => {
    const { data } = await getSpecificDrug({ token, drugId: id });
    console.log(data);
    setDrug(data);
  };
  // Mock data
  useEffect(() => {
    fetchSpecificDrug({ token, id });
  }, [id]);

  // if (!drug) {
  //   return (
  //     <Typography variant="h5" textAlign="center">
  //       Loading...
  //     </Typography>
  //   );
  // }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        bgcolor: theme.palette.background.default,
      }}
    >
      {drug ? (
        <Paper
          elevation={3}
          sx={{ maxWidth: 960, width: '100%', borderRadius: 2, p: 3 }}
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
                image={
                  'https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg'
                }
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
                  <strong>Manufacturer: </strong>
                  {drug.manufacturer}
                </Typography>
                <Typography variant="body1">
                  <strong>Inventory: </strong>
                  {drug.createdBy?.name || 'N/A'}
                </Typography>
                <Typography variant="body1">
                  <strong>Price:</strong>
                  <Box
                    component="span"
                    sx={{ color: '#28A745', fontWeight: 'bold', ml: 0.5 }}
                  >
                    {`${drug.discountedPrice.toFixed(2)} EGP`}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      textDecoration: 'line-through',
                      color: 'gray',
                      ml: 0.5,
                      fontWeight: 'bold',
                      fontSize: '13px',
                    }}
                  >
                    {drug.price.toFixed(2)} EGP
                  </Box>
                </Typography>
                <Typography variant="body1">
                  <strong>Discount:</strong>

                  <Box
                    component="span"
                    sx={{
                      color: '#CB2431',
                      ml: 0.5,
                      fontWeight: 'bold',
                    }}
                  >
                    {drug.discount}%
                  </Box>
                </Typography>
                <Typography variant="body1">
                  <strong>Production Date:</strong>{' '}
                  <Box
                    component="span"
                    sx={{
                      color: '#28A745',
                      ml: 0.5,
                      fontWeight: 500,
                    }}
                  >
                    {formatDate(drug.productionDate)}
                  </Box>
                </Typography>
                <Typography variant="body1">
                  <strong>Expiration Date:</strong>{' '}
                  <Box
                    component="span"
                    sx={{
                      color: '#CB2431',
                      ml: 0.5,
                      fontWeight: 500,
                    }}
                  >
                    {formatDate(drug.expirationDate)}
                  </Box>
                </Typography>
                {/* <Typography variant="body1">
                  <strong>Distance:</strong>
                  {drug.distanceInKm.toFixed(2)} km
                </Typography> */}
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
                  sx={{ textTransform: 'capitalize' }}
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </Paper>
      ) : (
        <LoadingSpinner />
      )}
    </Box>
  );
}
