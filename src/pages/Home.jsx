import React from 'react'
import Carousel from "../components/Carousel.jsx";
import MidBanner from "../components/MidBanner.jsx";
import Features from "../components/Features.jsx";
import Category from "../components/Category.jsx";


const Home = () => {
    return (
        <>
            <Carousel/>
            <Category/>
            <MidBanner/>
            <Features/>
        </>
    )
}

export default Home