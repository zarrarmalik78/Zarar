import { PortfolioHero } from '../components/PortfolioHero.tsx';
import { Skills } from '../components/Skills.tsx';
import { Projects } from '../components/Projects.tsx';
import { PortfolioContact } from '../components/PortfolioContact.tsx';
import { TechStackMarquee } from '../components/TechStackMarquee.tsx';
import { StatsCounter } from '../components/StatsCounter.tsx';

export const HomePage: React.FC = () => {
  return (
    <>
      <PortfolioHero />
      <div className="relative z-10 bg-slate-50 dark:bg-[#030014]">
        <TechStackMarquee />
        <StatsCounter />
        <Projects />
        <PortfolioContact />
      </div>
    </>
  );
};
