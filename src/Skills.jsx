import React, { useContext } from 'react'
import { App_context } from './Context'
import skill_icon from './Skills_data'

function Skills() {
    let { drk_mod } = useContext(App_context)
    return (
        <div className='w-full py-1 h-max px-4 md:px-0'>
            <h1 className={`text-center hed_2 font-bold ${drk_mod ? "text-white ts_W" : "text-black ts_b"} text-3xl sm:text-5xl tracking-[2px] mt-0 md:mt-15 lg:mt-20 transition-all duration-150 ease-in textanime`}>Skills <span className='text-yellow-400 ts_y'>&</span> Expertise</h1>
            <p className="text-center w-[95%] fs mx-auto text-base sm:text-xl mt-8 sm:mt-15 text-gray-400 textanime " style={{ animationDelay: ".3s" }}>Tools, technologies, and frameworks I use to build smooth and interactive web experiences</p>
            <div
                className={` w-[99%] md:w-[90%] mx-auto h-max flex justify-center gap-5 py-5 px-1 md:py-10 items-center flex-wrap ${drk_mod ? "bg-[#1a1a1a]" : "bg-[whitesmoke]"} mt-8 sm:mt-15 rounded-2xl`}
                style={{ boxShadow: 'inset 0 4px 12px rgba(0, 0, 0, 0.15)' }}>
                {skill_icon.map((ele, idx) => {
                    const IconComponent = ele.icon;
                    return (
                        <div
                            key={idx}
                            style={{ backgroundColor: ele.color, animationDelay: `${(idx + 1) * 0.1}s` }}
                            className="flex items-center transition-all duration-150 ease-in-out hover:scale-110 cursor-pointer gap-2 px-2 sm:px-3 py-1 sm:py-2 textanime rounded-lg shadow text-white fs text-sm font-medium"
                        >
                            <IconComponent className="text-xl" />
                            <span>{ele.title}</span>
                        </div>

                    );
                })}

            </div>
            <h1 className={`text-xl sm:text-4xl ml-0 md:ml-[5%] hed_2 textanime text-center md:text-left font-bold ${drk_mod ? "text-white ts_W" : "text-black ts_b"} transition-all duration-200 ease-in mt-10 lg:mt-20 `}>Work Experience :-</h1>
            <h3 className=" text-lg sm:text-xl ml-0 md:ml-[5%] mt-4 mfs textanime font-semibold text-center md:text-left text-yellow-500 ts_y tracking-[2px]" style={{ animationDelay: ".2s" }}>Frontend Developer</h3>
            <p className=" text-md md:text-lg text-gray-400 mt-4 fs text-center md:text-left ml-0 md:ml-[5%] textanime" style={{ animationDelay: ".4s" }}> WebDevs Company · Full-time · Lahore, Pakistan </p>
            <p className=" text-md md:text-lg text-gray-400 mt-1 fs text-center md:text-left ml-0 md:ml-[5%] textanime" style={{ animationDelay: ".6s" }}>Aug 2024 – July 2025 (1 Year) </p>
            <ul
                className={`list-none text-center fs md:text-left md:list-disc list-inside text-sm sm:text-md md:text-lg transition-all duration-150 ease-in leading-relaxed ${drk_mod ? "text-white" : "text-black"
                    } mt-5 ml-0 md:ml-[5%] space-y-1`}
            >
                {[
                    "Developed responsive user interfaces using React.js and Tailwind CSS.",
                    "Integrated APIs using Axios and modern JavaScript (ES6+).",
                    "Collaborated with UI/UX designers for modern, accessible layouts.",
                    "Used Git, GitHub and Figma in daily workflow.",
                ].map((text, idx) => (
                    <li key={idx} className="textanime" style={{ animationDelay: `${(idx + 1) * 0.2}s` }} >{text}</li>
                ))}
            </ul>
                
        </div>
    )
}

export default Skills