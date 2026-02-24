import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="card group relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      style={{ willChange: 'transform' }}
    >
      {/* Ghost index number */}
      <span
        className="absolute top-2 right-4 pointer-events-none select-none leading-none z-0"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '6rem',
          color: '#f0f4ff',
          opacity: 0.04,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Image area */}
      <div className="relative overflow-hidden" style={{ height: '192px' }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
          loading="lazy"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0d1224 0%, transparent 60%)' }}
        />

        {/* Quick action icons on hover */}
        <motion.div
          className="absolute inset-0 flex items-end justify-end gap-2 p-3"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{ background: 'rgba(5,8,16,0.3)' }}
        >
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-200"
              style={{ background: 'rgba(13,18,36,0.9)', border: '1px solid #1a2238', color: '#f0f4ff' }}
              onClick={(e) => e.stopPropagation()}
              aria-label="GitHub Repository"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-200"
              style={{ background: '#00f0ff', color: '#050810' }}
              onClick={(e) => e.stopPropagation()}
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </motion.div>
      </div>

      {/* Card body */}
      <div className="relative z-10 p-6">
        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: 'rgba(0, 240, 255, 0.08)',
                color: '#00f0ff',
                border: '1px solid rgba(0, 240, 255, 0.15)',
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span
              className="px-2 py-0.5 rounded text-xs"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: '#0d1224',
                color: '#8892a4',
                border: '1px solid #1a2238',
              }}
            >
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold mb-2 line-clamp-1"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#f0f4ff' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ fontFamily: "'DM Sans', sans-serif", color: '#8892a4' }}
        >
          {project.shortDescription}
        </p>

        {/* Footer row */}
        <div
          className="pt-4 flex items-center justify-between"
          style={{ borderTop: '1px solid #1a2238' }}
        >
          <Link
            to={`/project/${project.id}`}
            className="group/link relative text-sm font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#00f0ff' }}
          >
            <span>View Project </span>
            <motion.span
              className="inline-block"
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
            {/* Underline draw effect */}
            <span
              className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover/link:w-full"
              style={{
                background: '#00f0ff',
                transition: 'width 0.3s ease',
              }}
            />
          </Link>

          <span
            className="text-xs px-2 py-0.5 rounded capitalize"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: project.status === 'live' ? 'rgba(0,240,255,0.1)' : 'rgba(124,58,237,0.1)',
              color: project.status === 'live' ? '#00f0ff' : '#a78bfa',
              border: `1px solid ${project.status === 'live' ? 'rgba(0,240,255,0.2)' : 'rgba(124,58,237,0.2)'}`,
            }}
          >
            {project.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;