import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, EyeOff, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-[#030014] -z-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-blob delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left Content (60%) */}
        <div className="lg:w-[60%] text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-500/10"
          >
            <EyeOff size={12} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase">Stop being invisible</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.05]"
          >
            Your business is <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">invisible</span> without a website.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4 mb-12"
          >
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              I'm Zarar. I build professional websites for local businesses to help you claim your digital presence.
            </p>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Stop losing customers to competitors who simply show up on Google. Let's make sure you're the first choice.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get a Custom Launch Plan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck size={14} className="text-emerald-500" />
              Free Strategy Call Included
            </div>
          </motion.div>
        </div>

        {/* Right Visual (40%) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-[40%] relative flex justify-center"
        >
          <div className="relative w-full max-w-[380px] aspect-[4/5]">
            {/* Soft Glow Behind Image */}
            <div className="absolute inset-4 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-[3rem] blur-3xl -z-10"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/40 dark:border-slate-800 shadow-2xl">
               <img 
                src="/hero.png" 
                alt="Zarar - Digital Growth Specialist" 
                className="w-full h-full object-cover filter saturate-[0.8] brightness-[1.05] hover:saturate-[1.1] transition-all duration-700 ease-in-out"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-inner">
                <ShieldCheck size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified Partner</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">Growth Specialist</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};