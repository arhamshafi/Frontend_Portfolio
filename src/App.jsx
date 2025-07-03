import React, { useContext, useRef } from 'react';
import Navbar from './Navbar';
import { App_context } from './Context';
import Header from './Header';
import ParallaxText from './ParallaxText';
import Services from './Services';

function App() {
  const { drk_mod } = useContext(App_context);
  


  return (
    <div className={`py-[.1px] select-none min-h-screen transition-all overflow-hidden duration-300 ease-in ${drk_mod ? "bg-black" : "bg-white"}`}>
      <Navbar />
      <Header />
      <div className={`${drk_mod ? "text-white" : "text-black"} transition-all duration-300 ease-in w-full `}>
        <ParallaxText baseVelocity={-5}>Creative Frontend Developer</ParallaxText>
        <ParallaxText baseVelocity={5}>Building Smooth & Responsive UIs</ParallaxText>
      </div>
      <Services/>

      {/* Perspective here */}
     


    </div>
  );
}

export default App;
