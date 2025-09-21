import React, {useEffect} from 'react'
import {getData} from "../context/DataContext.jsx";
import FilterSection from "../components/FilterSection.jsx";
import loading from "../assets/loading2.webm";
import ProductCard from "../components/ProductCard.jsx";

const Products = () => {
    const {data, fetchAllProducts} = getData()

    useEffect(() => {
        fetchAllProducts()
    }, [])

    return (
        <div className="container">
            <div className="px-4 mb-10 text-primary">
                {
                    data?.length > 0 ? (
                        <div className="flex gap-8">
                            <FilterSection/>
                            <div className="grid grid-cols-4 gap-7 mt-10">
                                {
                                    data?.map((product, index) => {
                                        return <ProductCard key={index} product={product} />
                                    })
                                }
                            </div>

                        </div>) : (
                        <div className="flex items-center justify-center h-[400px]">
                            <video muted autoPlay loop>
                                <source src={loading} type="video/webm"/>
                            </video>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Products
