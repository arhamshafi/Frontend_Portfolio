import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 md:px-16 lg:px-24 border-t border-purple-900/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-3">
              Arham<span className="text-purple-500">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer specializing in MERN stack and Next.js. 
              Building production-ready applications with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:arhamshafi@example.com"
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                <FaEnvelope />
                arhamshafi@example.com
              </a>
              <p className="text-gray-400 text-sm">
                Islamabad, Pakistan
              </p>
              <div className="flex gap-3 pt-2">
                {[
                  { icon: <FaGithub />, link: 'https://github.com/arhamshafi' },
                  { icon: <FaLinkedin />, link: 'https://linkedin.com/in/arhamshafi' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-purple-900/30 border border-purple-800/30 rounded-lg flex items-center justify-center text-purple-400 hover:border-purple-600/50 hover:text-purple-300 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-purple-900/30 text-center"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            © {currentYear} Muhammad Arham Shafi. Built with 
            <FaHeart className="text-purple-500" /> 
            using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
