import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { productById } from '../services/products';

function View() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const elementById = async (idProduct) => {
    const data = await productById(idProduct);
    setProduct(data);
    setLoading(true);
  };

  useEffect(() => {
    elementById(id);
  }, [id]);

  if (!loading) {
    return <h1>loading</h1>;
  }

  return (
    <Container>
      <Card sx={{ margin: 2, borderRadius: 0, p: 1 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          <Grid item xs={2}>
            <Stack spacing={1} justifyContent="center" alignItems="center">
              <img src={product.images[0]} alt="imagen de producto" width="150" height="150" />
              <img src={product.images[1]} alt="imagen de producto" width="150" height="150" />
              <img src={product.images[2]} alt="imagen de producto" width="150" height="150" />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <img src={product.images[0]} alt="imagen de producto" width="527" height="471" />
          </Grid>
          <Grid item xs={4}>
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ m: '10px 0px' }}
              >
                {product.category.name}
              </Typography>
              <Typography variant="h4" component="h4">
                {product.title}
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                sx={{ m: '10px 0px' }}
              >
                US$
                { product.price }
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ m: '10px 0px' }}
              >
                {product.description}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: '0px',
                  p: 1,
                  m: '10px 0px',
                  letterSpacing: 1,
                  fontSize: '14px',
                  width: '100%',
                }}
              >
                Comprar
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default View;
