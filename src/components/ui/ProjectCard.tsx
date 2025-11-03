import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Star, TrendingUp } from 'lucide-react';
import { Project } from '../../data/projects';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'live':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'completed':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'live':
        return <TrendingUp size={12} />;
      case 'in-progress':
        return <Star size={12} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="card card-hover group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800">
        <motion.img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="flex gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all"
                aria-label="GitHub Repository"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </a>
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all"
                aria-label="Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Status Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getStatusColor(project.status)} backdrop-blur-sm`}>
          {getStatusIcon(project.status)}
          <span className="capitalize">{project.status}</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
          {project.category}
        </div>
      </div>

      <div className="p-6">
        {/* Technologies - Show first 3 */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.slice(0, 3).map((tech) => (
            <motion.span 
              key={tech} 
              className="px-2 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded border border-primary-200 dark:border-primary-800"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Features count */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{project.features.length} key features</span>
          <span>{project.images.length} screenshots</span>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
          <Link 
            to={`/project/${project.id}`} 
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center gap-1 group/link"
          >
            <span>View Details</span>
            <motion.span
              animate={isHovered ? { x: 3 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;