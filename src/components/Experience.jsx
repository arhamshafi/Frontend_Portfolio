import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      period: "2024 - Present",
      title: "Full Stack Developer",
      company: "Freelance & Projects",
      location: "Islamabad, Pakistan",
      description: "Building production-ready web applications using MERN stack and Next.js. Focus on business-oriented platforms with real-world impact.",
      achievements: [
        "Developed ARHAFI Platform - comprehensive business platform for sellers and students",
        "Built China Home e-commerce platform with Redux Toolkit state management",
        "Created multiple React-based applications with API integrations",
        "Implemented 3D model integration in creative UI projects"
      ],
      tech: ["React.js", "Next.js", "Node.js", "MongoDB", "Redux Toolkit", "Express.js"]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 relative bg-gradient-to-b from-black via-purple-950/5 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Work <span className="text-purple-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            1 year of proven development experience on real-world projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-900/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12 md:mb-16"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-black transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/30 rounded-2xl p-8 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500"
                  >
                    <span className="inline-block px-4 py-1 bg-purple-600/20 border border-purple-600/50 rounded-full text-purple-400 text-sm font-medium mb-3">
                      {exp.period}
                    </span>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start md:justify-end text-left md:text-right">
                          <span className="text-purple-500 mr-2 md:order-2 md:ml-2">✓</span>
                          <span className="text-gray-400 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {exp.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1 bg-black border border-purple-800/30 rounded-md text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: '🎯', title: 'Business Focused', desc: 'Building solutions that drive real value' },
            { icon: '⚡', title: 'Production Ready', desc: 'Code that works in real-world scenarios' },
            { icon: '🚀', title: 'Modern Stack', desc: 'Using latest technologies and best practices' }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-purple-900/10 to-black border border-purple-800/30 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
