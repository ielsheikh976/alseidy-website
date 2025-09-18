import React, {useEffect} from 'react'
import {getData} from "../context/DataContext.jsx";


const Category = () => {
    const {data} = getData();

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property];
        })
        newVal = [...new Set(newVal)]
        return newVal;
    }

    const categoryOnlyData = getUniqueCategory(data, "category");
    return (

        <div>

        </div>
    )
}

export default Category