import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../Data';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'E-Commerce', 'Web Application', 'Creative UI'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 relative bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Featured <span className="text-orange-600">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-oran-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Production-level applications built with modern technologies
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-900/20 text-gray-400 hover:bg-purple-900/40 border border-purple-800/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-purple-900/10 to-black border border-purple-800/30 rounded-2xl overflow-hidden hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500"
            >
              {/* Project image placeholder */}
              <div className="h-64 bg-gradient-to-br from-purple-900/30 to-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  {project.category === 'Full Stack' && '🚀'}
                  {project.category === 'E-Commerce' && '🛒'}
                  {project.category === 'Web Application' && '💻'}
                  {project.category === 'Creative UI' && '🎨'}
                </div>
                {project.status === 'In Development' && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-400 text-xs font-medium">
                    In Development
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-purple-900/30 border border-purple-700/50 rounded-full text-purple-300">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 bg-black border border-purple-800/30 rounded-md text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-300 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-start">
                        <span className="text-purple-500 mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-purple-900/30">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border border-purple-600 text-purple-400 hover:bg-purple-600/10 rounded-lg text-sm font-medium transition-all"
                    >
                      GitHub
                    </a>
                  )}
                  {!project.liveLink && !project.githubLink && (
                    <div className="flex-1 text-center px-4 py-2 bg-purple-900/20 text-gray-500 rounded-lg text-sm">
                      Private Project
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
