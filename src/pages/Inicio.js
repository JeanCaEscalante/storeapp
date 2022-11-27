
import Categories from "./sections/Categories";
import Offers from "./sections/Offers";
import Banners from "../components/Banners";
import Technology from "../components/Technology";
import banner1 from '../images/banner1.png'
import Splinters from "./sections/Splinters";

function Inicio() {


    return (
        <>
         <Banners image={banner1} />
         <Offers />
         <Splinters />
         <Categories />
         <Technology />
        </>
    )
}

export default Inicio;