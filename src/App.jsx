import React, { useContext } from 'react'
import Navbar from './Navbar'
import { App_context } from './Context'

function App() {

  let  { drk_mod } = useContext(App_context)

  return (
    <div className={`py-[.1px] select-none min-h-screen transition-all duration-300 ease-in ${drk_mod ? "bg-black" : "bg-white"} `}>
    <Navbar/>
    </div>
  )
}

export default App