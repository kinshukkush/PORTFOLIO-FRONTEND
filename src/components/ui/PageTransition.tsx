import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: '4%',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: '-4%',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const overlayVariants = {
  initial: { y: '100%' },
  animate: { y: '0%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  exit: { y: '-100%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/* Sweep overlay */}
      <motion.div
        className="fixed inset-0 z-40 pointer-events-none"
        style={{ background: 'rgba(0, 240, 255, 0.04)' }}
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />

      {/* Page content */}
      <motion.main
        className="min-h-screen w-full"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.main>
    </>
  );
};

export default PageTransition;