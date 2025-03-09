import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
  CardMedia,
  IconButton,
  Grid2,
} from '@mui/material';
// import Grid2 from '@mui/material/Unstable_Grid2';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CustomButton from '../../Common/ButtonStyle';
import { formatDate } from '@/lib/utils/dateUtils';
import { useTypeContext } from '../../../context/UserType.context';
import { getSpecificDrug } from '../../../lib/api/drugApi';
import LoadingSpinner from '../../Common/Loading/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';

export default function DrugDetails() {
  const { id } = useParams();
  const { token } = useTypeContext();
  const navigate = useNavigate();
  const theme = useTheme();

  // const fetchSpecificDrug = async ({ token, id }) => {
  //   const { data } = await getSpecificDrug({ token, drugId: id });
  //   setDrug(data);
  // };

  // useEffect(() => {
  //   fetchSpecificDrug({ token, id });
  // }, [id]);

  const { data, isFetched } = useQuery({
    queryKey: ['drug', id],
    queryFn: () => getSpecificDrug({ token, drugId: id }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    notifyOnChangeProps: ['data'],
  });
  console.log(data);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 1,
        bgcolor: theme.palette.background.default,
      }}
    >
      {isFetched ? (
        <Paper
          elevation={3}
          sx={{
            maxWidth: 1100,
            width: '100%',
            borderRadius: 2,
            p: 3,
            position: 'relative',
          }}
        >
          {/* زر العودة في أعلى اليسار */}
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              position: 'absolute',
              top: 10,
              transition: 'color .4s background-color .5s',
              right: 10,
              color: theme.palette.warning.main,
              bgcolor: theme.palette.background.button,
              ':hover': { bgcolor: theme.palette.action.hover },
            }}
          >
            <ArrowForwardIosOutlinedIcon />
          </IconButton>

          <Grid2
            container
            spacing={3}
            justifyContent={'center'}
            alignItems="center"
          >
            <Grid2 item size={{ xs: 12, sm: 6 }} position={'relative'}>
              <CardMedia
                component="img"
                sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                image={
                  'https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg'
                }
                alt={data.data.name}
              />
            </Grid2>

            <Grid2 item size={{ xs: 12, sm: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                {data.data.name}
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                {data.data.description}
              </Typography>

              <Stack spacing={1} sx={{ mb: 2 }}>
                <Typography variant="body1">
                  <strong>Manufacturer: </strong>
                  {data.data.manufacturer}
                </Typography>
                <Typography variant="body1">
                  <strong>Inventory: </strong>
                  {data.data.createdBy?.name || 'N/A'}
                </Typography>
                <Typography variant="body1">
                  <strong>Price:</strong>
                  <Box
                    component="span"
                    sx={{ color: '#28A745', fontWeight: 'bold', ml: 0.5 }}
                  >
                    {`${data.data.discountedPrice.toFixed(2)} EGP`}
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
                    {data.data.price.toFixed(2)} EGP
                  </Box>
                </Typography>
                <Typography variant="body1">
                  <strong>Discount:</strong>
                  <Box
                    component="span"
                    sx={{ color: '#CB2431', ml: 0.5, fontWeight: 'bold' }}
                  >
                    {data.data.discount}%
                  </Box>
                </Typography>
                <Typography variant="body1">
                  <strong>Production Date:</strong>{' '}
                  <Box
                    component="span"
                    sx={{ color: '#28A745', ml: 0.5, fontWeight: 500 }}
                  >
                    {formatDate(data.data.productionDate)}
                  </Box>
                </Typography>
                <Typography variant="body1">
                  <strong>Expiration Date:</strong>{' '}
                  <Box
                    component="span"
                    sx={{ color: '#CB2431', ml: 0.5, fontWeight: 500 }}
                  >
                    {formatDate(data.data.expirationDate)}
                  </Box>
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <CustomButton
                  variant="contained"
                  // fullWidth
                  sx={{ flex: 1 }}
                  pad={'10px'}
                  fs={'16px'}
                >
                  Add to Cart
                </CustomButton>
                <IconButton color="error">
                  <FavoriteBorderIcon sx={{ fontSize: '35px' }} />
                </IconButton>
              </Stack>
            </Grid2>
          </Grid2>
        </Paper>
      ) : (
        <LoadingSpinner />
      )}
    </Box>
  );
}
