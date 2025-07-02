import React, { useContext, useEffect, useRef, useState } from 'react';
import { App_context } from './Context';
import ModelViewer from './Model_3d';
import dev from "./images/swords.png"
import ui from "./images/ui.webp"

function Header() {
    const { drk_mod } = useContext(App_context);

    const containerRef2 = useRef();
    const containerRef3 = useRef();
    const [showModel2, setShowModel2] = useState(true);
    const [showModel3, setShowModel3] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShowModel2(false);
                setTimeout(() => setShowModel2(true), 100);
            }
        }, { threshold: 0.1 });

        if (containerRef2.current) observer.observe(containerRef2.current);
        return () => {
            if (containerRef2.current) observer.unobserve(containerRef2.current);
        };
    }, []);

    useEffect(() => {
        let alreadyShown = false;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !alreadyShown) {
                alreadyShown = true; // 🔒 Stop future triggers
                setShowModel3(false);
                setTimeout(() => setShowModel3(true), 100);
            }
        }, { threshold: 0.1 });

        if (containerRef3.current) observer.observe(containerRef3.current);

        return () => {
            if (containerRef3.current) observer.unobserve(containerRef3.current);
        };
    }, []);


    return (
        <div className="w-full h-max py-1 pb-4 sm:pb-10 ppmain px-5 md:px-10 lg:px-20 flex main_border justify-between items-center">
            <div className="w-[750px] h-max mt-18 sm:mt-25 lg:mt-35 mp_1 ">
                <h1 className={`${drk_mod ? "text-white ts_W" : "text-black ts_b"} text-xl sm:text-2xl mfs lg:text-4xl font-bold`}>
                    Hi, I'm <span className="text-yellow-400 italic  ts_y">Muhammad Arham Shafi</span>
                </h1>
                <p className={`${drk_mod ? "text-white ts_W" : "text-black ts_b"} text-md cen sm:text-xl lg:text-2xl ts_b font-bold mt-5 sm:mt-7 md:mt-10`}>
                    A <span className="text-yellow-400 ts_y font-bold">Front-End Web Developer</span> crafting smooth and user-centered{" "}
                    <span className="text-yellow-400 ts_y font-bold">UI/UX</span> experiences
                </p>

                <div ref={containerRef3} className="w-max justify-center items-center h-[200px] sm:h-[400px] relative mx-auto hidden mp_3">{showModel3 && <ModelViewer key={Date.now()} />}
                    <div className={`absolute ${drk_mod ? "bg-white bxs_w" : "bg-black bxs_b"} up_down_anime transition-all duration-200 ease-in-out hover:scale-105 px-3 top-10 scale-80 justify-around hidden md:flex items-center rounded-lg -right-45 w-[250px] h-[70px] `}>
                        <div className='w-[50px] flex justify-center items-center h-full '> <img className='w-full' src={dev} alt="" /> </div>
                        <h1 className={` font-bold ${drk_mod ? "text-black" : "text-white"} text-lg  tracking-[.5px] `} >Web Developer</h1>
                    </div>
                    <div className={`absolute ${drk_mod ? "bg-white bxs_w" : "bg-black bxs_b"} up_down_anime transition-all duration-200 ease-in-out hover:scale-105 px-3 bottom-10 scale-80 hidden md:flex justify-around items-center rounded-lg -left-65 w-[250px] h-[70px] `} style={{ animationDelay: ".5s" }}>
                        <div className='w-[50px] flex justify-center items-center h-full '> <img className='w-full' src={ui} alt="" /> </div>
                        <h1 className={` font-bold ${drk_mod ? "text-black" : "text-white"} text-lg  tracking-[.5px] `} >Ui/UX interfaces</h1>
                    </div>
                </div>
                <div className={`${drk_mod ? "text-white/70" : "text-black/70 "} fs mt-5  md:mt-10 text-sm md:text-md lg:text-lg relative px-5`}>
                    <div className={`w-[8px] top-2.5 h-[8px] rounded-full ${drk_mod ? "bg-white" : "bg-black"} left-0 absolute`} />
                    Currently, I’m pursuing a <b className={`${drk_mod ? "text-white" : ""}`}>Full Stack Development</b> course and working on real-world projects...
                </div>
                <div className={`mt-3 text-sm md:text-md lg:text-lg fs relative ${drk_mod ? "text-white/70" : "text-black/70 "} px-5`}>
                    <div className={`w-[8px] top-2.5 h-[8px] rounded-full ${drk_mod ? "bg-white" : "bg-black"} left-0 absolute`} />
                    I don’t just build interfaces — I create meaningful, user-first experiences that look great and feel intuitive.
                </div>
                <div className={`mt-3 text-sm md:text-md lg:text-lg fs relative ${drk_mod ? "text-white/70" : "text-black/70 "} px-5`}>
                    <div className={`w-[8px] top-2.5 h-[8px] rounded-full ${drk_mod ? "bg-white" : "bg-black"} left-0 absolute`} />
                    I’m actively seeking a <b className={`${drk_mod ? "text-white" : ""}`}>remote</b> front-end developer role or <b className={`${drk_mod ? "text-white" : ""}`}>internship</b> where I can grow, contribute meaningfully, and collaborate on impactful digital experiences
                </div>
                <button className="bg-yellow-500 ts_W bxs_y bl cursor-pointer mt-5 sm:mt-10 text-sm md:text-md sm:text-xl transition-all duration-200 ease-in hover:scale-105 active:scale-95 px-3 py-1 rounded-xl text-white font-bold">
                    Download CV
                </button>
            </div>

            <div ref={containerRef2} className="w-[500px] h-[500px]  border-red-500 relative mt-35 mp_2 justify-center items-center">
                {showModel2 && <ModelViewer key={Date.now()} />}
                <div className={`absolute ${drk_mod ? "bg-white bxs_w" : "bg-black bxs_b"} up_down_anime transition-all duration-200 ease-in-out hover:scale-105 px-3 top-0 justify-around flex items-center rounded-lg -right-15 w-[250px] h-[70px] `}>
                    <div className='w-[50px] flex justify-center items-center h-full '> <img className='w-full' src={dev} alt="" /> </div>
                    <h1 className={` font-bold ${drk_mod ? "text-black" : "text-white"} text-lg  tracking-[.5px] `} >Web Developer</h1>
                </div>
                <div className={`absolute ${drk_mod ? "bg-white bxs_w" : "bg-black bxs_b"} up_down_anime transition-all duration-200 ease-in-out hover:scale-105 px-3 bottom-0 justify-around flex items-center rounded-lg -left-50 w-[250px] h-[70px] `} style={{ animationDelay: ".5s" }}>
                    <div className='w-[50px] flex justify-center items-center h-full '> <img className='w-full' src={ui} alt="" /> </div>
                    <h1 className={` font-bold ${drk_mod ? "text-black" : "text-white"} text-lg  tracking-[.5px] `} >Ui/UX interfaces</h1>
                </div>

            </div>
        </div>
    );
}

export default Header;
