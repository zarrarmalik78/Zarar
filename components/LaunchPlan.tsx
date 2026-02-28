import React from 'react';
import { motion } from 'framer-motion';
import { LAUNCH_STEPS } from '../constants.tsx';
import { ArrowRight } from 'lucide-react';

export const LaunchPlan: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white dark:bg-[#030014] transition-colors duration-300 relative overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-widest uppercase">
            The Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">The 3-Step Launch Plan</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From invisible to market-ready in three simple, stress-free steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-0.5 bg-slate-100 dark:bg-slate-800 -z-0"></div>

          {LAUNCH_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative z-10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-8 shadow-xl shadow-indigo-500/20 border-4 border-white dark:border-[#030014]">
                {step.step}
              </div>
              
              <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 shadow-sm hover:shadow-xl group">
                <div className="p-4 w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg text-indigo-600 dark:text-indigo-400 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <step.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-16 text-center"
        >
           <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl">
             Start Your Journey <ArrowRight size={20} />
           </a>
        </motion.div>
      </div>
    </section>
  );
};