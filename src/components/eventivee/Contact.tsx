'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Ticket, Mail, X, Settings } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

type ContactProps = {
  data: {
    sectionTitle: string;
    subtitle: string;
    email: string;
    buttons: { text: string; link: string }[];
  };
};

export default function Contact({ data }: ContactProps) {
  // Debug Settings State
  const [showSettings, setShowSettings] = useState(false);
  const [expandedSection, setExpandedSection] = useState<'halftone' | 'json' | null>('halftone');
  const [config, setConfig] = useState({
    halftoneOpacity: 0.9,
    halftoneSize: 1.2,
    halftoneGap: 24,
    shineSize: 460,
    shineStrength: 0.06,
    shineColor: '#A32482'
  });

  // Hotkey to toggle settings (Ctrl + Alt + C)
  useEffect(() => {
    const handleOpenSettings = () => setShowSettings(true);
    window.addEventListener('open-settings-contact', handleOpenSettings);
    
    const handleUpdateSettings = (e: any) => {
        if (e.detail) setConfig(e.detail);
    };
    window.addEventListener('update-settings-contact', handleUpdateSettings);

    return () => {
      window.removeEventListener('open-settings-contact', handleOpenSettings);
      window.removeEventListener('update-settings-contact', handleUpdateSettings);
    };
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const xPx = useTransform(smoothX, (v) => `${v}px`);
  const yPx = useTransform(smoothY, (v) => `${v}px`);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.section 
        id="contact" 
        onMouseMove={handleMouseMove}
        style={{
            '--x': xPx,
            '--y': yPx
        } as any}
        className="py-6 md:py-24 bg-black text-white px-4 md:px-40 border-t border-white/[0.05] relative overflow-hidden group/contact"
    >
        {/* Halftone Overlay */}
        <div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover/contact:opacity-100 transition-opacity duration-500 z-0"
            style={{
                backgroundSize: `${config.halftoneGap}px ${config.halftoneGap}px`,
                backgroundImage: `radial-gradient(circle, ${config.shineColor}${Math.round(config.halftoneOpacity * 255).toString(16).padStart(2, '0')} ${config.halftoneSize}px, transparent 0)`,
                WebkitMaskImage: `radial-gradient(circle ${config.shineSize}px at var(--x) var(--y), black, transparent)`,
                maskImage: `radial-gradient(circle ${config.shineSize}px at var(--x) var(--y), black, transparent)`
            }}
        />

        {/* Dynamic Spotlight */}
        <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                background: `radial-gradient(circle ${config.shineSize * 1.5}px at var(--x) var(--y), ${config.shineColor}${Math.round(config.shineStrength * 255).toString(16).padStart(2, '0')}, transparent)`
            }}
        />

      <div className="w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-12 mb-12">
            
            {/* Left Side: Content (75% approx) */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:flex-1"
            >
                <h2 className="text-4xl md:text-7xl font-medium tracking-[-0.01em] mb-8 leading-tight text-white">
                    Get in <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent">Touch</span>
                </h2>
                <div className="space-y-6">
                    <div className="text-white/70 text-base md:text-xl leading-relaxed">
                        Have questions or need support?<br />
                        Our team is here to help.
                    </div>
                    <div className="text-white/70 text-base md:text-xl">
                        Reach out at:<br />
                        <a href={`mailto:${data.email}`} className="text-white hover:text-[#A3238E] transition-colors break-all md:break-normal font-medium">{data.email}</a>
                    </div>
                </div>
            </motion.div>

            {/* Right Side: CTAs (25% approx) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-auto shrink-0 flex flex-row md:flex-col gap-2 md:gap-6 items-center md:items-end pt-2 mt-8 md:mt-0"
            >
                {/* Register Cluster */}
                <div className="flex items-center group gap-0">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center shrink-0 z-10 transition-colors group-hover:bg-[#8e1f7c]">
                        <img src="/icons/Ticket.png" alt="Register" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                    </div>
                    <a 
                        href={data.buttons[0].link} 
                        className="h-10 md:h-16 w-38 md:w-48 inline-flex flex-col rounded-full bg-[#A32482] hover:bg-[#8e1f7c] text-white font-semibold transition-all shadow-xl shadow-purple-900/20 active:scale-95 z-0 overflow-hidden"
                    >
                        <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                            <div className="h-full w-full flex flex-col items-center justify-center px-4 md:px-6 text-[15px] md:text-lg leading-tight text-center shrink-0">
                                Register Now
                            </div>
                            <div className="h-full w-full flex flex-col items-center justify-center px-4 md:px-6 text-[15px] md:text-lg leading-tight text-center shrink-0">
                                Register Now
                            </div>
                        </div>
                    </a>
                </div>

                {/* Newsletter Cluster */}
                <div className="flex items-center group gap-0">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white border border-white/10 flex items-center justify-center shrink-0 z-10 transition-colors group-hover:bg-neutral-100">
                        <img src="/icons/newsletter.png" alt="Newsletter" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                    </div>
                    <a 
                        href="#" 
                        className="h-10 md:h-16 w-38 md:w-48 inline-flex flex-col rounded-full bg-white text-[#A32482] font-semibold transition-all shadow-xl active:scale-95 z-0 overflow-hidden"
                    >
                        <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                            <div className="h-full w-full flex flex-col items-center justify-center px-4 md:px-6 text-[15px] md:text-lg leading-tight text-center shrink-0">
                                <span>Subscribe to</span>
                                <span>Newsletter</span>
                            </div>
                            <div className="h-full w-full flex flex-col items-center justify-center px-4 md:px-6 text-[15px] md:text-lg leading-tight text-center shrink-0">
                                <span>Subscribe to</span>
                                <span>Newsletter</span>
                            </div>
                        </div>
                    </a>
                </div>
            </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full relative rounded-full p-[2px] overflow-hidden"
            style={{
                background: 'linear-gradient(to right, rgba(163, 36, 120, 0.3) 16%, rgba(255, 255, 255, 0.3) 86%), #A32482'
            }}
        >
            <div className="w-full bg-black rounded-full py-2 md:py-8 text-center px-6">
                <h3 className="text-2xl md:text-4xl font-semibold mb-1 md:mb-2 tracking-tight text-white inline-block">
                    <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent">Tickets starting at ₹3,000</span>
                </h3>
                <p className="text-white text-lg md:text-2xl">
                    Early Bird pricing available for a limited time
                </p>
            </div>
        </motion.div>

        {/* Debug Settings Panel (Toggle with Ctrl+Alt+C) */}
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
                    <div className="flex items-center gap-2">
                        <Settings className="w-3 h-3 text-white/50" />
                        <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">Contact Debug</h3>
                    </div>
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
                    {/* Halftone Settings Accordion */}
                    <div className="border border-white/5 rounded-xl overflow-hidden">
                        <button 
                            onClick={() => setExpandedSection(expandedSection === 'halftone' ? null : 'halftone')}
                            className="w-full px-4 py-3 bg-white/5 flex justify-between items-center text-xs font-bold text-white/70 hover:bg-white/10 transition-colors"
                        >
                            HALFTONE & SPOTLIGHT
                            <span className="text-lg">{expandedSection === 'halftone' ? '−' : '+'}</span>
                        </button>
                        
                        {expandedSection === 'halftone' && (
                            <div className="p-4 space-y-6 bg-black/20">
                                <Slider 
                                    label="Pattern Opacity" 
                                    value={config.halftoneOpacity} 
                                    min={0} max={1} step={0.01} 
                                    onChange={(v) => setConfig(prev => ({ ...prev, halftoneOpacity: v }))} 
                                />
                                <Slider 
                                    label="Dot Size" 
                                    value={config.halftoneSize} 
                                    min={0.5} max={10} step={0.1} 
                                    onChange={(v) => setConfig(prev => ({ ...prev, halftoneSize: v }))} 
                                />
                                <Slider 
                                    label="Dot Gap" 
                                    value={config.halftoneGap} 
                                    min={10} max={100} step={1} 
                                    onChange={(v) => setConfig(prev => ({ ...prev, halftoneGap: v }))} 
                                />
                                <Slider 
                                    label="Shine Radius" 
                                    value={config.shineSize} 
                                    min={100} max={1000} step={10} 
                                    onChange={(v) => setConfig(prev => ({ ...prev, shineSize: v }))} 
                                />
                                <Slider 
                                    label="Shine Strength" 
                                    value={config.shineStrength} 
                                    min={0} max={0.5} step={0.01} 
                                    onChange={(v) => setConfig(prev => ({ ...prev, shineStrength: v }))} 
                                />
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Pattern Color</label>
                                    <div className="flex gap-2">
                                        <input 
                                            type="color" 
                                            value={config.shineColor} 
                                            onChange={(e) => setConfig(prev => ({ ...prev, shineColor: e.target.value }))}
                                            className="w-full h-8 bg-white/5 border border-white/10 rounded cursor-pointer"
                                        />
                                        <div className="px-3 flex items-center bg-white/5 border border-white/10 rounded font-mono text-[10px] text-white/60">
                                            {config.shineColor.toUpperCase()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Export JSON Accordion */}
                    <div className="border border-white/5 rounded-xl overflow-hidden">
                        <button 
                            onClick={() => setExpandedSection(expandedSection === 'json' ? null : 'json')}
                            className="w-full px-4 py-3 bg-white/5 flex justify-between items-center text-xs font-bold text-white/70 hover:bg-white/10 transition-colors"
                        >
                            EXPORT JSON
                            <span className="text-lg">{expandedSection === 'json' ? '−' : '+'}</span>
                        </button>
                        
                        {expandedSection === 'json' && (
                            <div className="p-4 space-y-4 bg-black/20">
                                <pre className="text-[10px] font-mono text-white/40 bg-black/40 p-3 rounded-lg overflow-x-auto">
                                    {JSON.stringify(config, null, 2)}
                                </pre>
                                <button 
                                    onClick={() => {
                                        navigator.clipboard.writeText(JSON.stringify(config, null, 2));
                                        alert('Config copied to clipboard!');
                                    }}
                                    className="w-full py-2 bg-[#A32482] hover:bg-[#8e1f7c] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-colors"
                                >
                                    Copy Config
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        )}
      </div>
    </motion.section>
  );
}

// Sub-component for debug sliders
function Slider({ label, value, min, max, step = 1, onChange }: { label: string, value: number, min: number, max: number, step?: number, onChange: (v: number) => void }) {
    return (
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-[10px] font-bold text-white/40 uppercase tracking-wider">{label}</label>
          <span className="text-[10px] font-mono text-white/60 bg-white/5 px-2 py-0.5 rounded">{value}</span>
        </div>
        <input 
          type="range" 
          min={min} 
          max={max} 
          step={step} 
          value={value} 
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#A32482]"
        />
      </div>
    );
  }
