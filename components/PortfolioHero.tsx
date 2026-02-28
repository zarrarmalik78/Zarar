import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { HackerText } from './HackerText';

const TOTAL_FRAMES = 96;

export const PortfolioHero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setLoadedFrames] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // ========== PHASE 1: Original Hero (0% - 15%) ==========
  // Hero text fades out as user starts scrolling
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.12], [0, -30]);

  // ========== Canvas: starts on right, moves to center ==========
  const canvasX = useTransform(scrollYProgress, [0, 0.15], ["25%", "0%"]);
  const canvasScale = useTransform(scrollYProgress, [0, 0.15], [0.45, 1]);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.01, 0.92, 1], [1, 1, 1, 0]);

  // ========== PHASE 2: Scrollytelling Text (after hero fades) ==========
  // Section 1: 15% - 30% (Bottom Left) — "Zarar Malik."
  const s1Opacity = useTransform(scrollYProgress, [0.15, 0.18, 0.25, 0.30], [0, 1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0.15, 0.18], [30, 0]);

  // Section 2: 40% - 55% (Top Right) — "Frontend Precision."
  const s2Opacity = useTransform(scrollYProgress, [0.37, 0.40, 0.50, 0.55], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.37, 0.40], [30, 0]);

  // Section 3: 60% - 75% (Middle Left) — "Backend Power."
  const s3Opacity = useTransform(scrollYProgress, [0.57, 0.60, 0.70, 0.75], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.57, 0.60], [30, 0]);

  // Section 4: 80% - 100% (Bottom Center) — "Ready to Scale."
  const s4Opacity = useTransform(scrollYProgress, [0.78, 0.82, 0.92, 1], [0, 1, 1, 1]);
  const s4Y = useTransform(scrollYProgress, [0.78, 0.82], [30, 0]);

  // Glow effect
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.8]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.8, 0]);

  // ========== Image Preloader ==========
  useEffect(() => {
    let isMounted = true;
    const frames: HTMLImageElement[] = [];

    const preloadImages = async () => {
      const loadFrame = (index: number): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          const frameNum = String(index - 1).padStart(2, "0");
          img.src = `/nframes/frame_${frameNum}_delay-0.1s.webp`;
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Failed to load frame ${index}`));
        });
      };

      let firstDrawn = false;
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (!isMounted) break;
        try {
          const img = await loadFrame(i);
          frames[i] = img;
          imagesRef.current = [...frames];
          setLoadedFrames(prev => prev + 1);
          if (!firstDrawn) { drawFrame(1); firstDrawn = true; }
        } catch { console.warn(`Skipping frame ${i}`); }
      }
    };

    preloadImages();
    return () => { isMounted = false; };
  }, []);

  // ========== Canvas Drawing ==========
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];
    if (!img) {
      for (let i = frameIndex - 1; i > 0; i--) {
        if (imagesRef.current[i]) { img = imagesRef.current[i]; break; }
      }
    }
    if (!img) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, w, h);

    // Fill with exact site bg to eliminate white frame border
    const isDark = document.documentElement.classList.contains('dark');
    ctx.fillStyle = isDark ? '#030014' : '#f8fafc';
    ctx.fillRect(0, 0, w, h);

    const canvasRatio = w / h;
    const imgRatio = img.width / img.height;
    let rw, rh, ox, oy;

    if (canvasRatio > imgRatio) {
      rh = h; rw = img.width * (h / img.height); ox = (w - rw) / 2; oy = 0;
    } else {
      rw = w; rh = img.height * (w / img.width); ox = 0; oy = (h - rh) / 2;
    }

    ctx.drawImage(img, ox, oy, rw, rh);
  };

  // Animation starts after laptop centers (15%), plays through remaining 85%
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = Math.max(0, (latest - 0.15) / 0.85);
    const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.floor(progress * TOTAL_FRAMES) + 1));
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  useEffect(() => {
    const handleResize = () => {
      const s = scrollYProgress.get();
      const progress = Math.max(0, (s - 0.15) / 0.85);
      const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.floor(progress * TOTAL_FRAMES) + 1));
      requestAnimationFrame(() => drawFrame(frameIndex));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollYProgress]);

  return (
    <>
      {/* ===== FIXED CANVAS LAYER ===== */}
      <motion.div
        style={{ opacity: canvasOpacity }}
        className="fixed inset-0 w-screen h-screen z-0 pointer-events-none"
      >
        {/* Site background */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#030014]"></div>

        {/* Grid — hidden in center where canvas sits */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, transparent 20%, black 80%)',
            maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, transparent 20%, black 80%)',
          }}
        ></div>

        {/* Decorative blobs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] animate-blob delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>

        {/* Glow orb */}
        <motion.div
          style={{ scale: glowScale, opacity: glowOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-400/30 blur-[120px]"
        />

        {/* Canvas — slides from right to center */}
        <motion.div
          style={{ x: canvasX, scale: canvasScale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <canvas
            ref={canvasRef}
            className="w-[85vw] h-[85vh] max-w-[1400px] bg-slate-50 dark:bg-[#030014]"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 35%, transparent 75%)',
              maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, black 35%, transparent 75%)',
            }}
          />
        </motion.div>

        {/* ===== SCROLLYTELLING TEXT (appears AFTER hero fades) ===== */}
        <div className="absolute inset-0 max-w-7xl mx-auto w-full h-full pointer-events-none p-6 sm:p-12 lg:p-20">

          {/* Section 1: 15% - 30% (Bottom Left) */}
          <motion.div style={{ opacity: s1Opacity, y: s1Y }} className="absolute bottom-16 sm:bottom-24 left-6 sm:left-12 lg:left-20 max-w-lg">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Zarar Malik.
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mt-4 font-medium">
              Full Stack Engineer & Digital Growth Specialist.
            </p>
          </motion.div>

          {/* Section 2: 40% - 55% (Top Right) */}
          <motion.div style={{ opacity: s2Opacity, y: s2Y }} className="absolute top-24 sm:top-32 right-6 sm:right-12 lg:right-20 max-w-lg text-right">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                Frontend Precision.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium">
              Pixel-perfect React & Next.js interfaces.
            </p>
          </motion.div>

          {/* Section 3: 60% - 75% (Middle Left) */}
          <motion.div style={{ opacity: s3Opacity, y: s3Y }} className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-12 lg:left-20 max-w-lg">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-slate-900 dark:text-white">
              Backend Power.
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium">
              Scalable Node.js & secure databases.
            </p>
          </motion.div>

          {/* Section 4: 80% - 100% (Bottom Center) */}
          <motion.div style={{ opacity: s4Opacity, y: s4Y }} className="absolute bottom-16 sm:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-full px-4">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                Ready to Scale.
              </span>
            </h2>
            <div className="pointer-events-auto">
              <a href="#/projects" className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 hover:scale-105 hover:-translate-y-0.5">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                  Explore My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ===== SCROLL-TRACK ===== */}
      <div ref={sectionRef} id="home" className="relative h-[500vh] w-full">

        {/* ===== ORIGINAL HERO CONTENT (visible on page load, fades on scroll) ===== */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute top-0 left-0 right-0 h-screen flex items-center z-20 pt-16"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">
            {/* Left Content */}
            <div className="w-full lg:w-[60%] text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-500/10 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase">Welcome to my portfolio</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.05] flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                }}
                initial="hidden"
                animate="visible"
              >
                {["Hi!", "My", "name", "is", "Zarar,", "A", "Full", "Stack", "Developer"].map((word, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
                    }}
                    className={index >= 5 ? "text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-400 relative group cursor-default" : "relative group cursor-default"}
                  >
                    <span className="group-hover:hidden">{word}</span>
                    <span className="hidden group-hover:inline-block absolute inset-0">
                      <HackerText text={word} />
                    </span>
                    <span className="md:hidden">{word}</span>
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="space-y-4 mb-10"
              >
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  Specializing in <span className="text-indigo-600 dark:text-indigo-400 font-bold">React</span>, <span className="text-indigo-600 dark:text-indigo-400 font-bold">Next.js</span>, and <span className="text-teal-500 font-bold">AI-driven automation</span>.
                </p>
                <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I craft high-performance applications and streamline business processes to help you scale efficiently.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start"
              >
                <a href="#/projects" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1">
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a href="#/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  Contact Me
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex items-center justify-center lg:justify-start gap-6"
              >
                <a href="https://github.com/Zarar-Malik-eng" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-[#2b3137] hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-slate-200 dark:shadow-none" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/zarar-malik-54b036284" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-blue-200 dark:shadow-none" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:zarrarmalik78@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-[#ea4335] hover:bg-[#ea4335] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-red-200 dark:shadow-none" aria-label="Email">
                  <Mail size={24} />
                </a>
              </motion.div>
            </div>

            {/* Right Spacer (the canvas laptop fills this area visually) */}
            <div className="hidden lg:block lg:w-[40%]" />
          </div>
        </motion.div>
      </div>
    </>
  );
};
