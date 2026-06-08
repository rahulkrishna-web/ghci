'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, X, Layout, Image as ImageIcon, Users, 
  BarChart3, Globe, Ticket, MessageSquare, List, 
  MapPin, Shield, Zap, Info, Play
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const sections = [
  { id: 'hero', name: 'Hero', icon: Layout, color: '#A32482' },
  { id: 'aip-hero', name: 'AIP Hero', icon: Layout, color: '#A32482' },
  { id: 'about', name: 'About', icon: Info, color: '#4284c2' },
  { id: 'experience', name: 'Experience', icon: BarChart3, color: '#A32482' },
  { id: 'gain', name: 'What You Gain', icon: Zap, color: '#4284c2' },
  { id: 'attend', name: 'Who Should Attend', icon: Users, color: '#A32482' },
  { id: 'tracks', name: 'Explore Tracks', icon: List, color: '#4284c2' },
  { id: 'expect', name: 'What to Expect', icon: ImageIcon, color: '#A32482' },
  { id: 'speakers', name: 'Speakers', icon: Users, color: '#4284c2' },
  { id: 'involve', name: 'Ways to Involve', icon: Zap, color: '#A32482' },
  { id: 'partner', name: 'Partner', icon: Globe, color: '#4284c2' },
  { id: 'location', name: 'Location', icon: MapPin, color: '#A32482' },
  { id: 'ticket-perks', name: 'Ticket Perks', icon: Shield, color: '#4284c2' },
  { id: 'ticketing', name: 'Ticketing', icon: Ticket, color: '#A32482' },
  { id: 'contact', name: 'Contact', icon: MessageSquare, color: '#4284c2' },
  { id: 'faq', name: 'FAQ', icon: Info, color: '#A32482' },
  { id: 'footer', name: 'Footer', icon: Layout, color: '#4284c2' },
];

export default function ControlPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'launcher' | 'settings'>('launcher');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [jsonInput, setJsonInput] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    // Navigate to section or open its settings
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    
    // Dispatch event to open that section's settings
    window.dispatchEvent(new CustomEvent(`open-settings-${sectionId}`));
  };

  const handleApplyJson = () => {
    if (!selectedSection || !jsonInput) return;
    try {
        const config = JSON.parse(jsonInput);
        localStorage.setItem(`ghci-${selectedSection}-settings`, JSON.stringify(config));
        window.dispatchEvent(new CustomEvent(`update-settings-${selectedSection}`, { detail: config }));
        alert(`Settings applied to ${selectedSection}`);
    } catch (e) {
        alert('Invalid JSON');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#121214] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#A32482] flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white leading-tight">Control Panel</h2>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest">Microsite Management</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex p-2 bg-black/40 border-b border-white/5">
                <button 
                    onClick={() => setActiveTab('launcher')}
                    className={`flex-1 py-2 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'launcher' ? 'bg-[#A32482] text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
                >
                    Sections Launcher
                </button>
                <button 
                    onClick={() => setActiveTab('settings')}
                    className={`flex-1 py-2 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'settings' ? 'bg-[#A32482] text-white shadow-lg' : 'text-white/40 hover:text-white/60'}`}
                >
                    JSON Config
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              {activeTab === 'launcher' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#A32482]/50 hover:bg-[#A32482]/5 transition-all active:scale-95"
                    >
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${section.color}20`, color: section.color }}
                      >
                        <section.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-white/70 group-hover:text-white uppercase tracking-wider">{section.name}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Select Section</label>
                        <select 
                            value={selectedSection || ''} 
                            onChange={(e) => setSelectedSection(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#A32482] transition-colors"
                        >
                            <option value="">Choose a section...</option>
                            {sections.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                        </select>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">JSON Configuration</label>
                        <textarea 
                            value={jsonInput}
                            onChange={(e) => setJsonInput(e.target.value)}
                            placeholder='{"param": "value"}'
                            className="w-full h-48 bg-black/60 border border-white/10 rounded-xl p-4 text-xs font-mono text-green-400 focus:outline-none focus:border-[#A32482] transition-colors"
                        />
                    </div>

                    <button 
                        onClick={handleApplyJson}
                        disabled={!selectedSection || !jsonInput}
                        className="w-full py-4 bg-[#A32482] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#8e1f7c] text-white font-bold rounded-xl transition-all shadow-xl shadow-purple-900/20 uppercase tracking-widest text-xs"
                    >
                        Apply & Save Configuration
                    </button>

                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <p className="text-[10px] text-blue-400 font-medium leading-relaxed">
                            Tip: You can export JSON from the individual section debug panels and paste it here to persist settings across sessions.
                        </p>
                    </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/5 bg-black/20 text-center">
                <p className="text-[10px] text-white/20 font-medium uppercase tracking-[0.2em]">GHCI 2027 • Debug Tools</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
