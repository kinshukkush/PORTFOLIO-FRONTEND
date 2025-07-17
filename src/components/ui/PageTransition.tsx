import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.3
      }}
      className="min-h-screen w-full"
    >
      {/* Loading Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500/50"
        initial={{ scaleX: 0, transformOrigin: "0%" }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0, transformOrigin: "100%" }}
        transition={{ duration: 0.5 }}
      />
      
      {children}
    </motion.main>
  );
};

export default PageTransition;