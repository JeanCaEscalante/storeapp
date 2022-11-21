import { useState, useEffect } from "react";
import { productsPagination } from "../services/products";
import Offer from "../components/Offer";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
function Offers() {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        offersAll()
    },[])

    const offersAll = async () => {
        const data = await productsPagination(0,10)
        setOffers(data)
        setLoading(true)
    }

    if (!loading) {
        return <h1>loading</h1>
    }
    else{
  
    return (
       <> 
       <Typography component="div" variant="h5">
            offers in the week
        </Typography>
        <br/>
        <Container maxWidth="xl">
            <Grid container  sx={{display: 'flex', justifyContent:"center"}}>
            { 
            offers.map((offer) => <Offer key={offer.id} offer={offer} />)
            }
            </Grid>
        </Container>
       </>
    )
    }
}

export default Offers;