import React, {useEffect, useState} from 'react'
import {getData} from "../context/DataContext.jsx";
import FilterSection from "../components/FilterSection.jsx";
import loading from "../assets/loading2.webm";
import ProductCard from "../components/ProductCard.jsx";
import Pagination from "../components/Pagination.jsx";
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";


const Products = () => {
    const {data, fetchAllProducts} = getData()
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("ALL")
    const [brand, setBrand] = useState("ALL")
    const [priceRange, setPriceRange] = useState([0, 5000])
    const [page, setPage] = useState(1);


    useEffect(() => {
        fetchAllProducts()
    }, [])

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const handleBrandChange = (e) => {
        setBrand(e.target.value)
    }

    const pageHandler = (selectedPage) => {
        setPage(selectedPage)
    }


    const filterData = data?.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "ALL" || item.category === category) &&
        (brand === "ALL" || item.brand === brand) &&
        item.price >= priceRange[0] && item.price <= priceRange[1])


    const dynamicPage = Math.ceil(filterData?.length / 8)


    return (
        <div className="container">
            <div className="px-4 mb-10 text-primary">
                {
                    data?.length > 0 ? (
                        <>
                            <div className="flex gap-8">
                                <FilterSection search={search} setSearch={setSearch}
                                               brand={brand} setBrand={setBrand} priceRange={priceRange}
                                               setPriceRange={setPriceRange}
                                               category={category} setCategory={setCategory}
                                               handleCategoryChange={handleCategoryChange}
                                               handleBrandChange={handleBrandChange}/>
                                {
                                    filterData?.length > 0 ? (
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="grid grid-cols-4 gap-7 mt-10">
                                                {
                                                    filterData?.slice(page * 8 - 8, page * 8).map((product, index) => {
                                                        return <ProductCard key={index} product={product}/>
                                                    })
                                                }
                                            </div>
                                            <Pagination page={page} pageHandler={pageHandler}
                                                        dynamicPage={dynamicPage}/>

                                        </div>
                                    ) : (
                                        <div
                                            className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
                                            <Lottie animationData={notfound} classID='w-[500px]'/>
                                        </div>
                                    )
                                }

                            </div>

                        </>
                    ) : (
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
