import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
// Switched to HashRouter for better compatibility in preview environments
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BusinessContactPage } from './pages/BusinessContactPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { MessageSquare } from 'lucide-react';

export default function App() {
  // Default to false for Light Mode
  const [darkMode, setDarkMode] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowFab(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    console.log(
      "%cHey! Looking under the hood? 🚀",
      "color: #6366f1; font-size: 20px; font-weight: bold; padding: 10px;"
    );
    console.log(
      "%cCheck out the source code or say hi at zarrarmalik78@gmail.com",
      "color: #a855f7; font-size: 14px; padding: 5px;"
    );
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden bg-slate-50 dark:bg-[#030014] transition-colors duration-500">
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[100] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        {/* Enhanced Spotlight Effect */}
        <div 
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" 
          style={{ 
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)` 
          }} 
        />
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 origin-left z-[60]" style={{ scaleX }} />

        <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
        
        <main className="flex flex-col relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/business-contact" element={<BusinessContactPage />} />
          </Routes>
        </main>

        <Footer />

        <AnimatePresence>
          {showFab && (
            <motion.a
              href="#/contact"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed bottom-6 right-6 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-2xl md:hidden flex items-center justify-center"
              aria-label="Contact Me"
            >
              <MessageSquare size={24} />
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}