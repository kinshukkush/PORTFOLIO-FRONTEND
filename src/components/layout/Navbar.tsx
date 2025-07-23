import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Moon,
  Sun,
  Code,
  Home,
  User,
  FileText,
  Mail,
  ChevronRight,
  Sparkles,
  Github, // Make sure these are imported
  Linkedin, // Make sure these are imported
  Instagram
} from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Keep track of current location

  // Effect to handle scroll-based styling and active section (though active section logic isn't used in this snippet)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Your active section logic (if any) would go here
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to control body scroll when mobile menu is open/closed
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Effect to close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Resume', path: '/resume', icon: <FileText size={18} /> },
    { name: 'Contact', path: '/contact', icon: <Mail size={18} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-800/50'
            : 'bg-transparent'
        }`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group relative"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg opacity-20 blur-xl"
                />
                <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-lg shadow-lg">
                  <Code size={24} className="text-white" />
                </div>
              </motion.div>
              <div>
                <span className="text-xl font-heading font-bold text-gray-900 dark:text-white
                                  group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Kinshuk Saxena
                </span>
                <p className="text-xs text-gray-600 dark:text-gray-400">Full Stack Developer</p>
              </div>
              <motion.div
                className="absolute -right-8 top-0"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles size={16} className="text-yellow-500" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-300 group flex items-center gap-2 ${
                        location.pathname === link.path
                          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {link.icon}
                      </span>
                      <span className="font-medium">{link.name}</span>
                      {location.pathname === link.path && (
                        <motion.div
                          className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10"
                          layoutId="navBackground"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* REMOVED: CTA Button "Hire Me" from desktop view */}

              {/* Theme toggle */}
              <motion.button
                onClick={toggleTheme}
                className="relative p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200
                          hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.5 }}
                />
              </motion.button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 md:hidden">
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              {/* Mobile Menu Toggle Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)} // Directly toggle the state
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {/* Use a simple conditional render for the icon without AnimatePresence on the button itself */}
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-gray-900
                         shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b dark:border-gray-800">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Navigate through my portfolio</p>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="p-6">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.path}
                      custom={index}
                      initial="closed"
                      animate="open"
                      variants={navItemVariants}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-300 ${
                          location.pathname === link.path
                            ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <span className={location.pathname === link.path ? 'text-primary-500' : ''}>
                          {link.icon}
                        </span>
                        <span className="font-medium">{link.name}</span>
                        {location.pathname === link.path && (
                          <ChevronRight size={16} className="ml-auto" />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile CTA Button (retained as it's common for mobile menus) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 shadow-lg"
                  >
                    <span>Get In Touch</span>
                    <ChevronRight size={16} />
                  </Link>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-6 border-t dark:border-gray-800"
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Connect with me</p>
                  <div className="flex gap-3">
                  <a href="https://instagram.com/kinshuk._.saxena" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <Instagram size={20} />
                    </a>

                    <a href="https://github.com/kinshukkush" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <Github size={20} />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/kinshuk-saxena-/" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;