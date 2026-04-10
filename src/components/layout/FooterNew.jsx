import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Small social card used in footer (tilted white label cards)
function SocialCard({ label, href, rotation = 0 }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-3 py-2 bg-dark-800 text-primary-yellow font-semibold text-xs uppercase tracking-wider rounded-sm shadow-sm hover:shadow-md transition-all"
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = ["WORK", "ABOUT", "SERVICES", "INSIGHT"];

  const socialLinks = [
    { label: "Instagram", href: "#instagram", rotation: -4 },
    { label: "Facebook", href: "#facebook", rotation: 3 },
    { label: "Dribbble", href: "#dribbble", rotation: -3 },
  ];

  return (
    <footer className="relative bg-dark-900 text-accent-white overflow-hidden">
      
      {/* ================= TOP SECTION WITH LET'S TALK (reduced padding) ================= */}
      <div className=" max-w-6xl relative bg-primary-yellow pt-4 pb-4 md:pt-8 md:pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-20">
          
          {/* Let's Talk Heading with Contact Link (reduced spacing) */}
          <div className="flex justify-between items-start mb-1">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[120px] font-serif font-bold leading-none text-dark-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Let's Talk
            </motion.h1>
            
            <motion.a
              href="#contact"
              className="flex items-center gap-2 text-sm md:text-base font-medium text-primary-yellow hover:text-accent-white transition-colors group mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
            >
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              Contact
            </motion.a>
          </div>

        </div>
      </div>

      {/* ================= MAIN DARK SECTION (reduced padding/margins) ================= */}
      <div className="relative bg-dark-900 text-accent-white pt-12 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          
          {/* Statement and Email */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
              I keep things simple, creative and nonsense-free.
            </p>
            <a
              href="mailto:rarevoc.work@gmail.com"
              className="text-base md:text-lg font-medium text-white hover:text-primary-yellow transition-colors underline"
            >
              Drop us a line at rarevoc.work@gmail.com
            </a>
          </motion.div>

          {/* Brand Name and Description */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-6">
              Rarevoc.
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed">
              From bases in London and Melbourne I work remotely with start-ups and famous names from all over the world.
            </p>
          </motion.div>

          {/* Navigation and Social Links Grid */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-6">
            
            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-gray-500 mb-4 tracking-wider">[ THIS SITE ]</p>
              <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
                {navLinks.map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-medium uppercase tracking-wider hover:text-primary-yellow transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((s) => (
                <SocialCard key={s.label} {...s} />
              ))}
            </motion.div>
          </div>

          {/* Floating Polaroid Images */}
          <motion.div
            className="absolute top-8 left-6 md:left-12 w-32 md:w-40 z-0 pointer-events-none"
            style={{ rotate: -8 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -6 }}
          >
            <div className="bg-dark-800 p-1 shadow-lg">
              <img
                src="/F3.jpg"
                alt="Project"
                className="w-full h-32 md:h-40 object-cover rounded-xl"
              />
            </div>
          </motion.div>
          <motion.div
            className="absolute top-14 right-8 md:right-20 w-36 md:w-52 z-0 pointer-events-none"
            style={{ rotate: 6 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 8 }}
          >
            <div className="bg-dark-800 p-1 shadow-lg">
              <img
                src="/F2.jpg"
                alt="Project"
                className="w-full h-44 md:h-64 object-cover rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-36 md:w-48 z-0 pointer-events-none"
            style={{ rotate: -5 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -3 }}
          >
            <div className="bg-dark-800 p-1 shadow-lg">
              <img
                src="/F1.jpg"
                alt="Project"
                className="w-full h-40 md:h-56 object-cover rounded-xl"
              />
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-16 right-6 md:right-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label="Scroll to top"
            >
              <FiArrowRight className="rotate-[-90deg]" />
            </button>
          </motion.div>
          {/* Bottom Credits */}
          <div className="mt-16 pt-6 border-t border-white/6 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
            <p>Site designed and built by Helo Clips</p>
            <p>Copyright © {currentYear} Helo Clips Ltd. All rights reserved.</p>
            <p>Powered by Webflow</p>
          </div>

        </div>
      </div>
    </footer>
  );
}