import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Offer({offer}) {

    const [raised,setRaised] = useState(false)
    const [height,setHeight] = useState(330)

     const onOver = () => {
        setRaised(true)
        setHeight(392)
     }

     const onOut = () => {
        setRaised(false)
        setHeight(330)
     } 
    return (
    <Card raised={raised}  
          onMouseOver={onOver} 
          onMouseOut={onOut} 
          sx={{ maxWidth: 225,
                maxHeight: height, 
                margin: 1 }}>
      <CardMedia
        component="img"
        height="224"
        image={offer.images[0]}
        alt={offer.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {offer.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
    
}

export default Offer;