import React, { createContext, useRef, useState } from 'react'

export let App_context = createContext()


function App_provider({ children }) {

    let [drk_mod, setdrk_mod] = useState(false)
    let nav_array = ["Home", "Services", "Experience", "Portfolio", "Partners"];
    let [nav_list, setnav_list] = useState("Home")
    let [menu , setmenu] = useState(false)

    const cursor_effect_on_enter = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const cursor_effect_on_leave = (e) => {
        const card = e.currentTarget;
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    return (
        <App_context.Provider value={{
            drk_mod, setdrk_mod,
            nav_array,
            nav_list, setnav_list,
            cursor_effect_on_leave,
            cursor_effect_on_enter,
            menu,setmenu
        }}>
            {children}
        </App_context.Provider>
    )
}

export default App_provider