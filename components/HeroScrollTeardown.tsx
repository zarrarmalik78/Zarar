import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 96; // 00 to 95 implies 96 frames

export default function HeroScrollTeardown() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loadedFrames, setLoadedFrames] = useState(0);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    // Create a scroll track using framer-motion
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Calculate loading percentage
    const loadPercentage = useMemo(() => {
        return Math.floor((loadedFrames / TOTAL_FRAMES) * 100);
    }, [loadedFrames]);

    const imagesLoaded = loadedFrames >= Math.floor(TOTAL_FRAMES / 2); // 50% loaded as instructed

    // Progressive Preloader
    useEffect(() => {
        if (typeof window === "undefined") return;

        let isMounted = true;
        const frames: HTMLImageElement[] = [];

        const preloadImages = async () => {
            // Load first frame immediately
            const loadFrame = (index: number): Promise<HTMLImageElement> => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    const frameNum = String(index - 1).padStart(2, "0"); // map 1-based index (1-96) to 0-based filename (00-95)
                    img.src = `/nframes/frame_${frameNum}_delay-0.1s.webp`;
                    img.onload = () => resolve(img);
                    img.onerror = () => reject(new Error(`Failed to load frame ${index}`));
                });
            };

            try {
                // Load the 1st frame immediately to show it
                const firstFrame = await loadFrame(1);
                if (!isMounted) return;

                frames[1] = firstFrame;
                imagesRef.current = frames;
                setLoadedFrames(1);

                // Draw the first frame right away
                drawFrame(1);

                // Lazily load the rest
                for (let i = 2; i <= TOTAL_FRAMES; i++) {
                    if (!isMounted) break;
                    const img = await loadFrame(i);
                    frames[i] = img;
                    imagesRef.current = frames;
                    setLoadedFrames((prev) => prev + 1);
                }
            } catch (error) {
                console.error("Error preloading sequence:", error);
            }
        };

        preloadImages();

        return () => {
            isMounted = false;
        };
    }, []);

    // Frame Drawing Logic
    const drawFrame = (frameIndex: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imagesRef.current[frameIndex];
        if (!img) return; // If not loaded yet

        // Handle high DPI displays
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        // Set canvas dimensions based on physical pixels (avoids blurriness)
        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        }

        // Object-fit: contain logic for drawing
        ctx.clearRect(0, 0, rect.width, rect.height);

        const canvasRatio = rect.width / rect.height;
        const imgRatio = img.width / img.height;

        let renderWidth, renderHeight, xOffset, yOffset;

        if (canvasRatio > imgRatio) {
            renderHeight = rect.height;
            renderWidth = img.width * (rect.height / img.height);
            xOffset = (rect.width - renderWidth) / 2;
            yOffset = 0;
        } else {
            renderWidth = rect.width;
            renderHeight = img.height * (rect.width / img.width);
            xOffset = 0;
            yOffset = (rect.height - renderHeight) / 2;
        }

        ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
    };

    // Bind scroll progress to frame index mapping using requestAnimationFrame
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // latest is between 0 and 1
        const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.floor(latest * TOTAL_FRAMES) + 1));
        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    // Handle Resize redraw
    useEffect(() => {
        if (typeof window === "undefined") return;
        const handleResize = () => {
            // Current frame based on scroll
            const currentScroll = scrollYProgress.get();
            const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.floor(currentScroll * TOTAL_FRAMES) + 1));
            requestAnimationFrame(() => drawFrame(frameIndex));
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [scrollYProgress]);

    // Framer Motion mappings for Text Overlays

    // Section 1: 0% - 15% (Bottom Left)
    const section1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [0, 1, 1, 0]);
    const section1Y = useTransform(scrollYProgress, [0, 0.05], [20, 0]);

    // Section 2: 35% - 50% (Top Right)
    const section2Opacity = useTransform(scrollYProgress, [0.32, 0.35, 0.45, 0.50], [0, 1, 1, 0]);
    const section2Y = useTransform(scrollYProgress, [0.32, 0.35], [20, 0]);

    // Section 3: 65% - 80% (Middle Left)
    const section3Opacity = useTransform(scrollYProgress, [0.62, 0.65, 0.75, 0.80], [0, 1, 1, 0]);
    const section3Y = useTransform(scrollYProgress, [0.62, 0.65], [20, 0]);

    // Section 4: 85% - 100% (Bottom Center)
    const section4Opacity = useTransform(scrollYProgress, [0.85, 0.90, 1, 1], [0, 1, 1, 1]); // keep visible at end
    const section4Y = useTransform(scrollYProgress, [0.85, 0.90], [20, 0]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-white w-full z-20">
            {/* Loading State Overlay */}
            {!imagesLoaded && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
                    <p className="text-slate-900 font-medium text-lg tracking-tight mb-2">Loading sequence...</p>
                    <p className="text-slate-500 text-sm">{loadPercentage}%</p>
                    <div className="w-48 h-1 bg-slate-100 mt-4 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-slate-900 transition-all duration-300 ease-out"
                            style={{ width: `${loadPercentage}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Sticky Canvas Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-white">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain"
                />

                {/* Text Overlays Wrapper */}
                <div className="absolute inset-0 max-w-7xl mx-auto w-full h-full pointer-events-none p-6 sm:p-12 lg:p-24">

                    {/* Section 1: 0% - 15% (Bottom Left) */}
                    <motion.div
                        style={{ opacity: section1Opacity, y: section1Y }}
                        className="absolute bottom-12 sm:bottom-24 left-6 sm:left-12 lg:left-24 max-w-lg"
                    >
                        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                            Zarar Malik.
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-600 mt-4 font-medium">
                            Full Stack Engineer & Digital Growth Specialist.
                        </p>
                    </motion.div>

                    {/* Section 2: 35% - 50% (Top Right) */}
                    <motion.div
                        style={{ opacity: section2Opacity, y: section2Y }}
                        className="absolute top-24 sm:top-32 right-6 sm:right-12 lg:right-24 max-w-lg text-right"
                    >
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
                            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                                Frontend Precision.
                            </span>
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 font-medium">
                            Pixel-perfect React & Next.js interfaces.
                        </p>
                    </motion.div>

                    {/* Section 3: 65% - 80% (Middle Left) */}
                    <motion.div
                        style={{ opacity: section3Opacity, y: section3Y }}
                        className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-12 lg:left-24 max-w-lg"
                    >
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                            Backend Power.
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-600 font-medium">
                            Scalable Node.js & secure databases.
                        </p>
                    </motion.div>

                    {/* Section 4: 85% - 100% (Bottom Center) */}
                    <motion.div
                        style={{ opacity: section4Opacity, y: section4Y }}
                        className="absolute bottom-12 sm:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-full px-4"
                    >
                        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                                Ready to Scale.
                            </span>
                        </h2>
                        <div className="pointer-events-auto flex items-center gap-4">
                            <a href="#/projects" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-slate-900 overflow-hidden rounded-full hover:bg-slate-800 hover:scale-105">
                                <span className="relative z-10">Explore My Work</span>
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
