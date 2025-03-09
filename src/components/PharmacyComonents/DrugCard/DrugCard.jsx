/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  CardActions,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CustomParagraph } from '../../Common/CustomTypography';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import PlaceIcon from '@mui/icons-material/Place';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Common/ButtonStyle';
export default function DrugCard({ dataInfo }) {
  const theme = useTheme();

  const navigate = useNavigate();
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  };
  const {
    _id,
    name,
    manufacturer,
    inventory,
    description,
    price,
    discount,
    discountedPrice,
    productionDate,
    expirationDate,
    distanceInKm,
  } = dataInfo;

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 270,
        maxHeight: 500,
        borderRadius: 2,
        ':hover': {
          boxShadow: `inset 7px -3px 0px 0px ${theme.palette.action.active} `,
          transition: 'all 2s',
          '& .box-icon': { opacity: 1, transition: 'opacity .8s' },
        },
        transition: 'all .8s',
        p: 1,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Paper
        className="box-image"
        sx={{
          bgcolor: '#fff',
          borderRadius: 1,
          position: 'relative',
        }}
      >
        <CardMedia
          component="img"
          height="140"
          sx={{ objectFit: 'contain', overflow: 'hidden' }}
          width={'100%'}
          image={
            // imageCover ||
            'https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg'
          }
          alt={name}
        />
        {discountedPrice && (
          <Box
            component={'discount'}
            sx={{
              bgcolor: 'red',
              p: 1,
              zIndex: 99,
              borderRadius: '20px',
              position: 'absolute',
              top: 5,
              right: 5,
              color: '#FAFAFA',
              fontWeight: 'bold',
              fontSize: '12px',
            }}
          >
            {discount}% OFF
          </Box>
        )}
        <Stack
          className="box-icon"
          direction={'column'}
          justifyContent={'center'}
          alignItems={'start'}
          gap={1}
          component={'IconsAction'}
          sx={{
            bgcolor: '#000000aa',
            position: 'absolute',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            top: 0,
            left: 0,
            pl: 1,
            color: '#FAFAFA',
            height: '100%',
            width: '100%',
            fontWeight: 'bold',
            transition: 'opacity .2s',
            opacity: 0,
            cursor: 'pointer',
          }}
        >
          <FavoriteBorderIcon
            zIndex={99}
            color="#FAFAFA"
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              transition: 'color .4s',
              ':hover': { color: 'red' },
            }}
          />
          <RemoveRedEyeIcon
            color="#FAFAFA"
            onClick={() => {
              navigate(`/pharmacy/drugdetails/${_id}`);
            }}
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              transition: 'color .4s',
              ':hover': { color: 'red' },
            }}
          />
        </Stack>
      </Paper>
      <CardContent>
        <Typography
          gutterBottom
          variant="h2"
          onClick={() => {
            navigate(`/pharmacy/drugdetails/${_id}`);
          }}
          sx={{
            fontSize: { xs: '15px', md: '15px' },
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          component="div"
        >
          {name}
        </Typography>
        <CustomParagraph
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          variant="body2"
          color="text.secondary"
          title={description}
        >
          {description}
        </CustomParagraph>

        <Stack spacing={0.5} component={'div'} pt={1}>
          <Typography variant="body2">
            <strong>Inventory:</strong> {inventory?.name || 'N/A'}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <strong>Company:</strong> {manufacturer || 'N/A'}
          </Typography>
          <Typography variant="body2">
            <strong>Price:</strong>{' '}
            <Box sx={{ fontWeight: 'bold' }} component={'span'} color="#28A745">
              {discountedPrice ? discountedPrice.toFixed(2) : price.toFixed(2)}
              <Box component={'span'} sx={{ fontStyle: 'italic' }} pl={0.2}>
                EGP
              </Box>
              {discountedPrice && (
                <Box
                  component={'span'}
                  sx={{
                    fontStyle: 'italic',
                    color: theme.palette.action.selected,
                    textDecoration: 'line-through',
                    ml: 1,
                  }}
                >
                  {price.toFixed(2)} EGP
                </Box>
              )}
            </Box>
          </Typography>
          <Typography component={'Date'} variant="body2">
            <Stack
              direction={'row'}
              justifyItems={'center'}
              alignItems={'center'}
              gap={1}
            >
              <strong>Date:</strong>
              <Box
                component={'span'}
                sx={{ color: '#F9A825' }}
                fontWeight={'bold'}
              >
                {formatDate(productionDate)}
              </Box>
              <ArrowRightRoundedIcon color="secondary" />
              <Box
                component={'span'}
                sx={{ color: '#ff0000' }}
                fontWeight={'bold'}
              >
                {formatDate(expirationDate)}
              </Box>
            </Stack>
          </Typography>
          <Stack
            component={'loaction'}
            direction={'row'}
            gap={1}
            alignItems={'center'}
            justifyContent={'start'}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              sx={{ pr: 1, borderRight: '2px solid #424952' }}
            >
              <PlaceIcon color={'success'} />
              <Typography variant="body2">
                {distanceInKm ? `${distanceInKm.toFixed(2)} km` : 'N/A'}{' '}
              </Typography>
            </Stack>
            <Typography variant="body2">Elementary Street </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <CustomButton
          variant="contained"
          pad={'4px 40px'}
          fs={'15px'}
          width={'100%'}
        >
          Add to Cart
        </CustomButton>
      </CardActions>
    </Paper>
  );
}
