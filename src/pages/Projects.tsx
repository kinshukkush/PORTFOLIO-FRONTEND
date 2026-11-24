import PageTransition from '../components/ui/PageTransition';
import ProjectsSection from '../components/home/ProjectsSection';
import { useDocumentTitle } from '../hooks/useSEO';

const Projects = () => {
  useDocumentTitle({
    title: 'Projects',
    description: 'Explore Kinshuk Saxena\'s AI, full-stack, mobile, cybersecurity and industrial software projects.',
  });

  return (
    <PageTransition>
      <ProjectsSection />
    </PageTransition>
  );
};

export default Projects;
