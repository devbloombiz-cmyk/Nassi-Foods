import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';

const testimonials = [
  {
    id: 1,
    name: "Hidayath",
    role: "CEO",
    company: "Eduwice",
    image: '/user.jpg',
    content: "Rarevoc transformed our educational platform with exceptional design and development. Their innovative approach helped us reach students across Kerala effectively.",
    rating: 5
  },
  {
    id: 2,
    name: "Fawas",
    role: "Director, Lykin UAE",
    company: "Lykin",
    image: '/user.jpg',
    content: "Working with Rarevoc for our technology solutions was a game-changer. They delivered reliable, cutting-edge digital transformation for our Dubai operations.",
    rating: 5
  },
  {
    id: 3,
    name: "Ajsal",
    role: "Director",
    company: "Bizowice",
    image: '/user.jpg',
    content: "Rarevoc's business automation solutions revolutionized our operations and made our processes incredibly efficient.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-12 md:py-20 bg-dark-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,0,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 bg-primary-yellow/10 border border-primary-yellow/30 rounded-full text-primary-yellow font-semibold mb-6"
          >
            Client Stories
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6">
            <span className="text-accent-white">What Our </span>
            <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -90 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative"
            >
              {/* Testimonial Card */}
              <div className="bg-dark-900/80 backdrop-blur-lg border-2 border-primary-yellow/30 rounded-3xl p-8 md:p-16">
                {/* Quote Icon */}
                <div className="text-8xl text-primary-yellow/20 font-serif leading-none mb-6">"</div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-accent-white mb-8 leading-relaxed italic">
                  {testimonials[currentIndex].content}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <HiStar className="text-primary-yellow text-2xl" />
                    </motion.div>
                  ))}
                </div>

                {/* Author: show name, role and company as requested */}
                <div className="flex items-center gap-6 mt-6">

                  <div>
                    <div className="text-xl font-bold text-accent-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-accent-gray">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-primary-yellow font-semibold">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-4 bg-dark-900 border-2 border-primary-yellow/30 rounded-full hover:border-primary-yellow hover:bg-primary-yellow/10 transition-all"
            >
              <HiChevronLeft className="text-2xl text-primary-yellow" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-yellow w-12'
                      : 'bg-primary-yellow/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-4 bg-dark-900 border-2 border-primary-yellow/30 rounded-full hover:border-primary-yellow hover:bg-primary-yellow/10 transition-all"
            >
              <HiChevronRight className="text-2xl text-primary-yellow" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
