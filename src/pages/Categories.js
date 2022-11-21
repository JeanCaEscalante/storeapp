import { useState, useEffect } from "react";
import { categoriesAll } from "../services/categories";
import Category from "../components/Category";
import Stack from '@mui/material/Stack';
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
       <Typography component="div" variant="h5">
          popular categories
        </Typography>
        <Stack component={Container}  direction={{ xs: 'column', sm: 'row' }}  maxWidth="xl" >
          { 
           categories.map((category) => <Category key={category.id} category={category} />)
           }
        </Stack>
       </>
    )
    }
}

export default Categories;