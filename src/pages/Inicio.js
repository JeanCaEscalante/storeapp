
import Categories from "./sections/Categories";
import Offers from "./sections/Offers";
import Banners from "../components/Banners";
import Splinters from "./sections/Splinters";
import charismatic from '../images/charismatic.jpg'

const post = {
    title: 'Fake Store',
    description:"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    linkText:'Continue reading…'
}
function Inicio() {


    return (
        <>
         <Banners image={charismatic} post={post} height={350} />
         <Offers />
         <Splinters />
         <Categories />
         <br />
        </>
    )
}

export default Inicio;