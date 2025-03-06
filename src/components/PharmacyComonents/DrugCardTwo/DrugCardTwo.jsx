import React from 'react';
import {
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  Paper,
} from '@mui/material';

const DrugCardWithImage = ({
  drugName,
  description,
  company,
  price,
  imageUrl,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{ maxWidth: 250, borderRadius: 2, overflow: 'hidden' }}
    >
      {/* <CardActionArea> */}
      <Paper
        elevation={2}
        sx={{
          borderBottomRightRadius: 6,
          borderBottomLeftRadius: 6,
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          height="140"
          sx={{ objectFit: 'cover' }}
          width={'100%'}
          image={imageUrl}
          alt="green iguana"
        />
      </Paper>
      {/* <CardMedia component="img" height="140" image={imageUrl} alt={drugName} /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
};

export default DrugCardWithImage;
