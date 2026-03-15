import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, Send, MapPin, Phone } from 'lucide-react';
import { InteractiveGlobe } from './InteractiveGlobe';

export const PortfolioContact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#030014] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            Global scale. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400">
              Local precision.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
            I build scalable software solutions for clients all over the world. Where are we launching your next project?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: 3D Earth & Contact Quick Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center justify-center w-full"
          >
            {/* The 3D WebGL Globe */}
            <div className="relative w-full aspect-square flex items-center justify-center">
               <InteractiveGlobe />
               
               {/* Floating Ambient Glow Behind Globe */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 dark:bg-indigo-500/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
            </div>

            {/* Quick Contact Buttons Floating Over the Bottom of the Globe */}
            <div className="absolute bottom-0 lg:bottom-12 flex flex-col gap-4 w-full max-w-[360px] justify-center translate-y-8 sm:translate-y-0 z-20 px-4">
               
               {/* Email Card */}
               <a href="mailto:zarrarmalik78@gmail.com" className="w-full flex items-center gap-4 bg-[#e5e7f0] dark:bg-[#1a1b26]/90 backdrop-blur-3xl px-5 py-4 rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                  <div className="bg-[#e0e7ff] dark:bg-[#2d325a] p-3 rounded-2xl text-[#6366f1] group-hover:scale-110 transition-transform">
                    <Mail size={22} className="stroke-[2.5px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">Email</span>
                    <span className="text-[15px] font-bold text-[#6366f1] tracking-tight">zarrarmalik78@gmail.com</span>
                  </div>
               </a>

               {/* Phone Card */}
               <a href="https://wa.me/923259914121" className="w-full flex items-center gap-4 bg-[#e5e7f0] dark:bg-[#1a1b26]/90 backdrop-blur-3xl px-5 py-4 rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                  <div className="bg-[#f3e8ff] dark:bg-[#3b2d5a] p-3 rounded-2xl text-[#a855f7] group-hover:scale-110 transition-transform">
                    <Phone size={22} className="stroke-[2.5px]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">Phone / WhatsApp</span>
                    <span className="text-[15px] font-bold text-[#0f172a] dark:text-white tracking-tight">+92 325 991 4121</span>
                  </div>
               </a>

            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative mt-16 lg:mt-0"
          >
            <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[32px] border border-white/40 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 p-8 sm:p-12 space-y-8">
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">Send a Message</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-8">
                Tell me about your project, timeline, and goals. I'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="group relative">
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-lg font-medium text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder=" "
                  />
                  <label className="absolute left-0 -top-3.5 text-sm font-bold tracking-wide text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500">Your Name</label>
                </div>

                <div className="group relative">
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-lg font-medium text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    placeholder=" "
                  />
                  <label className="absolute left-0 -top-3.5 text-sm font-bold tracking-wide text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500">Email Address</label>
                </div>

                <div className="group relative">
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-lg font-medium text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute left-0 -top-3.5 text-sm font-bold tracking-wide text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500">Project Details</label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative flex items-center justify-center py-4 px-8 rounded-2xl bg-indigo-600 text-white font-black tracking-wide text-lg overflow-hidden transition-all hover:bg-indigo-700 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <>Initialize Sequence <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              {success && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl text-center font-bold border border-emerald-500/20 backdrop-blur-sm shadow-xl">
                  Message successfully securely transmitted! 🚀
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
