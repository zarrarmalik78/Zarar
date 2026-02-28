import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" },
  { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Supabase", logo: "/supabase-logo.png" },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" }
];

export const TechStackMarquee: React.FC = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-50 dark:bg-[#030014] py-12 border-y border-slate-200 dark:border-slate-800/50">
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-slate-50 via-transparent to-slate-50 dark:from-[#030014] dark:to-[#030014] w-full"></div>
      
      <motion.div
        className="flex items-center gap-16 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...techStack, ...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-4 group cursor-pointer">
            <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-3 group-hover:scale-110 transition-transform duration-300 group-hover:border-indigo-500/30 group-hover:shadow-indigo-500/20">
              <img 
                src={tech.logo} 
                alt={tech.name} 
                className="w-full h-full object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
            <span className="text-sm font-bold text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
