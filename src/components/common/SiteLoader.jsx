import { motion } from "framer-motion";

export default function SiteLoader() {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-dark-900">
      <div className="w-[88%] max-w-md text-center">
        <motion.p
          className="text-xs uppercase tracking-[0.32em] text-primary-yellow/90"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Nazzifoods
        </motion.p>

        <motion.h2
          className="mt-3 text-2xl font-semibold text-accent-white sm:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Preparing Fresh Experience
        </motion.h2>

        <div className="mt-7 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-primary-yellow"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
