import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants.tsx';
import { ProjectCard } from './ProjectCard.tsx';
import { ArrowRight, Code2 } from 'lucide-react';

const TABS = ["All", "Frontend", "Full Stack", "Automation", "Business"];

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = PROJECTS.filter(project => {
    if (activeTab === "All") return true;
    // Map tabs to potential tags or logic
    if (activeTab === "Frontend") return project.tags.some(tag => ["UX Design", "Visual Portfolio", "Retail", "Game Dev", "Interactive", "Web", "Storytelling", "Mobile App", "React"].includes(tag));
    if (activeTab === "Full Stack") return project.tags.some(tag => ["Real Estate", "Booking System", "Technology", "SaaS", "EdTech", "CRM", "HealthTech", "Desktop"].includes(tag));
    if (activeTab === "Automation") return project.tags.some(tag => ["Automation", "Lead Gen", "AI", "Data Science", "Analytics", "Visualization", "Multimodal", "Gamification"].includes(tag));
    if (activeTab === "Business") return project.tags.some(tag => ["Business Growth", "Conversion", "SEO", "Inventory", "SaaS", "CRM"].includes(tag));
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide">
            <Code2 size={16} />
            <span>Selected Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of applications that demonstrate my ability to solve complex problems with clean, scalable code.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-200 dark:bg-slate-900/80 backdrop-blur-xl rounded-full border border-slate-300 dark:border-slate-800 shadow-inner">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${
                  activeTab === tab 
                    ? "text-white" 
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-full shadow-lg shadow-indigo-500/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No projects found in this category.
          </div>
        )}

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center"
        >
           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:shadow-lg hover:-translate-y-1 transition-all">
             View More on GitHub <ArrowRight size={20} />
           </a>
        </motion.div>
      </div>
    </section>
  );
};