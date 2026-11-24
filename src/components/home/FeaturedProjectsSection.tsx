import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import FeaturedProjectsCarousel from './FeaturedProjectsCarousel';

const FeaturedProjectsSection = () => (
  <section id="featured-projects" className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-900/50 dark:to-gray-900/30">
    <div className="container-custom">
      <SectionHeading
        title="Featured Projects"
        subtitle="A moving reel of production systems spanning AI, industrial diagnostics, OSINT and geospatial intelligence."
        centered
        accent
      />
      <FeaturedProjectsCarousel />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link to="/projects" className="mac-glass-button inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold">
          <FolderOpen size={18} />
          Browse every project
        </Link>
      </motion.div>
    </div>
  </section>
);

export default FeaturedProjectsSection;
