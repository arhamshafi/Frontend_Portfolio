import React, { useContext } from 'react'
import { App_context } from './Context'
import skill_icon from './Skills_data'

function Skills() {
    let { drk_mod } = useContext(App_context)
    return (
        <div className='w-full py-1 h-max '>
            <h1 className={`text-center font-bold ${drk_mod ? "text-white ts_W" : "text-black ts_b"} text-3xl sm:text-5xl tracking-[2px] mt-0 md:mt-15 lg:mt-20 transition-all duration-150 ease-in textanime`}>Skills <span className='text-yellow-400 ts_y'>&</span> Expertise</h1>
            <p className="text-center w-[95%] mx-auto text-base sm:text-xl mt-8 sm:mt-15 text-gray-400 textanime " style={{ animationDelay: ".3s" }}>Tools, technologies, and frameworks I use to build smooth and interactive web experiences</p>
            <div
                className={`w-[90%] mx-auto h-max flex justify-center gap-5 py-10 items-center flex-wrap ${drk_mod ? "bg-[#1a1a1a]" : "bg-[whitesmoke]"} mt-8 sm:mt-15 rounded-2xl`}
                style={{ boxShadow: 'inset 0 4px 12px rgba(0, 0, 0, 0.15)' }}>
                {skill_icon.map((ele, idx) => {
                    const IconComponent = ele.icon;
                    return (
                        <div
                            key={idx}
                            style={{ backgroundColor: ele.color , animationDelay: `.${idx + 1}s`  }}
                            className="flex items-center transition-all  duration-150 ease-in-out hover:scale-110 cursor-pointer gap-2 px-2 sm:px-3 py-1 sm:py-2 textanime rounded-lg shadow text-white text-sm font-medium" 
                            
                        >
                            <IconComponent className="text-xl" />
                            <span>{ele.title}</span>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default Skills