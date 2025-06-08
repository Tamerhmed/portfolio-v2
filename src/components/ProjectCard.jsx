'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ project, index, isReversed = false }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2 + 0.2,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: isReversed ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24 ${
        isReversed ? 'lg:grid-flow-col-dense' : ''
      }`}
    >
      {/* Project Image */}
      <motion.div
        variants={imageVariants}
        whileHover='hover'
        className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}
      >
        <div className='relative overflow-hidden rounded-lg shadow-2xl'>
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            quality={75}
            width={500}
            height={600}
            className='w-full h-auto object-cover'
            priority={index === 0}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300' />
        </div>
      </motion.div>

      {/* Project Details */}
      <motion.div
        variants={textVariants}
        className={`space-y-4 ${isReversed ? 'lg:col-start-1' : ''}`}
      >
        <div className='space-y-2'>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.4 }}
            className='text-teal-400 font-mono text-sm uppercase tracking-wider'
          >
            {project.category}
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
            className='text-2xl lg:text-3xl font-bold text-white'
          >
            {project.title}
          </motion.h3>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.6 }}
          className='text-gray-300 leading-relaxed text-base lg:text-lg'
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.7 }}
          className='flex flex-wrap gap-2 pt-2'
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + 0.8 + techIndex * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className='px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm font-mono border border-teal-500/30'
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.9 }}
          className='flex gap-4 pt-4'
        >
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors duration-200'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                  clipRule='evenodd'
                />
              </svg>
              GitHub
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors duration-200'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
              Live Demo
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
