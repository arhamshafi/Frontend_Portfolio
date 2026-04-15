import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../Data';

const SkillsSection = () => {
  const skillCategories = [
    { title: 'Frontend', skills: skillsData.frontend, color: 'from-orange-500 to-red-500', icon: '🎨' },
    { title: 'Backend', skills: skillsData.backend, color: 'from-green-500 to-emerald-500', icon: '⚙️' },
    { title: 'Tools', skills: skillsData.tools, color: 'from-purple-500 to-pink-500', icon: '🛠️' }
  ];

  return (
    <section id="skills" className="py-8 sm:py-10 lg:py-20 px-4 sm:px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">
            Technical <span className="text-orange-600">Skills</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-orange-600 mx-auto mb-4 sm:mb-5 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Modern technologies I use to build production-ready applications
          </p>
        </motion.div>

        {/* Skills Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 rounded-xl p-4 sm:p-5 md:p-6 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6 pb-2 sm:pb-3 border-b border-gray-200">
                <span className="text-xl sm:text-2xl">{category.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4 sm:space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-sm sm:text-base">{skill.icon}</span>
                        <span className="text-gray-700 font-medium text-xs sm:text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-orange-600 font-semibold text-xs sm:text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 sm:mt-12 md:mt-14 pt-4 sm:pt-6 text-center"
        >
          <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-2.5 px-1">
            {['Framer Motion', 'Redux ToolKit', 'Tailwind CSS', 'Vite', 'Vercel', 'Context API', 'JWT', 'MVC Architecture', 'Netlify'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 text-[11px] sm:text-xs font-medium hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 transition-all cursor-default whitespace-nowrap"
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