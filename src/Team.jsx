import React, { useContext, useEffect, useState } from 'react';
import { App_context } from './Context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import img_1 from "./images/crd.png"
import { MdVerified } from "react-icons/md";

const teamData = [
    {
        name: "Zia Shakir",
        role: "Full Stack Developer",
        img: img_1,
        info: " Building scalable apps using MERN Stack"
    },
    {
        name: "Ahmad Khan",
        role: "Wordpress Developer",
        img: img_1,
        info: "WordPress | Elementor | WooCommerce"
    },
    {
        name: "Shazib",
        role: "Frontend Developer",
        img: img_1,
        info: "Frontend Developer | React & Tailwind CSS"

    },
];

function AnimatedSlide({ children, bg }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className={`w-full mx-auto h-[300px] ${bg} rounded-xl flex flex-col items-center justify-center`}
        >
            {children}
        </motion.div>
    );
}

function Team() {
    const { drk_mod } = useContext(App_context);
    const [config, setConfig] = useState({
        autoplay: true,
        loop: true,
    });

    useEffect(() => {
        const updateConfig = () => {
            const width = window.innerWidth;
            let visibleSlides = 1;
            if (width >= 1024) visibleSlides = 3;
            else if (width >= 700) visibleSlides = 2;

            const isLoop = teamData.length > visibleSlides;
            const isAuto = teamData.length > 1;

            setConfig({
                loop: isLoop,
                autoplay: isAuto ? { delay: 2000, disableOnInteraction: false } : false,
            });
        };

        updateConfig();
        window.addEventListener('resize', updateConfig);
        return () => window.removeEventListener('resize', updateConfig);
    }, []);

    return (
        <div className="w-full h-max py-1 px-4 sm:px-10">
            <h1 className={`font-bold textanime ${drk_mod ? "text-white ts_W" : "text-black ts_b"} text-xl sm:text-3xl md:text-5xl text-center mt-10 md:mt-18 transition-all duration-200 ease-in`}>
                🤝 <span className="text-yellow-400 italic underline ts_y">Collaborative</span> Moments
            </h1>

            <p className={`${drk_mod ? "text-white" : "text-black"} transition-all duration-200 ease-linear mt-10 text-center text-sm sm:text-md lg:text-lg`}>
                While I primarily work as a solo developer, I’m fortunate to have a circle of close friends who bring valuable insights, honest feedback, and creative ideas to the table.
            </p>

            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                loop={config.loop}
                autoplay={config.autoplay}
                speed={800}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    700: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mt-5 sm:mt-10"
            >
                {teamData.map((member, idx) => (
                    <SwiperSlide key={idx}>
                        <AnimatedSlide >
                            <div className='w-full h-full bg-white/10 rounded-2xl flex justify-center items-center overflow-hidden'>
                                <img src={member.img} className='w-[70%] absolute object-fit' alt="" />
                                <div className="absolute bottom-0 w-full p-3 h-full bg-gradient-to-t from-black/90 to-transparent rounded-2xl z-10">

                                    <h1 className='text-xl mt-45 tracking-[1px] text-white font-bold ts_y flex items-center gap-2'> {member.name} <MdVerified className='text-sm text-blue-400' />  </h1>
                                    <h1 className='text-lg tracking-[1px] text-yellow-400 font-bold ts_y'> {member.role} </h1>
                                    <p className='text-white text-sm'> {member.info} </p>
                                </div>
                            </div>
                        </AnimatedSlide>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Team;
