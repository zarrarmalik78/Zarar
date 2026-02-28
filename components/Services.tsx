import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants.tsx';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-[#030014] transition-colors duration-300 relative overflow-hidden">
      
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
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">How I Can Help</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs, delivered with precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden hover:bg-white dark:hover:bg-white/10 transition-all duration-500"
            >
              {/* Holographic Background Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-teal-500/10"></div>
              
              {/* Corner Glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-[50px] group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ring-1 ring-slate-100 dark:ring-white/10">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};