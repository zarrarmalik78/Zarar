import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, MessageCircle, ArrowRight, ShieldCheck, MapPin, CheckCircle2, Clock, Calendar } from 'lucide-react';

export const BusinessContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', businessType: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', businessType: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const workflow = [
    {
      icon: Clock,
      title: "Discovery Phase",
      time: "24-48 Hours",
      desc: "I review your business, audit your local competition, and map out the biggest growth opportunities."
    },
    {
      icon: Calendar,
      title: "Strategy Session",
      time: "Scheduled Call",
      desc: "We jump on a 30-min call to refine the plan and ensure it aligns perfectly with your revenue goals."
    },
    {
      icon: CheckCircle2,
      title: "The Build & Launch",
      time: "7-14 Days",
      desc: "Your high-conversion site goes live, local SEO is activated, and your business stops being invisible."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#030014] transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left: Expectations & Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide">
                Get In Touch
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
                Let's Build Your <span className="text-indigo-500">Digital Legacy</span>
              </h1>
              
              <div className="space-y-12 mt-16">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  What Happens Next?
                </h3>
                <div className="space-y-8 relative">
                  {/* Vertical line */}
                  <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
                  
                  {workflow.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex gap-8 relative z-10"
                    >
                      <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-sm text-indigo-500">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <h4 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h4>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-0.5 rounded-full">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                  <MapPin size={20} className="text-indigo-500" /> Islamabad, Pakistan (Remote Worldwide)
                </div>
                <div className="flex flex-wrap gap-8">
                  <a href="mailto:zarrarmalik78@gmail.com" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
                    <Mail size={20} className="text-indigo-500" /> zarrarmalik78@gmail.com
                  </a>
                  <a href="https://wa.me/923259914121" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">
                    <MessageCircle size={20} className="text-indigo-500" /> +92 325 991 4121
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative"
            >
              <div className="absolute inset-0 bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl"></div>
              
              <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-16 space-y-10">
                <div className="space-y-10">
                  <div className="group relative">
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 text-lg text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder=" "
                    />
                    <label className="absolute left-0 -top-4 text-xs font-bold uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-indigo-500">Your Full Name</label>
                  </div>

                  <div className="group relative">
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 text-lg text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder=" "
                    />
                    <label className="absolute left-0 -top-4 text-xs font-bold uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-indigo-500">Email Address</label>
                  </div>

                  <div className="group relative">
                    <input
                      type="text"
                      required
                      value={formState.businessType}
                      onChange={e => setFormState({...formState, businessType: e.target.value})}
                      className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 text-lg text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder=" "
                    />
                    <label className="absolute left-0 -top-4 text-xs font-bold uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-indigo-500">Business Industry</label>
                  </div>

                  <div className="group relative">
                    <textarea
                      required
                      value={formState.message}
                      onChange={e => setFormState({...formState, message: e.target.value})}
                      className="peer w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 text-lg text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors min-h-[100px]"
                      placeholder=" "
                    />
                    <label className="absolute left-0 -top-4 text-xs font-bold uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-indigo-500">What are you looking to achieve?</label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative flex items-center justify-center py-6 px-8 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] disabled:opacity-70"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center gap-3">
                    {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Project Inquiry <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                  </span>
                </button>
                
                <div className="flex items-center justify-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  100% Privacy & Zero Spam Guaranteed
                </div>

                {success && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-6 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-2xl text-center font-bold border border-emerald-100 dark:border-emerald-800/50">
                    Message Sent! Check your email for next steps.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};