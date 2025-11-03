import PageTransition from '../components/ui/PageTransition';
import Hero from '../components/home/Hero';
import ProjectsSection from '../components/home/ProjectsSection';
import { useDocumentTitle } from '../hooks/useSEO';

const Home = () => {
  useDocumentTitle({
    title: 'Home',
    description: 'Kinshuk Saxena - Full Stack Developer & UI/UX Enthusiast. Explore my portfolio of modern web applications built with React, Spring Boot, and cutting-edge technologies.'
  });

  return (
    <PageTransition>
      <Hero />
      <ProjectsSection />
    </PageTransition>
  );
};

export default Home;