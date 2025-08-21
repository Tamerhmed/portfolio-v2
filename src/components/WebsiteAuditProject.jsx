'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WebsiteAuditProject = () => {
  const project = {
    id: 7,
    category: 'Featured Project',
    title: 'Website Audit & Optimization Dashboard',
    subtitle: 'Taking Shape Interview Project',
    description:
      'Built a comprehensive website audit and optimization dashboard as part of a technical interview assessment for Taking Shape. Developed a desktop-focused interface featuring a navigation system and multiple dashboard components for analyzing website performance metrics. Implemented testing frameworks to evaluate site functionality, performance bottlenecks, and optimization opportunities. The project demonstrated proficiency in creating analytical tools and conducting systematic website evaluations, with emphasis on data presentation and user interface design for internal testing purposes.',
    technologies: [
      'Next.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Dashboard Development',
      'Website Analysis',
      'Performance Testing',
      'Framer Motion',
    ],
    liveUrl: 'https://website-audit-and-optimization.vercel.app/',
    image: '/assets/audit-dashboard.png',
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  // Tech Stack Component to avoid duplication
  const TechStack = ({ className = '' }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className={`space-y-4 ${className}`}
    >
      <div className='flex items-center gap-3'>
        <h4 className='text-white font-semibold text-lg'>Tech Stack</h4>
        <div className='h-px bg-slate-600 flex-1'></div>
      </div>

      <motion.div
        variants={techStackVariants}
        initial='hidden'
        whileInView='visible'
        className='flex flex-wrap gap-3'
      >
        {project.technologies.map((tech, techIndex) => (
          <motion.span
            key={tech}
            variants={techItemVariants}
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: '0 10px 25px -5px rgba(20, 184, 166, 0.25)',
            }}
            className='px-4 py-2.5 bg-gradient-to-r from-slate-800/80 to-slate-800/80 text-teal-300 rounded-xl text-sm font-mono border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 backdrop-blur-sm cursor-default'
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <motion.section
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      className='relative py-20 lg:py-32 bg-slate-900 overflow-hidden'
      id='audit-project'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-20 -left-20 w-60 h-60 bg-teal-600/5 rounded-full blur-3xl'></div>
        <div className='absolute top-1/3 left-1/4 w-2 h-2 bg-teal-400/30 rounded-full animate-pulse'></div>
        <div className='absolute top-2/3 right-1/3 w-1 h-1 bg-teal-300/40 rounded-full animate-pulse delay-1000'></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          variants={titleVariants}
          className='flex items-center space-x-4 mb-12'
        >
          <h2 className='text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap'>
            Testing & Analysis Project
          </h2>
          <div className='h-px bg-slate-600 flex-1 max-w-xs'></div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start'
        >
          {/* Left Column - Image and Tech Stack (on large screens) */}
          <div className='lg:col-span-7 space-y-8'>
            {/* Project Image */}
            <motion.div
              variants={imageVariants}
              whileHover='hover'
              className='relative group'
            >
              <div className='relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm'>
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    quality={90}
                    width={800}
                    height={600}
                    className='w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.02]'
                    priority={true}
                  />
                </div>
              </div>
            </motion.div>

            {/* Tech Stack - Hidden on mobile, visible on large screens */}
            <TechStack className='hidden lg:block' />
          </div>

          {/* Right Column - Project Details */}
          <motion.div
            variants={textVariants}
            className='lg:col-span-5 space-y-8'
          >
            {/* Project Title & Category */}
            <div className='space-y-4'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className='space-y-2'
              >
                <h3 className='text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight'>
                  {project.title}
                </h3>
                <p className='text-lg text-teal-300 font-medium'>
                  {project.subtitle}
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='relative'
            >
              <p className='text-gray-300 leading-relaxed text-base lg:text-lg'>
                {project.description}
              </p>
            </motion.div>

            {/* Tech Stack - Visible on mobile, hidden on large screens */}
            <TechStack className='lg:hidden' />

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className='pt-4'
            >
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 20px 40px -10px rgba(20, 184, 166, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className='inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-teal-600 via-teal-600 to-teal-700 hover:from-teal-500 hover:via-teal-500 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700'></div>
                  <span className='relative'>View Live Demo</span>
                  <motion.svg
                    className='w-5 h-5 relative'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </motion.svg>
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebsiteAuditProject;
