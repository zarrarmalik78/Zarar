import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Zap, GitCommit, Users2 } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: "Projects Delivered",
    value: 45,
    suffix: "+",
    icon: Code2,
    gradient: "from-blue-500 to-indigo-500",
    shadow: "shadow-indigo-500/50",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Production Apps",
    value: 15,
    suffix: "+",
    icon: Zap,
    gradient: "from-amber-400 to-orange-500",
    shadow: "shadow-orange-500/50",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Experience Years",
    value: 4,
    suffix: "+",
    icon: GitCommit,
    gradient: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/50",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Happy Clients",
    value: 50,
    suffix: "+",
    icon: Users2,
    gradient: "from-fuchsia-500 to-pink-500",
    shadow: "shadow-pink-500/50",
    delay: 0.4,
  }
];

const Counter = ({ from, to, duration, inView }: { from: number; to: number; duration: number, inView: boolean }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (to - from) + from));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [from, to, duration, inView]);

  return <span>{count.toLocaleString()}</span>;
};

export const StatsCounter: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 relative z-10 w-full flex justify-center px-4 sm:px-6">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-32 bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px] -z-10 pointer-events-none rounded-full"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="relative w-full max-w-6xl rounded-3xl sm:rounded-[40px] p-[1px] group overflow-hidden"
      >
        {/* Animated border line sweeping across */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute inset-0 bg-slate-200/50 dark:bg-white/5 rounded-3xl sm:rounded-[40px]"></div>

        {/* Inner Glass Container */}
        <div className="relative bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-3xl sm:rounded-[40px] p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 border border-slate-100 dark:border-white/10">

          {stats.map((stat, idx) => (
            <React.Fragment key={stat.id}>
              <div className="flex flex-col items-center justify-center flex-1 text-center group/stat relative px-2">

                {/* Floating Icon */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ delay: stat.delay + 0.2, type: "spring" }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${stat.gradient} text-white shadow-lg ${stat.shadow} group-hover/stat:scale-110 group-hover/stat:-translate-y-2 transition-all duration-300`}
                >
                  <stat.icon size={24} strokeWidth={2.5} />
                </motion.div>

                {/* Big Number */}
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className={`text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}>
                    <Counter from={0} to={stat.value} duration={2.5} inView={isInView} />
                  </span>
                  <span className={`text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}>
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1 group-hover/stat:text-slate-800 dark:group-hover/stat:text-white transition-colors duration-300">
                  {stat.title}
                </div>
              </div>

              {/* Minimal vertical dividers between stats (hidden on mobile) */}
              {idx !== stats.length - 1 && (
                <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
              )}
              {/* Horizontal divider on mobile */}
              {idx !== stats.length - 1 && (
                <div className="block md:hidden h-px w-3/4 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent my-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
