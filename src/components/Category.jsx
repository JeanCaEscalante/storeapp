import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function Category({ category }) {
  return (
    <Card
      sx={{
        maxWidth: 370,
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={category.image}
        alt={category.name}
      />
      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          borderRadius: 0,
          margin: '1px',
        }}
      >
        {category.name}
      </Button>
    </Card>
  );
}

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

Category.defaultProps = {
  category: {
    name: 'Error',
    image: 'Error',
  },
};

export default Category;
