import React, {useContext, useEffect} from 'react'
import {DataContext} from "../context/DataContext.jsx";


const Carousel = () => {

    const {fetchAllProducts} = useContext(DataContext);
    useEffect(() => {
        fetchAllProducts();
    },[])

    return (
        <div>

        </div>
    )
}

export default Carousel