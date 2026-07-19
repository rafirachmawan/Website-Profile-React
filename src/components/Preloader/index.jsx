import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800); // Pause longer at 100%
          return 100;
        }
        // Increment slower for longer viewing
        return prev + Math.floor(Math.random() * 12) + 2;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999999] bg-[#ffe600] flex flex-col items-center justify-center border-b-8 border-black overflow-hidden"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Background Marquee Text */}
          <div className="absolute top-1/4 w-[200%] flex whitespace-nowrap opacity-10 pointer-events-none -rotate-12">
            <div className="font-heading font-black text-[20vw] leading-none animate-marquee text-black">
              LOADING LOADING LOADING LOADING LOADING 
            </div>
          </div>

          {/* Huge Progress Number */}
          <div 
            className="relative z-10 font-heading font-black text-8xl md:text-[15rem] leading-none tracking-tighter text-white" 
            style={{ textShadow: "8px 8px 0px black, -2px -2px 0px black, 2px -2px 0px black, -2px 2px 0px black, 2px 2px 0px black" }}
          >
            {progress > 100 ? 100 : progress}%
          </div>
          
          {/* Loading Bar Container */}
          <div className="relative z-10 w-64 md:w-96 h-10 bg-white border-4 border-black mt-12 p-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <motion.div 
              className="h-full bg-[#ff4d4d] border-r-4 border-black"
              initial={{ width: 0 }}
              animate={{ width: `${progress > 100 ? 100 : progress}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          </div>

          <div className="relative z-10 absolute bottom-10 font-bold uppercase tracking-[0.3em] text-black bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-pulse mt-20">
            System Initialization...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
