// components/ExperienceSectionMobile.jsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ExperienceSections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Upstatement',
      role: 'Lead Engineer',
      period: 'May 2018 — Present',
      responsibilities: [
        'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
        'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
        'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
        'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship',
      ],
    },
    {
      company: 'Apple',
      role: 'UI Engineer Co-op',
      period: 'July 2017 — December 2017',
      responsibilities: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps',
      ],
    },
    {
      company: 'Scout Studio',
      role: 'Developer',
      period: 'January 2017 — June 2017',
      responsibilities: [
        "Worked with a team of three designers to help create a new brand and design system for Scout's inaugural diaper line",
        "Built and delivered technical solutions according to creative director's vision",
        'Developed and maintained code standards and practices for the engineering team',
        'Collaborated with cross-functional teams to deliver projects on time and within budget',
      ],
    },
    {
      company: 'Starry',
      role: 'Software Engineer Co-op',
      period: 'June 2016 — December 2016',
      responsibilities: [
        "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
        'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with remote security devices',
        'Collaborated with designers and product managers to translate mockups into pixel-perfect front-end code',
        'Wrote modern, performant, maintainable code for a diverse array of internal and external-facing projects',
      ],
    },
    {
      company: 'MullenLowe',
      role: 'Creative Technologist Co-op',
      period: 'July 2015 — December 2015',
      responsibilities: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more',
        'Collaborated with designers, project managers, and other developers to create engaging digital experiences',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id='experience'
      ref={ref}
      className='min-h-screen flex items-center px-6 lg:px-12 py-20'
    >
      <div className='max-w-4xl mx-auto w-full'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className='flex items-center space-x-4 mb-12'
          >
            <h2 className='text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap'>
              <span className='text-teal-400 font-mono text-lg md:text-xl font-normal'>
                02.
              </span>{' '}
              Where I've Worked
            </h2>
            <div className='h-px bg-slate-600 flex-1 max-w-xs'></div>
          </motion.div>

          {/* Tab Navigation - Always Horizontal with Scroll */}
          <motion.div variants={itemVariants} className='mb-8'>
            <div className='flex overflow-x-auto border-b-2 border-slate-600'>
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
                  }
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className={`px-6 py-3 text-sm font-mono whitespace-nowrap transition-all duration-300 border-b-2 ${
                    activeTab === index
                      ? 'text-teal-400 border-teal-400'
                      : 'text-slate-400 border-transparent hover:text-teal-400'
                  }`}
                >
                  {exp.company}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div variants={itemVariants} className='min-h-[400px]'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className='space-y-6'
            >
              {/* Job Title and Period */}
              <div>
                <h3 className='text-xl md:text-2xl font-semibold text-slate-200'>
                  {experiences[activeTab].role}{' '}
                  <span className='text-teal-400'>
                    @ {experiences[activeTab].company}
                  </span>
                </h3>
                <p className='text-slate-400 font-mono text-sm mt-1'>
                  {experiences[activeTab].period}
                </p>
              </div>

              {/* Responsibilities */}
              <div className='space-y-4'>
                {experiences[activeTab].responsibilities.map(
                  (responsibility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className='flex items-start space-x-3'
                    >
                      <span className='text-teal-400 text-sm mt-1 flex-shrink-0'>
                        ▹
                      </span>
                      <p className='text-slate-400 text-sm md:text-base leading-relaxed'>
                        {responsibility}
                      </p>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
