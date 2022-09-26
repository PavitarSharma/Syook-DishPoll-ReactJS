import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return (
        <div className="bg-black text-white flex items-center justify-between px-8 h-20 md:gap-0 gap-2">

            <div className="flex md:flex-row flex-col md:items-center">
                <div>
                    Sybook - Dish
                </div>

                <div className="sm:block none">
                    &copy; {``} {year}
                </div>
            </div>

            <div className="flex items-center md:gap-8 gap-2 cursor-pointer">
                <a href="https://www.linkedin.com/in/pavitar-sharma-918a3b19a/" target="_blank" rel="noreferrer">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/PavitarSharma" target="_blank" rel="noreferrer">
                    <AiFillGithub size={24} />
                </a>
                <a href="https://app.netlify.com/teams/pavitarsharma/sites" target="_blank" rel="noreferrer">
                    <SiNetlify size={24} />
                </a>
            </div>
        </div>
    )
}

export default Footer