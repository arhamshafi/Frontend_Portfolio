import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../Data';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);
  return (
    <section id="projects" className="py-8 sm:py-10 lg:py-20 px-4 sm:px-6 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">
            Featured <span className="text-orange-600">Projects</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-orange-600 mx-auto mb-4 sm:mb-5 rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Production-level applications built with modern technologies
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 md:mb-16 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 cursor-pointer sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${filter === category
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-orange-50 to-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {project.status === 'In Development' && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-yellow-500/90 backdrop-blur-sm border border-yellow-400 rounded-full text-yellow-100 text-[10px] sm:text-xs font-medium z-10">
                      🚧 In Development
                    </div>
                  )}
                  {project.status === 'Completed' && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-green-500/90 backdrop-blur-sm border border-green-400 rounded-full text-white text-[10px] sm:text-xs font-medium z-10">
                      ✅ Completed
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-orange-50 border border-orange-200 rounded-full text-orange-600 w-fit">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 border border-gray-200 rounded-md text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Key Features:
                    </p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-[11px] sm:text-xs text-gray-500 flex items-start">
                          <span className="text-orange-500 mr-1.5 sm:mr-2">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-all"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 cursor-pointer text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-all"
                      >
                        View Details
                      </button>
                    )}
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 sm:px-4 py-1.5 sm:py-2 border border-orange-600 text-orange-600 hover:bg-orange-50 rounded-lg text-xs sm:text-sm font-medium transition-all"
                      >
                        GitHub
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 text-center cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-gray-600 hover:border-orange-600 hover:text-orange-600 rounded-lg text-xs sm:text-sm font-medium transition-all"
                      >
                        Details
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-sm">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex justify-between items-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 cursor-pointer hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Full Description</h4>
                <p className="text-gray-600 text-sm">{selectedProject.fullDescription}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-lg text-xs text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">All Features</h4>
                <ul className="space-y-1">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="text-orange-500 mr-2">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-500">
                  Status: <span className={`font-semibold ${selectedProject.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {selectedProject.status}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;