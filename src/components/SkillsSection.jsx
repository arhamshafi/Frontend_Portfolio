import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../Data';

const SkillsSection = () => {
  const skillCategories = [
    { title: 'Frontend', skills: skillsData.frontend, color: 'from-orange-500 to-red-500' },
    { title: 'Backend', skills: skillsData.backend, color: 'from-green-500 to-emerald-500' },
    { title: 'State Management', skills: skillsData.stateManagement, color: 'from-blue-500 to-cyan-500' },
    { title: 'Tools', skills: skillsData.tools, color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Technical <span className="text-orange-600">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Modern technologies and tools I use to build production-ready applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 flex items-center">
                <span className={`w-2 h-8 bg-gradient-to-b ${category.color} rounded-full mr-3`}></span>
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 font-semibold flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-orange-600 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tech stack showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6 font-medium">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Framer Motion', 'Three.js', 'Tailwind CSS', 'Vite', 'Postman', 'JWT', 'Mongoose'].map((tech, i) => (
              <span 
                key={i}
                className="px-5 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-gray-700 text-sm font-medium hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
