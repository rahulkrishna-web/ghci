'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

type WequestHeroProps = {
  data: {
    heroTitle: string;
    heroSubtitle: string;
    heroSubDescription: string;
    heroDescription: string;
    heroCtaText: string;
    heroCtaLink: string;
    heroImage: string;
  };
};

export default function WequestHero({ data }: WequestHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse position for the shine effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for the shine movement
  const mouseXSpring = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const mouseYSpring = useSpring(mouseY, { damping: 25, stiffness: 150 });

  // Create a radial gradient that follows the mouse
  const background = useTransform(
    [mouseXSpring, mouseYSpring],
    ([x, y]) => `radial-gradient(540px circle at ${x}px ${y}px, rgba(255,255,255,0.6) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.35))`
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!titleRef.current) return;
    const rect = titleRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    // Optional: center or hide the shine when mouse leaves
  };

  return (
    <section className="bg-black pt-28 pb-8 md:pt-36 md:pb-12 px-4 md:px-13 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Contained Hero Card */}
      <div 
        id="wequest-hero" 
        className="relative flex-grow rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col items-center justify-center text-center py-20 md:py-28 px-6 md:px-12"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url(${data.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background vignette & gradient fades inside the card */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-0" />
        
        {/* SVG Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay z-0" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }} 
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Main Title Layer */}
          <div className="relative group w-full flex flex-col items-center mb-4">
            <div className="relative w-full md:w-max flex flex-col items-center">
              <motion.h1
                ref={titleRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                style={{
                  backgroundImage: background,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.05)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.05',
                }}
                className="text-[56px] md:text-[80px] lg:text-[7rem] font-medium w-full md:w-max flex flex-col items-center mix-blend-plus-lighter px-[15px] md:px-24 overflow-visible text-center"
              >
                {data.heroTitle}
              </motion.h1>

              {/* Border Shine Layer */}
              <motion.h1
                aria-hidden="true"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                style={{
                  backgroundImage: background,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.55)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.05',
                  pointerEvents: 'none',
                }}
                className="text-[56px] md:text-[80px] lg:text-[7rem] font-medium w-full md:w-max flex flex-col items-center mix-blend-plus-lighter px-[15px] md:px-24 overflow-visible opacity-45 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 text-center"
              >
                {data.heroTitle}
              </motion.h1>
            </div>
          </div>

          {/* Hero Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-white mb-6 uppercase"
          >
            {data.heroSubtitle}
          </motion.p>

          {/* Description Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-white/90 text-sm md:text-lg lg:text-[20px] max-w-3xl mb-10 leading-relaxed font-medium space-y-1.5"
          >
            <p>
              Pitch before 10,000+ attendees at <span className="font-bold">GHCI 27</span>.
            </p>
            <p>
              Connect with investors, mentors, and ecosystem leaders.
            </p>
            <p>
              Receive founder coaching, visibility, and recognition.
            </p>
          </motion.div>

          {/* CTA Button Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-row items-center group gap-0 cursor-pointer"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#8e1f7c] transition-all z-10 animate-in fade-in zoom-in duration-200">
              <img src="/icons/Ticket.png" alt="Ticket" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </div>
            <a
              href={data.heroCtaLink}
              className="h-12 md:h-14 inline-flex flex-col rounded-full bg-[#A32482] group-hover:bg-[#8e1f7c] transition-all text-white text-xs md:text-sm font-bold tracking-wider shadow-xl shadow-purple-900/20 active:scale-95 whitespace-nowrap z-0 overflow-hidden cursor-pointer"
            >
              <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                <div className="h-full w-full flex items-center justify-center px-6 md:px-8 shrink-0">
                  {data.heroCtaText}
                </div>
                <div className="h-full w-full flex items-center justify-center px-6 md:px-8 shrink-0">
                  {data.heroCtaText}
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
