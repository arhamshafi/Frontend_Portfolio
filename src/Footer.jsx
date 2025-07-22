import React, { useContext } from "react";
import { App_context } from "./Context";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    let { drk_mod } = useContext(App_context)
    return (

        <div className="w-full p-3 mt-5">
            <p className={`text-center ${drk_mod ? "text-white/60" : "text-black/60"} textanime text-sm sm:text-md mb-6`} style={{ animationDelay: ".4s" }}>
                 Let’s connect and create something amazing together. Reach out via email or phone, and I’ll get back to you as soon as possible 
            </p>
            <div className={`w-max ${drk_mod ? "text-white" : "text-black"} mx-auto flex justify-center text-2xl items-center gap-5 mt-5`}>
                <a href="https://wa.me/923226423043"
                    target="_blank"
                    title="Whats App"
                    rel="noopener noreferrer"
                    aria-label="Contact on WhatsApp"> <FaWhatsapp className="hover:text-green-500 transition-all duration-200 ease-in-out cursor-pointer hover:-translate-y-1" /> </a>
                < IoLogoInstagram className="hover:text-orange-500 transition-all duration-200 ease-in-out cursor-pointer hover:-translate-y-1" />
                <a href="https://github.com/arhamshafi"
                    title="Git Hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="visit github profile">  <FaGithub className="hover:text-gray-500 transition-all duration-200 ease-in-out cursor-pointer hover:-translate-y-1" /></a>
            </div>
        </div>

    )

}

export default Footer

