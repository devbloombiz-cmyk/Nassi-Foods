import { motion } from 'framer-motion';
import { BsChat } from 'react-icons/bs';

export default function StickyCallAction() {
  const phoneNumber = '9645588095';

  return (
    <motion.a
      href={`https://wa.me/91${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, ease: 'easeOut' }}
      whileTap={{ scale: 0.96 }}
    >
      <div
        className="
          flex items-center gap-2
          px-3 py-2
          rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20
          shadow-md shadow-black/30
          hover:bg-white/15
          transition-all duration-300
        "
      >
        <BsChat className="text-white text-sm" />
        <span className="text-white text-xs font-medium tracking-wide">
          Order on WhatsApp
        </span>
      </div>
    </motion.a>
  );
}
