import { useState, useEffect } from "react";
import { productsPagination } from "../services/products";
import ReactPaginate from "react-paginate";
import { categoriesAll } from "../services/categories";
import Product from "../components/Product";
function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState('');

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

    const productsFilter = (filter === '') ? products : products.filter(({category}) => category.name === filter)
    return (
        <>
          <h1>Products</h1>
          <h2>Cantidad: {productsFilter.length}</h2>
          {
            categories.map((category) => <button key={category.id} onClick={(e) => productsByCategory(category.name)}>{category.name}</button>)
          }
          <button onClick={(e) => productsByCategory('')}>All</button>
          {
            productsFilter.map((product) => <Product key={product.id} product={product} />)
          }

          <ReactPaginate 
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            marginPagesDisplayed={3}
            pageRangeDisplayed={2}
            pageCount={8}
            onPageChange={handlePageClick}
          />
        </>
    )
}

export default Products;