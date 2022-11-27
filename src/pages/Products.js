import { useState, useEffect } from "react";
import { productsPagination } from "../services/products";
import ReactPaginate from "react-paginate";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { categoriesAll } from "../services/categories";
import Product from "../components/Product";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState('All');

    const limit = 25;
    useEffect(() =>{
        getProducts(0);
        getCategories();
    },[])

    const getProducts = async (previous) => {
        const data = await productsPagination(previous,limit);
        setProducts(data);
    }

    const getCategories = async () => {
        const data = await categoriesAll();
        setCategories(data)
    }

    
    const productsByCategory = (name) => {
        setFilter(name);
    }

    const handlePageClick = ({selected}) => {
        getProducts(selected * 25)
    }

    const productsFilter = (filter === 'All') ? products : products.filter(({category}) => category.name === filter)
    return (
        <>
          <FormControl sx={{p:2}}>
            <FormLabel id="category-buttons-group-label">Categories </FormLabel>
            <FormLabel id="amount-label" sx={{position:'absolute', left:'8rem'}}>Amount: {productsFilter.length}</FormLabel>
            <RadioGroup
              row
              aria-labelledby="category-buttons-group-label"
              name="category-buttons-group"
              defaultValue="All"
              onChange={({target}) => productsByCategory(target.value)}
            >
              {
                categories.map((category) => <FormControlLabel key={category.id} value={category.name} control={<Radio />} label={category.name} />)
              }
              <FormControlLabel
              value="All"
              control={<Radio />}
              label="All"
            />
            </RadioGroup>
          </FormControl>
         
          <Container maxWidth="xl" >
            <Grid container  sx={{display: 'flex', justifyContent:"center"}}>
            {
              productsFilter.map((product) => <Product key={product.id} product={product} />)
            }
            </Grid>
          </Container>
          <ReactPaginate 
            previousLabel={<ArrowBackIosIcon  sx={{ fontSize: '1rem' }} />}
            nextLabel={<ArrowForwardIosIcon  sx={{ fontSize: '1rem' }}  />}
            breakLabel={'...'}
            marginPagesDisplayed={3}
            pageRangeDisplayed={2}
            pageCount={8}
            onPageChange={handlePageClick}
            className='pagination'
            pageClassName='pagination-li'
            activeClassName='pagination-active'
            previousClassName='pagination-li'
            nextClassName='pagination-li'
          />
        </>
    )
}

export default Products;