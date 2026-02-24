import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);



  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-3 bg-white/70 dark:bg-[#050810]/70 backdrop-blur-xl border-b border-gray-200 dark:border-[#1a2238] shadow-lg'
          : 'py-6 bg-transparent border-b border-transparent'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="relative group flex items-center gap-2" data-hover>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00f0ff] to-[#7c3aed] p-[1px] group-hover:rotate-12 transition-transform duration-300">
                <div className="w-full h-full rounded-[10px] bg-white dark:bg-[#050810] flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00f0ff] to-[#7c3aed] font-black text-xl leading-none">
                    K
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight dark:text-[#f0f4ff]">Kinshuk</span>
                <span className="text-[10px] uppercase tracking-widest text-[#00f0ff] font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Portfolio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-gray-100/50 dark:bg-[#0d1224]/50 border border-gray-200 dark:border-[#1a2238] backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    data-hover
                    className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                      ? 'text-white'
                      : 'text-gray-500 dark:text-[#8892a4] hover:text-[#00f0ff]'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-bg"
                        className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] rounded-full shadow-md"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-[#0d1224] border border-gray-200 dark:border-[#1a2238] text-[#00f0ff] hover:border-[#00f0ff] transition-all overflow-hidden relative group"
                aria-label="Toggle theme"
                data-hover
              >
                <motion.div
                  animate={{ y: theme === 'dark' ? -40 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="flex flex-col items-center justify-center w-full"
                >
                  <div className="h-10 w-full flex items-center justify-center"><Sun size={20} /></div>
                  <div className="h-10 w-full flex items-center justify-center"><Moon size={20} /></div>
                </motion.div>
              </button>

              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] text-white text-sm font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
                data-hover
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-[#0d1224] border border-gray-200 dark:border-[#1a2238] text-gray-600 dark:text-[#00f0ff]"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-[#0d1224] border border-gray-200 dark:border-[#1a2238] text-gray-600 dark:text-[#8892a4]"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-0 left-0 right-0 z-[49] bg-white dark:bg-[#050810] pt-24 pb-10 border-b border-gray-200 dark:border-[#1a2238] overflow-hidden md:hidden shadow-2xl"
          >
            <div className="container-custom space-y-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-3xl font-bold tracking-tight py-2 block ${location.pathname === link.path ? 'text-[#00f0ff]' : 'text-gray-400'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-[#1a2238] flex justify-between items-center">
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#0d1224] flex items-center justify-center text-gray-400 hover:text-[#00f0ff] transition-colors"><Github size={20} /></a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#0d1224] flex items-center justify-center text-gray-400 hover:text-[#00f0ff] transition-colors"><Linkedin size={20} /></a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#0d1224] flex items-center justify-center text-gray-400 hover:text-[#00f0ff] transition-colors"><Instagram size={20} /></a>
                </div>
                <Link to="/contact" className="text-[#00f0ff] font-bold flex items-center gap-2">
                  Contact Me <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;