import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 4;
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999999] bg-[#fffaf0] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="font-heading font-extrabold text-6xl md:text-8xl tracking-tight">
            {progress > 100 ? 100 : progress}<span className="text-[#ff9e00]">%</span>
          </div>
          <div className="w-56 md:w-72 h-2 bg-black/10 rounded-full mt-6 overflow-hidden">
            <motion.div
              className="h-full bg-[#ff9e00] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress > 100 ? 100 : progress}%` }}
            />
          </div>
          <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.25em] text-black/40">Loading portfolio…</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
