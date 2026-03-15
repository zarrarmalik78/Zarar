import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useSpring } from "@react-spring/web";

export const InteractiveGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);

  // We use react-spring to smoothly animate the globe's rotation when dragging
  const [{ r: springR }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;

    // Use a small timeout to ensure the container size is calculated
    const onResize = () => {
       if (canvasRef.current) {
          canvasRef.current.style.width = '100%';
          canvasRef.current.style.height = '100%';
       }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 1, 
      diffuse: 1.2,
      mapSamples: 30000, // High res
      mapBrightness: 6,
      baseColor: [0.05, 0.05, 0.1], // Deep space black/indigo
      markerColor: [0.1, 0.8, 1], // Cyan/Teal markers
      glowColor: [0.1, 0.2, 0.6], // Deep indigo glow
      markers: [
        // longitude, latitude, size
        { location: [33.6844, 73.0479], size: 0.15 }, // Islamabad, Pakistan
        { location: [37.7749, -122.4194], size: 0.08 }, // San Francisco
        { location: [51.5074, -0.1278], size: 0.06 }, // London
        { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
        { location: [40.7128, -74.0060], size: 0.08 }, // New York
        { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo
        { location: [25.2048, 55.2708], size: 0.07 }, // Dubai
      ],
      onRender: (state) => {
        // This is called on every frame of the globe's rotation
        // If the user isn't interacting, auto-rotate based on phi.
        if (!pointerInteracting.current) {
          phi += 0.005; 
        }
        
        // Add the smooth react-spring rotation value to the base phi
        state.phi = phi + springR.get();
        state.width = canvasRef.current!.offsetWidth * 2;
        state.height = canvasRef.current!.offsetHeight * 2;
      },
    });

    return () => {
      window.removeEventListener('resize', onResize);
      globe.destroy();
    };
  }, [springR]);

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-blue-500/10 dark:bg-indigo-500/20 blur-[100px] rounded-full -z-10 animate-pulse pointer-events-none"></div>
      
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            // Map the pixel delta to a rotation angle
            api.start({ r: delta / 200 });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 100 });
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0.9,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
};
