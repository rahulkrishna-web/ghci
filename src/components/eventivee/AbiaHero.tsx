'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Clock, Settings, X } from 'lucide-react';
import Image from 'next/image';

interface AbiaHeroProps {
  data: any;
}

export default function AbiaHero({ data }: AbiaHeroProps) {
  const { hero } = data;
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [expandedSection, setExpandedSection] = useState<'bokeh' | 'json' | null>('bokeh');

  const [config, setConfig] = useState({
    bokehBlur: 35,
    bokehSpeed: 1,
    blobs: [
      {
        id: 1,
        color: "#22021d",
        width: 36,
        height: 31,
        x: 49,
        y: 26,
        opacity: 0.87
      },
      {
        id: 2,
        color: "#a32482",
        width: 18,
        height: 14,
        x: 73,
        y: 45,
        opacity: 0.4
      },
      {
        id: 3,
        color: "#22021D",
        width: 18,
        height: 19,
        x: 69,
        y: 46,
        opacity: 0.51
      },
      {
        id: 1784386408367,
        color: "#223852",
        width: 29,
        height: 25,
        x: 46,
        y: 44,
        opacity: 0.48
      }
    ]
  });

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Load from localStorage on mount
    const saved = localStorage.getItem('ghci-abia-hero-settings');
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse ghci-abia-hero-settings:', e);
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setShowSettings(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const handleOpenSettings = () => setShowSettings(true);
    window.addEventListener('open-settings-abia-hero', handleOpenSettings);

    const handleUpdateSettings = (e: any) => {
      if (e.detail) setConfig(e.detail);
    };
    window.addEventListener('update-settings-abia-hero', handleUpdateSettings);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-settings-abia-hero', handleOpenSettings);
      window.removeEventListener('update-settings-abia-hero', handleUpdateSettings);
    };
  }, []);

  // Save settings whenever configuration changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('ghci-abia-hero-settings', JSON.stringify(config));
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
    <section id="abia-hero" className="relative w-full min-h-[90vh] bg-[#070708] pt-32 pb-20 flex items-center justify-center overflow-hidden px-4 md:px-13">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#070708]" />
        
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
      </div>
      
      <div className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image 
              src="/abia/lead_section.png"
              alt="Anita Borg Impact Awards Stage"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start gap-6 w-full"
          >
            <div className="flex items-center gap-2.5 text-white/90 text-lg md:text-xl font-medium">
              <Clock className="w-5 h-5 md:w-6 md:h-6" />
              <span>{hero.deadline}</span>
            </div>
            
            <div className="relative group w-full flex flex-col items-start">
              <div className="relative w-full flex flex-col items-start">
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
                    lineHeight: isMobile ? '1.1' : '1.15',
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-medium w-full flex flex-col items-start mix-blend-plus-lighter overflow-visible text-left"
                >
                  {hero.title}
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
                    lineHeight: isMobile ? '1.1' : '1.15',
                    pointerEvents: 'none',
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-medium w-full flex flex-col items-start mix-blend-plus-lighter overflow-visible opacity-40 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 text-left"
                >
                  {hero.title}
                </motion.h1>
              </div>
            </div>
            
            <p className="text-lg md:text-[2rem] font-normal text-white/80 max-w-xl leading-snug">
              {hero.subtitle}
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block mt-6"
            >
              <a
                href={hero.ctaLink}
                className="relative inline-flex rounded-full min-w-[200px] md:min-w-[280px] h-12 md:h-16 overflow-hidden group active:scale-98 cursor-pointer transition-all duration-300"
              >
                {/* Gradient Border Overlay */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid transparent',
                    background: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%) border-box',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'destination-out',
                    maskComposite: 'exclude',
                  }}
                />
                
                {/* Sliding Content Container */}
                <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden group-hover:bg-[#A32482] transition-colors duration-300">
                  <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                    <div 
                      className="h-full w-full flex items-center justify-center px-6 md:px-20 shrink-0 text-transparent bg-clip-text text-sm md:text-xl font-semibold tracking-[0.08em] uppercase pb-0.5"
                      style={{
                        backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)',
                        WebkitBackgroundClip: 'text'
                      }}
                    >
                      {hero.cta}
                    </div>
                    <div className="h-full w-full flex items-center justify-center px-6 md:px-20 shrink-0 text-white text-sm md:text-xl font-semibold tracking-[0.08em] uppercase pb-0.5">
                      {hero.cta}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
          
        </div>
      </div>

      {/* Floating Debug Settings Panel */}
      {showSettings && (
        <motion.div 
          drag
          dragMomentum={false}
          className="fixed bottom-6 right-6 z-[999] w-[340px] bg-[#121214]/95 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col max-h-[80vh] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/10 cursor-grab active:cursor-grabbing shrink-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">ABIA Hero Debug</h3>
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
