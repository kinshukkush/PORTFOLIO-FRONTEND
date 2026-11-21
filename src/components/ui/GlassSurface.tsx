import type { HTMLAttributes, ReactNode } from 'react';

interface GlassSurfaceProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  strength?: 'soft' | 'strong';
}

const GlassSurface = ({ children, className = '', strength = 'soft', ...props }: GlassSurfaceProps) => (
  <div
    className={`glass-surface ${strength === 'strong' ? 'glass-surface-strong' : ''} ${className}`.trim()}
    {...props}
  >
    {children}
  </div>
);

export default GlassSurface;
