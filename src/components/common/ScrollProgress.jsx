import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-yellow origin-left z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 left-8 w-14 h-14 bg-gradient-yellow text-dark-900 rounded-full shadow-lg hover:shadow-2xl z-50 flex items-center justify-center font-bold text-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: scrollYProgress.get() > 0.2 ? 1 : 0,
          scale: scrollYProgress.get() > 0.2 ? 1 : 0,
        }}
        whileHover={{ scale: 1.1, rotate: -90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </motion.button>

      {/* Circular Progress Indicator */}
      <motion.div
        className="fixed bottom-24 left-8 w-12 h-12 z-50 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{
          opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
        }}
      >
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="rgba(255,255,0,0.2)"
            strokeWidth="3"
            fill="none"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="20"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
            strokeDasharray="0 1"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFF00" />
              <stop offset="100%" stopColor="#FFFF00" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-primary-yellow text-xs font-bold">
          {Math.round(scrollYProgress.get() * 100)}%
        </div>
      </motion.div>
    </>
  );
}
