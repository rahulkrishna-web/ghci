'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Individual digit component with slide and fade transitions
function AnimatedDigit({ digit }: { digit: string }) {
  return (
    <div className="relative h-10 min-[360px]:h-12 min-[390px]:h-14 sm:h-20 md:h-28 lg:h-32 w-[26px] min-[360px]:w-[28px] min-[390px]:w-[32px] sm:w-12 md:w-18 lg:w-20 overflow-hidden flex items-center justify-center bg-white/[0.02] border border-white/[0.08] rounded-[4px] sm:rounded-[6px] md:rounded-[10px] shadow-inner">
      {/* Glossy top-light overlay */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: 15, opacity: 0, filter: 'blur(1px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -15, opacity: 0, filter: 'blur(1px)' }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 22,
            mass: 0.8
          }}
          className="absolute font-sans font-semibold text-lg min-[360px]:text-xl min-[390px]:text-2xl sm:text-4xl md:text-7xl lg:text-8xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent select-none"
        >
          {digit}
        </motion.span>
      </AnimatePresence>

      {/* Subtle center fold line for physical card look */}
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/40" />
    </div>
  );
}

// Individual Countdown Card with Interactive Mouse Shine effect matching homepage Hero lead text
interface CountdownCardProps {
  unit: { label: string; value: number };
  mounted: boolean;
}

function CountdownCard({ unit, mounted }: CountdownCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse shine movement
  const mouseXSpring = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const mouseYSpring = useSpring(mouseY, { damping: 25, stiffness: 150 });
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    setIsHovered(true);
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Radial gradient background shine (matches the white hover light behavior of Hero lead text)
  const shineBackground = useTransform(
    [mouseXSpring, mouseYSpring],
    ([x, y]) => `radial-gradient(200px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`
  );

  // Radial gradient border shine
  const borderBackground = useTransform(
    [mouseXSpring, mouseYSpring],
    ([x, y]) => `radial-gradient(200px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.35) 0%, transparent 65%)`
  );

  const formattedVal = String(unit.value).padStart(2, '0');
  const digits = formattedVal.split('');

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative flex flex-col items-center p-2 sm:p-4 md:p-8 rounded-[8px] sm:rounded-[12px] md:rounded-[16px] bg-white/[0.01] border border-white/[0.04] backdrop-blur-md transition-all duration-500 hover:border-[#A32482]/30 hover:bg-white/[0.02] w-auto shrink-0"
    >
      {/* Background mouse-shine overlay */}
      <motion.div
        style={{
          background: shineBackground,
          opacity: isHovered ? 1 : 0,
        }}
        className="absolute inset-0 rounded-[8px] sm:rounded-[12px] md:rounded-[16px] transition-opacity duration-500 pointer-events-none z-0"
      />

      {/* Border mouse-shine overlay (restricted using mask) */}
      <motion.div
        style={{
          background: borderBackground,
          opacity: isHovered ? 1 : 0,
          maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
          maskClip: 'content-box, border-box',
          maskComposite: 'exclude',
          WebkitMaskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
          WebkitMaskClip: 'content-box, border-box',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
        className="absolute inset-0 rounded-[8px] sm:rounded-[12px] md:rounded-[16px] border border-transparent transition-opacity duration-500 pointer-events-none z-10"
      />

      {/* Corner accent glow */}
      <div className="absolute inset-0 rounded-[8px] sm:rounded-[12px] md:rounded-[16px] bg-gradient-to-br from-[#A32482]/0 via-transparent to-[#A32482]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
      
      {/* Radial gradient background hover glow */}
      <div className="absolute -inset-px rounded-[8px] sm:rounded-[12px] md:rounded-[16px] bg-gradient-to-r from-transparent via-[#A32482]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none" />

      {/* Digits row */}
      <div className="flex gap-1 min-[360px]:gap-1.5 md:gap-2 relative z-10">
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
      <span className="mt-2 sm:mt-4 text-[9px] sm:text-xs md:text-sm font-medium tracking-[0.05em] sm:tracking-widest text-white/40 uppercase group-hover:text-white/60 group-hover:tracking-[0.1em] sm:group-hover:tracking-[0.2em] transition-all duration-300 relative z-10">
        {unit.label}
      </span>
    </motion.div>
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
    <div className="w-full max-w-6xl mx-auto py-12 px-4 flex flex-col items-center">
      {/* Outer flex container */}
      <div className="flex flex-row flex-nowrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full justify-center items-stretch">
        {timeUnits.map((unit) => (
          <CountdownCard key={unit.label} unit={unit} mounted={mounted} />
        ))}
      </div>
    </div>
  );
}
