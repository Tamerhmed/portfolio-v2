'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className='min-h-screen flex items-center justify-center px-6 lg:px-12'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className='space-y-6'
        >
          {/* Greeting */}
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className='text-teal-400 font-mono text-base lg:text-lg'
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className='text-4xl md:text-6xl lg:text-7xl font-bold text-slate-200 leading-tight'
          >
            Tamer Ahmed.
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className='text-3xl md:text-5xl lg:text-6xl font-bold text-slate-400 leading-tight'
          >
            I build things for the web.
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className='max-w-lg pt-4'
          >
            <p className='text-slate-400 text-base lg:text-lg leading-relaxed'>
              I'm a front-end developer specializing in building (and
              occasionally <span className='text-teal-400'>designing</span>)
              exceptional digital experiences. Currently, I'm focused on
              building accessible, human-centered products at{' '}
              <a
                href='#'
                className='text-teal-400 hover:underline transition-all duration-300'
              >
                AITSL
              </a>
              .
            </p>
          </motion.div>

          {/* CTA Button */}
          {/* <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className='pt-8'
          >
            <a
              href='#work'
              className='inline-block border border-teal-400 text-teal-400 px-6 py-3 font-mono text-sm hover:bg-teal-400/10 hover:-translate-y-1 transition-all duration-300'
            >
              Resume
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
