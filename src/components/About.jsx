import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Year Experience", value: "1+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Happy Clients", value: "5+" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-gray-900">
            About <span className="text-orange-600">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto mb-16 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Full Stack Developer with Real-World Impact
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              I'm a Full Stack Developer specializing in the MERN stack and Next.js, with 1 year of proven experience building production-level applications. Recently relocated from Lahore to Islamabad, I focus on creating business-oriented platforms that solve real problems.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              My approach combines technical expertise with business thinking. I don't just write code—I build solutions that drive value, whether it's an e-commerce platform, a business management system, or a creative web application.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              From frontend architecture with React and Next.js to backend systems with Node.js and MongoDB, I handle the full development lifecycle with clean code, scalable architecture, and user-focused design.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              {['Problem Solver', 'Business Focused', 'Production Ready'].map((tag, index) => (
                <span 
                  key={index}
                  className="px-5 py-2.5 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 rounded-2xl p-8 text-center border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">{stat.value}</h4>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
