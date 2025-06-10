// 'use client';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect } from 'react';

// export default function ProfileNav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const controlNavbar = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < lastScrollY || currentScrollY < 10) {
//         // Scrolling up or at the top
//         setIsVisible(true);
//       } else {
//         // Scrolling down
//         setIsVisible(false);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', controlNavbar);
//     return () => window.removeEventListener('scroll', controlNavbar);
//   }, [lastScrollY]);

//   const navItems = [
//     { number: '01.', label: 'About', href: '#about' },
//     { number: '02.', label: 'Experience', href: '#experience' },
//     { number: '03.', label: 'Work', href: '#work' },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100, opacity: 0 }}
//         animate={{
//           y: isVisible ? 0 : -100,
//           opacity: isVisible ? 1 : 0,
//         }}
//         transition={{ duration: 0.3, ease: 'easeInOut' }}
//         className='w-full fixed top-0 left-0 right-0 z-50 px-6 py-6 lg:px-6 bg-slate-900/80 backdrop-blur-md'
//       >
//         <nav className='flex items-center justify-between max-w-7xl mx-auto'>
//           {/* Logo */}
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className='w-12 h-12 border-2 border-teal-400 flex items-center justify-center'
//           >
//             <span className='text-teal-400 font-mono text-lg font-bold'>T</span>
//           </motion.div>

//           {/* Navigation - Hidden on mobile */}
//           <div className='hidden md:flex items-center space-x-8'>
//             {navItems.slice(0, 3).map((item, index) => (
//               <motion.a
//                 key={item.label}
//                 href={item.href}
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
//                 className='text-slate-300 hover:text-teal-400 transition-colors duration-300 text-sm font-mono'
//               >
//                 <span className='text-teal-400'>{item.number}</span>{' '}
//                 {item.label}
//               </motion.a>
//             ))}
//           </div>

//           {/* Resume Button - Hidden on mobile */}
//           <motion.a
//             href='/resume.pdf'
//             target='_blank'
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.7, duration: 0.5 }}
//             className='hidden md:block border border-teal-400 text-teal-400 px-4 py-2 text-sm font-mono hover:bg-teal-400/10 transition-colors duration-300'
//           >
//             Resume
//           </motion.a>

//           {/* Mobile Menu Button */}
//           <motion.button
//             onClick={toggleMenu}
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.7, duration: 0.5 }}
//             className='md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1'
//             aria-label='Toggle menu'
//           >
//             <motion.span
//               animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//               className='w-6 h-0.5 bg-teal-400 transition-all duration-300'
//             />
//             <motion.span
//               animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//               className='w-6 h-0.5 bg-teal-400 transition-all duration-300'
//             />
//             <motion.span
//               animate={
//                 isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
//               }
//               className='w-6 h-0.5 bg-teal-400 transition-all duration-300'
//             />
//           </motion.button>
//         </nav>
//       </motion.header>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className='fixed inset-0 z-50 md:hidden'
//           >
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className='absolute inset-0 bg-slate-900/95 backdrop-blur-sm'
//               onClick={closeMenu}
//             />

//             {/* Menu Content */}
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//               className='absolute right-0 top-0 h-full w-full bg-slate-900 px-6 py-6'
//             >
//               {/* Header with Logo and Close Button */}
//               <div className='flex items-center justify-between mb-16'>
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.5 }}
//                   className='w-12 h-12 border-2 border-teal-400 flex items-center justify-center'
//                 >
//                   <span className='text-teal-400 font-mono text-lg font-bold'>
//                     T
//                   </span>
//                 </motion.div>

//                 <motion.button
//                   onClick={closeMenu}
//                   initial={{ opacity: 0, rotate: -90 }}
//                   animate={{ opacity: 1, rotate: 0 }}
//                   transition={{ delay: 0.1 }}
//                   className='w-10 h-10 flex items-center justify-center text-teal-400 hover:text-teal-300 transition-colors'
//                   aria-label='Close menu'
//                 >
//                   <svg
//                     width='24'
//                     height='24'
//                     viewBox='0 0 24 24'
//                     fill='none'
//                     stroke='currentColor'
//                     strokeWidth='2'
//                   >
//                     <line x1='18' y1='6' x2='6' y2='18'></line>
//                     <line x1='6' y1='6' x2='18' y2='18'></line>
//                   </svg>
//                 </motion.button>
//               </div>

