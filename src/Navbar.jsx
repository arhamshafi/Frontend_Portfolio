import React, { useContext } from 'react'
import DRK_mod_btn from './DRK_mod_btn'
import { App_context } from './Context'

function Navbar() {
    let { drk_mod, nav_array , nav_list , setnav_list } = useContext(App_context)
    return (
        <div className={` ${drk_mod ? "bg-white" : "bg-black "} rounded-4xl transition-all duration-300 ease-in w-[90%] fixed top-5 left-[5%] h-[70px] flex  justify-between items-center px-5`}>
            <div className='w-[max] flex items-center gap-5'><p className={`font-bold italic text-2xl ${drk_mod ? "text-black" : "text-white"} tracking-[1px]`}>Portfolio.<span className='text-yellow-300'>Ar</span></p> <DRK_mod_btn /> </div>
            <div className='w-max  flex justify-center items-center gap-20'>
                <ul className='flex justify-center items-center gap-5'>
                    {
                        nav_array.map((ele, idx) => {
                            return (
                                <li key={idx} className={`${drk_mod ? "text-black" : "text-white"} transition-all ease-in ${nav_list == ele ? "text-yellow-400 line-through" : ""} cursor-pointer hover:text-yellow-400 duration-300 font-bold text-md tracking-[1px] `} onClick={()=>setnav_list(ele)} >{ele}</li>
                            )
                        })
                    }
                </ul>
                <button className='bg-red-400'>Contact</button>
            </div>
        </div>
    )
}

export default Navbar