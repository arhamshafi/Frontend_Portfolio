import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants matching Contact component
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <footer className="py-12 md:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Arham<span className="text-orange-600">.</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Full Stack Developer specializing in MERN stack and Next.js.
              Building production-ready applications with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-600 hover:text-orange-600 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:arhamshafib@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors text-sm group"
              >
                <div className="w-8 h-8 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-100 group-hover:border-orange-300 transition-all duration-300">
                  <FaEnvelope className="text-sm" />
                </div>
                <span>arhamshafib@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <div className="w-8 h-8 bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-center text-orange-600">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <span>Gujranwala, Pakistan</span>
              </div>
              <div className="flex gap-3 pt-4">
                {[
                  { icon: <FaGithub />, link: 'https://github.com/arhamshafi', label: 'GitHub' },
                  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/arham-butt-7723stack/', label: 'LinkedIn' },
                  { icon: <FaWhatsapp />, link: 'https://whatsapp.com/channel/0029VbCiLWSJP21Ay9qj1w0i',label: 'WhatsApp' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-9 h-9 bg-orange-50 border border-orange-200 rounded-md flex items-center justify-center text-orange-600 hover:bg-orange-100 hover:border-orange-300 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 md:pt-10 border-t border-gray-200 text-center"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Muhammad Arham Shafi. Built with
            <FaHeart className="text-orange-600" />
            using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;