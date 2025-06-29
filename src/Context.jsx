import React, { createContext, useState } from 'react'

export let App_context = createContext()


function App_provider({ children }) {

    let [drk_mod, setdrk_mod] = useState(false)
    let nav_array = ["Home", "Services", "Experience", "Portfolio", "Partners", "Contact"];
    let [nav_list , setnav_list] = useState("Home")
    return (
        <App_context.Provider value={{
            drk_mod, setdrk_mod,
            nav_array,
            nav_list ,setnav_list
        }}>
            {children}
        </App_context.Provider>
    )
}

export default App_provider