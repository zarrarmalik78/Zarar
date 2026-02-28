import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-500">
              Zarar.
            </span>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              © 2025 Zarar — All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="p-2 bg-white dark:bg-slate-900 rounded-full text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all shadow-sm">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 bg-white dark:bg-slate-900 rounded-full text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all shadow-sm">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-white dark:bg-slate-900 rounded-full text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all shadow-sm">
              <Twitter size={20} />
            </a>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};