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
  const [expandedSection, setExpandedSection] = useState<'title' | 'bokeh' | 'json' | null>('title');
  const [isMobile, setIsMobile] = useState(false);
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
    bokehBlur: 98,
    bokehSpeed: 2.2,
    bokehHue: 0,
    blobs: [
      { id: 1777553719241, color: '#A32482', width: 50, height: 31, x: 4, y: 7, opacity: 0.4 },
      { id: 1777553719242, color: '#223852', width: 50, height: 35, x: -15, y: 30, opacity: 1 },
      { id: 1777553719243, color: '#22021D', width: 55, height: 45, x: -5, y: 60, opacity: 1 },
      { id: 1777553719244, color: '#A32482', width: 50, height: 40, x: 60, y: 15, opacity: 1 },
      { id: 1777553719245, color: '#223852', width: 22, height: 17, x: 65, y: 18, opacity: 1 },
      { id: 1777553719246, color: '#22021D', width: 27, height: 23, x: 77, y: 25, opacity: 1 },
    ],
  });

  // Hidden hotkey to toggle settings (Ctrl + Shift + D)
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleOpenSettings = () => setShowSettings(true);
    window.addEventListener('open-settings-hero', handleOpenSettings);
    
    // Listen for global settings updates
    const handleUpdateSettings = (e: any) => {
        if (e.detail) setConfig(e.detail);
    };
    window.addEventListener('update-settings-hero', handleUpdateSettings);

    return () => {
      window.removeEventListener('open-settings-hero', handleOpenSettings);
      window.removeEventListener('update-settings-hero', handleUpdateSettings);
      window.removeEventListener('resize', checkMobile);
    };
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


  return (
    <section className="relative h-auto pt-32 pb-32 md:pt-48 md:pb-40 flex flex-col gap-4 md:gap-8 items-center justify-center overflow-hidden bg-black text-white">
      {/* Moving Bokeh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0a0208]" />
        {mounted && config.blobs.map((blob) => (
          <motion.div
            key={blob.id}
            animate={config.bokehSpeed > 0 ? {
              x: [0, 50 * config.bokehSpeed, -50 * config.bokehSpeed, 0],
              y: [0, -30 * config.bokehSpeed, 30 * config.bokehSpeed, 0],
            } : {}}
            transition={{
              duration: 20 / (config.bokehSpeed || 1),
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-[50%]"
            style={{
              backgroundColor: blob.color,
              width: `${blob.width}%`,
              height: `${blob.height}%`,
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              opacity: blob.opacity,
              filter: `blur(${config.bokehBlur}px)`,
            }}
          />
        ))}
        {/* Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }} 
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-13 text-center">
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
          <div className="relative w-full md:w-max flex flex-col items-center">
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
                lineHeight: isMobile ? '1.0' : `${config.lineHeight}rem`,
              }}
              className="text-[56px] md:text-10xl lg:text-[7.5rem] font-medium w-full md:w-max flex flex-col items-center mix-blend-plus-lighter px-[15px] md:px-24 overflow-visible text-center"
            >
              <span className="block whitespace-nowrap">Grace Hopper</span>
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
                lineHeight: isMobile ? '1.0' : `${config.lineHeight}rem`,
                pointerEvents: 'none',
              }}
              className="text-[56px] md:text-10xl lg:text-[7.5rem] font-medium w-full md:w-max flex flex-col items-center mix-blend-plus-lighter px-[15px] md:px-24 overflow-visible opacity-40 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 text-center"
            >
              <span className="block whitespace-nowrap">Grace Hopper</span>
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
          className="text-white text-xl md:text-2xl max-w-[500px] md:max-w-4xl mx-auto mb-6 md:mb-10 leading-relaxed px-4"
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
                    className="h-10 md:h-16 inline-flex flex-col rounded-full bg-[#A32482] group-hover:bg-[#8e1f7c] transition-all text-white text-[15px] md:text-lg font-semibold shadow-xl shadow-purple-900/20 active:scale-95 whitespace-nowrap z-0 overflow-hidden cursor-pointer"
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

            {/* Agenda Cluster - Hidden for now */}
            {/* <div className="flex items-center group gap-0 justify-center">
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
            </div> */}
        </motion.div>
      </div>

      {/* Marquee Integrated into Hero */}
      <div className="absolute bottom-4 md:bottom-8 w-full z-30">
        <Marquee />
      </div>

      {/* Bottom Gradient Fade to merge with next section */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[100px] z-20 pointer-events-none"
        style={{ 
          background: 'linear-gradient(to bottom, transparent, #070708)' 
        }}
      />

      {/* Debug Settings Panel (Hidden by default, toggle with Ctrl+Shift+D) */}
      {showSettings && (
        <motion.div 
          drag
          dragMomentum={false}
          className="fixed bottom-6 right-6 z-[999] w-[340px] bg-[#121214]/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col max-h-[80vh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header / Drag Handle */}
          <div className="flex justify-between items-center p-4 border-b border-white/10 cursor-grab active:cursor-grabbing shrink-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">Hero Debug</h3>
            <button 
              onClick={() => setShowSettings(false)}
              className="p-1 hover:bg-white/10 rounded-md transition-colors text-white/50 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Scrollable Content */}
          <div 
            className="p-5 space-y-5 overflow-y-auto custom-scrollbar"
            onPointerDownCapture={(e) => e.stopPropagation()}
          >
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
                        <span>Global Speed</span>
                        <span className="text-[#A32482] font-mono">{config.bokehSpeed}x</span>
                      </div>
                      <input type="range" min="0" max="10" step="0.1" value={config.bokehSpeed} onChange={(e) => setConfig({...config, bokehSpeed: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-medium uppercase tracking-tight text-white/40">
                        <span>Global Blur</span>
                        <span className="text-[#A32482] font-mono">{config.bokehBlur}px</span>
                      </div>
                      <input type="range" min="0" max="300" step="1" value={config.bokehBlur} onChange={(e) => setConfig({...config, bokehBlur: parseInt(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>

                    <div className="pt-4 border-t border-white/5 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Individual Ellipses</span>
                        <button 
                          onClick={() => {
                            const newBlob = { 
                              id: Date.now(), 
                              color: '#A32482', 
                              width: 40, 
                              height: 30, 
                              x: 50, 
                              y: 50, 
                              opacity: 0.3 
                            };
                            setConfig({...config, blobs: [...config.blobs, newBlob]});
                          }}
                          className="px-2 py-1 bg-[#A32482] text-[10px] rounded hover:bg-[#8e1f7c] transition-colors"
                        >
                          + Add
                        </button>
                      </div>

                      <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                        {config.blobs.map((blob, idx) => (
                          <div key={blob.id} className="p-3 bg-white/5 rounded-lg space-y-3 relative group/item">
                            <button 
                              onClick={() => setConfig({...config, blobs: config.blobs.filter(b => b.id !== blob.id)})}
                              className="absolute top-2 right-2 text-white/20 hover:text-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity"
                            >
                              <X size={12} />
                            </button>
                            
                            <div className="grid grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <span className="text-[8px] uppercase text-white/30">Color</span>
                                <input 
                                  type="color" 
                                  value={blob.color} 
                                  onChange={(e) => {
                                    const newBlobs = [...config.blobs];
                                    newBlobs[idx].color = e.target.value;
                                    setConfig({...config, blobs: newBlobs});
                                  }} 
                                  className="w-full h-6 bg-transparent border-none cursor-pointer"
                                />
                              </div>
                              <div className="space-y-1">
                                <span className="text-[8px] uppercase text-white/30">Opacity ({blob.opacity})</span>
                                <input 
                                  type="range" min="0" max="1" step="0.01" value={blob.opacity} 
                                  onChange={(e) => {
                                    const newBlobs = [...config.blobs];
                                    newBlobs[idx].opacity = parseFloat(e.target.value);
                                    setConfig({...config, blobs: newBlobs});
                                  }} 
                                  className="w-full accent-[#A32482]"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <span className="text-[8px] uppercase text-white/30">X Position ({blob.x}%)</span>
                                <input 
                                  type="range" min="-50" max="150" step="1" value={blob.x} 
                                  onChange={(e) => {
                                    const newBlobs = [...config.blobs];
                                    newBlobs[idx].x = parseInt(e.target.value);
                                    setConfig({...config, blobs: newBlobs});
                                  }} 
                                  className="w-full accent-[#A32482]"
                                />
                              </div>
                              <div className="space-y-1">
                                <span className="text-[8px] uppercase text-white/30">Y Position ({blob.y}%)</span>
                                <input 
                                  type="range" min="-50" max="150" step="1" value={blob.y} 
                                  onChange={(e) => {
                                    const newBlobs = [...config.blobs];
                                    newBlobs[idx].y = parseInt(e.target.value);
                                    setConfig({...config, blobs: newBlobs});
                                  }} 
                                  className="w-full accent-[#A32482]"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <span className="text-[8px] uppercase text-white/30">Width ({blob.width}%)</span>
                                <input 
                                  type="range" min="5" max="150" step="1" value={blob.width} 
                                  onChange={(e) => {
                                    const newBlobs = [...config.blobs];
                                    newBlobs[idx].width = parseInt(e.target.value);
                                    setConfig({...config, blobs: newBlobs});
                                  }} 
                                  className="w-full accent-[#A32482]"
                                />
                              </div>
                              <div className="space-y-1">
                                <span className="text-[8px] uppercase text-white/30">Height ({blob.height}%)</span>
                                <input 
                                  type="range" min="5" max="150" step="1" value={blob.height} 
                                  onChange={(e) => {
                                    const newBlobs = [...config.blobs];
                                    newBlobs[idx].height = parseInt(e.target.value);
                                    setConfig({...config, blobs: newBlobs});
                                  }} 
                                  className="w-full accent-[#A32482]"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    </div>
                  )}
                </div>

              {/* JSON Export Accordion */}
              <div className="border border-white/5 rounded-xl overflow-hidden shrink-0">
                <button 
                  onClick={() => setExpandedSection(expandedSection === 'json' ? null : 'json')}
                  className="w-full px-4 py-3 bg-white/5 flex justify-between items-center text-xs font-bold text-white/70 hover:bg-white/10 transition-colors"
                >
                  EXPORT JSON
                  <span className="text-lg">{expandedSection === 'json' ? '−' : '+'}</span>
                </button>
                
                {expandedSection === 'json' && (
                  <div className="p-4 bg-black/20">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(JSON.stringify(config, null, 2));
                        // alert('JSON copied to clipboard!'); // Removed alert to keep it clean, relying on visual feedback or just copying silently.
                      }}
                      className="mb-3 w-full py-2 bg-[#A32482] hover:bg-[#8e1f7c] text-white text-xs font-semibold rounded-md transition-colors"
                    >
                      Copy to Clipboard
                    </button>
                    <pre className="text-[10px] text-green-400 font-mono overflow-x-auto max-h-40 p-2 bg-black/40 rounded border border-white/5 whitespace-pre-wrap select-all">
                      {JSON.stringify(config, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
