import { motion } from 'framer-motion';

const TeamCTA = () => {
  return (
    <section 
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/startbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-900/60" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl px-6 md:px-12"
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-accent-white">Start Your</span>{' '}
          <span className="text-primary-yellow"> Project</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-accent-gray mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Transform your vision into reality with our expert team. Let's collaborate 
          to create something extraordinary that sets you apart.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-yellow text-dark-900 font-bold text-lg rounded-full glow-effect hover:shadow-2xl transition-all duration-300"
          >
            Get Started
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border-2 border-primary-yellow text-primary-yellow font-bold text-lg rounded-full hover:bg-primary-yellow hover:text-dark-900 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeamCTA;