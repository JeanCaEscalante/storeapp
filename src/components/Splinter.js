import { React } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import banners2 from '../images/banners2.png'


function Splinter() {

    return (
        <>
            <Card sx={{ display: 'flex', maxWidth:'50%', borderRadius:0 }}>
                <CardMedia
                    component="img"
                    image={banners2}
                    alt="Live from space album cover"
                />
            </Card>
        </>
    )
}

export default Splinter;