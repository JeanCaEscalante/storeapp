import { useState, useEffect } from "react";
import { categoriesAll } from "../../services/categories";
import Category from "../../components/Category";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        categoryAll()
    },[])

    const categoryAll = async () => {
        const data = await categoriesAll()
        setCategories(data)
        setLoading(true)
    }

    if (!loading) {
        return <h1>loading</h1>
    }
    else{
  
    return (
       <> 
       <Typography component="div" variant="h5" color='primary'
        sx={{
         margin:'1rem',
         fontWeight:700,
         letterSpacing:1
         }}>
          popular categories
        </Typography>
        <Container>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            { 
            categories.map((category) => <Grid item xs={2} sm={4} md={4} key={category.id}><Category category={category} /> </Grid>)
            }
            </Grid>
        </Container>
       </>
    )
    }
}

export default Categories;