import React, { useContext } from 'react'
import { App_context } from './Context'

function Skills() {
    let { drk_mod } = useContext(App_context)
    return (
        <div className='w-full py-1 h-max '>
            <h1 className={`text-center font-bold ${ drk_mod ? "text-white ts_W" : "text-black ts_b" } text-5xl tracking-[2px] mt-20 transition-all duration-150 ease-in textanime`}>Skills <span className='text-yellow-400 ts_y'>&</span> Expertise</h1>
            <p className="text-center text-base sm:text-xl mt-15 text-gray-400 textanime " style={{animationDelay:".3s"}}>Tools, technologies, and frameworks I use to build smooth and interactive web experiences</p>
            <div className='w-[90%] mx-auto h-[200px] '></div>
        </div>
    )
}

export default Skills