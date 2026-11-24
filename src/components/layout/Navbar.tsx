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
  { name: 'Projects', path: '/projects' },
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

  useEffect(() => { setIsOpen(false); }, [location.pathname, location.hash]);

  const isLinkActive = (path: string) => {
    return location.pathname === path && !location.hash;
  };



  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-3 glass-nav shadow-lg'
          : 'py-6 bg-transparent border-b border-transparent'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="relative group flex items-center gap-2" data-hover>
              <div className="logo-glass h-10 w-10 rounded-xl p-[1px] transition-transform duration-300 group-hover:rotate-6">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white/20 dark:bg-white/5">
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
            <div className="mac-glass hidden md:flex items-center gap-1 p-1 rounded-full">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    data-hover
                    className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-bg"
                        className="mac-glass-active absolute inset-0 rounded-full"
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
                className="mac-glass-button w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-primary)]"
                aria-label="Toggle theme"
                data-hover
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span key={theme} initial={{ opacity: 0, rotate: -35, scale: 0.7 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 35, scale: 0.7 }} className="absolute inset-0 flex items-center justify-center">
                    {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
                  </motion.span>
                </AnimatePresence>
              </button>

              <Link
                to="/contact"
                className="mac-glass-button px-6 py-2.5 rounded-full text-sm font-bold text-[var(--text-primary)] hover:-translate-y-0.5"
                data-hover
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="glass-button w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-[#00f0ff]"
                aria-label="Toggle color theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="glass-button w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-[#8892a4]"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
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
            className="glass-nav fixed top-0 left-0 right-0 z-[49] pt-24 pb-10 overflow-hidden md:hidden shadow-2xl"
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
                      className={`text-3xl font-bold tracking-tight py-2 block ${isLinkActive(link.path) ? 'text-[#00f0ff]' : 'text-gray-400'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-200 dark:border-[#1a2238] flex justify-between items-center">
                <div className="flex gap-4">
                  <a aria-label="GitHub" href="https://github.com/kinshukkush" target="_blank" rel="noreferrer" className="glass-button w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00f0ff] transition-colors"><Github size={20} /></a>
                  <a aria-label="LinkedIn" href="https://www.linkedin.com/in/kinshuk-saxena-/" target="_blank" rel="noreferrer" className="glass-button w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00f0ff] transition-colors"><Linkedin size={20} /></a>
                  <a aria-label="Instagram" href="https://www.instagram.com/kinshuk_.saxena" target="_blank" rel="noreferrer" className="glass-button w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00f0ff] transition-colors"><Instagram size={20} /></a>
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
