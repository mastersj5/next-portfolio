import React, { useState, useEffect } from 'react';
import { useProgress } from '@react-three/drei';

export function LoadingScreen({ started, onStarted }) {
  const { progress } = useProgress(); // loading percentage

  // CSS fade-out effect when started
  const [visible, setVisible] = useState(true);

  // The "Smooth" Progress State
  const [activeProgress, setActiveProgress] = useState(0);

  useEffect(() => {
    if (started) {
        // Wait for the CSS transition to finish before removing from DOM
        setTimeout(() => setVisible(false), 500); 
    }
  }, [started]);

  // The Smoothing Loop (Fixed)
  useEffect(() => {
    let animationFrame;
    const updateProgress = () => {
      setActiveProgress((prev) => {
        const diff = progress - prev;
        if (Math.abs(diff) < 0.5) return progress; // Snap to finish
        return prev + diff * 0.05; // Ease towards target
      });
      
      // Keep looping until we match
      animationFrame = requestAnimationFrame(updateProgress);
    };

    // Start the loop
    animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, [progress, activeProgress]); // Re-run when target changes

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
        started ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center max-w-md w-full px-4">
        
        {/* PROGRESS BAR SECTION */}
        {activeProgress < 100 ? (
          <div className="space-y-4">
             <div className="text-white font-mono text-xl animate-pulse">
                Initializing Environment... {Math.round(activeProgress)}%
             </div>
             {/* The Bar Container */}
             <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                {/* The Filling Bar */}
                <div 
                    className="h-full bg-blue-500 transition-all duration-200 ease-out"
                    style={{ width: `${progress}%` }}
                />
             </div>
          </div>
        ) : (
          /* START BUTTON SECTION (Appears when 100%) */
          <button 
            onClick={onStarted}
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
          >
             {/* Fancy Border Effect */}
             <div className="absolute inset-0 border-2 border-white/20 rounded-lg group-hover:border-blue-500/50 transition-colors" />
             <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
             
             <span className="relative text-2xl font-bold text-white tracking-widest uppercase font-mono">
                Enter Lab
             </span>
          </button>
        )}

      </div>
      
      {/* Footer Text */}
      <div className="absolute bottom-8 text-white/30 text-xs font-mono">
         Use Mouse to Orbit • Scroll to Zoom • Click Objects
      </div>
    </div>
  );
}