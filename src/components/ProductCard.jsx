import React from 'react'
import {IoCardOutline, IoCartOutline} from "react-icons/io5";


const ProductCard = ({product}) => {
    return (
        <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl
        transition-all p-2 h-max font-oswald">
            <img src={product.images[0]} alt="" className="bg-gray-100 aspect-square"/>
            <h1 className="line-clamp-2 p-1 font-semibold">{product.title}</h1>
            <p className="my-1 text-lg text-primary font-bold">{product.price}$</p>
            <button className="bg-brandGreen text-white rounded-md text-lg px-3 py-2 w-full cursor-pointer
             flex gap-1 items-center justify-center font-semibold"><IoCartOutline className="w-6 h-6"/> Add To Cart</button>
        </div>
    )
}

export default ProductCard