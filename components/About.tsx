import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Rocket } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative">
      
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 dark:from-slate-900/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl transform rotate-3 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
              <img 
                src="https://picsum.photos/seed/workspace1/800/1000" 
                alt="Workspace" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay"></div>
            </div>

            {/* Floating Stat Card */}
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase border border-indigo-100 dark:border-indigo-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              A tech enthusiast building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-400">efficient digital solutions</span>.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              <p>
                Hi, I'm Zarar, a freelance tech builder based in <strong className="text-slate-900 dark:text-white font-semibold">Islamabad, Pakistan</strong>. I specialize in creating AI-powered automations, modern responsive websites, and custom web applications tailored for small businesses and startups.
              </p>
              <p>
                I love bridging the gap between complex technology and practical business needs. Whether it's automating a tedious workflow with n8n or building a sleek Next.js storefront, my goal is always the same: to build efficient, scalable, and user-friendly solutions that drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
              >
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl text-teal-600 dark:text-teal-400">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Fast Delivery</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Optimized for speed & performance</p>
                </div>
              </motion.div>
              <motion.div 
                 whileHover={{ y: -5 }}
                 className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
              >
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">AI Integrated</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Smart solutions for modern problems</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};