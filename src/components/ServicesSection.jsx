import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../Data';

const ServicesSection = () => {
  // Animation variants for better control
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-12 md:py-20 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-orange-600 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-orange-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              My Services
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-900">
            What I <span className="text-orange-600 relative inline-block">
              Offer
            </span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1 bg-orange-600 mx-auto mb-4 sm:mb-6 rounded-full"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            Comprehensive development services for modern web applications
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon with Background */}
                <div className="inline-block mb-4 sm:mb-5 md:mb-6">
                  <div className="text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                    {service.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 sm:space-y-2">
                  {service.highlights.map((highlight, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-2 sm:gap-2.5"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-600 rounded-full group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-gray-500 text-[11px] sm:text-xs font-medium leading-tight group-hover:text-gray-700 transition-colors duration-300">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-4 sm:mt-5 md:mt-6 pt-2 border-t border-gray-100"
                >
                  <span className="text-orange-600 text-xs sm:text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300 cursor-pointer">
                    Learn More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;