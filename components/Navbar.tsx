
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// Fixed: Explicit named imports for Link and useLocation from react-router-dom to resolve resolution errors
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed z-50 transition-all duration-300 w-full flex justify-center ${
        scrolled ? 'top-4' : 'top-0'
      }`}
    >
      <div 
        className={`${
          scrolled 
            ? 'w-[95%] md:w-[85%] max-w-5xl rounded-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-indigo-500/5' 
            : 'w-full bg-transparent border-transparent'
        } transition-all duration-500 px-6 py-4`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 cursor-pointer">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400">
              Zarar.
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.name === 'Contact' && location.pathname === '/services' ? '#contact' : link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.href ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full group-hover:left-0 duration-300 ${location.pathname === link.href ? 'w-full left-0' : ''}`}></span>
              </Link>
            ))}
            
            <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-700">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors text-slate-600 dark:text-slate-300"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mode Toggle */}
              <Link
                to={location.pathname === '/services' ? '/' : '/services'}
                className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-colors"
              >
                <div className={`w-2 h-2 rounded-full ${location.pathname === '/services' ? 'bg-green-500' : 'bg-indigo-500'}`}></div>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  {location.pathname === '/services' ? 'Business Mode' : 'Dev Mode'}
                </span>
              </Link>

              <Link 
                to={location.pathname === '/services' ? '#contact' : '/contact'}
                className="px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-shadow duration-300"
              >
                Hire Me
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden border-t border-slate-200 dark:border-slate-800 pt-4"
            >
              <div className="flex flex-col space-y-4 pb-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.name === 'Contact' && location.pathname === '/services' ? '#contact' : link.href}
                    className="block text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all pl-2 border-l-2 border-transparent hover:border-indigo-500"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to={location.pathname === '/services' ? '#contact' : '/contact'}
                  className="block w-full text-center py-3 bg-indigo-600 text-white font-bold rounded-xl mt-4 shadow-lg shadow-indigo-500/30"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
