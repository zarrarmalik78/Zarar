import React from 'react';
import { motion } from 'framer-motion';
import { User, Hash, Users, Info } from 'lucide-react';

export const AssignmentPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px] animate-blob delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl relative z-10"
      >
        <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header/Title Section */}
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 p-1">
            <div className="bg-white dark:bg-slate-900 px-8 py-6 rounded-[22px]">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white text-center">
                PT-1 Assignment Web Page
              </h1>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-10">
            {/* Profile Image */}
            <div className="flex justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="/profile.jpg"
                  alt="Zarar Moaviya"
                  className="relative w-32 h-32 sm:w-44 h-44 rounded-[2rem] object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 gap-6">
              {/* Name & Reg */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Student Name</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">Zarar Moaviya</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Hash size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Registration Number</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">5022-FOC/BSCS/F23</p>
                  </div>
                </div>
              </div>

              {/* Group Members */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500">
                    <Users size={20} />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Group Members</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Abuzar Amir", "Wahab Ejaz", "Zarar Moaviya"].map((member) => (
                    <div key={member} className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-base font-bold text-slate-800 dark:text-slate-200 text-center shadow-sm">
                      {member}
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100/50 dark:border-indigo-500/10">
                <div className="mt-0.5 text-indigo-500">
                  <Info size={18} />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  This page is created for PT-1 assignment submission as part of the web engineering course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
