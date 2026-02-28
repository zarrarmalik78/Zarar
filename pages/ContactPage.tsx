import React from 'react';
import { PortfolioContact } from '../components/PortfolioContact.tsx';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#030014] transition-colors duration-300">
      <PortfolioContact />
    </div>
  );
};
