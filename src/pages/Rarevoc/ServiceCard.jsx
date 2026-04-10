import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheckCircle } from 'react-icons/hi';
import { FaPalette, FaPhotoVideo, FaLaptopCode, FaBullhorn, FaRobot, FaRocket, FaStar } from 'react-icons/fa';

export default function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const isEven = index % 2 === 0;

  // Map service id to a real icon (replaces emojis)
  const iconMap = {
    1: FaPalette,
    2: FaPhotoVideo,
    3: FaLaptopCode,
    4: FaBullhorn,
    5: FaRobot,
    6: FaRocket,
  };
  const IconComp = iconMap[service.id] || FaRocket;

  return (
    <motion.div
      ref={ref}
      style={{ y: isEven ? y : -y }}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="mb-32"
    >
      <div
        ref={cardRef}
        className={`grid md:grid-cols-2 gap-12 items-center ${
          isEven ? '' : 'md:flex-row-reverse'
        }`}
      >
        {/* Content Side */}
        <motion.div
          className={`${isEven ? 'md:order-1' : 'md:order-2'} space-y-6`}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Icon */}
          <motion.div
            className="text-7xl mb-4 text-primary-yellow"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <IconComp />
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-display font-bold text-accent-white mb-4">
            {service.title}
          </h2>

          {/* Tagline */}
          <p className="text-xl gradient-text font-semibold">
            {service.tagline}
          </p>

          {/* Services List */}
          <div className="space-y-6 mt-8">
            {service.services.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="group"
              >
                <h3 className="text-lg font-bold text-primary-yellow mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-yellow rounded-full group-hover:scale-150 transition-transform"></span>
                  {category.category}
                </h3>
                <ul className="space-y-2 ml-4">
                  {category.items.map((item, itemIdx) => (
                    <motion.li
                      key={itemIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + idx * 0.1 + itemIdx * 0.05 }}
                      className="flex items-start gap-3 text-accent-gray hover:text-accent-white transition-colors group/item"
                    >
                      <HiCheckCircle className="text-primary-yellow mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm md:text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919645588095"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block px-8 py-4 bg-gradient-yellow text-dark-900 font-bold rounded-full hover:shadow-xl transition-all glow-effect inline-flex items-center gap-2"
          >
            Learn More
            <span>→</span>
          </motion.a>
        </motion.div>

        {/* Visual Side */}
        <motion.div
          className={`${isEven ? 'md:order-2' : 'md:order-1'} relative`}
          style={{ scale, rotate }}
        >
          <div className={`relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br ${service.gradient} p-1`}>
            <div className="absolute inset-0 bg-dark-800/90 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,0,0.3),transparent_50%)]"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,0,0.1)_49%,rgba(255,255,0,0.1)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
              </div>

              {/* Animated Number */}
              <motion.div
                className="text-[15rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-primary-yellow/30 to-primary-yellow/30"
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 1, delay: 0.5, type: 'spring' }}
              >
                {service.id}
              </motion.div>

              {/* Floating Orbs */}
              <motion.div
                className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary-yellow/20 blur-2xl"
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary-yellow/20 blur-3xl"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            className="absolute -top-6 -right-6 bg-gradient-yellow text-dark-900 font-bold px-6 py-3 rounded-full shadow-xl inline-flex items-center gap-2"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <FaStar className="text-dark-900" />
            <span>Featured</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
