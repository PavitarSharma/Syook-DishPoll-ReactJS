import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import * as ROUTES from "../routes/route";

const Navbar = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate(ROUTES.Login)
    }
    return (
        <div className="bg-white sticky top-0 z-10 shadow-md">
            <div className='mx-auto container flex md:justify-between justify-start md:px-0 px-4 md:gap-0 gap-4  py-6 items-center'>
                <Link to={ROUTES.Home} className="cursor-pointer">
                    <h5 className="font-bold md:text-3xl text-2xl text-orange-500">Syook</h5>
                </Link>

                <div className="flex items-center md:gap-6 gap-3">
                    <Link to={ROUTES.Dashboard} className="cursor-pointer bg-blue-500 md:px-4 px-2 py-2 rounded text-white hover:bg-white hover:border-blue-500 hover:border hover:text-black transition-all duration-500">
                        <span>Poll Results</span>
                    </Link>
                    <Link to={ROUTES.Login} onClick={logout} className="cursor-pointer border-orange-500 border md:px-4 px-2 py-2 rounded hover:border-0 hover:bg-orange-500 hover:text-white duration-500 transition-all">
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar