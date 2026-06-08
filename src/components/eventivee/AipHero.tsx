'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Settings, X } from 'lucide-react';

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
  const [showSettings, setShowSettings] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [expandedSection, setExpandedSection] = useState<'bokeh' | 'json' | null>('bokeh');
  const [config, setConfig] = useState({
    bokehBlur: 20,
    bokehSpeed: 0,
    blobs: [
      { id: 1, color: '#A32482', width: 35, height: 25, x: 5, y: 18, opacity: 0.38 },
      { id: 2, color: '#223852', width: 32, height: 22, x: 2, y: 29, opacity: 0.42 },
      { id: 3, color: '#22021D', width: 36, height: 24, x: 5, y: 45, opacity: 0.65 },
      { id: 5, color: '#A32482', width: 59, height: 38, x: 49, y: 25, opacity: 0.42 },
      { id: 6, color: '#22021D', width: 24, height: 15, x: 67, y: 43, opacity: 0.65 },
      { id: 1780892019974, color: '#223852', width: 20, height: 15, x: 53, y: 33, opacity: 0.3 }
    ]
  });

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Load from localStorage on mount
    const saved = localStorage.getItem('ghci-aip-hero-settings');
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse ghci-aip-hero-settings:', e);
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setShowSettings(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const handleOpenSettings = () => setShowSettings(true);
    window.addEventListener('open-settings-aip-hero', handleOpenSettings);

    const handleUpdateSettings = (e: any) => {
      if (e.detail) setConfig(e.detail);
    };
    window.addEventListener('update-settings-aip-hero', handleUpdateSettings);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-settings-aip-hero', handleOpenSettings);
      window.removeEventListener('update-settings-aip-hero', handleUpdateSettings);
    };
  }, []);

  // Save settings whenever configuration changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('ghci-aip-hero-settings', JSON.stringify(config));
    }
  }, [config, mounted]);

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
    <section id="aip-hero" className="relative h-auto pt-36 pb-20 md:pt-44 md:pb-28 flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 md:px-13">
      {/* Background Bokeh Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0a0208]" />
        
        {/* Glowing blobs matching the Figma ellipse layers and positioning */}
        {mounted && config.blobs.map((blob, idx) => (
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
            className="absolute rounded-[50%] flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: blob.color,
              filter: debugMode ? 'none' : `blur(${config.bokehBlur}px)`,
              width: `${blob.width}%`,
              height: `${blob.height}%`,
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              opacity: debugMode ? 0.95 : blob.opacity,
              border: debugMode ? '2px dashed rgba(255, 255, 255, 0.8)' : '2px solid transparent',
            }}
          >
            {debugMode && (
              <span className="text-white text-xs md:text-sm font-bold bg-black/80 px-3 py-1 rounded-full border border-white/20 select-none pointer-events-none shadow-lg">
                Ellipse #{idx + 1}
              </span>
            )}
          </motion.div>
        ))}

        {/* SVG Noise Overlay for premium texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }} 
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
          {/* Left Column: Copy & Call to Action */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative group w-full flex flex-col items-center lg:items-start mb-6">
              <div className="relative w-full flex flex-col items-center lg:items-start">
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
                  className="text-[35px] md:text-[58px] lg:text-[3.6rem] xl:text-[4.4rem] font-medium w-full flex flex-col items-center lg:items-start mix-blend-plus-lighter px-4 lg:px-0 overflow-visible text-center lg:text-left"
                >
                  <span className="block">Advancing</span>
                  <span className="block">Inclusion</span>
                  <span className="block whitespace-nowrap">Program (AIP)</span>
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
                  className="text-[35px] md:text-[58px] lg:text-[3.6rem] xl:text-[4.4rem] font-medium w-full flex flex-col items-center lg:items-start mix-blend-plus-lighter px-4 lg:px-0 overflow-visible opacity-40 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 text-center lg:text-left"
                >
                  <span className="block">Advancing</span>
                  <span className="block">Inclusion</span>
                  <span className="block whitespace-nowrap">Program (AIP)</span>
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-white text-lg md:text-[2rem] max-w-6xl mb-10 font-normal whitespace-pre-line"
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
            className="lg:col-span-6 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[760px] aspect-[708/488] rounded-[10px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center group shadow-2xl">
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

      {/* Debug Settings Panel (Hidden by default, toggle with Ctrl+Alt+A) */}
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
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">AIP Hero Debug</h3>
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
            {/* Bokeh Background Accordion */}
            <div className="border border-white/5 rounded-xl overflow-hidden">
              <button 
                onClick={() => setExpandedSection(expandedSection === 'bokeh' ? null : 'bokeh')}
                className="w-full px-4 py-3 bg-white/5 flex justify-between items-center text-xs font-bold text-white/70 hover:bg-white/10 transition-colors"
              >
                BOKEH BACKGROUND MESH
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
                    <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg border border-white/5">
                      <span className="text-[10px] font-bold uppercase text-white/40">Helper Mode (Outlines)</span>
                      <button
                        onClick={() => setDebugMode(!debugMode)}
                        className={`px-3 py-1 text-[9px] font-bold rounded transition-colors ${
                          debugMode ? 'bg-green-600 text-white font-bold' : 'bg-white/10 text-white/40'
                        }`}
                      >
                        {debugMode ? 'ON' : 'OFF'}
                      </button>
                    </div>

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
                        className="px-2 py-1 bg-[#A32482] text-[10px] rounded hover:bg-[#8e1f7c] transition-colors text-white font-bold"
                      >
                        + Add
                      </button>
                    </div>

                    <div className="space-y-6 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                      {config.blobs.map((blob, idx) => (
                        <div key={blob.id} className="p-3 bg-white/5 rounded-lg border border-white/5 space-y-3 relative group/item">
                          <button 
                            onClick={() => setConfig({...config, blobs: config.blobs.filter(b => b.id !== blob.id)})}
                            className="absolute top-2 right-2 text-white/20 hover:text-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity"
                          >
                            <X size={12} />
                          </button>

                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-[#A32482] uppercase">Ellipse #{idx + 1}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <span className="text-[8px] uppercase text-white/30">Color</span>
                              <input 
                                type="color" value={blob.color} 
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
