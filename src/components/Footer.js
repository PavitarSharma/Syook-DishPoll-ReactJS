import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return (
        <div className="bg-black text-white flex items-center justify-between px-8 h-20">

            <div>
                Sybook - Dish
            </div>

            <div className="sm:block none">
                &copy; {``} {year}
            </div>

            <div className="flex items-center gap-8 cursor-pointer">
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