import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, MessageCircle, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', businessType: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', businessType: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#030014] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Get Your Custom <span className="text-indigo-500">Launch Plan</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg font-light leading-relaxed">
              I’ll look at your business and tell you exactly what you need to start ranking on Google. No technical jargon, no high-pressure sales—just a clear roadmap delivered to your inbox.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/20 mb-8 max-w-lg">
              <div className="flex gap-4 items-start">
                <ShieldCheck className="text-indigo-500 shrink-0" size={24} />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>The Zarar Guarantee:</strong> I only work with businesses where I can guarantee measurable results. If I don't think I can help you, I'll tell you honestly.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <MapPin size={20} className="text-indigo-500" /> Islamabad, Pakistan (Remote Worldwide)
              </div>
              <a href="mailto:zarrarmalik78@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
                <Mail size={20} className="text-indigo-500" /> zarrarmalik78@gmail.com
              </a>
              <a href="https://wa.me/923259914121" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
                <MessageCircle size={20} className="text-indigo-500" /> +92 325 991 4121
              </a>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2rem] border border-white/20 dark:border-slate-700/50 shadow-2xl"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-12 space-y-8">
              <div className="space-y-8">
                <div className="group relative">
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-lg text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder=" "
                  />
                  <label className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500">Your Name</label>
                </div>

                <div className="group relative">
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-lg text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder=" "
                  />
                  <label className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500">Email Address</label>
                </div>

                <div className="group relative">
                  <input
                    type="text"
                    required
                    value={formState.businessType}
                    onChange={e => setFormState({...formState, businessType: e.target.value})}
                    className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-lg text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder=" "
                  />
                  <label className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500">What business do you run? (e.g. Plumber, Dentist, Retail)</label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative flex items-center justify-center py-5 px-8 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] disabled:opacity-70"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center">
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Me My Launch Plan <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
                </span>
              </button>
              
              {success && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl text-center font-medium border border-green-200">
                  Plan requested! Check your inbox soon for your roadmap.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};