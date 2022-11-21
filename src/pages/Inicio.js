import { useState } from "react";
import Headers from "../components/Headers";
import Categories from "./Categories";
import Offers from "./Offers";


function Inicio() {


    return (
        <>
         <Headers />
         <br/>
         <Offers />
         <Categories />
        </>
    )
}

export default Inicio;