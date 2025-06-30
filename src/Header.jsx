import React, { useContext } from 'react'
import { App_context } from './Context'

function Header() {
    let { drk_mod } = useContext(App_context)
    return (
        <div className={`w-full h-max py-1 pb-10 px-20 flex justify-between `}>
            <div className='w-[680px] h-max mt-35'>
                <h1 className={`${drk_mod ? "text-white ts_W" : "text-black ts_b"} text-4xl font-bold `}>Hi, I'm !</h1>
                <h1 className='text-yellow-400 italic  text-4xl font-bold mt-5 ts_y'> Muhammad Arham Shafi ...</h1>
                <p className={`${drk_mod ? "text-white ts_W" : "text-black ts_b"} text-2xl ts_b font-bold  mt-5`}> A <span className='text-yellow-400 ts_y font-bold'>Front-End Web Developer</span>  with focus on <span className='text-yellow-400 ts_y font-bold'>UI/UX</span> design</p>
                <div className={` ${drk_mod ? "text-white/70" : "text-black/70 "} mt-10 text-lg relative px-5`}>
                    <div className={`w-[8px] top-2.5 h-[8px]  rounded-full ${drk_mod ? "bg-white" : "bg-black"} left-0 absolute  `}></div>
                    Currently, I’m pursuing a <b className={`${drk_mod ? "text-white" : ""}`}>Full Stack Development</b> course and working on real-world projects that combine design thinking with clean development practices.
                </div>
                <div className={` mt-3 text-lg relative  ${drk_mod ? "text-white/70" : "text-black/70 "} px-5`}>
                    <div className={` w-[8px] top-2.5 h-[8px] rounded-full ${drk_mod ? "bg-white" : "bg-black"} left-0 absolute `}></div>
                    I don’t just code — I design with purpose. I enjoy thinking <b className={`${drk_mod ? "text-white" : ""}`}>creatively</b>, crafting <b className={`${drk_mod ? "text-white" : ""}`}>unique layouts</b>, and transforming design concepts into smooth, functional user experiences. From wireframing ideas to developing pixel-perfect components, I believe <b className={`${drk_mod ? "text-white" : ""}`}>good design</b> is just as important as <b className={`${drk_mod ? "text-white " : ""}`}>good code</b>.
                </div>
                <div className={`mt-3 text-lg relative text-black/70 px-5  ${drk_mod ? "text-white/70" : "text-black/70 "}`}>
                    <div className={` ${drk_mod ? "bg-white" : "bg-black"} w-[8px] top-2.5 h-[8px] rounded-full bg-black left-0 absolute  `}></div>
                    I'm looking for a <b className={`${drk_mod ? "text-white" : ""}`}>remote</b> front-end role or <b className={`${drk_mod ? "text-white" : ""}`}>internship</b> where I can <b className={`${drk_mod ? "text-white" : ""}`}>grow</b>, <b className={`${drk_mod ? "text-white" : ""}`}>contribute</b>, and <b className={`${drk_mod ? "text-white" : ""}`}>collaborate</b> on meaningful digital products.
                </div>
                <button className='bg-yellow-400 ts_W bxs_y cursor-pointer mt-10 text-xl transition-all duration-200 ease-in hover:scale-105 active:scale-95 px-3 py-1 rounded-xl text-white font-bold'>Download CV</button>
            </div>
            <div className='w-[500px] h-[500px] border mt-35 '>
                
            </div>
        </div>
    )
}

export default Header