import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from "../routes/route";

const Navbar = () => {
    return (
        <div className="bg-white sticky top-0 z-10 shadow-md">
            <div className='mx-auto container flex justify-between sm:flex-row flex-col py-6 items-center'>
                <Link to={ROUTES.Home} className="cursor-pointer">
                    <h5 className="font-bold md:text-3xl text-2xl text-orange-500">Sybook</h5>
                </Link>

                <div className="flex items-center gap-6">
                    <Link to={ROUTES.Dashboard} className="cursor-pointer bg-blue-500 md:px-4 px-2 py-2 rounded text-white">
                        <span>Poll Results</span>
                    </Link>
                    <Link to={ROUTES.Login} className="cursor-pointer border-orange-500 border md:px-4 px-2 py-2 rounded hover:border-0 hover:bg-orange-500 hover:text-white duration-500 transition-all">
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar