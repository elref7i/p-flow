/* eslint-disable react/prop-types */
import {
  Box,
  CardActions,
  Paper,
  Stack,
  useTheme,
  Avatar,
  Divider,
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
import { formatDate } from '@/lib/utils/dateUtils';

export default function DrugCard({ dataInfo }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    _id,
    name,
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
          boxShadow: `inset 7px -3px 0px 0px ${theme.palette.action.active}`,
          transition: 'all 0.3s',
          '& .box-icon': { opacity: 1, transition: 'opacity 0.3s' },
        },
        transition: 'all 0.3s',
        pb: 1,
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
            'https://www.netmeds.com/images/product-v1/600x600/397251/nasomist_saline_nasal_spray_20ml_149351_0_2.jpg'
          }
          alt={name}
          aria-label={`Image of ${name}`}
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
            aria-label={`Discount of ${discount}%`}
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
            transition: 'opacity 0.3s',
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
              transition: 'color 0.3s',
              ':hover': { color: 'red' },
            }}
            aria-label="Add to favorites"
          />
          <RemoveRedEyeIcon
            color="#FAFAFA"
            onClick={() => {
              navigate(`/pharmacy/drugdetails/${_id}`);
            }}
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              transition: 'color 0.3s',
              ':hover': { color: 'red' },
            }}
            aria-label="View drug details"
          />
        </Stack>
      </Paper>
      <CardContent>
        {/* Inventory Avatar */}
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            navigate(`/inventoryprofile`);
          }}
        >
          <Avatar
            src={inventory?.profileImage} // صورة الـ Inventory
            alt={inventory?.name}
            sx={{ width: 30, height: 30 }}
          >
            {inventory?.name?.charAt(0)}{' '}
          </Avatar>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 'bold',
              fontSize: '14px', // زيادة حجم الخط
            }}
            aria-label={`Inventory: ${inventory?.name || 'N/A'}`}
          >
            {inventory?.name || 'N/A'}
          </Typography>
        </Stack>
        <Divider sx={{ my: 1 }} /> {/* زيادة المسافة حول الـ Divider */}
        {/* Drug Name and Description */}
        <Stack alignItems={'start'} spacing={0.5} pt={1}>
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
              color: theme.palette.text.primary,
            }}
            component="div"
            aria-label={`Drug name: ${name}`}
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
              color: theme.palette.text.secondary,
            }}
            variant="body2"
            title={description}
            aria-label={`Drug description: ${description}`}
          >
            {description}
          </CustomParagraph>

          {/* Price */}
          <Typography
            variant="body2"
            aria-label={`Price: ${
              discountedPrice ? discountedPrice.toFixed(2) : price.toFixed(2)
            } EGP`}
            sx={{ fontWeight: 'bold', color: '#28A745' }} // تحسين تنسيق السعر
          >
            <strong>Price:</strong>{' '}
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
          </Typography>

          {/* Production and Expiration Dates */}
          <Typography
            component={'Date'}
            variant="body2"
            aria-label={`Production Date: ${formatDate(
              productionDate
            )}, Expiration Date: ${formatDate(expirationDate)}`}
          >
            <Stack
              direction={'row'}
              justifyItems={'center'}
              alignItems={'center'}
            >
              <strong>Date: </strong>
              <Box
                component={'span'}
                sx={{ color: '#F9A825', fontWeight: 'bold' }} // لون تاريخ الإنتاج
              >
                {formatDate(productionDate)}
              </Box>
              <ArrowRightRoundedIcon color="secondary" />
              <Box
                component={'span'}
                sx={{ color: '#ff0000', fontWeight: 'bold' }} // لون تاريخ انتهاء الصلاحية
              >
                {formatDate(expirationDate)}
              </Box>
            </Stack>
          </Typography>

          {/* Distance and Location */}
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
              <Typography
                variant="body2"
                aria-label={`Distance: ${
                  distanceInKm ? `${distanceInKm.toFixed(2)} km` : 'N/A'
                }`}
                sx={{ fontWeight: 'bold' }} // تحسين تنسيق المسافة
              >
                {distanceInKm ? `${distanceInKm.toFixed(2)} km` : 'N/A'}{' '}
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              aria-label="Location: Elementary Street"
              sx={{ fontWeight: 'bold' }} // تحسين تنسيق الموقع
            >
              Elementary Street
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <CustomButton
          variant="contained"
          pad={'4px 40px'}
          fs={'15px'}
          width={'100%'}
          aria-label="Add to cart"
          sx={{ fontWeight: 'bold' }} // تحسين تنسيق الزر
        >
          Add to Cart
        </CustomButton>
      </CardActions>
    </Paper>
  );
}
