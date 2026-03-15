import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring config for smooth follow
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);
  
  // For 3D Tilt
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);
  const tiltXSpring = useSpring(xPct, springConfig);
  const tiltYSpring = useSpring(yPct, springConfig);

  // Map the percentage (-0.5 to +0.5) to degrees (-10deg to +10deg)
  const rotateX = useTransform(tiltYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(tiltXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPos = clientX - left;
    const yPos = clientY - top;
    
    // Spotlight coordinates (pixels from top-left)
    mouseX.set(xPos);
    mouseY.set(yPos);
    
    // Tilt coordinates (normalized -0.5 to 0.5)
    xPct.set(xPos / width - 0.5);
    yPct.set(yPos / height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    xPct.set(0);
    yPct.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col h-[480px] sm:h-[500px] w-full bg-white dark:bg-[#0f1115] rounded-[24px] overflow-hidden border border-slate-200/60 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow duration-300"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px" // Perspective goes on the parent container!
      }}
    >
      {/* 3D Moving Container */}
      <motion.div
         className="w-full h-full flex flex-col"
         style={{
           rotateX,
           rotateY,
           transformStyle: "preserve-3d",
         }}
      >
        {/* Spotlight Effect overlay perfectly mapped inside the 3D card */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 group-hover:opacity-100 transition duration-500 z-50 mix-blend-color-dodge dark:mix-blend-screen"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${spotlightX}px ${spotlightY}px,
                rgba(99, 102, 241, 0.2),
                transparent 40%
              )
            `,
          }}
        />

        {/* Top Image Section */}
        <div className="relative overflow-hidden h-1/2 w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-800/50">
          
          {/* Skeleton Loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="w-full h-full bg-slate-200 dark:bg-slate-800 animate-pulse relative">
                <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent"></div>
              </div>
            </div>
          )}
          
          <img 
            src={project.image} 
            alt={project.title} 
            onLoad={() => setImageLoaded(true)}
            className={`w-[110%] h-[110%] -left-[5%] -top-[5%] absolute object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: "translateZ(30px)" }} // Physically lifts the image OFF the card in 3D space
          />
          
          {/* Overlay with buttons */}
          <div className="absolute inset-0 bg-slate-900/40 transition-opacity duration-300 z-10 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] flex items-center justify-center pointer-events-none" style={{ transform: "translateZ(50px)" }}>
             <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
               <a 
                href={project.links.demo} 
                className="p-3 bg-white/95 text-slate-900 rounded-full hover:bg-white hover:text-indigo-600 hover:shadow-lg transition-all transform hover:scale-110"
                title="View Live Demo"
               >
                 <ExternalLink size={20} className="w-5 h-5" strokeWidth={2.5} />
               </a>
               <a 
                href={project.links.github} 
                className="p-3 bg-white/95 text-slate-900 rounded-full hover:bg-white hover:text-indigo-600 hover:shadow-lg transition-all transform hover:scale-110"
                title="View Source Code"
               >
                 <Github size={20} className="w-5 h-5" strokeWidth={2.5} />
               </a>
             </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex-1 flex flex-col relative z-20 bg-white dark:bg-[#0f1115]">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm md:text-base flex-1 leading-relaxed font-medium line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(20px)" }}>
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1.5 text-xs font-bold bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-800"
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