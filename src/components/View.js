import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productById } from "../services/products";
function View() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        elementById(id)
    },[id])

    const elementById = async (id) => {
        const data = await productById(id)

        setProduct(data)
        setLoading(true)
    }

    if (!loading) {
        return <h1>loading</h1>
    }
    else{
  
    return (
        <div>
            <img src={product.images[0]} alt="imagen de producto" width="400" height="400"/>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            <button>Comprar</button>
            <img src={product.images[0]} alt="imagen de producto" width="100" height="100"/>
            <img src={product.images[1]} alt="imagen de producto" width="100" height="100"/>
            <img src={product.images[2]} alt="imagen de producto" width="100" height="100"/>
        </div>
    )
    }
}

export default View;