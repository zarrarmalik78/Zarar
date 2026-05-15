import React from 'react';
import { PortfolioHero } from '../components/PortfolioHero.tsx';
import { PainPoints } from '../components/PainPoints.tsx';
import { CompetitiveEdge } from '../components/CompetitiveEdge.tsx';
import { Projects } from '../components/Projects.tsx';
import { LaunchPlan } from '../components/LaunchPlan.tsx';
import { Testimonials } from '../components/Testimonials.tsx';
import { Contact } from '../components/Contact.tsx';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <PortfolioHero />
      <PainPoints />
      <Projects />
      <CompetitiveEdge />
      <LaunchPlan />
      <Testimonials />
      <Contact />
    </>
  );
};