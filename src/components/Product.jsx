import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Product({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 225,
        maxHeight: 315,
        borderRadius: '0px',
        margin: 1,
      }}
    >
      <CardMedia
        component="img"
        height="224"
        image={product.images[0]}
        alt={product.title}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography
          component={Link}
          to={`${product.id}`}
          gutterBottom
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
            color: '#000',
          }}
        >
          {product.title}
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            component="span"
            color="text.secondary"
            sx={{
              letterSpacing: 1,
              fontWeight: 600,
              color: '#000',
            }}
          >
            $
            {product.price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.arrayOf,
  }),
};

Product.defaultProps = {
  product: {
    id: 0,
    title: 'Error',
    price: 0,
  },
};

export default Product;
