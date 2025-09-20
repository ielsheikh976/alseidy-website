import React from 'react'
import Banner from '../assets/banner.jpg';

const MidBanner = () => {
    return (
        <div className="container">
            <div className="bg-white md:py-24">
                <div className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]" style=
                    {{backgroundImage: `url(${Banner})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}>
                    <div className="absolute inset-0 bg-black/30 md:rounded-2xl bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Next-Gen Electronics at Your Fingerprints
                            </h1>
                            <p className="text-lg md:text-xl mb-6">
                                Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
                            </p>
                            <button className="main-button py-2 px-4 md:py-3 md:px-6 ">
                                Shop Now
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default MidBanner