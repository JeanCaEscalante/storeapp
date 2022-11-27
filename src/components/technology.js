import * as React from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import reat from '../images/react.png'
import nd from '../images/node.png'
function Technology() {

    return (
        <Paper
        sx={{
          position: 'relative',
          color: '#fff',
          m: 5,
          borderRadius:0,
          minHeight: 350,
          display:'flex',
          alignItems:'center',
          background: 'linear-gradient(90deg, rgba(255,180,0,1) 0%, rgba(255,75,0,1) 50%, rgba(255,118,0,1) 100%)'
        }}
      >
        <Grid container  spacing={2}>
          <Grid item>
            <img src={html} width='220' height='250'/>
          </Grid>
          <Grid item>
            <img src={css} width='170' height='250'/>
          </Grid>
          <Grid item>
            <img src={js} width='220' height='250'/>
          </Grid>
          <Grid item>
            <img src={reat} width='220' height='250'/>
          </Grid>
          <Grid item>
            <img src={nd} width='300' height='250'/>
        </Grid>
        </Grid>
      </Paper>
    )
}

export default Technology;