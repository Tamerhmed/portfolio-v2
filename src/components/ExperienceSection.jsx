'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'AITSL',
      role: 'Web Support Officer → Front-End Developer ',
      period: 'Jan 2022 - Present',
      responsibilities: [
        'Maintain and enhance web content across AITSL platforms, ensuring consistency, accessibility, and responsiveness across devices and browsers.',
        'Develop and update UI components using HTML, CSS, and JavaScript, adhering to best practices for performance, accessibility, and web standards.',
        'Collaborate with cross-functional teams including designers, backend developers, and content stakeholders to deliver seamless and user-friendly digital experiences.',
        'Troubleshoot and resolve website issues related to layout, performance, and usability in a timely and efficient manner.',
        'Manage CMS-driven content updates and structural improvements, supporting editorial workflows and content governance.',
        'Leverage Google Analytics to monitor key performance indicators, analyze user behavior, and generate actionable insights to guide optimizations.',
        'Ensure web content and structure align with SEO best practices and accessibility guidelines (WCAG), improving discoverability and user engagement.',
        'Support internal teams with technical guidance and contribute to the continuous improvement of front-end standards and documentation.',
      ],
    },
    {
      company: 'Holmesglen',
      role: 'TAFE Teacher – JavaScript & React.js',
      period: 'July 2024 – Present',
      responsibilities: [
        'Deliver high-quality education and training in JavaScript and React.js to Diploma-level IT students at Holmesglen TAFE.',
        'Design and implement structured lesson plans covering fundamental to advanced JavaScript concepts, including asynchronous programming and ES6+ features.',
        'Teach React.js fundamentals such as components, props, state management, hooks, and routing, with a focus on building real-world, interactive web applications.',
        'Create hands-on coding exercises and practical projects to reinforce theoretical knowledge through applied learning.',
        'Foster an inclusive and collaborative classroom environment that supports student growth in both technical and problem-solving skills.',
        'Continuously assess student progress, provide constructive feedback, and tailor instruction to meet diverse learning needs.',
        'Incorporate industry-relevant tools, workflows, and best practices to prepare students for entry into professional development roles.',
      ],
    },
    {
      company: 'MYER',
      role: 'Team Leader – Menswear',
      period: 'October 2019 – December 2021',
      responsibilities: [
        'Led a high-performing team in the Menswear department, overseeing daily operations, sales performance, and customer service standards.',
        'Provided hands-on coaching and support to team members to drive individual development and enhance overall team productivity.',
        'Collaborated with store and department managers to implement merchandising strategies, promotional campaigns, and stock management processes.',
        'Monitored KPIs and sales targets, taking proactive steps to meet or exceed departmental goals.',
        'Resolved customer inquiries and escalations professionally, ensuring a positive shopping experience and maintaining brand reputation.',
        'Managed rosters, delegated tasks, and ensured compliance with safety and operational procedures.',
        'Played a key role in onboarding new staff and fostering a collaborative, customer-focused team culture.',
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
      className='min-h-screen flex items-center px-6 lg:px-12 py-6'
      ref={ref}
    >
      <div className='max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto w-full'>
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

          {/* Experience Container */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col lg:flex-row gap-8'
          >
            {/* Tab Navigation - Vertical on desktop, Horizontal on mobile */}
            <div className='flex lg:flex-col overflow-x-auto lg:overflow-x-visible lg:min-w-0 lg:w-auto'>
              <div className='flex lg:flex-col min-w-max lg:min-w-0 border-b-1 lg:border-b-0 lg:border-l-1 border-slate-600'>
                {experiences.map((exp, index) => (
                  <motion.button
                    key={exp.company}
                    onClick={() => setActiveTab(index)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className={`px-6 py-3 text-sm font-mono text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 border-b-2 lg:border-b-0 lg:border-l-2 ${
                      activeTab === index
                        ? 'text-teal-400 border-teal-400 bg-teal-400/10'
                        : 'text-slate-400 border-transparent hover:text-teal-400 hover:bg-slate-800/50'
                    }`}
                  >
                    {exp.company}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className='flex-1 min-h-[400px]'>
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
                    {/* <span className='text-teal-400'>
                      @ {experiences[activeTab].company}
                    </span> */}
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
