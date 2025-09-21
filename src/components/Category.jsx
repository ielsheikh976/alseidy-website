import React from 'react'
// import {getData} from "../context/DataContext.jsx";
import smartphone from '../assets/smartphone.jpg'
import labtop from '../assets/labtop.jpg'
import tablet from '../assets/tablet.jpg'
import accessories from '../assets/accessories.jpg'
import headphone from '../assets/headphone.jpg'
import watch from '../assets/smart-watch.jpg'
import appliances from '../assets/appliances.jpg'
import gaming from '../assets/gaming.jpg'

const categories = [
    {name: "Smartphones", img: smartphone},
    {name: "Laptops", img: labtop},
    {name: "Tablets", img: tablet},
    {name: "Accessories", img: accessories},
    {name: "Headphones", img: headphone},
    {name: "Watches", img: watch},
    {name: "Appliances", img: appliances},
    {name: "Gaming", img: gaming},
];

const Category = () => {
    // const {data} = getData();
    //
    // const getUniqueCategory = (data, property) => {
    //     let newVal = data?.map((curElem) => {
    //         return curElem[property];
    //     })
    //     newVal = [...new Set(newVal)]
    //     return newVal;
    // }
    //
    // const categoryOnlyData = getUniqueCategory(data, "category");

    return (
        <div className="h-[550px] container py-10">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                Shop by Category
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-6 h-full">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="relative group rounded-2xl overflow-hidden shadow-md"
                    >
                        <img
                            src={cat.img}
                            alt={cat.name}
                            className="w-full h-full object-cover transform duration-300 group-hover:scale-110"
                        />
                        {/* Overlay with Button */}
                        <div
                            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <button
                                className="bg-brandWhite text-brandGreen px-4 py-2 rounded-full font-semibold shadow-md hover:bg-brandGreen hover:text-brandWhite transition">
                                {cat.name}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        // <div className="mt-8">
        //     <div
        //         className="rounded-3xl shadow-md flex flex-wrap gap-6 items-center justify-around py-6 px-8 bg-gradient-to-br from-primary via-secodary to-primary">
        //         {categoryOnlyData
        //             .filter((item) =>
        //                 ["smartphones", "laptops", "tablets", "mobile-accessories"].includes(item)
        //             )
        //             .map((item, index) => (
        //                 <div key={index}>
        //                     <button
        //                         className="cursor-pointer px-6 py-3 rounded-xl bg-gradient-to-r from-brandGreen to-brandGreen/50
        //                text-white font-semibold uppercase tracking-wide shadow-md
        //                hover:scale-105 hover:shadow-lg transition-all duration-300"
        //                     >
        //                         {item.replace("-", " ")}
        //                     </button>
        //                 </div>
        //             ))}
        //     </div>
        // </div>

    )
}

export default Category