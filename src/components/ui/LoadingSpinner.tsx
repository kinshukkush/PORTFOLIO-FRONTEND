import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen = false }: LoadingSpinnerProps) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative flex items-center justify-center" style={{ width: 120, height: 120 }}>
        {/* Outer ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 120, height: 120,
            border: '1.5px solid rgba(0, 240, 255, 0.25)',
            willChange: 'transform',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        />
        {/* Middle ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 80, height: 80,
            border: '1.5px solid rgba(124, 58, 237, 0.35)',
            willChange: 'transform',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 48, height: 48,
            border: '1.5px solid rgba(0, 240, 255, 0.55)',
            willChange: 'transform',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        {/* KS center text */}
        <motion.span
          className="relative z-10 text-lg font-bold select-none"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#00f0ff',
            textShadow: '0 0 20px rgba(0, 240, 255, 0.5), 0 0 60px rgba(0, 240, 255, 0.2)',
          }}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          KS
        </motion.span>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center mesh-bg"
      >
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;
