import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-dark-900 flex flex-col items-center justify-center"
        >
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="mb-12"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-display font-black gradient-text"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,0,0.5)',
                  '0 0 40px rgba(255,255,0,0.8)',
                  '0 0 20px rgba(255,255,0,0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              RAREVOC
            </motion.h1>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-dark-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-yellow"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Percentage */}
          <motion.div
            className="mt-4 text-2xl font-bold text-primary-yellow"
            key={progress}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {progress}%
          </motion.div>

          {/* Loading Text */}
          <motion.p
            className="mt-6 text-accent-gray"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            Crafting Digital Magic...
          </motion.p>

          {/* Orbiting Dots */}
          <div className="absolute">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-primary-yellow rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((i * Math.PI) / 4) * 100,
                  y: Math.sin((i * Math.PI) / 4) * 100,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
