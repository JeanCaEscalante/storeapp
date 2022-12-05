import React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Spliter from '../../components/Splinter';

function Splinters() {
  return (
    <Container sx={{ p: 4 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Spliter />
        <Spliter />
      </Stack>
    </Container>
  );
}

export default Splinters;
