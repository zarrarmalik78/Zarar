import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { HackerText } from './HackerText';

export const PortfolioHero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden bg-slate-50 dark:bg-[#030014] pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 100%)',
          }}
        ></div>
        
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px] animate-blob delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full relative z-10 py-12 lg:py-0">
        {/* Left Content */}
        <div className="w-full lg:w-[55%] text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-500/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase">Available for new projects</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1] flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
            }}
            initial="hidden"
            animate="visible"
          >
            {["Hi!", "My", "name", "is", "Zarar,", "A", "Software", "Engineer"].map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                }}
                className={index >= 5 ? "text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-400 relative group cursor-default" : "relative group cursor-default"}
              >
                <span className="inline-block group-hover:opacity-0 transition-opacity duration-300">{word}</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <HackerText text={word} />
                </span>
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="space-y-4 mb-10"
          >
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              Specializing in <span className="text-indigo-600 dark:text-indigo-400 font-bold">React</span>, <span className="text-indigo-600 dark:text-indigo-400 font-bold">Next.js</span>, and <span className="text-teal-500 font-bold">AI-driven automation</span>.
            </p>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I craft high-performance applications and streamline business processes to help you scale efficiently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
          >
            <a href="#/projects" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-6"
          >
            <a href="https://github.com/Zarar-Malik-eng" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-[#2b3137] hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/zarar-malik-54b036284" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:zarrarmalik78@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-[#ea4335] hover:bg-[#ea4335] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg" aria-label="Email">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="/hero.webp" 
              alt="Zarar Malik" 
              className="relative w-full max-w-[400px] aspect-[3/4] object-cover rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
