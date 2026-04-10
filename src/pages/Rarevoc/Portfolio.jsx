import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Tech Startup Branding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    description: 'Complete brand identity for innovative AI startup',
    tags: ['Logo Design', 'Brand Guidelines', 'Marketing']
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
    description: 'Full-stack e-commerce solution with AI recommendations',
    tags: ['React', 'Node.js', 'AI Integration']
  },
  {
    id: 3,
    title: 'Fashion Brand Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    description: 'Multi-channel marketing campaign driving 300% ROI',
    tags: ['Social Media', 'Content', 'Analytics']
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
    description: 'Award-winning UX/UI design for fintech application',
    tags: ['UI/UX', 'Mobile', 'Fintech']
  },
  {
    id: 5,
    title: 'Corporate Video Production',
    category: 'Media',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    description: 'Cinematic brand story for Fortune 500 company',
    tags: ['Video', 'Animation', 'Storytelling']
  },
  {
    id: 6,
    title: 'Restaurant Chain Rebranding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: 'Complete visual identity refresh for 50+ locations',
    tags: ['Rebranding', 'Print', 'Packaging']
  }
];

const categories = ['All', 'Branding', 'Development', 'Marketing', 'Design', 'Media'];

export default function Portfolio() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 bg-dark-800 overflow-hidden">
      {/* Background Pattern */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,0,0.03),transparent_70%)]"></div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-6 py-2 bg-primary-yellow/10 border border-primary-yellow/30 rounded-full text-primary-yellow font-semibold mb-6"
          >
            Our Work
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6">
            <span className="text-accent-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-xl text-accent-gray max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have transformed businesses and delighted users
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-gradient-yellow text-dark-900 glow-effect'
                  : 'bg-dark-700 text-accent-white border border-primary-yellow/30 hover:border-primary-yellow/60'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-dark-900 rounded-2xl overflow-hidden border border-primary-yellow/20 hover:border-primary-yellow/50 transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary-yellow/10 border border-primary-yellow/30 rounded-full text-primary-yellow text-sm font-semibold mb-3">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-accent-white mb-2 group-hover:text-primary-yellow transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-accent-gray mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-dark-700 text-accent-white text-xs rounded-full border border-primary-yellow/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-yellow/0 to-primary-yellow/0 group-hover:from-primary-yellow/10 group-hover:to-primary-yellow/10 transition-all pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-transparent border-2 border-primary-yellow text-primary-yellow font-bold text-lg rounded-full hover:bg-primary-yellow/10 transition-all"
          >
            View All Projects →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
