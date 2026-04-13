import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-16 lg:px-24 pt-20 bg-gradient-to-br from-white via-orange-50/30 to-white">
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-orange-600 text-sm md:text-base font-semibold tracking-wider uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Muhammad Arham{' '}
            <span className="text-orange-600">Shafi</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building production-ready web applications with{' '}
            <span className="text-orange-600 font-bold">MERN Stack</span> &{' '}
            <span className="text-orange-600 font-bold">Next.js</span>
          </motion.p>

          <motion.p 
            className="text-base md:text-lg text-gray-500 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            1 year of proven experience delivering business-focused solutions
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a 
              href="#projects"
              className="group relative px-10 py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-600/30 hover:shadow-xl hover:shadow-orange-600/40 text-lg"
            >
              View Projects
            </a>
            
            <a 
              href="#contact"
              className="px-10 py-5 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 rounded-xl font-semibold transition-all duration-300 text-lg"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
