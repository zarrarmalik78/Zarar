import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 3D Tilt Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      <motion.div 
        className="h-full bg-white dark:bg-[#0f1115] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500 flex flex-col"
        style={{
          transform: useMotionTemplate`perspective(1000px) rotateX(${useMotionTemplate`${mouseY}deg`} / 20) rotateY(${useMotionTemplate`${mouseX}deg`} / -20)`,
        }}
      >
        <div className="relative overflow-hidden aspect-[16/10] bg-slate-100 dark:bg-slate-900">
          {/* Skeleton Loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="w-full h-full bg-slate-200 dark:bg-slate-800 animate-pulse relative">
                <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent"></div>
              </div>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300 z-10 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] flex items-center justify-center">
             <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <a 
                href={project.links.demo} 
                className="p-3 bg-white text-slate-900 rounded-full hover:bg-indigo-500 hover:text-white transition-colors shadow-lg transform hover:scale-110"
                title="View Live Demo"
               >
                 <ExternalLink size={20} />
               </a>
               <a 
                href={project.links.github} 
                className="p-3 bg-white text-slate-900 rounded-full hover:bg-indigo-500 hover:text-white transition-colors shadow-lg transform hover:scale-110"
                title="View Source Code"
               >
                 <Github size={20} />
               </a>
             </div>
          </div>
          
          <img 
            src={project.image} 
            alt={project.title} 
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        <div className="p-8 flex-1 flex flex-col relative bg-white dark:bg-[#0f1115]">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors flex items-center gap-2">
            {project.title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm flex-1 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 group-hover:border-indigo-500/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.div>
  );
};