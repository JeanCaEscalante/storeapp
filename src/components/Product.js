import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Product({product}) {

    return (
        <div>
            <img src={product.images[0]} alt="imagen de producto" width="100" height="100"/>
            <Link to={`${product.id}`}><h3>{product.title}</h3></Link>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
        </div>
    )
}

export default Product;