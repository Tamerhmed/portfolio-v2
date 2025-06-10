'use client';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ projects }) => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      className='py-16 lg:py-24 bg-slate-900'
      id='work'
    >
      <div className='max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={titleVariants}
          className='flex items-center space-x-4 mb-12'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap'>
            React & Frontend Showcase
          </h2>
          <div className='h-px bg-slate-600 flex-1 max-w-xs'></div>
        </motion.div>

        <div className='space-y-0'>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
