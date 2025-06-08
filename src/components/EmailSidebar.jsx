'use client';
import { motion } from 'framer-motion';

export default function EmailSidebar() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className='fixed right-0 bottom-0 z-40 hidden md:block'
    >
      <div className='flex flex-col items-center px-6 pb-6'>
        <motion.a
          href='mailto:brittany@example.com'
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className='text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-all duration-300 font-mono text-sm mb-6 writing-mode-vertical'
          style={{ writingMode: 'vertical-rl' }}
        >
          tamer30230@gmail.com
        </motion.a>

        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className='w-px h-24 bg-slate-400 origin-bottom'
        />
      </div>
    </motion.div>
  );
}
