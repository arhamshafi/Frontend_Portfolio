import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const experiences = {
    professional: [
      {
        id: 1,
        period: "2025 - Feb 2026",
        title: "Full Stack Developer",
        company: "Creasoft (Dubai-Based Company)",
        location: "Gulberg, Lahore (On-site)",
        type: "On-site",
        description: "Worked as a Full Stack Developer for a Dubai-based company operating from Gulberg Lahore. Built production-level business web applications, integrated modern stacks, and worked closely with international clients.",
        achievements: [
          "1+ year experience building enterprise-level solutions",
          "Developed complete business web applications for International clients",
          "Worked on MERN, Next.js, and Nest.js based production projects",
          "Improved backend performance and API response time significantly",
          "Collaborated with international teams for requirement gathering",
        ],
        tech: ["React.js", "Next.js", "Nest.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
        icon: "💼",
      },
      {
        id: 2,
        period: "2024 - Present",
        title: "Freelance Full Stack Developer",
        company: "International Clients",
        location: "London, Gujranwala, Lahore, Islamabad",
        type: "Freelance",
        description: "Working with clients across Pakistan and the UK, delivering modern and scalable business-oriented web applications with clean UI/UX and optimized backends.",
        achievements: [
          "Delivered 15+ business applications",
          "Created ARHAFI Platform for Gujranwala",
          "Developed China Home e-commerce platform with Redux Toolkit",
          "Delivered multiple React/Next.js projects for UK clients",
          "Worked with MERN, Next.js, and Nest.js for advanced systems",
          "98% client satisfaction with 5-star ratings"
        ],
        tech: ["MERN Stack", "Next.js", "Nest.js", "MongoDB", "Express.js", "Framer Motion", "HTML", "CSS", "JavaScript"],
        icon: "🌍",
      },
      {
        id: 3,
        period: "2022 - Present",
        title: "CEO & Operations Manager",
        company: "Adam Palace Marriage Hall",
        location: "Gujranwala, Pakistan",
        type: "Management",
        description: "Managing complete business operations of Adam Palace since 2022 including administration, event planning, vendor coordination, and strategic decision making.",
        achievements: [
          "Handled 100+ successful events with excellent feedback",
          "Implemented digital booking & payment system",
          "Improved yearly revenue through optimization",
          "Managed team of 10+ staff across operations",
          "Built strong vendor network for catering services"
        ],
        tech: ["Business Management", "Administration", "Operations", "Client Relations", "Event Planning", "Team Leadership", "Marketing Strategy"],
        icon: "👑",
      },
    ],
  };

  const totalExperience = 2;
  const projectsCompleted = 8;
  const satisfiedClients = 11;

  // Truncate text function
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const truncateAchievement = (text, maxLength = 60) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="experience" className="py-6 sm:py-8 lg:py-16 px-3 sm:px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10 md:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-900">
            Work <span className="text-orange-600">Experience</span>
          </h2>
          <div className="w-10 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-orange-600 mx-auto mb-3 sm:mb-4 rounded-full" />
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
            2+ years of proven development & business leadership experience
          </p>
        </motion.div>

        {/* Stats - Responsive Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-10 md:mb-12"
        >
          <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center border border-gray-200 hover:border-orange-300 transition-all duration-300">
            <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">{totalExperience}+</div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 font-medium">Years Exp</div>
          </div>

          <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center border border-gray-200 hover:border-orange-300 transition-all duration-300">
            <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">{projectsCompleted}+</div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 font-medium">Projects</div>
          </div>

          <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center border border-gray-200 hover:border-orange-300 transition-all duration-300">
            <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600">{satisfiedClients}+</div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 font-medium">Happy Clients</div>
          </div>

          <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center border border-gray-200 hover:border-orange-300 transition-all duration-300">
            <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-orange-600">
              Pak & UK
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 font-medium">Coverage</div>
          </div>
        </motion.div>

        {/* Tab Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6 sm:mb-10 md:mb-12"
        >
          <button
            onClick={() => setActiveTab('professional')}
            className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 bg-orange-600 text-white shadow-lg shadow-orange-600/30"
          >
            💼 Professional Experience
          </button>
        </motion.div>

        {/* Experience Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            {experiences[activeTab].map((exp, index) => {
              const isExpanded = expandedCards[exp.id];
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                    {/* Card Header - Responsive */}
                    <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0">{exp.icon}</div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 truncate">
                          {exp.title}
                        </h3>

                        <p className="text-orange-600 font-medium text-xs sm:text-sm truncate">
                          {exp.company}
                        </p>

                        <div className="flex flex-wrap items-center gap-1 mt-1 text-[10px] sm:text-xs text-gray-500">
                          <span className="truncate">📍 {exp.location}</span>
                          <span className="text-gray-400 hidden sm:inline">•</span>
                          <span className="truncate">📅 {exp.period}</span>
                        </div>

                        <span className="inline-block mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] md:text-xs px-1.5 sm:px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description with truncation */}
                    <div className="mb-3 sm:mb-4 pl-0 sm:pl-10 md:pl-12">
                      <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed">
                        {isExpanded ? exp.description : truncateText(exp.description, 80)}
                      </p>
                    </div>

                    {/* Achievements with truncation */}
                    <div className="mb-3 sm:mb-4 pl-0 sm:pl-10 md:pl-12">
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Key Achievements:
                      </p>
                      <ul className="space-y-1">
                        {(isExpanded ? exp.achievements : exp.achievements.slice(0, 3)).map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="text-[10px] sm:text-xs text-gray-600 flex items-start"
                          >
                            <span className="text-orange-500 mr-1.5 sm:mr-2 flex-shrink-0">▸</span>
                            <span className="flex-1">
                              {isExpanded ? achievement : truncateAchievement(achievement, 50)}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      {/* See More/Less Button */}
                      {(exp.achievements.length > 3 || exp.description.length > 80) && (
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="text-orange-600 text-[9px] sm:text-[10px] md:text-xs font-medium mt-2 hover:text-orange-700 transition-colors"
                        >
                          {isExpanded ? 'See Less ↑' : `See More (+${exp.achievements.length - 3} more)`}
                        </button>
                      )}
                    </div>

                    {/* Tech Stack - Responsive */}
                    <div className="pl-0 sm:pl-10 md:pl-12">
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                        {(isExpanded ? exp.tech : exp.tech.slice(0, 4)).map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.03 }}
                            className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs px-1.5 sm:px-2 md:px-2.5 py-0.5 sm:py-1 bg-white border border-gray-200 rounded-md text-gray-600 hover:border-orange-300 hover:text-orange-600 transition-all whitespace-nowrap"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {!isExpanded && exp.tech.length > 4 && (
                          <span 
                            onClick={() => toggleExpand(exp.id)}
                            className="text-[8px] sm:text-[9px] md:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 bg-orange-50 border border-orange-200 rounded-md text-orange-600 cursor-pointer hover:bg-orange-100 transition-all"
                          >
                            +{exp.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-xs sm:text-sm md:text-base font-medium transition-all shadow-lg shadow-orange-600/30"
          >
            Let's Work Together
            <span className="text-sm sm:text-base md:text-lg">→</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;