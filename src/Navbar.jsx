import React, { useContext } from 'react'
import DRK_mod_btn from './DRK_mod_btn'
import { App_context } from './Context'
import Menu_btn from './Menu_btn'
import Drk_mod_btn2 from './Drk_mod_btn2'

function Navbar() {
    let { drk_mod, nav_array, nav_list, setnav_list, menu, setmenu } = useContext(App_context)
    return (
        <div className={` ${drk_mod ? "bg-white " : "bg-black "} rounded-0 sm:rounded-2xl transition-all duration-300 ease-in w-full sm:w-[90%] lg:w-[95%] xl:w-[90%] fixed top-0 sm:top-5 left-0 sm:left-[5%] lg:left-[2.5%] xl:left-[5%]  h-[50px] lg:h-[60px] xl:h-[70px] flex  justify-between items-center pl-5 pr-4`}>
            <div className={`absolute w-[200px] h-max  top-[120%] transition-all duration-300 block lg:hidden ease-in  rounded-xl right-2  ${menu ? " translate-x-0 opacity-100 visible " : "opacity-0 invisible translate-x-20 "} `} >
                {
                    nav_array.map((ele, idx) => {
                        return (
                            <div key={idx} className={`relative w-full h-[40px] active:scale-95 transition-all duration-200 ease-in flex justify-center items-center rounded-lg overflow-hidden  ${drk_mod ? "bg-white " : "bg-black "} group mt-1 cursor-pointer`}>
                                <div className={`w-1  h-full bg-yellow-400 absolute bxs_y transition-all duration-200 ease-in-out top-0 left-0 group-hover:w-full `}></div>
                                <p className={` ${drk_mod ? "text-black" : "text-white"}  tracking-[1px] absolute font-bold`}> {ele} </p>
                            </div>
                        )
                    })
                }
                <div className={`relative w-full h-[40px] drk_2 hidden active:scale-95 transition-all duration-200 ease-in justify-center items-center rounded-lg overflow-hidden  ${drk_mod ? "bg-white " : "bg-black "} group mt-1 cursor-pointer`}>
                    <div className={`w-1  h-full bg-yellow-400 absolute bxs_y transition-all duration-200 ease-in-out top-0 left-0 group-hover:w-full `}></div>
                    <p className={` ${drk_mod ? "text-black" : "text-white"}  tracking-[1px] absolute font-bold`}> Contact </p>
                </div>
                <div className={`relative w-full h-[40px] drk_2  hidden active:scale-95 transition-all duration-200 ease-in justify-center items-center rounded-lg overflow-hidden  ${drk_mod ? "bg-white " : "bg-black "} group mt-1 cursor-pointer`}>
                    <div className={`w-1  h-full bg-yellow-400 absolute bxs_y transition-all duration-200 ease-in-out top-0 left-0 group-hover:w-full `}></div>
                    <div className={` ${drk_mod ? "text-black" : "text-white"}  tracking-[1px] text-sm absolute font-bold`}> <Drk_mod_btn2 /> </div>
                    <p className={`absolute left-1 text-sm ${drk_mod ? "text-black" : "text-white"}`}>Dark Mod</p>
                    <p className={`${drk_mod ? "text-black" : "text-white"} absolute right-3 text-sm`}>{drk_mod ? "ON" : "OFF"}</p>
                </div>

            </div>
            <div className='w-[max] flex items-center gap-5'><p className={`font-bold italic transition-all duration-300 ease-in text-lg lg:text-2xl ${drk_mod ? "text-black ts_b " : "ts_W text-white"} tracking-[1px]`}>Portfolio.<span className='text-yellow-300 ts_y'>Ar</span></p> <DRK_mod_btn /> </div>
            <div className='w-max  flex justify-center items-center gap-10'>
                <ul className='hidden lg:flex justify-center items-center gap-3 xl:gap-5'>
                    {
                        nav_array.map((ele, idx) => {
                            return (
                                <li key={idx} className={`${drk_mod ? "text-black" : "text-white"} transition-all ease-in ${nav_list == ele ? "text-yellow-400 line-through" : ""} cursor-pointer hover:text-yellow-400 duration-300 font-bold text-sm xl:text-md tracking-[1px] `} onClick={() => setnav_list(ele)} >{ele}</li>
                            )
                        })
                    }
                </ul>
                <div className='w-max h-max flex justify-center items-center gap-2'>
                    <Menu_btn />
                    <button className='bg-yellow-400 ts_W cb1 bxs_y cursor-pointer text-sm lg:text-xl transition-all duration-200 ease-in hover:scale-105 active:scale-95 px-3 py-1 rounded-xl text-white font-bold'>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar