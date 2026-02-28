import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cpu, Target } from 'lucide-react';
import { Skills } from '../components/Skills.tsx';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#030014] transition-colors duration-300">
      <section className="py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-100 dark:from-slate-900/50 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative group perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl transform rotate-3 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img 
                  src="/workspace.png" 
                  alt="Workspace" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay"></div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700/50"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">100%</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 leading-tight">
                    Client<br />Satisfaction
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase border border-indigo-100 dark:border-indigo-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                My Journey
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Helping businesses navigate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">digital landscape</span>.
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                <p>
                  Hi, I'm Zarar, a freelance tech builder based in <strong className="text-slate-900 dark:text-white font-semibold">Islamabad, Pakistan</strong>. I specialize in creating AI-powered automations, modern responsive websites, and custom web applications tailored for small businesses and startups.
                </p>
                <p>
                  My mission is to help local businesses stop being invisible online. I believe that every small business deserves a digital presence that reflects their quality and hard work.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl text-teal-600 dark:text-teal-400">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Growth Focus</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Built to scale your business</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Modern Stack</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Next.js, Tailwind & AI</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Skills />
      
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to start your project?</h2>
          <a href="#/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-indigo-600 rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
            Let's Talk
          </a>
        </div>
      </section>
    </div>
  );
};