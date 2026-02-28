import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Search, Clock, AlertTriangle } from 'lucide-react';

const COSTS = [
  {
    title: "Lost Trust",
    desc: "84% of consumers believe a website makes your business more credible than just a social media page. Without one, they choose your competitor.",
    icon: ShieldAlert,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Missed Leads",
    desc: "People are searching for your services on Google right now. Without a site, you're handing those calls directly to your competitors.",
    icon: Search,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Zero Automation",
    desc: "A website works 24/7. Let your site handle the FAQs and booking requests while you sleep, instead of answering calls at dinner.",
    icon: Clock,
    color: "from-purple-500 to-pink-500"
  }
];

export const PainPoints: React.FC = () => {
  return (
    <section id="cost-of-inaction" className="py-24 bg-white dark:bg-[#030014] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
            <AlertTriangle size={14} className="text-red-500" />
            <span className="text-xs font-bold text-red-500 tracking-wide uppercase">The Cost of Waiting</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            The Hidden Cost of <br /> <span className="text-red-500 underline decoration-2 underline-offset-8">Not</span> Having a Website
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COSTS.map((cost, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cost.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                <cost.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cost.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{cost.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};