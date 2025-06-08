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

  console.log(projects);

  return (
    <motion.section
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      className='py-16 lg:py-24 bg-slate-900'
      id='projects'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={titleVariants}
          className='text-center mb-16 lg:mb-24'
        >
          <h2 className='text-3xl lg:text-5xl font-bold text-white mb-4'>
            <span className='text-teal-400 font-mono text-lg lg:text-xl block mb-2'>
              03.
            </span>
            Some Things I've Built
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full'
          />
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
