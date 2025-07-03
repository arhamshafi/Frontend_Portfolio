import React, { useContext } from 'react'
import { App_context } from './Context'

function Services() {
    let { drk_mod, cursor_effect_on_leave, cursor_effect_on_enter } = useContext(App_context)
    return (
        <div className='w-full  py-10'>
            <h1 className={`font-bold textanime ${drk_mod ? "text-white ts_W" : "text-black ts_b"} text-xl sm:text-3xl md:text-5xl text-center -mt-2 sm:mt-5 md:mt-13 transition-all duration-200 ease-in`}>🎯 <span className="text-yellow-400 italic underline ts_y">Services</span> I Provide </h1>
            <p className={`text-center w-[95%] sm:w-[90%] lg:w-3/4 textanime mt-8 fs sm:mt-15 lg:mt-20 ${drk_mod ? "text-white/80" : "text-black/70"} mx-auto tracking-[1px] text-sm md:text-lg xl:text-xl leading-relaxed `} style={{ wordSpacing: "2px", animationDelay: ".4s" }}>
                From crafting sleek, user-friendly interfaces to designing playful, interactive animations — I specialize in transforming your bold ideas into seamless, responsive digital experiences. Every pixel I place has a purpose, and every motion I create adds meaning. Whether you're building a brand or upgrading your web presence, I’m here to turn your vision into an engaging, functional reality — pixel by pixel.
            </p>
            <div className='w-full h-max flex justify-center items-center gap-10 flex-wrap  mt-20'>
               
                <div className=" w-max h-max" style={{ perspective: '1000px' }}>
                    <div onMouseMove={cursor_effect_on_enter} onMouseLeave={cursor_effect_on_leave}
                        className="w-[400px] h-[500px] rounded-2xl shadow-2xl transition-all ease-out duration-200"
                        style={{
                            transformStyle: 'preserve-3d',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '5px solid yellow'
                        }}
                    >

                    </div>
                </div>
                
            </div>
            {/* <p>5 cards remaing</p> */}
            {/* <p>Frontend Web Development</p> */}
            {/* <p>Animated User Interfaces</p> */}
            {/* <p>REST API Integration</p> */}
            {/* <p>Custom UI Components</p> */}
            {/* <p> Bug Fixing & Code Optimization</p> */}
            {/* <p className="animate-pulse text-yellow-400 font-semibold text-center text-lg mt-20 ">🚧 Work in progress...</p> */}
        </div>
    )
}

export default Services