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
        p: 3,
        bgcolor: theme.palette.background.default,
      }}
    >
      {drug ? (
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
                image={'drug.image'}
                alt={'drug.name'}
              />
            </Grid2>

            {/* Details Section */}
            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                {'drug.name'}
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                {'drug.description'}
              </Typography>

              <Stack spacing={1} sx={{ mb: 2 }}>
                <Typography variant="body1">
                  <strong>Manufacturer:</strong> {'drug.manufacturer'}
                </Typography>
                <Typography variant="body1">
                  <strong>Inventory:</strong>
                  {/* {drug.inventory?.name || 'N/A'} */}
                </Typography>
                <Typography variant="body1">
                  <strong>Price:</strong>
                  <Box
                    component="span"
                    sx={{ color: '#28A745', fontWeight: 'bold', ml: 1 }}
                  >
                    {/* {drug.discountedPrice.toFixed(2)} EGP */}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      textDecoration: 'line-through',
                      color: 'gray',
                      ml: 1,
                    }}
                  >
                    {/* {drug.price.toFixed(2)} EGP */}
                  </Box>
                </Typography>
                <Typography variant="body1">
                  <strong>Discount:</strong>
                  {/* {drug.discount}% */}
                </Typography>
                <Typography variant="body1">
                  <strong>Production Date:</strong>{' '}
                  {/* {formatDate(drug.productionDate)} */}
                </Typography>
                <Typography variant="body1">
                  <strong>Expiration Date:</strong>{' '}
                  {/* {formatDate(drug.expirationDate)} */}
                </Typography>
                <Typography variant="body1">
                  <strong>Distance:</strong>
                  {/* {drug.distanceInKm.toFixed(2)} km */}
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
      ) : (
        <LoadingSpinner />
      )}
    </Box>
  );
}
