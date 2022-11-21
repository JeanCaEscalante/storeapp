import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function Category({category}) {

    return (
        <Card sx={{ maxWidth: 400, borderRadius: 0, border:0.5, display: 'flex', justifyContent:"center", alignItems:'end' }}>
         <CardMedia
           component="img"
           height="250"
           image={category.image}
           alt={category.name}
         />
           <Button 
           variant="contained"
           sx={{
            position: 'absolute',
            borderRadius: 0,
            margin: 1
           }}
           >{category.name}</Button>
       </Card>
    )
    
}

export default Category;