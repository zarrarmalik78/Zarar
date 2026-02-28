import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, Send, MapPin, Phone } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Amazing</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg font-light leading-relaxed">
              Whether you have a project in mind, need a developer to join your team, or just want to chat about tech—I'm always open to new opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Location</h4>
                  <p>Islamabad, Pakistan (Remote Available)</p>
                </div>
              </div>
              
              <a href="mailto:zarrarmalik78@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 group">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Email Me</h4>
                  <p>zarrarmalik78@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/923259914121" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 group">
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Call / WhatsApp</h4>
                  <p>+92 325 991 4121</p>
                </div>
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
            
            <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-12 space-y-6">
              <div className="space-y-6">
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
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="peer w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 py-3 text-lg text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-indigo-500">Your Message</label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative flex items-center justify-center py-4 px-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] disabled:opacity-70"
              >
                <span className="relative flex items-center gap-2">
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
                </span>
              </button>
              
              {success && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl text-center font-medium border border-green-200">
                  Message sent! I'll get back to you shortly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
