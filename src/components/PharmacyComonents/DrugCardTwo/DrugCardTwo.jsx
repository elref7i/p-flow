import {
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  Paper,
  Box,
  useTheme,
} from '@mui/material';

export default function DrugCardWithImage({
  drugName,
  description,
  company,
  price,
  imageUrl,
})

const theme = useTheme();
{
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 250,
        borderRadius: 2,
        cursor: 'pointer',
        ':hover': {
          boxShadow: 'inset 7px -3px 0px 0px #28A745',
          transition: 'box-shadow 1s, background-color 1s, color 1s',
        },
        transition: 'box-shadow 1s, background-color 1s, color 1s',

        p: 1,
        position: 'relative',
      }}
    >
      <Paper
        // elevation={5}
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
          alt="green iguana"
        />
        <Box
          component={'discount'}
          sx={{
            bgcolor: 'red',
            p: 1,
            rotate: '-30deg',
            zIndex: 99,
            borderRadius: '20px',
            position: 'absolute',
            top: -10,
            right: -30,
            color: '#fff',
          }}
        >
          25% OFF
        </Box>
      </Paper>
      <CardContent>
        <Typography
          gutterBottom
          variant="h2"
          sx={{ fontSize: '18px', fontWeight: 'bold' }}
          component="div"
        >
          {drugName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          <strong>Company:</strong> {company}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Price:</strong> ${price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button variant="contained" size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="info">
          Learn More
        </Button>
      </CardActions>
    </Paper>
  );
}

// export default DrugCardWithImage;
