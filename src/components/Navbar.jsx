import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {IoCartOutline} from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="bg-white py-3 shadow-2xl">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                {/*logo section*/}
                <div className="flex gap-7 items-center ">
                    <Link to={'/'}><h1 className="font-bold text-3xl text-primary">
                        <span className="text-brandGreen">A</span>lseidy</h1>
                    </Link>

                    <div className="text-primary text-lg">
                        <p>For mobiles & appliances</p>
                    </div>
                </div>

                {/*menu section*/}

                <nav className="flex gap-7 items-center">
                    <ul className="flex gap-7 items-center text-xl font-semibold text-primary">
                        <NavLink to={'/'} className={({isActive}) => `${isActive ? "border-b-3 " +
                            "transition-all border-brandGreen" : "text-primary"} cursor-pointer hover:text-brandGreen`}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to={'/products'} className={({isActive}) => `${isActive ? "border-b-3 " +
                            "transition-all border-brandGreen" : "text-primary"} cursor-pointer hover:text-brandGreen`}>
                            <li>Products</li>
                        </NavLink>
                        <NavLink to={'/about'} className={({isActive}) => `${isActive ? "border-b-3 " +
                            "transition-all border-brandGreen" : "text-primary"} cursor-pointer hover:text-brandGreen`}>
                            <li>About</li>
                        </NavLink>
                        <NavLink to={'/contact'} className={({isActive}) => `${isActive ? "border-b-3 " +
                            "transition-all border-brandGreen" : "text-primary"} cursor-pointer hover:text-brandGreen`}>
                            <li>Contact</li>
                        </NavLink>

                    </ul>
                    <Link to={'/cart'} className="relative">
                        <IoCartOutline className="h-7 w-7"/>
                        <span
                            className="bg-brandGreen px-2 rounded-full absolute -top-3 -right-3 text-white">0</span>
                    </Link>
                    <div>
                        <button className="cursor-pointer hover:scale-105 duration-300 py-1 px-3 rounded-md bg-brandGreen text-white">
                            Sign In
                        </button>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Navbar
