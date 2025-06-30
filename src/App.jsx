import React, { useContext, useRef } from 'react';
import Navbar from './Navbar';
import { App_context } from './Context';

function App() {
  const { drk_mod , cursor_effect_on_leave , cursor_effect_on_enter } = useContext(App_context);

 

  return (
    <div className={`py-[.1px] select-none min-h-screen transition-all duration-300 ease-in ${drk_mod ? "bg-black" : "bg-white"}`}>
      <Navbar />

      {/* Perspective here */}
      {/* <div className=" mt-30 w-max h-max" style={{ perspective: '1000px' }}>
        <div
          onMouseMove={cursor_effect_on_enter}
          onMouseLeave={cursor_effect_on_leave}
          className="w-[300px] h-[400px] bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl shadow-2xl transition-all ease-out duration-200"
          style={{
            transformStyle: 'preserve-3d',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #444'
          }}
        >

        </div>
      </div> */}
     
       
    </div>
  );
}

export default App;
