import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants.tsx';
import { CheckCircle2, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/5 dark:bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Technical Arsenal</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life, constantly updated for the modern web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(Object.keys(SKILLS) as Array<keyof typeof SKILLS>).map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Glowing Border Gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              
              <div className="relative h-full bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl border border-slate-200 dark:border-slate-800/60 shadow-xl dark:shadow-none flex flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category}</h3>
                  <Cpu className="text-indigo-500 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" size={24} />
                </div>
                
                <div className="space-y-3 mt-auto">
                  {SKILLS[category].map((skill) => (
                    <div key={skill} className="flex items-center text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3 group-hover:scale-150 transition-transform"></div>
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};