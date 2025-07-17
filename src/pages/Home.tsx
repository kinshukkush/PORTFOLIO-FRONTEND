import PageTransition from '../components/ui/PageTransition';
import Hero from '../components/home/Hero';
import ProjectsSection from '../components/home/ProjectsSection';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <ProjectsSection />
    </PageTransition>
  );
};

export default Home;