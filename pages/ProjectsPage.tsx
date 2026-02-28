import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants.tsx';
import { ArrowRight, CheckCircle, ExternalLink, Github, Zap, Shield } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#030014] transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide"
          >
            Portfolio
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400">Success Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            I build digital assets that turn local businesses into market leaders. 
            Explore the transformation of brands that chose to stop being invisible.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
                <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 flex gap-4">
                    <a href={project.links.demo} className="p-3 bg-white text-slate-900 rounded-full hover:bg-indigo-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.links.github} className="p-3 bg-white text-slate-900 rounded-full hover:bg-indigo-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full border border-indigo-100 dark:border-indigo-800/50 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-indigo-500">
                      <Zap size={20} />
                      <h4 className="font-bold uppercase text-xs tracking-widest">The Challenge</h4>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Client lacked digital visibility and was losing leads to competitors with modern web presence.
                    </p>
                  </div>
                  <div className="p-6 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-teal-500">
                      <Shield size={20} />
                      <h4 className="font-bold uppercase text-xs tracking-widest">The Solution</h4>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Built a lightning-fast, high-converting SEO-optimized platform with automated lead tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                   <div className="flex -space-x-3 overflow-hidden">
                      <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://picsum.photos/seed/1/100/100" alt="" />
                      <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900" src="https://picsum.photos/seed/2/100/100" alt="" />
                   </div>
                   <p className="text-sm font-medium text-slate-500 italic">"Zarar delivered exactly what we needed to grow."</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card p-12 md:p-20 rounded-[3rem] border border-slate-200 dark:border-slate-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
             <h2 className="text-4xl font-bold mb-8">Want your business listed here next?</h2>
             <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
               Let's build a digital asset that works as hard as you do.
             </p>
             <a href="#/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:scale-105 transition-transform shadow-2xl">
               Start Your Project <ArrowRight size={20} />
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};