'use client';
import { motion } from 'framer-motion';

export default function Header() {
  const navItems = [
    { number: '01.', label: 'About', href: '#about' },
    { number: '02.', label: 'Experience', href: '#experience' },
    { number: '03.', label: 'Work', href: '#work' },
    { number: '04.', label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='w-full  top-0 left-0 right-0 z-50 px-6 py-6 lg:px-6'
    >
      <nav className='flex items-center justify-between max-w-7xl mx-auto'>
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='w-12 h-12 border-2 border-teal-400 flex items-center justify-center'
        >
          <span className='text-teal-400 font-mono text-lg font-bold'>T</span>
        </motion.div>

        {/* Navigation - Hidden on mobile */}
        <div className='hidden md:flex items-center space-x-8'>
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className='text-slate-300 hover:text-teal-400 transition-colors duration-300 text-sm font-mono'
            >
              <span className='text-teal-400'>{item.number}</span> {item.label}
            </motion.a>
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          href='/resume.pdf'
          target='_blank'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className='border border-teal-400 text-teal-400 px-4 py-2 text-sm font-mono hover:bg-teal-400/10 transition-colors duration-300'
        >
          Resume
        </motion.a>

        {/* Mobile Menu Button - Hidden for now, can be expanded */}
        <div className='md:hidden'>
          {/* Add hamburger menu here if needed */}
        </div>
      </nav>
    </motion.header>
  );
}
