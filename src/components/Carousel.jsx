import React, {useContext, useEffect} from 'react'
import {DataContext} from "../context/DataContext.jsx";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";


const Carousel = () => {

    const {data, fetchAllProducts} = useContext(DataContext);
    console.log(data)

    useEffect(() => {
        fetchAllProducts()
    }, [])

    // const SamplePrevArrow = (props) => {
    //     const {className, style, onClick} = props;
    //     return (
    //         <div onClick={onClick} className={`arrow ${className}`} style={{zIndex: 3}}>
    //             <AiOutlineArrowLeft className="h-[40px] w-[40px] m-1" style={{...style, display:"block", borderRadius:"50px", background:"#556E53", color:"#D1D4C9",
    //             position:"absolute", padding:"2px", left:"50px"}} onMouseOver="this.style.backgroundColor='#555'"/>
    //         </div>
    //     )
    // }
    //
    // const SampleNextArrow = (props) => {
    //     const {className, style, onClick} = props;
    //     return (
    //         <div onClick={onClick} className={`arrow ${className}`} style={{zIndex: 3}}>
    //             <AiOutlineArrowRight className="h-[40px] w-[40px] m-1" style={{...style, display:"block", borderRadius:"50px", background:"#556E53", color:"#D1D4C9",
    //                 position:"absolute", padding:"2px", right:"50px"}} />
    //         </div>
    //     )
    // }

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow to="next"/>,
        // prevArrow: <SamplePrevArrow to="prev"/>
    };


    return (
        <div>
            <Slider {...settings}>
                {data?.filter((item) => item.category === "smartphones").slice(0, 7)?.map((item, index) => {
                    return <div key={index} className="bg-gradient-to-br from-primary via-secodary to-primary -z-10 font-oswald">
                        <div className="flex gap-10 justify-center h-[600px] items-center px-4">
                            <div className="space-y-6">
                                <h3 className="text-brandOrange font-semibold text-sm">Powering Your World with the best electronics </h3>
                                <h1 className="text-4xl font-bold uppercase line-clamp-3 w-[500px] text-brandWhite">{item.title}</h1>
                                <p className="md:w-[500px] line-clamp-3 text-brandWhite pr-7">{item.description}</p>
                                <button className="main-button">Shop Now</button>
                            </div>
                            <div>
                                <img src={item.images[0]} alt="" className="rounded-full w-[550px] hover:scale-105
                                transition-all shadow-2xl shadow-brandWhite" />
                            </div>

                        </div>
                    </div>
                })}

            </Slider>
        </div>
    )
}

export default Carousel