import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
  icon?: ReactNode;
  accent?: boolean;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  children, 
  centered = false,
  icon,
  accent = false
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
      {/* Decorative line for centered headings */}
      {centered && accent && (
        <motion.div 
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500" />
          <Sparkles className="w-5 h-5 text-primary-500" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500" />
        </motion.div>
      )}

      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        {icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="text-primary-500"
          >
            {icon}
          </motion.div>
        )}
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      </div>
      
      {subtitle && (
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      {children && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </motion.div>
      )}

      {/* Accent underline */}
      {accent && !centered && (
        <motion.div 
          className="h-1 w-20 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      )}
    </div>
  );
};

export default SectionHeading;