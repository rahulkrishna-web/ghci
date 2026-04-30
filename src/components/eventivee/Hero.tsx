'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calendar, Ticket, Settings, X } from 'lucide-react';
import { useRef, useState, useEffect, useMemo } from 'react';
import Marquee from './Marquee';

type HeroProps = {
  data: {
    title: string;
    date: string;
    location: string;
    subtitle: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
  };
};

export default function Hero({ data }: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  // Debug Settings State - Updated with User's Final Params
  const [showSettings, setShowSettings] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<'title' | 'bokeh' | null>('title');
  const [config, setConfig] = useState({
    // Title Settings
    shineSize: 540,
    shineOpacity: 0.6,
    baseOpacity: 0.35,
    strokeWidth: 1,
    strokeOpacity: 0.05,
    borderStrokeWidth: 0.5,
    borderStrokeOpacity: 0.55,
    tracking: -0.02,
    lineHeight: 6.8,
    // Bokeh Settings
    bokehOpacity: 0.19,
    bokehBlur: 85,
    bokehCount: 8,
    bokehSpeed: 5,
    bokehHue: 0,
    // Cursor Settings
    cursorSizeDefault: 16,
    cursorSizeHover: 20,
    cursorColorDefault: '#A32482',
    cursorColorHover: 'rgba(163, 36, 130, 0.8)',
    cursorBorderDefault: 0,
    cursorBorderHover: 0,
    cursorOpacityDefault: 1,
    cursorOpacityHover: 0.8,
  });

  // Dispatch cursor config updates
  useEffect(() => {
    const event = new CustomEvent('cursor-config-update', { detail: {
      sizeDefault: config.cursorSizeDefault,
      sizeHover: config.cursorSizeHover,
      colorDefault: config.cursorColorDefault,
      colorHover: config.cursorColorHover,
      borderDefault: config.cursorBorderDefault,
      borderHover: config.cursorBorderHover,
      opacityDefault: config.cursorOpacityDefault,
      opacityHover: config.cursorOpacityHover,
    }});
    window.dispatchEvent(event);
  }, [
    config.cursorSizeDefault, config.cursorSizeHover, 
    config.cursorColorDefault, config.cursorColorHover,
    config.cursorBorderDefault, config.cursorBorderHover,
    config.cursorOpacityDefault, config.cursorOpacityHover
  ]);

  // Hidden hotkey to toggle settings (Ctrl + Shift + D)
  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'd') {
        setShowSettings(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    ([x, y]) => `radial-gradient(${config.shineSize}px circle at ${x}px ${y}px, rgba(255,255,255,${config.shineOpacity}) 0%, transparent 60%), linear-gradient(rgba(255,255,255,${config.baseOpacity}), rgba(255,255,255,${config.baseOpacity}))`
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

  // Generate dynamic bokeh blobs
  const blobs = useMemo(() => Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 600 + 400,
    duration: (Math.random() * 25 + 20),
    delay: Math.random() * -20,
    color: i % 2 === 0 ? '#A32482' : i % 3 === 0 ? '#5b1248' : '#7a1b62',
    initialX: Math.random() * 100 + '%',
    initialY: Math.random() * 100 + '%',
    moveX: [0, (Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500, 0],
    moveY: [0, (Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500, 0],
  })), []);

  return (
    <section className="relative min-h-screen md:min-h-[80vh] flex flex-col gap-10 items-center justify-center overflow-hidden bg-black text-white">
      {/* Moving Bokeh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ filter: `hue-rotate(${config.bokehHue}deg)` }}>
        <div className="absolute inset-0 bg-[#0a0208]" />
        {mounted && blobs.slice(0, config.bokehCount).map((blob) => (
          <motion.div
            key={blob.id}
            animate={{
              x: blob.moveX,
              y: blob.moveY,
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: blob.duration / config.bokehSpeed,
              repeat: Infinity,
              delay: blob.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full"
            style={{
              backgroundColor: blob.color,
              width: blob.size,
              height: blob.size,
              left: blob.initialX,
              top: blob.initialY,
              opacity: config.bokehOpacity,
              filter: `blur(${config.bokehBlur}px)`,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        ))}
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url(/grain.png)' }} />
      </div>

      <div className="relative z-10 w-full px-6 md:px-40 mt-12 md:mt-16 text-center">
        {/* Date Cluster */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-2 md:mb-2 text-white"
        >
            <Calendar className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-base md:text-2xl lg:text-[1.2rem] font-medium tracking-wide">{data.date}</span>
        </motion.div>

        {/* Main Title with Glass Effect & Mouse Shine */}
        <div className="relative group w-full flex flex-col items-center">
          <div className="relative w-max">
            {/* Main Fill Layer */}
            <motion.h1
              ref={titleRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
              style={{
                backgroundImage: background,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextStroke: `${config.strokeWidth}px rgba(255, 255, 255, ${config.strokeOpacity})`,
                letterSpacing: `${config.tracking}em`,
                lineHeight: `${config.lineHeight}rem`,
              }}
              className="text-[40px] md:text-10xl lg:text-[7.5rem] font-medium w-max flex flex-col items-center mix-blend-plus-lighter cursor-default px-24 overflow-visible"
            >
              <span className="block">Grace Hopper</span>
              <span className="block md:whitespace-nowrap">
                <span className="block md:inline">Celebration</span>{' '}
                <span className="block md:inline">India 2027</span>
              </span>
            </motion.h1>

            {/* Border Shine Layer (Overlay) */}
            <motion.h1
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
              style={{
                backgroundImage: background,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextStroke: `${config.borderStrokeWidth}px rgba(255, 255, 255, ${config.borderStrokeOpacity})`,
                letterSpacing: `${config.tracking}em`,
                lineHeight: `${config.lineHeight}rem`,
                pointerEvents: 'none',
              }}
              className="text-[40px] md:text-10xl lg:text-[7.5rem] font-medium w-max flex flex-col items-center mix-blend-plus-lighter px-24 overflow-visible opacity-40 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0"
            >
              <span className="block">Grace Hopper</span>
              <span className="block md:whitespace-nowrap">
                <span className="block md:inline">Celebration</span>{' '}
                <span className="block md:inline">India 2027</span>
              </span>
            </motion.h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white text-xl md:text-2xl max-w-[320px] md:max-w-4xl mx-auto mb-10 leading-relaxed px-4"
        >
          {data.subtitle}
        </motion.p>
        
        {/* Button Clusters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-row items-center justify-center gap-2 md:gap-6"
        >
            {/* Register Cluster */}
            <div className="flex items-center group gap-0 justify-center">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#8e1f7c] transition-all z-10">
                    <img src="/icons/Ticket.png" alt="Ticket" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                </div>
                <a
                    href={data.primaryButtonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 md:h-16 inline-flex flex-col rounded-full bg-[#A32482] group-hover:bg-[#8e1f7c] transition-all text-white text-[15px] md:text-lg font-semibold shadow-xl shadow-purple-900/20 active:scale-95 whitespace-nowrap z-0 overflow-hidden"
                >
                    <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                        <div className="h-full w-full flex items-center justify-center px-4 md:px-8 shrink-0">
                            {data.primaryButtonText}
                        </div>
                        <div className="h-full w-full flex items-center justify-center px-4 md:px-8 shrink-0">
                            {data.primaryButtonText}
                        </div>
                    </div>
                </a>
            </div>

            {/* Agenda Cluster */}
            <div className="flex items-center group gap-0 justify-center">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white border border-white/10 flex items-center justify-center group-hover:bg-neutral-200 transition-all z-10">
                    <img src="/icons/calender.png" alt="Calendar" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                </div>
                <a
                    href="#"
                    className="h-10 md:h-16 inline-flex flex-col rounded-full bg-white text-[#A32482] group-hover:bg-neutral-200 transition-all text-[15px] md:text-lg font-semibold shadow-xl active:scale-95 whitespace-nowrap z-0 overflow-hidden"
                >
                    <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                        <div className="h-full w-full flex items-center justify-center px-4 md:px-8 shrink-0">
                            {data.secondaryButtonText}
                        </div>
                        <div className="h-full w-full flex items-center justify-center px-4 md:px-8 shrink-0">
                            {data.secondaryButtonText}
                        </div>
                    </div>
                </a>
            </div>
        </motion.div>
      </div>

      {/* Marquee Integrated into Hero */}
      <div className="relative  w-full">
        <Marquee />
      </div>

      {/* Debug Settings Panel (Hidden by default, toggle with Ctrl+Shift+D) */}
      {showSettings && (
        <div className="fixed bottom-6 right-6 z-[999]">
          <button 
            onClick={() => setShowSettings(false)}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all shadow-2xl mb-4 float-right"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="clear-both w-80 bg-[#121214] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-300">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">Hero Debug Settings</h3>
            
            <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2 scrollbar-hide">
              {/* Title Settings Accordion */}
              <div className="border border-white/5 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setExpandedSection(expandedSection === 'title' ? null : 'title')}
                  className="w-full px-4 py-3 bg-white/5 flex justify-between items-center text-xs font-bold text-white/70 hover:bg-white/10 transition-colors"
                >
                  TITLE GLASS EFFECT
                  <span className="text-lg">{expandedSection === 'title' ? '−' : '+'}</span>
                </button>
                
                {expandedSection === 'title' && (
                  <div className="p-4 space-y-6 bg-black/20">
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight">
                        <span className="text-white/40">Shine Size</span>
                        <span className="text-[#A32482] font-mono">{config.shineSize}px</span>
                      </div>
                      <input type="range" min="100" max="1500" step="10" value={config.shineSize} onChange={(e) => setConfig({...config, shineSize: parseInt(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Shine Opacity</span>
                        <span className="text-[#A32482] font-mono">{config.shineOpacity}</span>
                      </div>
                      <input type="range" min="0" max="1" step="0.05" value={config.shineOpacity} onChange={(e) => setConfig({...config, shineOpacity: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Base Fill Opacity</span>
                        <span className="text-[#A32482] font-mono">{config.baseOpacity}</span>
                      </div>
                      <input type="range" min="0" max="1" step="0.05" value={config.baseOpacity} onChange={(e) => setConfig({...config, baseOpacity: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Main Stroke Width</span>
                        <span className="text-[#A32482] font-mono">{config.strokeWidth}px</span>
                      </div>
                      <input type="range" min="0" max="5" step="0.5" value={config.strokeWidth} onChange={(e) => setConfig({...config, strokeWidth: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Main Stroke Opacity</span>
                        <span className="text-[#A32482] font-mono">{config.strokeOpacity}</span>
                      </div>
                      <input type="range" min="0" max="1" step="0.05" value={config.strokeOpacity} onChange={(e) => setConfig({...config, strokeOpacity: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Border Shine Width</span>
                        <span className="text-[#A32482] font-mono">{config.borderStrokeWidth}px</span>
                      </div>
                      <input type="range" min="0" max="10" step="0.5" value={config.borderStrokeWidth} onChange={(e) => setConfig({...config, borderStrokeWidth: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Border Shine Opacity</span>
                        <span className="text-[#A32482] font-mono">{config.borderStrokeOpacity}</span>
                      </div>
                      <input type="range" min="0" max="1" step="0.05" value={config.borderStrokeOpacity} onChange={(e) => setConfig({...config, borderStrokeOpacity: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Letter Spacing</span>
                        <span className="text-[#A32482] font-mono">{config.tracking}em</span>
                      </div>
                      <input type="range" min="-0.1" max="0.1" step="0.01" value={config.tracking} onChange={(e) => setConfig({...config, tracking: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Line Height</span>
                        <span className="text-[#A32482] font-mono">{config.lineHeight}rem</span>
                      </div>
                      <input type="range" min="2" max="15" step="0.1" value={config.lineHeight} onChange={(e) => setConfig({...config, lineHeight: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Bokeh Settings Accordion */}
              <div className="border border-white/5 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setExpandedSection(expandedSection === 'bokeh' ? null : 'bokeh')}
                  className="w-full px-4 py-3 bg-white/5 flex justify-between items-center text-xs font-bold text-white/70 hover:bg-white/10 transition-colors"
                >
                  BOKEH BACKGROUND
                  <span className="text-lg">{expandedSection === 'bokeh' ? '−' : '+'}</span>
                </button>
                
                {expandedSection === 'bokeh' && (
                  <div className="p-4 space-y-6 bg-black/20">
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Blob Count</span>
                        <span className="text-[#A32482] font-mono">{config.bokehCount}</span>
                      </div>
                      <input type="range" min="1" max="20" step="1" value={config.bokehCount} onChange={(e) => setConfig({...config, bokehCount: parseInt(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Speed Multiplier</span>
                        <span className="text-[#A32482] font-mono">{config.bokehSpeed}x</span>
                      </div>
                      <input type="range" min="0.1" max="5" step="0.1" value={config.bokehSpeed} onChange={(e) => setConfig({...config, bokehSpeed: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Bokeh Opacity</span>
                        <span className="text-[#A32482] font-mono">{config.bokehOpacity}</span>
                      </div>
                      <input type="range" min="0" max="0.5" step="0.01" value={config.bokehOpacity} onChange={(e) => setConfig({...config, bokehOpacity: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Blur Amount</span>
                        <span className="text-[#A32482] font-mono">{config.bokehBlur}px</span>
                      </div>
                      <input type="range" min="0" max="200" step="5" value={config.bokehBlur} onChange={(e) => setConfig({...config, bokehBlur: parseInt(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Hue Shift</span>
                        <span className="text-[#A32482] font-mono">{config.bokehHue}°</span>
                      </div>
                      <input type="range" min="0" max="360" step="1" value={config.bokehHue} onChange={(e) => setConfig({...config, bokehHue: parseInt(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
