import { motion } from 'framer-motion';

const skillRows: string[][] = [
  [
    'React', 'TypeScript', 'HTML & CSS', 'JavaScript', 'Tailwind CSS',
    'Node.js', 'Express', 'MongoDB', 'SQL', 'Git',
    'React', 'TypeScript', 'HTML & CSS', 'JavaScript', 'Tailwind CSS',
    'Node.js', 'Express', 'MongoDB', 'SQL', 'Git',
  ],
  [
    'Framer Motion', 'REST APIs', 'Vue.js', 'UI/UX Design', 'Responsive Design',
    'Testing', 'Cloud Platforms', 'Laravel', 'Docker', 'Figma',
    'Framer Motion', 'REST APIs', 'Vue.js', 'UI/UX Design', 'Responsive Design',
    'Testing', 'Cloud Platforms', 'Laravel', 'Docker', 'Figma',
  ],
];

const SkillsSection = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00f0ff' }}
          >
            // skills
          </p>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f0f4ff' }}
          >
            Technical Skills
          </h2>
          <div style={{ width: 60, height: 3, background: '#00f0ff', borderRadius: 2 }} />
          <p
            className="mt-4 text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#8892a4' }}
          >
            Technologies I work with on a daily basis
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        {/* Row 1 — scrolls left */}
        <div className="relative flex overflow-hidden">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #050810, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #050810, transparent)' }}
          />
          <div className="flex marquee-track gap-4 whitespace-nowrap">
            {skillRows[0].map((skill, i) => (
              <SkillPill key={`row1-${i}`} name={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div className="relative flex overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #050810, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #050810, transparent)' }}
          />
          <div className="flex marquee-track-reverse gap-4 whitespace-nowrap">
            {skillRows[1].map((skill, i) => (
              <SkillPill key={`row2-${i}`} name={skill} variant="violet" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillPillProps {
  name: string;
  variant?: 'cyan' | 'violet';
}

const SkillPill = ({ name, variant = 'cyan' }: SkillPillProps) => {
  const isCyan = variant === 'cyan';
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm shrink-0 cursor-default select-none"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: '#0d1224',
        border: `1px solid ${isCyan ? '#1a2238' : '#2a1a4a'}`,
        color: isCyan ? '#8892a4' : '#a78bfa',
        transition: 'border-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = isCyan ? 'rgba(0,240,255,0.4)' : 'rgba(124,58,237,0.4)';
        (e.currentTarget as HTMLElement).style.color = isCyan ? '#00f0ff' : '#c4b5fd';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = isCyan ? '#1a2238' : '#2a1a4a';
        (e.currentTarget as HTMLElement).style.color = isCyan ? '#8892a4' : '#a78bfa';
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: isCyan ? '#00f0ff' : '#7c3aed', opacity: 0.6 }}
      />
      {name}
    </span>
  );
};

export default SkillsSection;