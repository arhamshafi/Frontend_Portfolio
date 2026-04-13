import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../Data';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 relative bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            What I <span className="text-orange-600">Offer</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive development services for modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                    <span className="text-gray-500 text-xs font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
