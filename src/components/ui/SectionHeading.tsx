import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  monoLabel?: string;
  children?: ReactNode;
  centered?: boolean;
  icon?: ReactNode;
  accent?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  monoLabel,
  children,
  centered = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
      {/* Mono label above */}
      {monoLabel && (
        <motion.p
          className="mb-3 text-xs tracking-widest uppercase"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#00f0ff',
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.5 }}
        >
          {monoLabel}
        </motion.p>
      )}

      {/* Main heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: 'var(--text-primary)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -50px 0px' }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {/* 60px cyan underline bar */}
      <motion.div
        className="mt-4"
        style={{
          width: 60,
          height: 3,
          background: '#00f0ff',
          borderRadius: 2,
          marginLeft: centered ? 'auto' : undefined,
          marginRight: centered ? 'auto' : undefined,
          transformOrigin: centered ? 'center' : 'left',
        }}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: '0px 0px -50px 0px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      {subtitle && (
        <motion.p
          className="mt-4 text-base leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--text-muted)' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}

      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default SectionHeading;