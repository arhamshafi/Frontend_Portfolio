import React, { useContext } from 'react'
import { App_context } from './Context'
import img_1 from "./images/food_web.png"
import img_2 from "./images/mini_store.png"
import img_3 from "./images/furniture_web.png"
import img_4 from "./images/expence_project.png"
import img_5 from "./images/quizz app.png"
import { RxCookie } from "react-icons/rx";

function Portfolio() {
    let { drk_mod } = useContext(App_context)

    return (
        <div className='w-full h-max py-3' id='Portfolio'>
            <h1 className={`font-bold textanime ${drk_mod ? "text-white ts_W" : "text-black ts_b"} text-xl sm:text-3xl md:text-5xl text-center mt-10 md:mt-18 transition-all duration-200 ease-in`}>
                🎨 Code Meets <span className="text-yellow-400 italic underline ts_y">Creativity</span>
            </h1>
            <p className={`mt-3 md:mt-16 w-full text-center text-sm md:text-xl textanime ${drk_mod ? "text-gray-300" : "text-gray-700"} px-4 md:px-20 transition-all duration-200 ease-in`}>
                Explore a curated set of real-world web applications that merge high performance, creative UI, and intuitive design. Scroll down to witness where logic meets creativity </p>
            <div className='w-full mt-10 lg:mt-20 py-1'>
                {
                    [{
                        id: 1,
                        title: "🍔 Foodie App",
                        desc: "A modern 3D-powered food ordering experience with full UI/UX design and smart state management.",
                        features: [
                            "3D animated menu using GLB models",
                            "Fully responsive custom-designed UI/UX",
                            "Add to cart with item-based quantity control",
                            "Dynamic total price calculation and order summary",
                            "Redux Toolkit used for global cart management"
                        ],
                        tech: ["React", "Redux Toolkit", "GLB/Three.js", "Tailwind CSS"],
                        img: img_1,
                        live: "https://foodie-app-masb.netlify.app/",
                        github: "https://github.com/arhamshafi"
                    },
                    {
                        id: 2,
                        title: "🛍️ Mini Store (Not Responsive...)",
                        desc: "A stylish and animated mini e-commerce platform built with React and Redux Toolkit. Designed for smooth shopping interactions and fast state updates.",
                        features: [
                            "Redux Toolkit-based cart and product management",
                            "Custom-designed layout",
                            "Add to cart, remove, and quantity update features",
                            "Animated product cards and smooth transitions",
                            "Tailwind CSS styling with hover and click effects"
                        ],
                        tech: ["React", "Redux Toolkit", "Tailwind CSS"],
                        img: img_2,
                        live: "https://mini-store-masb.netlify.app/",
                        github: "https://github.com/arhamshafi"
                    },
                    {
                        id: 3,
                        title: "🛒 Shopping Cart App",
                        desc: "A fully functional shopping cart web app developed with custom UI and Context API for state management. Built from scratch with dynamic cart actions and responsive layout.",
                        features: [
                            "Custom-designed shopping UI with clean layout",
                            "Add to cart, remove item, and update quantity features",
                            "Built with React Context API (no Redux)",
                            "Cart totals auto-calculated in real-time",
                            "Responsive grid with smooth transitions and styled components"
                        ],
                        tech: ["React", "Context API", "Tailwind CSS", "Custom CSS/Animations"],
                        img: img_3,
                        live: "https://shoppingcart-reducerhook-masb.netlify.app/",
                        github: "https://github.com/arhamshafi"
                    },
                    {
                        id: 4,
                        title: "📊 Expense Reviewer App",
                        desc: "A smart dashboard-style expense tracker that integrates weather, calendar, and live time. Designed like a real app interface for daily financial monitoring.",
                        features: [
                            "Modern dashboard layout with real-time widgets",
                            "Add, edit, and delete expense entries",
                            "Live time display and calendar integration",
                            "Weather API for city-based temperature display",
                            "Data stored in LocalStorage for persistence"
                        ],
                        tech: ["React", "Context API", "Tailwind CSS", "OpenWeather API"],
                        img: img_4,
                        live: "https://expense-reviewer-masb.netlify.app/",
                        github: "https://github.com/arhamshafi"
                    },
                    {
                        id: 5,
                        title: "🧠 Quiz App",
                        desc: "An interactive quiz application featuring custom UI components, stylish animations, and real-time answer validation — built with a fusion of MUI and Tailwind.",
                        features: [
                            "Paginated quiz flow with next/back navigation",
                            "Answer selection with instant visual feedback",
                            "Final score and result summary at the end",
                            "Custom animated components using MUI + Tailwind",
                            "Responsive and accessible design"
                        ],
                        tech: ["React", "MUI", "Tailwind CSS", "Custom Hooks", "Local State"],
                        img: img_5,
                        live: "https://quizz-masb-with-api.netlify.app/",
                        github: "https://github.com/arhamshafi"
                    }
                    ].map((ele, idx) => {
                        return (
                            <div key={idx} className='mt-0'>

                                <div
                                    key={idx}
                                    className={`w-[90%] mx-auto group hidden sm:flex flex-col h-auto  md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""} prt justify-between items-center mt-10 textanime`}  style={{ animationDelay: `${(idx + 1) * 0.2}s` }}
                                >
                                    {/* Left / Right Image Box */}
                                    <div className={`w-full md:w-[37%]  rounded-xl overflow-hidden shadow-xl  `}>
                                        {ele.img ? (
                                            <img
                                                src={ele.img}
                                                alt={ele.title}
                                                className="w-full h-max group-hover:scale-110 scale-105 transition-all duration-200 ease-in object-contain"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                                                Image Here
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Area */}
                                    <div className={`w-full md:w-[60%] ${drk_mod ? "text-white" : "text-black"} p-5 transition-all flex flex-col mt-5 md:mt-0 justify-center duration-200 ease-in rounded-xl h-full space-y-2`}>
                                        <h2 className={`text-xl font-bold ${drk_mod ? "text-yellow-400" : "text-yellow-500"} ts_y`}>{ele.title}</h2>
                                        <p className="text-sm">{ele.desc}</p>
                                        <ul className={`list-disc list-inside text-sm ${drk_mod ? "text-white/70" : "text-black/70"} transition-all duration-200 ease-in `}>
                                            {ele.features.map((f, i) => (
                                                <li key={i}>{f}</li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2 text-xs pt-2">
                                            {ele.tech.map((tech, i) => (
                                                <span key={i} className={` transition-all duration-150 ease-linear border border-yellow-400 ${drk_mod ? "text-black bg-yellow-400  hover:bg-black hover:text-yellow-500" : "bg-yellow-500 text-white  hover:bg-white hover:text-yellow-600"}  text-black px-2 py-1 rounded-full`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 pt-4">
                                            <a
                                                href={ele.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 border-2 
               border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white  dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-black"
                                            > 🌐 Live Demo </a>
                                            <a href={ele.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-1.5 rounded-full text-sm font-medium transition duration-200 border-2 
               border-gray-700 text-gray-700  hover:bg-gray-700 hover:text-white dark:border-white/60 dark:text-white/70 
               dark:hover:bg-white dark:hover:text-black" >📁 GitHub</a>
                                        </div>

                                    </div>
                                </div>

                                <div className='w-[90%] mx-auto group rounded-xl bg-cover bg-center overflow-hidden relative h-max flex justify-center items-center sm:hidden mt-5 textanime'  style={{ animationDelay: `${(idx + 1) * 0.2}s` }}
                                >
                                    <RxCookie className={`${drk_mod ? "text-white/20" : "text-black/20"} text-8xl absolute textanime`}  style={{ animationDelay: `${(idx + 1) * 0.2}s` }} />

                                    <img src={ele.img} className='absolute top-10  right-2 w-[150px] r_img rounded-2xl z-10' alt="" />
                                    <div className={`w-full h-full relative p-5 top-0 left-0 ${drk_mod ? "bg-white/20" : "bg-black/10"}`}>
                                        <div className='w-[70%] h-max r_bb'>
                                            <h1 className={`${drk_mod ? "text-yellow-400" : "text-yellow-500"} ts_y`}>{ele.title}</h1>
                                            <ul className={`list-disc list-inside text-[11px] mt-4 ${drk_mod ? "text-white/70" : "text-black/70"} transition-all duration-200 ease-in `}>
                                                {ele.features.map((f, i) => (
                                                    <li key={i}>{f}</li>
                                                ))}
                                            </ul>

                                        </div>
                                        <p className={` text-[11px] mt-3 ${drk_mod ? " text-white" : "text-black "} `}>{ele.desc}</p>
                                        <div className="flex flex-wrap gap-2 text-[10px] pt-2">
                                            {ele.tech.map((tech, i) => (
                                                <span key={i} className={` transition-all duration-150 ease-linear border border-yellow-400 hover:bg-transparent ${drk_mod ? "text-black bg-yellow-400   hover:text-yellow-500" : "bg-yellow-500 text-white hover:text-yellow-600"}  text-black px-2 py-1 rounded-full`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 pt-4">
                                            <a
                                                href={ele.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-1 rounded-full text-[10px] font-medium transition duration-200 border-2 
               border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white  dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-black"
                                            > 🌐 Live Demo </a>
                                            <a href={ele.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-1 rounded-full text-[10px] font-medium transition duration-200 border-2 
               border-gray-500 text-gray-500  hover:bg-gray-500 hover:text-white dark:border-white/40 dark:text-white/40 
               dark:hover:bg-white dark:hover:text-black" >📁 GitHub</a>
                                        </div>
                                    </div>
                                </div>


                                {/* <div className='w-[200px] h-[100px] rounded-xl mt-3  overflow-hidden'> <img src={ele.img} className='w-full scale-103 transition-all duration-200 ease-in-out h-full group-hover:scale-110' alt="" /> </div> */}
                            </div>
                        )
                    })
                }
            </div>





        </div>
    )
}

export default Portfolio
