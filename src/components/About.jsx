import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Years Exp", value: 1, icon: "💼", suffix: "+" },
    { label: "Projects", value: 8, icon: "🚀", suffix: "+" },
    { label: "Tech Stack", value: 12, icon: "⚡", suffix: "+" },
    { label: "Clients", value: 11, icon: "😊", suffix: "+" }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const newCounters = [...counters];

      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 30);
        let currentValue = 0;

        const timer = setInterval(() => {
          currentValue += increment;

          if (currentValue >= end) {
            setCounters(prev => {
              const updated = [...prev];
              updated[index] = end;
              return updated;
            });
            clearInterval(timer);
          } else {
            setCounters(prev => {
              const updated = [...prev];
              updated[index] = Math.ceil(currentValue);
              return updated;
            });
          }
        }, 30);
      });
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-8 md:py-10 lg:py-14 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-orange-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block"
          >
            <span className="text-orange-600 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-orange-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Who I Am
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4 text-gray-900">
            About <span className="text-orange-600 relative inline-block">
              Me
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "60px" } : { width: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="h-1 bg-orange-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid xl:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Text Content */}
          <div className="space-y-4 md:space-y-6">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl txtCntrAt500 md:text-4xl font-bold text-gray-900 leading-tight">
                Building Digital Solutions
                <span className="text-orange-600 xl:block mt-2"> That Drive Real Impact</span>
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3 txtCntrAt500 md:space-y-4">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                I’m a <span className="font-semibold text-gray-900">Full Stack Developer (MERN + Next.js + Express + NestJS)</span> with hands-on experience building modern web applications.
                Recently relocated from Lahore to Islamabad, I’m actively working on independent projects to strengthen both my frontend and backend development skills with production-level practices.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                I build <span className="font-semibold text-gray-900">e-commerce platforms, dashboards, admin panels, and scalable backend systems</span>.
                I use Express for flexible APIs and NestJS for structured, scalable backend architecture — focusing on clean code, performance, and real-world usability.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                From responsive UI with React and Next.js to backend systems using Node.js, Express, and NestJS with MongoDB, I handle the complete development process.
                Currently, I’m focused on building independent projects, improving system design, and growing into a professional developer who delivers reliable and scalable solutions.
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap itmcnteAt500 gap-2 sm:gap-3 pt-2 sm:pt-4"
            >
              {['MERN Stack', 'Next.js + NestJS', 'Independent Projects'].map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.7, delay: 0.9 + (index * 0.15) }}
                  whileHover={{ scale: 1.05, backgroundColor: "#f97316", color: "#ffffff" }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <span className="text-xl sm:text-2xl md:text-3xl mb-1.5 sm:mb-2 inline-block">{stat.icon}</span>
                  <motion.h4
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 mb-0.5 sm:mb-1"
                  >
                    {counters[index]}{stat.suffix}
                  </motion.h4>
                  <p className="text-gray-600 text-xs font-medium uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;