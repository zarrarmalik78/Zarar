import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants.tsx';
import { CheckCircle2 } from 'lucide-react';

export const CompetitiveEdge: React.FC = () => {
  return (
    <section id="competitive-edge" className="py-24 bg-slate-50 dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide">
            Your Advantage
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">The Competitive Edge</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I don't just build sites; I build business assets designed to outperform everyone else in your local area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800/60 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${benefit.bg} flex items-center justify-center ${benefit.color} mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{benefit.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {benefit.description}
              </p>
              <div className="flex items-center gap-2 text-indigo-500 font-bold text-sm">
                <CheckCircle2 size={16} />
                Results Guaranteed
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};