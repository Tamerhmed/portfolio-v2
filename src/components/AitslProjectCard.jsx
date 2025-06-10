// components/AitslProjectCard.js
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import AitslTechTag from './AitslTechTag';

const AitslProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      whileHover='hover'
      className='group relative h-full'
    >
      <motion.div
        variants={hoverVariants}
        className='relative h-full p-6 bg-slate-800/40 border border-slate-700/60 rounded-lg hover:border-teal-400/30 hover:bg-slate-800/60 transition-all duration-300'
      >
        {/* Header with folder icon and external link */}
        <div className='flex items-start justify-between mb-4'>
          <motion.div
            whileHover={{ rotate: 12 }}
            transition={{ duration: 0.2 }}
            className='flex-shrink-0'
          >
            <Folder className='w-10 h-10 text-teal-400 stroke-1' />
          </motion.div>

          <div className='flex items-center space-x-2'>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`View ${project.title} live site`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className='text-slate-400 hover:text-teal-400 transition-colors duration-200'
              >
                <ExternalLink className='w-5 h-5' />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project title */}
        <h3 className='text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors duration-200 leading-tight'>
          {project.title}
        </h3>

        {/* Project description */}
        <p className='text-slate-300 text-sm leading-relaxed mb-6 line-clamp-4'>
          {project.description}
        </p>

        {/* Technologies */}
        <div className='flex flex-wrap gap-2 mt-auto'>
          {project.technologies.map((tech, techIndex) => (
            <AitslTechTag key={tech} tech={tech} index={techIndex} />
          ))}
        </div>
      </motion.div>
    </motion.article>
  );
};

export default AitslProjectCard;
