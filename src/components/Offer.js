import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { width } from '@mui/system';
function Offer({offer}) {

    const [raised,setRaised] = useState(false)
    const [height,setHeight] = useState(315)

     const onOver = () => {
        setRaised(true)
        setHeight(392)
     }

     const onOut = () => {
        setRaised(false)
        setHeight(315)
     } 
    return (
    <Card raised={raised}  
          onMouseOver={onOver} 
          onMouseOut={onOut} 
          sx={{ maxWidth: 225,
                maxHeight: height, 
                borderRadius:'0px',
                margin: 1 }}>
      <CardMedia
        component="img"
        height="224"
        image={offer.images[0]}
        alt={offer.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h4"
          sx={{
            fontWeight:600,
            textAlign:'center',
            fontSize:'0.9rem'
          }}
        >
            {offer.title}
        </Typography>
        
        <Box
         sx={{
          textAlign:'center'
         }}>
          <Typography variant="body2" component="span" color="text.secondary"
            sx={{
              letterSpacing:1,
              fontSize:'0.9em',
              fontWeight:600,
              color:'#000'
            }}
          >
           ${offer.price}
          </Typography>
          <Typography variant="body2" component="del" color="text.secondary"
            sx={{
              letterSpacing:1,
              color:'#908e8e',
              marginLeft:'10px'
            }}
          >
           ${Math.round(offer.price * 1.10)}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="medium"
        sx={{
          borderRadius:'0px',
          letterSpacing:1,
          fontSize:'14px',
          width:'100%'
        }}
        >ADD TO CART</Button>
      </CardActions>
    </Card>
    )
    
}

export default Offer;