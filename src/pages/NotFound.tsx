import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 flex items-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary-500 dark:text-primary-400">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            
            <Link to="/" className="btn-primary inline-flex">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;