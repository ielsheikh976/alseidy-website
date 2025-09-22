import {createContext, useContext, useState} from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState()

    // fetching all products from api

    const fetchAllProducts = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products?limit=0&skip=0')
            const productData = res.data.products
            const filteredProducts = productData.filter((item) =>
                ["smartphones", "laptops", "mens-watches", "mobile-accessories", "sports-accessories", "tablets", "womens-watches"].includes(item.category)
            );
            setData(filteredProducts);
        } catch (error){
            console.log(error)
        }
    }

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property];
        })
        newVal = ["ALL" ,...new Set(newVal)]
        return newVal;
    }

    const categoryOnlyData = ["ALL" ,"smartphones", "laptops", "mens-watches", "mobile-accessories", "sports-accessories", "tablets", "womens-watches"]
    const brandOnlyData = getUniqueCategory(data, "brand");

    return <DataContext.Provider value={{data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData}}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext);

