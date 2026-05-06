import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../Data";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-8 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Featured <span className="text-orange-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto my-4 rounded-full" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Production-grade applications built with modern full-stack technologies
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm
              ${filter === category
                  ? "bg-orange-600 text-white shadow-orange-300"
                  : "bg-white text-gray-500 border hover:border-orange-400 hover:text-orange-600"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`text-[11px] px-3 py-1 rounded-full font-medium backdrop-blur-md
                    ${project.status === "Completed"
                        ? "bg-green-500/90 text-white"
                        : "bg-yellow-500/90 text-white"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition">
                    {project.title}
                  </h3>

                  <span className="text-[11px] px-3 py-1 bg-orange-50 text-orange-600 rounded-full border border-orange-100">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-3 py-1 bg-gray-100 rounded-full text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-orange-600 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-orange-700 transition shadow-md"
                  >
                    View Project
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-medium hover:border-orange-500 hover:text-orange-600 transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-5 border-b flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-red-500 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">

                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-orange-500">▸</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-gray-100 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;