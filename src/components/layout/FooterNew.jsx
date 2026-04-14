import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import footerOne from "../../assets/NazziFoods/nazzi-6.png";
import footerTwo from "../../assets/NazziFoods/nazzi-7.png";
import footerThree from "../../assets/NazziFoods/nazzi-8.png";

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
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Order", href: "#order" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#", rotation: -4 },
    { label: "Facebook", href: "#", rotation: 3 },
    { label: "YouTube", href: "#", rotation: -3 },
  ];

  return (
    <footer className="relative bg-dark-900 text-accent-white overflow-hidden">
      
      {/* ================= TOP SECTION WITH LET'S TALK (reduced padding) ================= */}
      <div className=" max-w-6xl relative bg-primary-yellow pt-4 pb-4 md:pt-8 md:pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-20">
          
          {/* Top footer brand label */}
          <div className="flex justify-start items-start mb-1">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-[110px] font-serif font-bold leading-none text-dark-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Nazzifoods
            </motion.h1>
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
              Ready-made mix packages crafted for flavor consistency, fast cooking, and reliable distribution.
            </p>
            <a
              href="mailto:hello@nazzifoods.com"
              className="text-base md:text-lg font-medium text-white hover:text-primary-yellow transition-colors underline"
            >
              Drop us a line at hello@nazzifoods.com
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
              Taste you can trust.
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-md leading-relaxed">
              From sourcing to sealed packaging, we help homes and businesses serve authentic food faster with Nazzifoods mixes.
            </p>
          </motion.div>

          <div className="mb-12 grid grid-cols-3 gap-3 md:hidden">
            <div className="overflow-hidden rounded-xl border border-white/10">
              <img src={footerOne} alt="Nazzifoods product" className="h-28 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <img src={footerTwo} alt="Nazzifoods product" className="h-28 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <img src={footerThree} alt="Nazzifoods product" className="h-28 w-full object-cover" />
            </div>
          </div>

          {/* Navigation and Social Links Grid */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-6">
            
            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium uppercase tracking-wider hover:text-primary-yellow transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
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
            className="absolute top-8 left-6 md:left-12 w-32 md:w-40 z-0 pointer-events-none hidden md:block"
            style={{ rotate: -8 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -6 }}
          >
            <div className="bg-dark-800 p-1 shadow-lg">
              <img
                src={footerOne}
                alt="Nazzifoods product"
                className="w-full h-32 md:h-40 object-cover rounded-xl"
              />
            </div>
          </motion.div>
          <motion.div
            className="absolute top-14 right-8 md:right-20 w-36 md:w-52 z-0 pointer-events-none hidden md:block"
            style={{ rotate: 6 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 8 }}
          >
            <div className="bg-dark-800 p-1 shadow-lg">
              <img
                src={footerTwo}
                alt="Nazzifoods product"
                className="w-full h-44 md:h-64 object-cover rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-28 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-36 md:w-48 z-0 pointer-events-none hidden md:block"
            style={{ rotate: -5 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -3 }}
          >
            <div className="bg-dark-800 p-1 shadow-lg">
              <img
                src={footerThree}
                alt="Nazzifoods product"
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
            <p>Nazzifoods delivers dependable ready-mix products</p>
            <p>Copyright © {currentYear} Nazzifoods. All rights reserved.</p>
            <p>For wholesale, dealership, and support enquiries, contact hello@nazzifoods.com.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}