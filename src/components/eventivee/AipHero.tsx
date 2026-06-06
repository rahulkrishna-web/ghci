'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

type AipHeroProps = {
  data: {
    heroTitle: string;
    heroSubtitle: string;
    heroCtaText: string;
    heroCtaLink: string;
  };
};

export default function AipHero({ data }: AipHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
    <section className="relative h-auto pt-36 pb-20 md:pt-48 md:pb-28 flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 md:px-13">
      {/* Background Bokeh Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0a0208]" />
        
        {/* Glowing blobs matching the premium homepage mesh gradients */}
        <div className="absolute rounded-full w-[45%] h-[40%] left-[-10%] top-[10%] bg-[#A32482] opacity-35 blur-[120px]" />
        <div className="absolute rounded-full w-[40%] h-[35%] right-[-5%] top-[5%] bg-[#223852] opacity-40 blur-[110px]" />
        <div className="absolute rounded-full w-[35%] h-[30%] right-[25%] bottom-[-10%] bg-[#22021D] opacity-60 blur-[100px]" />

        {/* SVG Noise Overlay for premium texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }} 
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative group w-full flex flex-col items-center lg:items-start mb-6">
              <div className="relative w-full lg:w-max flex flex-col items-center lg:items-start">
                {/* Main Fill Layer */}
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
                    lineHeight: isMobile ? '1.0' : '1.05',
                  }}
                  className="text-[44px] md:text-7xl lg:text-[5.5rem] font-medium w-full lg:w-max flex flex-col items-center lg:items-start mix-blend-plus-lighter px-4 lg:px-0 overflow-visible text-center lg:text-left"
                >
                  <span className="block md:whitespace-nowrap">Advancing Inclusion</span>
                  <span className="block md:whitespace-nowrap">Program (AIP)</span>
                </motion.h1>

                {/* Border Shine Layer (Overlay) */}
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
                    lineHeight: isMobile ? '1.0' : '1.05',
                    pointerEvents: 'none',
                  }}
                  className="text-[44px] md:text-7xl lg:text-[5.5rem] font-medium w-full lg:w-max flex flex-col items-center lg:items-start mix-blend-plus-lighter px-4 lg:px-0 overflow-visible opacity-40 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 text-center lg:text-left"
                >
                  <span className="block md:whitespace-nowrap">Advancing Inclusion</span>
                  <span className="block md:whitespace-nowrap">Program (AIP)</span>
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-white/80 text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed font-medium"
            >
              {data.heroSubtitle}
            </motion.p>

            {/* Premium Button Cluster (Apply Cluster) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-row items-center group gap-0"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#8e1f7c] transition-all z-10">
                <img src="/icons/Ticket.png" alt="Ticket" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
              </div>
              <a
                href={data.heroCtaLink}
                className="h-12 md:h-16 inline-flex flex-col rounded-full bg-[#A32482] group-hover:bg-[#8e1f7c] transition-all text-white text-[15px] md:text-lg font-semibold shadow-xl shadow-purple-900/20 active:scale-95 whitespace-nowrap z-0 overflow-hidden cursor-pointer"
              >
                <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  <div className="h-full w-full flex items-center justify-center px-6 md:px-10 shrink-0">
                    {data.heroCtaText}
                  </div>
                  <div className="h-full w-full flex items-center justify-center px-6 md:px-10 shrink-0">
                    {data.heroCtaText}
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center group shadow-2xl">
              <img 
                src="/aip/aip-lead-img.png" 
                alt="Advancing Inclusion Program"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[100px] z-20 pointer-events-none"
        style={{ 
          background: 'linear-gradient(to bottom, transparent, #070708)' 
        }}
      />
    </section>
  );
}
