import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, GitCommit, Users } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: "Projects Delivered",
    value: 45,
    suffix: "+",
    icon: Code,
    color: "from-indigo-500 to-blue-500",
    shadow: "shadow-indigo-500/20"
  },
  {
    id: 2,
    label: "Hours of Automation Saved",
    value: 1200,
    suffix: "+",
    icon: Coffee,
    color: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/20"
  },
  {
    id: 3,
    label: "GitHub Commits (2024)",
    value: 850,
    suffix: "",
    icon: GitCommit,
    color: "from-emerald-500 to-green-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    id: 4,
    label: "Happy Clients",
    value: 30,
    suffix: "+",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/20"
  }
];

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#030014] -z-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                   style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              >
                <div className={`w-full h-full bg-gradient-to-r ${stat.color}`}></div>
              </div>
              
              <div className="relative h-full bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 rounded-2xl overflow-hidden hover:border-transparent transition-colors duration-300">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500`}></div>
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 text-white shadow-lg ${stat.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} />
                </div>
                
                <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
                  <Counter from={0} to={stat.value} duration={2} />
                  <span className={`text-transparent bg-clip-text bg-gradient-to-br ${stat.color}`}>
                    {stat.suffix}
                  </span>
                </div>
                
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
  const [count, setCount] = React.useState(from);
  const nodeRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
};
