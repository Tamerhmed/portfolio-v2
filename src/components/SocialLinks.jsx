'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Tamerhmed', label: 'GitHub' },
    { icon: Mail, href: 'tamer30230@gmail.com', label: 'Gmail' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/tamer-ahmed-405a1924b/',
      label: 'LinkedIn',
    },
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className='fixed left-0 bottom-0 z-40 hidden md:block'
    >
      <div className='flex flex-col items-center space-y-6 px-6 pb-6'>
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              className='text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-all duration-300'
              aria-label={social.label}
            >
              <Icon size={20} />
            </motion.a>
          );
        })}

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
