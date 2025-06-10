// components/AitslTechTag.js
import { motion } from 'framer-motion';

const AitslTechTag = ({ tech, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className='inline-block px-3 py-1 text-xs font-mono text-teal-300 bg-slate-800/60 rounded border border-slate-600/50 hover:border-teal-400/40 hover:bg-slate-700/60 transition-all duration-200'
    >
      {tech}
    </motion.span>
  );
};

export default AitslTechTag;
