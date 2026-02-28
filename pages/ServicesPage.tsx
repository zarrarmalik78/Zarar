import React from 'react';
import { Hero } from '../components/Hero.tsx';
import { PainPoints } from '../components/PainPoints.tsx';
import { CompetitiveEdge } from '../components/CompetitiveEdge.tsx';
import { Projects } from '../components/Projects.tsx';
import { LaunchPlan } from '../components/LaunchPlan.tsx';
import { Testimonials } from '../components/Testimonials.tsx';
import { Contact } from '../components/Contact.tsx';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Projects />
      <CompetitiveEdge />
      <LaunchPlan />
      <Testimonials />
      <Contact />
    </>
  );
};