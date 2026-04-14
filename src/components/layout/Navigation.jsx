import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'Order', href: '#order' },
  { name: 'Videos', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (href, delay = 0) => {
    window.setTimeout(() => {
    const section = document.querySelector(href);
    if (!section) return;

    const navOffset = 88;
    const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', href);
    }, delay);
  };

  const handleSectionClick = (event, href, closeMenu = false) => {
    event.preventDefault();
    if (closeMenu) {
      setIsOpen(false);
      scrollToSection(href, 180);
      return;
    }
    scrollToSection(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-3xl font-display font-bold gradient-text hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              handleSectionClick(e, '#home');
              setIsOpen(false);
            }}
          >
            <span className="text-primary-yellow text-2xl md:text-3xl font-extrabold tracking-wide">
              Nazzifoods
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-accent-white hover:text-primary-yellow transition-colors font-medium relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  handleSectionClick(e, link.href);
                  setIsOpen(false);
                }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-yellow group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.button
              className="px-6 py-2 bg-gradient-yellow text-dark-900 font-bold rounded-full hover:scale-105 transition-transform glow-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                handleSectionClick(e, '#order');
                setIsOpen(false);
              }}
            >
              Order Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-yellow text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800/98 backdrop-blur-lg border-t border-primary-yellow/20"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-accent-white hover:text-primary-yellow transition-colors font-medium text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    handleSectionClick(e, link.href, true);
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                className="px-6 py-3 bg-gradient-yellow text-dark-900 font-bold rounded-full mt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={(e) => handleSectionClick(e, '#order', true)}
              >
                Order Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
