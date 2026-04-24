'use client';
import { motion } from 'framer-motion';

interface ScheduleItem {
  time: string | null;
  title: string;
  description: string | null;
  isBreak?: boolean;
  image?: string;
}

const schedule: ScheduleItem[] = [
  {
    time: null,
    title: 'Registration and Check-In',
    description: null,
    isBreak: true,
  },
  {
    time: '09:00 AM – 09:45 AM',
    title: 'Kickoff & Coffee Connect',
    description: 'A casual kickoff to spark early conversations. Grab a coffee, meet fellow attendees, and get in the zone.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    time: '09:45 AM – 10:30 AM',
    title: 'Opening Keynote',
    description: "Our keynote speaker will share bold ideas, industry insights, and a powerful vision of what's ahead in the world of tech and innovation.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    time: null,
    title: 'Mornings Break',
    description: null,
    isBreak: true,
  },
  {
    time: '11:45 AM – 01:00 PM',
    title: 'Panel Discussion / Future of Tech',
    description: "Leading voices in AI, design, and emerging tech dive into what's shaping tomorrow — and how to stay ahead.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80',
  },
  {
    time: '10:30 AM – 11:45 PM',
    title: 'Workshop / Building Modern Apps',
    description: 'Hands-on session with industry experts. Learn the latest in app architecture, UX, and performance-first design.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    time: null,
    title: 'Lunch & Networking',
    description: null,
    isBreak: true,
  },
  {
    time: '02:15 PM – 03:00 PM',
    title: 'Keynote / The Future of Work',
    description: "A high-impact talk on automation, creativity, and how leaders are reshaping tomorrow's teams and tools.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
  },
  {
    time: '01:30 PM – 02:15 PM',
    title: 'Breakout Session / AI Trends',
    description: 'Smaller, focused groups unpack real-world AI use cases across industries — with live demos and Q&A.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80',
  },
  {
    time: null,
    title: 'Afternoon Break',
    description: null,
    isBreak: true,
  },
  {
    time: '03:30 PM – 04:30 PM',
    title: 'Workshop / Revolutionizing Transactions',
    description: "Dive into fintech and blockchain design, and learn what's next in digital transactions and user trust.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    time: '04:30 PM – 05:00 PM',
    title: 'Closing Remarks',
    description: 'Check-in and start your day with a morning coffee while connecting with fellow attendees. Meet new faces and get ready for an exciting day ahead.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80',
  },
];

const BlobBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* SVG Gooey Filter */}
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 blur-[80px] opacity-60" style={{ filter: 'url(#goo)' }}>
        {/* Magenta Blob 1 */}
        <motion.div
          animate={{
            x: [0, 200, -100, 0],
            y: [0, 150, -100, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#a3238e] rounded-full mix-blend-screen"
        />
        
        {/* Blue Blob 1 */}
        <motion.div
          animate={{
            x: [0, -150, 150, 0],
            y: [0, -100, 200, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#4284c2] rounded-full mix-blend-screen"
        />

        {/* Magenta Blob 2 */}
        <motion.div
          animate={{
            x: [0, 100, 250, 0],
            y: [0, -150, 80, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#a3238e] rounded-full mix-blend-screen"
        />

        {/* Blue Blob 2 */}
        <motion.div
          animate={{
            x: [0, -200, 100, 0],
            y: [0, 120, -180, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/2 w-[400px] h-[400px] bg-[#4284c2] rounded-full mix-blend-screen"
        />

        {/* Extra Small Morphing Blob */}
        <motion.div
          animate={{
            x: [0, 300, -200, 0],
            y: [0, 200, 300, 0],
            scale: [0.8, 1.3, 0.7, 0.8],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-60 h-60 bg-[#a3238e] rounded-full mix-blend-screen"
        />
      </div>

      {/* Hazy Overlay to smooth everything out */}
      <div className="absolute inset-0 bg-[#070708]/40 backdrop-blur-[60px]" />
    </div>
  );
};

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-[#070708] text-white px-6 relative overflow-hidden">
      <BlobBackground />
      
      {/* Top Border Glow */}
      {/* Removed Top Border Glow */}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-purple-400 text-sm font-mono tracking-wider mb-4 block"
            >
              [Schedule]
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Fuel Your Curiosity –{' '}
              <span className="text-white/40">Discover the Schedule</span>
            </motion.h2>
          </div>

          <a
            href="https://konfhub.com/ghci-2027"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 shrink-0"
          >
            <span className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </span>
            <span className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold text-sm">
              Buy a ticket
            </span>
          </a>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              {item.isBreak ? (
                <div className="py-4 px-6 rounded-xl bg-white/[0.03] border border-white/[0.04] my-2">
                  <span className="font-semibold text-white/80">{item.title}</span>
                  {item.time && <span className="text-white/40 text-sm ml-4">{item.time}</span>}
                </div>
              ) : (
                <div className="py-6 border-b border-white/[0.06] flex flex-col md:flex-row md:items-start gap-4 md:gap-0">
                  <div className="md:w-56 shrink-0">
                    <span className="text-white/40 text-sm font-mono">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed max-w-lg">{item.description}</p>
                  </div>
                  {item.image && (
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 ml-auto hidden md:block">
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
