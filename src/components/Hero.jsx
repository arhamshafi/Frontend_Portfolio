import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-auto flex items-center justify-center relative overflow-hidden px-3 sm:px-6 md:px-16 lg:px-24 py-20 sm:py-30 xl:py-40 bg-gradient-to-br from-white via-orange-50/30 to-white">

      {/* Decorative elements - hidden on very small screens */}
      <div className="hidden sm:block absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
      <div className="hidden sm:block absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>

      <div className="z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-orange-600 text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase mb-3 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-7xl  xl:text-8xl font-bold mb-4 sm:mb-8 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Muhammad Arham{' '}
            <span className="text-orange-600 block sm:inline">Shafi</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-medium px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Building production-ready web applications with{' '}
            <span className="text-orange-600 font-bold">
              MERN Stack, Nest.js & Next.js
            </span>
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-500 mb-10 sm:mb-16 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            1 year of proven experience delivering business-focused solutions
          </motion.p>

          <motion.div
            className="flex gap-4 sm:gap-6 justify-center items-center px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="#projects"
              className="group w-full truncate sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-600/30 hover:shadow-xl hover:shadow-orange-600/40 text-sm sm:text-base md:text-lg text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-4 truncate sm:px-10 py-2 sm:py-4 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base md:text-lg text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - hidden on very small screens */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className=" scale-75 sm:scale-100 w-6 h-10 border-2 border-orange-600 rounded-full flex justify-center">
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