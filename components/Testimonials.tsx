import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants.tsx';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-bold tracking-wide">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">What Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center text-indigo-300 dark:text-indigo-800 opacity-50">
                <Quote size={40} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg italic leading-relaxed">"{t.content}"</p>
                <div className="mt-auto flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500/20" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 text-xs font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};