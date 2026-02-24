import { ReactNode, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Layout = ({ children, theme, toggleTheme }: LayoutProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Manage 'dark' class on documentElement for Tailwind dark: classes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Handle mesh bg visibility based on theme
  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.style.backgroundColor = '#050810';
    } else {
      body.style.backgroundColor = '#f9fafb';
    }
  }, [theme]);

  // Custom cursor
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX - 4 + 'px';
      dot.style.top = mouseY - 4 + 'px';
    };
    document.addEventListener('mousemove', onMouseMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.left = ringX - 20 + 'px';
      ring.style.top = ringY - 20 + 'px';
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const addHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
      });
    };
    addHover();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      dot.remove();
      ring.remove();
    };
  }, []);

  // Scroll handling with rAF debounce
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setShowScrollTop(scrollY > 300);
          const winScroll = document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          setScrollProgress((winScroll / height) * 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center mesh-bg"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute rounded-full border border-[#00f0ff30]"
                style={{ width: 120, height: 120 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute rounded-full border border-[#7c3aed40]"
                style={{ width: 80, height: 80 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute rounded-full border border-[#00f0ff60]"
                style={{ width: 50, height: 50 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
              <motion.span
                className="relative z-10 text-xl font-bold"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#00f0ff',
                  textShadow: '0 0 20px rgba(0, 240, 255, 0.5), 0 0 60px rgba(0, 240, 255, 0.2)',
                }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                KS
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
        style={{
          scaleX: scrollProgress / 100,
          background: 'linear-gradient(to right, #00f0ff, #7c3aed)',
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0 }}
      />

      <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#00f0ff] text-[#050810] px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <motion.main
          id="main-content"
          className="flex-grow relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="min-h-[calc(100vh-80px)]">
            {children}
          </div>
        </motion.main>

        <Footer />

        {/* Scroll to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-40 group"
              style={{
                background: 'linear-gradient(135deg, #00f0ff20, #7c3aed20)',
                border: '1px solid #00f0ff40',
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-[#00f0ff]" />
            </motion.button>
          )}
        </AnimatePresence>

        <div id="mobile-nav-overlay" />
        <div id="modal-root" />
        <div id="toast-container" className="fixed top-20 right-4 z-50 space-y-2" />
      </div>
    </>
  );
};

export default Layout;