//               {/* Navigation Items */}
//               <div className='flex flex-col justify-center items-center h-screen'>
//                 <nav className='flex flex-col space-y-8'>
//                   {navItems.map((item, index) => (
//                     <motion.a
//                       key={item.label}
//                       href={item.href}
//                       onClick={closeMenu}
//                       initial={{ x: 50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
//                       className='text-slate-300 hover:text-teal-400 transition-colors duration-300 font-mono text-lg'
//                     >
//                       <span className='text-teal-400 text-sm'>
//                         {item.number}
//                       </span>
//                       <br />
//                       <span className='text-xl'>{item.label}</span>
//                     </motion.a>
//                   ))}
//                 </nav>

//                 {/* Resume Button */}
//                 <motion.div
//                   initial={{ y: 50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.6, duration: 0.5 }}
//                   className='mt-16'
//                 >
//                   <a
//                     href='/resume.pdf'
//                     target='_blank'
//                     onClick={closeMenu}
//                     className='inline-block border border-teal-400 text-teal-400 px-10 py-3 font-mono text-sm hover:bg-teal-400/10 transition-colors duration-300'
//                   >
//                     Resume
//                   </a>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    { number: '01.', label: 'About', href: '#about' },
    { number: '02.', label: 'Experience', href: '#experience' },
    { number: '03.', label: 'Work', href: '#work' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='w-full fixed top-0 left-0 right-0 z-50 px-6 py-6 lg:px-6 bg-slate-900/80 backdrop-blur-md'
      >
        <nav className='flex items-center justify-between max-w-7xl mx-auto'>
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='w-12 h-12 border-2 border-teal-400 flex items-center justify-center'
          >
            <span className='text-teal-400 font-mono text-lg font-bold'>T</span>
          </motion.div>

          {/* Navigation - Hidden on mobile */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.slice(0, 3).map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className='text-slate-300 hover:text-teal-400 transition-colors duration-300 text-sm font-mono'
              >
                <span className='text-teal-400'>{item.number}</span>{' '}
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Resume Button - Hidden on mobile */}
          <motion.a
            href='/assets/resume.pdf'
            target='_blank'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className='hidden md:block border border-teal-400 text-teal-400 px-4 py-2 text-sm font-mono hover:bg-teal-400/10 transition-colors duration-300'
          >
            Resume
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className='md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1'
            aria-label='Toggle menu'
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className='w-6 h-0.5 bg-teal-400 transition-all duration-300'
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className='w-6 h-0.5 bg-teal-400 transition-all duration-300'
            />
            <motion.span
              animate={
                isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className='w-6 h-0.5 bg-teal-400 transition-all duration-300'
            />
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-50 md:hidden'
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute inset-0 bg-slate-900/95 backdrop-blur-sm'
              onClick={closeMenu}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='absolute right-0 top-0 h-full w-full bg-slate-900 flex flex-col overflow-hidden'
            >
              {/* Header with Logo and Close Button */}
              <div className='flex items-center justify-between p-6'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className='w-12 h-12 border-2 border-teal-400 flex items-center justify-center'
                >
                  <span className='text-teal-400 font-mono text-lg font-bold'>
                    T
                  </span>
                </motion.div>

                <motion.button
                  onClick={closeMenu}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1 }}
                  className='w-10 h-10 flex items-center justify-center text-teal-400 hover:text-teal-300 transition-colors'
                  aria-label='Close menu'
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Items - Centered Content */}
              <div className='flex-1 flex flex-col justify-center items-center px-6'>
                <nav className='flex flex-col space-y-8 text-center'>
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className='text-slate-300 hover:text-teal-400 transition-colors duration-300 font-mono text-lg'
                    >
                      <span className='text-teal-400 text-sm'>
                        {item.number}
                      </span>
                      <br />
                      <span className='text-xl'>{item.label}</span>
                    </motion.a>
                  ))}
                </nav>

                {/* Resume Button */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className='mt-12'
                >
                  <a
                    href='/assets/resume.pdf'
                    target='_blank'
                    onClick={closeMenu}
                    className='inline-block border border-teal-400 text-teal-400 px-10 py-3 font-mono text-sm hover:bg-teal-400/10 transition-colors duration-300'
                  >
                    Resume
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
