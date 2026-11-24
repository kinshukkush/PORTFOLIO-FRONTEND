import { useNavigate } from 'react-router-dom';
import FlexCarousel from '../effects/FlexCarousel';
import GlassSurface from '../ui/GlassSurface';
import { projects } from '../../data/projects';

const FeaturedProjectsCarousel = () => {
  const navigate = useNavigate();
  const featured = projects.filter(project => project.featured).slice(0, 6);
  const items = featured.map(project => ({
    src: project.thumbnail,
    alt: `${project.title} project cover`,
    title: project.title,
    subtitle: project.shortDescription,
  }));

  if (!featured.length) return null;

  return (
    <GlassSurface className="mb-10 overflow-hidden p-3 sm:p-5" strength="strong">
      <div className="flex flex-col gap-1 px-2 pt-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Selected work</p>
          <h3 className="text-xl font-bold sm:text-2xl">Interactive project reel</h3>
        </div>
        <p className="text-sm text-[var(--text-muted)]">Moves automatically. Touch, drag, scroll, or use arrow keys to take control.</p>
      </div>
      <div className="relative h-[430px] w-full sm:h-[520px]">
        <FlexCarousel
          items={items}
          preset="liquid"
          intro="rise"
          cardHeight={0.4}
          gap={23}
          squeeze={0.2}
          focusOnClick
          captions
          fit="natural"
          radius={0}
          lensWidth={0.47}
          lensHeight={1.18}
          tilt={62}
          roundness={0.99}
          bend={0.34}
          reach={0.38}
          curl="rise"
          dispersion={0.53}
          liquid={0.51}
          followCursor={false}
          autoplay
          interval={3}
          captureWheel={false}
          onSelect={index => navigate(`/project/${featured[index].id}`)}
          className="text-[var(--text-primary)]"
        />
      </div>
    </GlassSurface>
  );
};

export default FeaturedProjectsCarousel;
