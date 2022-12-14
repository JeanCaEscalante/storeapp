import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { productsPagination } from '../../services/products';
import Offer from '../../components/Offer';

function Offers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);

  const offersAll = async () => {
    const data = await productsPagination(0, 10);
    setOffers(data);
    setLoading(true);
  };

  useEffect(() => {
    offersAll();
  }, []);

  if (!loading) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <Typography
        component="div"
        variant="h5"
        color="primary"
        sx={{
          margin: '1rem',
          fontWeight: 700,
          letterSpacing: 1,

        }}
      >
        offers in the week
      </Typography>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {
            offers.map((offer) => <Offer key={offer.id} offer={offer} />)
          }
        </Grid>
      </Container>
    </>
  );
}

export default Offers;
