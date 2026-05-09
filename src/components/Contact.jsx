import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl sm:text-2xl" />,
      label: "Email",
      value: "arhamshafi@example.com",
      link: "mailto:arhamshafi@example.com"
    },
    {
      icon: <FaGithub className="text-xl sm:text-2xl" />,
      label: "GitHub",
      value: "github.com/arhamshafi",
      link: "https://github.com/arhamshafi"
    },
    {
      icon: <FaLinkedin className="text-xl sm:text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/arhamshafi",
      link: "https://linkedin.com/in/arhamshafi"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl sm:text-2xl" />,
      label: "Location",
      value: "Islamabad, Pakistan",
      link: null
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-32 px-6 sm:px-10 lg:px-14 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-orange-600 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-orange-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Contact Me
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            Get In <span className="text-orange-600 relative inline-block">
              Touch
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1 bg-orange-600 mx-auto mb-4 sm:mb-6 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            Let's discuss your next project or opportunity
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-5 md:space-y-6">
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                I'm currently available for freelance work and full-time opportunities.
                If you have a project in mind or want to discuss potential collaboration,
                feel free to reach out.
              </p>
            </motion.div>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-100 group-hover:border-orange-300 transition-all duration-300 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm">{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-orange-600 transition-colors font-medium text-sm sm:text-base break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium text-sm sm:text-base">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - CTA Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              I specialize in building production-ready web applications with modern technologies.
              Whether you need a full-stack solution, frontend development, or technical consultation,
              I'm here to help.
            </p>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {[
                'Full Stack Development (MERN)',
                'Next.js Applications',
                'Redux State Management',
                'API Development & Integration',
                'UI/UX Implementation'
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <span className="text-orange-600 text-sm sm:text-base">✓</span>
                  <span className="text-gray-700 text-xs sm:text-sm">{service}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="mailto:arhamshafi@example.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full text-center px-4 sm:px-6 py-3 sm:py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all duration-300 text-sm sm:text-base"
            >
              Send Me an Email
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-16 text-center"
        >
          <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">Connect with me on social media</p>
          <div className="flex justify-center gap-3 sm:gap-4">
            {[
              { icon: <FaGithub />, link: 'https://github.com/arhamshafi' },
              { icon: <FaLinkedin />, link: 'https://linkedin.com/in/arhamshafi' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-center text-orange-600 hover:bg-orange-100 hover:border-orange-300 transition-all duration-300 text-base sm:text-lg md:text-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;