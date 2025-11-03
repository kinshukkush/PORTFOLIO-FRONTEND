import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  Code2,
  Layers,
  Share2,
  CheckCircle,
  ZoomIn,
  X,
  Star,
  Users,
  GitBranch,
  Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import { getProjectById, projects, Project } from '../data/projects';
import { useDocumentTitle } from '../hooks/useSEO';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [showImageModal, setShowImageModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  // Update document title when project changes
  useDocumentTitle({
    title: project?.title || 'Project Details',
    description: project?.shortDescription || 'View detailed information about this project'
  });

  useEffect(() => {
    const loadProject = () => {
      if (id) {
        setLoading(true);
        try {
          // Load project immediately without artificial delay
          const foundProject = getProjectById(id);
          setProject(foundProject || null);
          setCurrentImageIndex(0);
          
          // Find related projects
          if (foundProject) {
            const related = projects
              .filter(p => p.id !== foundProject.id)
              .filter(p => 
                p.category === foundProject.category || 
                p.technologies.some(tech => foundProject.technologies.includes(tech))
              )
              .slice(0, 3);
            setRelatedProjects(related);
          }
        } catch (error) {
          console.error('Error loading project:', error);
        } finally {
          // Small delay to ensure smooth transition
          setTimeout(() => setLoading(false), 100);
        }
      }
    };

    loadProject();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const nextImage = () => {
    setImageLoading(true);
    setCurrentImageIndex((prev) => 
      prev === (project?.images.length || 0) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setImageLoading(true);
    setCurrentImageIndex((prev) => 
      prev === 0 ? (project?.images.length || 1) - 1 : prev - 1
    );
  };

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: project?.title,
          text: project?.shortDescription,
          url: url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (showImageModal) {
      if (e.key === 'Escape') setShowImageModal(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showImageModal, currentImageIndex]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container-custom">
          {/* Skeleton Loader */}
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  ))}
                </div>
              </div>
              <div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="flex gap-2 mb-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <motion.div 
        className="min-h-screen pt-32 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <div className="container-custom text-center">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link 
              to="/projects" 
              className="btn-primary inline-flex items-center hover:scale-105 transition-transform"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link to="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/projects" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              Projects
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 dark:text-white font-medium">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]} 
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full aspect-video object-cover cursor-zoom-in"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onLoad={handleImageLoad}
                    onClick={() => setShowImageModal(true)}
                  />
                </AnimatePresence>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/50 backdrop-blur-sm p-2 rounded-full">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Loading Spinner */}
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500" />
                  </div>
                )}

                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-900 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-900 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </motion.button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {project.images.length > 1 && (
                <motion.div 
                  className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.images.map((img, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setImageLoading(true);
                        setCurrentImageIndex(idx);
                      }}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all ${
                        idx === currentImageIndex 
                          ? 'ring-2 ring-primary-500 ring-offset-2 dark:ring-offset-gray-900' 
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {/* Project Stats */}
              <motion.div
                className="mt-6 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-primary-500 mb-1">
                    <Code2 className="w-5 h-5" />
                    <span className="text-2xl font-bold">{project.technologies.length}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Technologies</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-primary-500 mb-1">
                    <Layers className="w-5 h-5" />
                    <span className="text-2xl font-bold">{project.features.length}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Key Features</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Title and Status */}
              <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <motion.button
                  onClick={handleShare}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Share project"
                >
                  {copied ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Share2 className="w-5 h-5" />}
                </motion.button>
              </div>

              {/* Project Status Badge */}
              {project.status && (
                <motion.div 
                  className="inline-flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'live' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                      : project.status === 'in-progress'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {project.status === 'live' && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block mr-1"></span>}
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                  </span>
                  {project.category && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400">
                      {project.category}
                    </span>
                  )}
                </motion.div>
              )}

              {/* Technologies */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div 
                className="prose prose-lg dark:prose-invert mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary-500" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Demo Credentials */}
              {project.demoCredentials && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">Demo Credentials:</h3>
                  <div className="text-sm text-blue-800 dark:text-blue-400">
                    <p>Username: <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">{project.demoCredentials.username}</code></p>
                    <p>Password: <code className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">{project.demoCredentials.password}</code></p>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {project.githubLink && (
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Source</span>
                  </motion.a>
                )}

                {project.liveLink && (
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </motion.div>

              {/* Project Metrics */}
              <motion.div
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <GitBranch className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Version Control</p>
                  </div>
                  <div>
                    <Users className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Team Project</p>
                  </div>
                  <div>
                    <Eye className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Open Source</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                Related Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => navigate(`/projects/${relatedProject.id}`)}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={relatedProject.thumbnail} 
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {relatedProject.shortDescription}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setShowImageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Full size`}
                className="w-full h-auto rounded-lg"
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-8 h-8 text-white" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default ProjectDetails;