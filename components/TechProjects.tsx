import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants.tsx';
import { ArrowRight, ExternalLink, Github, Code2 } from 'lucide-react';

export const TechProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of full-stack applications demonstrating scalable architecture, modern UI patterns, and performance optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <Code2 size={14} />
                    <span>Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center"
        >
           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors text-lg">
             View more on GitHub <ArrowRight size={20} />
           </a>
        </motion.div>
      </div>
    </section>
  );
};
