import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "arhamshafi@example.com",
      link: "mailto:arhamshafi@example.com"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "github.com/arhamshafi",
      link: "https://github.com/arhamshafi"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/arhamshafi",
      link: "https://linkedin.com/in/arhamshafi"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Islamabad, Pakistan",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Work Together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm currently available for freelance work and full-time opportunities. 
                If you have a project in mind or want to discuss potential collaboration, 
                feel free to reach out.
              </p>
            </div>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-900/30 to-black border border-purple-800/30 rounded-xl flex items-center justify-center text-purple-400 group-hover:border-purple-600/50 transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                  {item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-800/30 rounded-2xl p-10 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I specialize in building production-ready web applications with modern technologies. 
              Whether you need a full-stack solution, frontend development, or technical consultation, 
              I'm here to help.
            </p>

            <div className="space-y-4 mb-6">
              {[
                'Full Stack Development (MERN)',
                'Next.js Applications',
                'Redux State Management',
                'API Development & Integration',
                'UI/UX Implementation'
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-purple-500">✓</span>
                  <span className="text-gray-300">{service}</span>
                </div>
              ))}
            </div>

            <a 
              href="mailto:arhamshafi@example.com"
              className="block w-full text-center px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300"
            >
              Send Me an Email
            </a>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: <FaGithub />, link: 'https://github.com/arhamshafi' },
              { icon: <FaLinkedin />, link: 'https://linkedin.com/in/arhamshafi' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 bg-gradient-to-br from-purple-900/30 to-black border border-purple-800/30 rounded-lg flex items-center justify-center text-purple-400 hover:border-purple-600/50 hover:text-purple-300 transition-all text-xl"
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
