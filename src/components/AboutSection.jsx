'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Eleventy',
    'Node.js',
    'WordPress',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id='about'
      ref={ref}
      className='min-h-screen flex items-center px-6 lg:px-12 py-20'
    >
      <div className='max-w-6xl mx-auto w-full'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start'
        >
          {/* Left Column - Content */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Section Title */}
            <motion.div
              variants={itemVariants}
              className='flex items-center space-x-4 mb-8'
            >
              <h2 className='text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap'>
                <span className='text-teal-400 font-mono text-lg md:text-xl font-normal'>
                  01.
                </span>{' '}
                About Me
              </h2>
              <div className='h-px bg-slate-600 flex-1 max-w-xs'></div>
            </motion.div>

            {/* Biography */}
            <motion.div
              variants={itemVariants}
              className='space-y-4 text-slate-400 text-base leading-relaxed'
            >
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML &amp; CSS!
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working at{' '}
                <a
                  href='#'
                  className='text-teal-400 hover:underline transition-colors duration-300'
                >
                  an advertising agency
                </a>
                ,{' '}
                <a
                  href='#'
                  className='text-teal-400 hover:underline transition-colors duration-300'
                >
                  a start-up
                </a>
                ,{' '}
                <a
                  href='#'
                  className='text-teal-400 hover:underline transition-colors duration-300'
                >
                  a huge corporation
                </a>
                , and{' '}
                <a
                  href='#'
                  className='text-teal-400 hover:underline transition-colors duration-300'
                >
                  a student-led design studio
                </a>
                . My main focus these days is building accessible, inclusive
                products and digital experiences at{' '}
                <a
                  href='#'
                  className='text-teal-400 hover:underline transition-colors duration-300'
                >
                  Upstatement
                </a>{' '}
                for a variety of clients.
              </p>

              <p>
                I also recently{' '}
                <a
                  href='#'
                  className='text-teal-400 hover:underline transition-colors duration-300'
                >
                  launched a course
                </a>{' '}
                that covers everything you need to build a web app with the
                Spotify API using Node &amp; React.
              </p>

              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </motion.div>

            {/* Technologies Grid */}
            <motion.div
              variants={itemVariants}
              className='grid grid-cols-2 gap-2 max-w-md'
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{
                    delay: 0.8 + index * 0.1,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  className='flex items-center space-x-2 text-slate-400 text-sm font-mono'
                >
                  <span className='text-teal-400 text-xs'>▹</span>
                  <span>{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div variants={itemVariants} className='relative group'>
            <div className='relative'>
              {/* Image Container */}
              <motion.div
                className='relative z-10 max-w-xs mx-auto lg:mx-0'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Overlay */}
                <div className='absolute inset-0 bg-teal-400 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10 rounded'></div>

                {/* Image */}
                <div className='relative overflow-hidden rounded bg-teal-400/20'>
                  <img
                    src='/api/placeholder/300/400'
                    alt='Brittany Chiang'
                    className='w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300'
                  />
                </div>
              </motion.div>

              {/* Border Effect */}
              <div className='absolute top-4 left-4 w-full h-full border-2 border-teal-400 rounded -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300'></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
