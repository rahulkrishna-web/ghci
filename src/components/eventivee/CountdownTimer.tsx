'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Individual digit component with slide and fade transitions
function AnimatedDigit({ digit }: { digit: string }) {
  return (
    <div className="relative h-20 w-12 md:h-28 md:w-18 lg:h-32 lg:w-20 overflow-hidden flex items-center justify-center bg-white/[0.02] border border-white/[0.08] rounded-[10px] shadow-inner">
      {/* Glossy top-light overlay */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: 30, opacity: 0, filter: 'blur(2px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -30, opacity: 0, filter: 'blur(2px)' }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 22,
            mass: 0.8
          }}
          className="absolute font-sans font-semibold text-4xl md:text-7xl lg:text-8xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent select-none"
        >
          {digit}
        </motion.span>
      </AnimatePresence>

      {/* Subtle center fold line for physical card look */}
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/40" />
    </div>
  );
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    // Target event start date: January 20, 2027
    const targetDate = new Date("2027-01-20T09:00:00+05:30").getTime();

    const calculateTime = () => {
      const diff = targetDate - Date.now();
      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTime());
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 flex flex-col items-center">
      {/* Outer grid container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full justify-center">
        {timeUnits.map((unit) => {
          // Format values with leading zeros (e.g. 05 days, 09 hours)
          const formattedVal = String(unit.value).padStart(2, '0');
          const digits = formattedVal.split('');

          return (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative flex flex-col items-center p-6 md:p-8 rounded-[16px] bg-white/[0.01] border border-white/[0.04] backdrop-blur-md transition-all duration-500 hover:border-[#A32482]/30 hover:bg-white/[0.02]"
            >
              {/* Corner accent glow */}
              <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-[#A32482]/0 via-transparent to-[#A32482]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
              
              {/* Radial gradient background hover glow */}
              <div className="absolute -inset-px rounded-[16px] bg-gradient-to-r from-transparent via-[#A32482]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />

              {/* Digits row */}
              <div className="flex gap-1.5 md:gap-2">
                {mounted ? (
                  digits.map((digit, idx) => (
                    <AnimatedDigit key={`${unit.label}-${idx}`} digit={digit} />
                  ))
                ) : (
                  // Hydration safety fallback
                  <>
                    <AnimatedDigit digit="0" />
                    <AnimatedDigit digit="0" />
                  </>
                )}
              </div>

              {/* Unit label */}
              <span className="mt-4 text-xs md:text-sm font-medium tracking-widest text-white/40 uppercase group-hover:text-white/60 group-hover:tracking-[0.2em] transition-all duration-300">
                {unit.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
