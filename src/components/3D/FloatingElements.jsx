import { motion } from 'framer-motion';

// Enhanced CSS-based 3D effect replacement for Three.js components
export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Floating Spheres with CSS 3D transforms */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 blur-2xl"
        style={{
          top: '20%',
          left: '10%',
          transform: 'translateZ(0)',
          filter: 'blur(20px) brightness(1.2)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary-yellow/25 to-primary-yellow/8 blur-xl"
        style={{
          top: '60%',
          right: '15%',
          transform: 'translateZ(0)',
          filter: 'blur(15px) brightness(1.1)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
          rotateX: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />

      <motion.div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary-yellow/30 to-primary-yellow/10 blur-lg"
        style={{
          top: '40%',
          left: '70%',
          transform: 'translateZ(0)',
          filter: 'blur(12px) brightness(1.3)',
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
          scale: [1, 1.4, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />

      {/* Enhanced Geometric Shapes */}
      <motion.div
        className="absolute w-16 h-16 border-2 border-primary-yellow/20 rotate-45"
        style={{
          top: '25%',
          right: '25%',
          transform: 'translateZ(0) perspective(1000px)',
        }}
        animate={{
          rotateZ: [0, 360],
          rotateY: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <motion.div
        className="absolute w-12 h-12 bg-gradient-to-r from-primary-yellow/15 to-transparent rounded-full"
        style={{
          top: '70%',
          left: '60%',
          transform: 'translateZ(0)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-primary-yellow/40 rounded-full"
          style={{
            top: `${20 + (i * 8)}%`,
            left: `${10 + (i * 10)}%`,
            transform: 'translateZ(0)',
          }}
          animate={{
            y: [0, -100, -200, -100, 0],
            opacity: [0, 1, 0.8, 1, 0],
            scale: [0.5, 1, 0.8, 1, 0.5],
          }}
          transition={{
            duration: 8 + (i * 0.5),
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}