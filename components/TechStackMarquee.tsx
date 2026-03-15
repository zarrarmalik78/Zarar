import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

const techStack = [
  // Ring 1 (Inner) - 3 items
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", orbit: 1 },
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", orbit: 1 },
  { name: "Next.js", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png", orbit: 1 },
  
  // Ring 2 (Middle) - 4 items
  { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", orbit: 2 },
  { name: "Tailwind", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", orbit: 2 },
  { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", orbit: 2 },
  { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", orbit: 2 },
  
  // Ring 3 (Outer) - 5 items
  { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", orbit: 3 },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", orbit: 3 },
  { name: "Supabase", logo: "/supabase-logo.png", orbit: 3 },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", orbit: 3 },
  { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", orbit: 3 }
];

const ORBIT_CONFIG = {
  1: { radius: 140, speed: 0.5 },
  2: { radius: 240, speed: -0.3 },
  3: { radius: 360, speed: 0.2 },
};

const OrbitNode = ({ tech, index, totalInOrbit }: { tech: typeof techStack[0], index: number, totalInOrbit: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const config = ORBIT_CONFIG[tech.orbit as keyof typeof ORBIT_CONFIG];
  
  // Distribute items evenly around the circle
  const initialAngle = (Math.PI * 2 * index) / totalInOrbit;

  useAnimationFrame((t) => {
    if (!ref.current) return;
    
    // Calculate current angle based on elapsed time and orbital speed
    const currentAngle = initialAngle + (t * config.speed) / 1000;
    
    // Simulate 3D tilt: full X radius, squashed Y radius
    // Mobile responsiveness: scale down radiuses based on window width
    const isMobile = window.innerWidth < 768;
    const responsiveRadius = isMobile ? config.radius * 0.55 : config.radius;
    
    const radiusX = responsiveRadius;
    const radiusY = responsiveRadius * 0.35; // The tilt squish factor
    
    const x = Math.cos(currentAngle) * radiusX;
    const y = Math.sin(currentAngle) * radiusY;
    
    // Calculate Z depth for scaling, opacity, and layering
    const z = Math.sin(currentAngle); // Ranges from -1 (back) to 1 (front)
    
    const scale = 1 + z * 0.2; // Icons in front are 20% larger
    const opacity = 0.4 + ((z + 1) / 2) * 0.6; // Back is 40% opacity, front is 100%
    const zIndex = Math.round(z * 100);

    // Apply highly performant direct DOM mutations
    ref.current.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`;
    ref.current.style.opacity = opacity.toString();
    ref.current.style.zIndex = zIndex.toString();
  });

  return (
    <div ref={ref} className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center group cursor-pointer">
      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 p-2.5 sm:p-3 group-hover:scale-125 transition-transform duration-300 group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/30">
        <img 
          src={tech.logo} 
          alt={tech.name} 
          className="w-full h-full object-contain pointer-events-none drop-shadow-sm"
          loading="lazy"
        />
      </div>
      
      {/* Tooltip that appears on hover */}
      <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8 whitespace-nowrap bg-white/90 dark:bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xl pointer-events-none z-50">
        {tech.name}
      </span>
    </div>
  );
};

export const TechStackMarquee: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[700px] bg-slate-50 dark:bg-[#030014] overflow-hidden flex items-center justify-center border-y border-slate-200 dark:border-slate-800/50">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Decorative Title */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute z-50 text-center pointer-events-none flex flex-col items-center justify-center bg-white/50 dark:bg-black/50 backdrop-blur-md px-8 py-6 rounded-full border border-slate-200/50 dark:border-white/10 shadow-2xl"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 font-black text-2xl sm:text-4xl tracking-tight drop-shadow-sm">
          Core Engine
        </span>
        <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 tracking-widest uppercase mt-1">
          Technologies
        </span>
      </motion.div>

      {/* The Orbital SYSTEM */}
      <div className="relative w-full h-full flex items-center justify-center transform-gpu">
        
        {/* Render visible orbit rings (ellipses) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[154px] sm:w-[280px] h-[54px] sm:h-[98px] rounded-[100%] border border-slate-300/40 dark:border-slate-700/40 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] border-dashed"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[264px] sm:w-[480px] h-[92px] sm:h-[168px] rounded-[100%] border border-slate-300/40 dark:border-slate-700/40 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[396px] sm:w-[720px] h-[138px] sm:h-[252px] rounded-[100%] border border-indigo-200/50 dark:border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.05)] border-dashed"></div>

        {/* Map through tech stack to create orbiting nodes */}
        {techStack.map((tech) => {
          const itemsInOrbit = techStack.filter(t => t.orbit === tech.orbit);
          const indexInOrbit = itemsInOrbit.findIndex(t => t.name === tech.name);
          
          return (
            <OrbitNode 
              key={tech.name} 
              tech={tech} 
              index={indexInOrbit} 
              totalInOrbit={itemsInOrbit.length} 
            />
          );
        })}
      </div>
    </section>
  );
};
