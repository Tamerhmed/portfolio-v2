// 'use client';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import AitslProjectCard from './AitslProjectCard';
// import { aitslProjectsData } from '../data/aitslProjectsData';

// const AitslProjectsGrid = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [visibleCount] = useState(6);

//   const projectsToShow = showAll
//     ? aitslProjectsData
//     : aitslProjectsData.slice(0, visibleCount);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const handleToggleProjects = () => {
//     setShowAll(!showAll);
//   };

//   return (
//     <section className='py-20 bg-slate-900' id='other-noteworthy-projects'>
//       <div className='max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className='text-center mb-12'
//         >
//           <h2 className='text-2xl md:text-3xl  font-bold text-white mb-4'>
//             <span className='text-teal-400 font-mono text-lg md:text-xl font-normal'>
//               03.
//             </span>{' '}
//             Some Things I've Built
//           </h2>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial='hidden'
//           animate='visible'
//           className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'
//         >
//           <AnimatePresence mode='wait'>
//             {projectsToShow.map((project, index) => (
//               <AitslProjectCard
//                 key={project.id}
//                 project={project}
//                 index={index}
//               />
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {aitslProjectsData.length > visibleCount && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.8 }}
//             className='text-center'
//           >
//             <motion.button
//               onClick={handleToggleProjects}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className='px-8 py-3 text-teal-400 border border-teal-400/30 rounded bg-transparent hover:bg-teal-400/10 hover:border-teal-400/60 transition-all duration-300 font-medium'
//             >
//               {showAll ? 'Show Less' : 'Show More'}
//             </motion.button>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AitslProjectsGrid;

// 'use client';
// import { useState, useRef } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';
// import AitslProjectCard from './AitslProjectCard';
// import { aitslProjectsData } from '../data/aitslProjectsData';

// const AitslProjectsGrid = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.3 });
//   const [showAll, setShowAll] = useState(false);
//   const [visibleCount] = useState(6);

//   const projectsToShow = showAll
//     ? aitslProjectsData
//     : aitslProjectsData.slice(0, visibleCount);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     },
//   };

//   const handleToggleProjects = () => {
//     setShowAll(!showAll);
//   };

//   return (
//     <section
//       className='py-20 bg-slate-900'
//       id='other-noteworthy-projects'
//       ref={ref}
//     >
//       <div className='max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <motion.div
//           variants={containerVariants}
//           initial='hidden'
//           animate={isInView ? 'visible' : 'hidden'}
//         >
//           {/* Section Title - Matching Experience Section Style */}
//           <motion.div
//             variants={itemVariants}
//             className='flex items-center justify-center space-x-4 mb-12'
//           >
//             <div className='h-px bg-slate-600 flex-1 max-w-xs'></div>
//             <h2 className='text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap'>
//               <span className='text-teal-400 font-mono text-lg md:text-xl font-normal'>
//                 03.
//               </span>{' '}
//               Some Things I've Built
//             </h2>
//             <div className='h-px bg-slate-600 flex-1 max-w-xs'></div>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial='hidden'
//             animate={isInView ? 'visible' : 'hidden'}
//             className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'
//           >
//             <AnimatePresence mode='wait'>
//               {projectsToShow.map((project, index) => (
//                 <AitslProjectCard
//                   key={project.id}
//                   project={project}
//                   index={index}
//                 />
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {aitslProjectsData.length > visibleCount && (
//             <motion.div variants={itemVariants} className='text-center'>
//               <motion.button
//                 onClick={handleToggleProjects}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className='px-8 py-3 text-teal-400 border border-teal-400/30 rounded bg-transparent hover:bg-teal-400/10 hover:border-teal-400/60 transition-all duration-300 font-medium'
//               >
//                 {showAll ? 'Show Less' : 'Show More'}
//               </motion.button>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AitslProjectsGrid;

// 'use client';
// import { useState, useRef } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';
// import AitslProjectCard from './AitslProjectCard';
// import { aitslProjectsData } from '../data/aitslProjectsData';

// const AitslProjectsGrid = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.3 });
//   const [showAll, setShowAll] = useState(false);
//   const [visibleCount] = useState(6);

//   const projectsToShow = showAll
//     ? aitslProjectsData
//     : aitslProjectsData.slice(0, visibleCount);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     },
//   };

//   const handleToggleProjects = () => {
//     setShowAll(!showAll);
//   };

//   return (
//     <section
//       className='py-20 bg-slate-900'
//       id='other-noteworthy-projects'
//       ref={ref}
//     >
//       <div className='max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <motion.div
//           variants={containerVariants}
//           initial='hidden'
//           animate={isInView ? 'visible' : 'hidden'}
//         >
//           {/* Section Title - Left Aligned */}
//           <motion.div
//             variants={itemVariants}
//             className='flex items-center space-x-4 mb-12'
//           >
//             <h2 className='text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap'>
//               <span className='text-teal-400 font-mono text-lg md:text-xl font-normal'>
//                 03.
//               </span>{' '}
//               Some Things I've Built
//             </h2>
//             <div className='h-px bg-slate-600 flex-1 max-w-xs'></div>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial='hidden'
//             animate={isInView ? 'visible' : 'hidden'}
//             className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'
//           >
//             <AnimatePresence mode='wait'>
//               {projectsToShow.map((project, index) => (
//                 <AitslProjectCard
//                   key={project.id}
//                   project={project}
//                   index={index}
//                 />
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {aitslProjectsData.length > visibleCount && (
//             <motion.div variants={itemVariants} className='text-center'>
//               <motion.button
//                 onClick={handleToggleProjects}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className='px-8 py-3 text-teal-400 border border-teal-400/30 rounded bg-transparent hover:bg-teal-400/10 hover:border-teal-400/60 transition-all duration-300 font-medium'
//               >
//                 {showAll ? 'Show Less' : 'Show More'}
//               </motion.button>
//             </motion.div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AitslProjectsGrid;

'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import AitslProjectCard from './AitslProjectCard';
import { aitslProjectsData } from '../data/aitslProjectsData';

const AitslProjectsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [showAll, setShowAll] = useState(false);
  const [visibleCount] = useState(6);

  const projectsToShow = showAll
    ? aitslProjectsData
    : aitslProjectsData.slice(0, visibleCount);

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

  const handleToggleProjects = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      className='py-20 bg-slate-900'
      id='other-noteworthy-projects'
      ref={ref}
    >
      <div className='max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title - Left Aligned */}
          <motion.div
            variants={itemVariants}
            className='flex items-center space-x-4 mb-12'
          >
            <h2 className='text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap'>
              <span className='text-teal-400 font-mono text-lg md:text-xl font-normal'>
                03.
              </span>{' '}
              Some Things I've Built
            </h2>
            <div className='h-px bg-slate-600 flex-1 max-w-xs'></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'
          >
            <AnimatePresence>
              {projectsToShow.map((project, index) => (
                <AitslProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {aitslProjectsData.length > visibleCount && (
            <motion.div variants={itemVariants} className='text-center'>
              <motion.button
                onClick={handleToggleProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-3 text-teal-400 border border-teal-400/30 rounded bg-transparent hover:bg-teal-400/10 hover:border-teal-400/60 transition-all duration-300 font-medium'
              >
                {showAll ? 'Show Less' : 'Show More'}
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AitslProjectsGrid;
