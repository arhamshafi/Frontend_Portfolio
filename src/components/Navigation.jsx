import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll with offset for fixed navbar
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navHeight = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-orange-500 shadow-lg'
        : 'bg-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${scrolled ? 'text-black' : 'text-orange-500'
              }`}
            whileHover={{ scale: 1.05 }}
          >
            Arham<span className={scrolled ? 'text-black' : 'text-orange-500'}>.</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors duration-300 font-medium text-sm lg:text-base ${scrolled
                  ? 'text-white hover:text-black'
                  : 'text-gray-600 hover:text-orange-500'
                  }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${scrolled
                ? 'bg-black text-white hover:bg-gray-900'
                : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden cursor-pointer text-xl transition-colors duration-300 focus:outline-none ${scrolled ? 'text-white hover:text-black' : 'text-gray-700 hover:text-orange-500'
              }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${scrolled ? 'bg-orange-500' : 'bg-white border-t border-gray-100'}`}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block transition-all duration-300 font-medium py-2.5 px-3 rounded-lg ${scrolled
                  ? 'text-white hover:text-black hover:bg-orange-400'
                  : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`block text-center px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${scrolled
                  ? 'bg-black text-white hover:bg-gray-900'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
              >
                Hire Me
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;