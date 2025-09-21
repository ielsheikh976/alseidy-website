import React from "react";

import {Truck, Lock, RotateCcw, Clock} from 'lucide-react'

const FeaturesData = [
    {
        id: 1,
        icon: Truck,
        text: "Free Shipping",
        subtext: "On orders over $100"
    },
    {
        id: 2,
        icon: RotateCcw,
        text: "Secure Payment",
        subtext: "100% protected payments"
    },
    {
        id: 3,
        icon: Lock,
        text: "Easy Returns",
        subtext: "30-day return policy"
    },
    {
        id: 4,
        icon: Clock,
        text: "Online Support 24/7",
        subtext: "Dedicated Customer Service"
    }
]


const Features = () => {

    return (
        <div>
            <div className="py-8 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 gap-y-8">
                        {FeaturesData.map((data, index) => {
                            return <div key={index}
                                        className="flex items-center justify-center text-center sm:text-left">
                                <data.icon className="flex-shrink-0 h-10 w-10 text-gray-600"/>
                                <div className="ml-4">
                                    <p className="text-base font-medium text-gray-600">{data.text}</p>
                                    <p className="text-gray-500 text-sm mt-1">{data.subtext}</p>
                                </div>
                            </div>

                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features;
