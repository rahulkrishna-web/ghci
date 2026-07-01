'use client';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Shield, X, ChevronLeft, Plus, Settings, Trash2, Edit3, Type, Image as ImageIcon, Copy, ExternalLink, Check } from 'lucide-react';

// Default data as a starting point
const defaultTickets = [
  {
    id: "last-year",
    name: "Privilege Offer",
    description: "For GHCI 25 attendees ",
    footnote: "Offer valid till August 2, 2026",
    price: "₹10,000",
    gst: "+ applicable charges",
    cta: "Get the Pass",
    features: [
      "Full access to GHCI 27 (sessions, workshops & networking)",
      "1-year AnitaB.org Global Membership",
      "Attendee certification + digital badges"
    ],
    cardBlur: 0,
    blobsDesktop: [
      { color: "#a32482", width: 33, height: 82, x: -9, y: 73, opacity: 1 },
      { color: "#223852", width: 26, height: 50, x: -8, y: -16, opacity: 0.6 },
      { color: "#223852", width: 27, height: 69, curve: 50, x: 19, y: 11, opacity: 0.5 },
      { color: "#223852", width: 38, height: 67, curve: 47, x: 69, y: 45, opacity: 0.5 },
      { color: "#22021d", width: 48, height: 83, curve: 44, x: 27, y: -15, opacity: 1 }
    ],
    blobsMobile: [
      { color: "#a32482", width: 33, height: 82, x: -9, y: 73, opacity: 1 },
      { color: "#223852", width: 26, height: 50, x: -8, y: -100, opacity: 1 }
    ],
    blobs: [
      { color: "#a32482", width: 33, height: 82, x: -9, y: 73, opacity: 1 },
      { color: "#223852", width: 26, height: 50, x: -8, y: -16, opacity: 0.6 }
    ]
  },
  {
    id: "super-early",
    name: "Super Early Bird",
    description: "All Access 3-day pass. ",
    footnote: "",
    price: "₹11,000",
    oldPrice: "₹15,000",
    gst: "18% GST Applicable",
    cta: "Get the Pass",
    features: [
      "Full access to GHCI 27 (sessions, workshops & networking)",
      "1-year AnitaB.org Global Membership",
      "Attendee certification + digital badges"
    ],
    cardBlur: 70,
    blobsDesktop: [
      { color: "#a32482", width: 52, height: 82, x: 67, y: -37, opacity: 1 },
      { color: "#223852", width: 40, height: 65, x: -5, y: 14, opacity: 0.6 },
      { color: "#223852", width: 27, height: 69, curve: 50, x: 51, y: 31, opacity: 0.5 },
      { color: "#223852", width: 38, height: 67, curve: 47, x: 78, y: 60, opacity: 0.5 },
      { color: "#22021d", width: 48, height: 83, curve: 44, x: 27, y: 39, opacity: 1 }
    ],
    blobsMobile: [
      { color: "#a32482", width: 33, height: 82, x: -9, y: 73, opacity: 1 },
      { color: "#223852", width: 26, height: 50, x: -8, y: -16, opacity: 0.6 },
      { color: "#223852", width: 27, height: 69, curve: 50, x: 19, y: 11, opacity: 0.5 },
      { color: "#223852", width: 38, height: 67, curve: 47, x: 69, y: 45, opacity: 0.5 },
      { color: "#22021d", width: 48, height: 83, curve: 44, x: 27, y: -27, opacity: 1 }
    ],
    blobs: [
      { color: "#22021D", width: 80, height: 60, x: 10, y: 40, opacity: 0.8 },
      { color: "#A32482", width: 50, height: 40, x: 60, y: 70, opacity: 0.5 }
    ]
  },
  {
    id: "early-bird",
    name: "Early Bird",
    description: "All Access 3-day pass. ",
    footnote: "Offer valid till August 31",
    price: "₹12,000",
    oldPrice: "₹15,000",
    gst: "+ applicable charges",
    cta: "Get the Pass",
    features: [
      "Full access to GHCI 27 (sessions, workshops & networking)",
      "1-year AnitaB.org Global Membership",
      "Attendee certification + digital badges"
    ],
    cardBlur: 70,
    blobsDesktop: [
      { color: "#a32482", width: 52, height: 82, x: 67, y: -37, opacity: 1 },
      { color: "#223852", width: 40, height: 65, x: -5, y: 14, opacity: 0.6 },
      { color: "#223852", width: 27, height: 69, curve: 50, x: 51, y: 31, opacity: 0.5 },
      { color: "#223852", width: 38, height: 67, curve: 47, x: 78, y: 60, opacity: 0.5 },
      { color: "#22021d", width: 48, height: 83, curve: 44, x: 27, y: 39, opacity: 1 }
    ],
    blobsMobile: [
      { color: "#a32482", width: 33, height: 82, x: -9, y: 73, opacity: 1 },
      { color: "#223852", width: 26, height: 50, x: -8, y: -16, opacity: 0.6 },
      { color: "#223852", width: 27, height: 69, curve: 50, x: 19, y: 11, opacity: 0.5 },
      { color: "#223852", width: 38, height: 67, curve: 47, x: 69, y: 45, opacity: 0.5 },
      { color: "#22021d", width: 48, height: 83, curve: 44, x: 27, y: -27, opacity: 1 }
    ],
    blobs: [
      { color: "#22021D", width: 80, height: 60, x: 10, y: 40, opacity: 0.8 },
      { color: "#A32482", width: 50, height: 40, x: 60, y: 70, opacity: 0.5 }
    ]
  },
  {
    id: "regular",
    name: "Regular",
    description: "Academia / Faculty / Startup / Return-to-Work ",
    footnote: "",
    price: "₹9,000",
    gst: "18% GST Applicable",
    cta: "Get the Pass",
    features: [
      "Full access to GHCI 27 (sessions, workshops & networking)",
      "1-year AnitaB.org Global Membership",
      "Attendee certification + digital badges"
    ],
    cardBlur: 70,
    blobsDesktop: [
      { color: "#a32482", width: 33, height: 82, x: -9, y: 73, opacity: 1 },
      { color: "#223852", width: 26, height: 50, x: -8, y: -16, opacity: 0.6 },
      { color: "#223852", width: 27, height: 69, curve: 50, x: 19, y: 11, opacity: 0.5 },
      { color: "#223852", width: 38, height: 67, curve: 47, x: 69, y: 45, opacity: 0.5 },
      { color: "#22021d", width: 48, height: 83, curve: 44, x: 27, y: -15, opacity: 1 }
    ],
    blobsMobile: [
      { color: "#a32482", width: 33, height: 82, x: -9, y: 73, opacity: 1 },
      { color: "#223852", width: 26, height: 50, x: -8, y: -16, opacity: 0.6 },
      { color: "#223852", width: 27, height: 69, curve: 50, x: 19, y: 11, opacity: 0.5 },
      { color: "#223852", width: 38, height: 67, curve: 47, x: 69, y: 45, opacity: 0.5 },
      { color: "#22021d", width: 48, height: 83, curve: 44, x: 27, y: -15, opacity: 1 }
    ],
    blobs: [
      { color: "#4284c2", width: 40, height: 30, x: -10, y: -5, opacity: 0.3 },
      { color: "#A32482", width: 60, height: 40, x: 40, y: 10, opacity: 0.4 }
    ]
  },
];

const TicketingCard = ({ ticket, idx, config }: { ticket: any; idx: number; config: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    setIsHovered(true);
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const blobXOffset = useTransform(springX, [0, 1], [-20, 20]);
  const blobYOffset = useTransform(springY, [0, 1], [-20, 20]);

  // Mouse-reactive border shine (Hero-style)
  const borderBackground = useTransform(
    [springX, springY],
    ([x, y]: number[]) => `radial-gradient(800px circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,1) 0%, transparent 60%)`
  );

  const nSize = config.notchSizeDesktop || 25;
  const notchGradient = `radial-gradient(circle at 50% 0px, transparent ${nSize}px, rgba(255,255,255,${config.borderShineDefaultOpacity}) ${nSize + 0.5}px, rgba(255,255,255,${config.borderShineDefaultOpacity}) ${nSize + 1.5}px, transparent ${nSize + 2}px)`;
  const notchHoverGradient = `radial-gradient(circle at 50% 0px, transparent ${nSize}px, rgba(255,255,255,${config.borderShineHoverOpacity}) ${nSize + 0.5}px, rgba(255,255,255,${config.borderShineHoverOpacity}) ${nSize + 1.5}px, transparent ${nSize + 2}px)`;
  const notchStaticGradient = `radial-gradient(circle at 50% 0px, transparent ${nSize}px, rgba(255,255,255,${config.borderOpacityDesktop}) ${nSize + 0.5}px, rgba(255,255,255,${config.borderOpacityDesktop}) ${nSize + 1.5}px, transparent ${nSize + 2}px)`;

  const d1Dash = config.divider1DashDesktop || 4;
  const d1Gap = config.divider1GapDesktop || 4;
  const d2Dash = config.divider2DashDesktop || 14;
  const d2Gap = config.divider2GapDesktop || 6;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      className="relative w-full h-[740px] rounded-[2.5rem] overflow-hidden group flex flex-col"
      style={{
        maskImage: `radial-gradient(circle at 50% 0px, transparent ${nSize}px, black ${nSize + 0.5}px)`,
        WebkitMaskImage: `radial-gradient(circle at 50% 0px, transparent ${nSize}px, black ${nSize + 0.5}px)`,
      }}
    >
      {/* Glassy Border Layer */}
      <div className="absolute inset-0 p-[1.5px] rounded-[2.5rem] z-20 pointer-events-none">
          {/* Static Border Stroke */}
          <div 
            className="absolute inset-0 rounded-[2.5rem] border border-white" 
            style={{ opacity: config.borderOpacityDesktop ?? 0.05 }}
          />
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 z-30"
            style={{ background: notchStaticGradient }}
          />

          {/* Mouse Following BORDER Shine (Restricted to edge) */}
          <motion.div 
            style={{ 
                background: borderBackground,
                opacity: useTransform(
                    [springX, springY], 
                    () => isHovered ? config.borderShineHoverOpacity : config.borderShineDefaultOpacity
                ),
                maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                maskClip: 'content-box, border-box',
                maskComposite: 'exclude',
                WebkitMaskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                WebkitMaskClip: 'content-box, border-box',
                WebkitMaskComposite: 'xor',
                padding: '1.5px'
            }}
            className="absolute inset-0 rounded-[2.5rem] border border-transparent transition-opacity duration-500" 
          />

          {/* Notch Shine Border (Hover/Shine) */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 z-30"
            style={{ 
                background: notchHoverGradient,
                opacity: isHovered ? 1 : 0
            }}
          />
      </div>

      {/* Inner Card Background */}
      <div className="absolute inset-[1.5px] rounded-[1rem] bg-[#070708] overflow-hidden z-0">
        {/* Background Shine (Behind blobs) */}
        <motion.div 
            style={{ 
                background: borderBackground,
                opacity: useTransform(
                    [springX, springY], 
                    () => isHovered ? config.bgShineHoverOpacity : config.bgShineDefaultOpacity
                )
            }}
            className="absolute inset-0 transition-opacity duration-700 pointer-events-none z-0" 
        />
        
        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none z-10">
            {(ticket.blobsDesktop || ticket.blobs || []).map((blob: any, bIdx: number) => (
            <motion.div
                key={bIdx}
                animate={config.bokehSpeed > 0 ? {
                x: [0, 40 * (bIdx % 2 ? 1 : -1), -40 * (bIdx % 2 ? 1 : -1), 0],
                y: [0, -25 * (bIdx % 3 ? 1 : -1), 25 * (bIdx % 3 ? 1 : -1), 0],
                } : {}}
                transition={{
                duration: 15 + bIdx * 5,
                repeat: Infinity,
                ease: "linear"
                }}
                style={{
                backgroundColor: blob.color,
                width: `${blob.width}%`,
                height: `${blob.height}%`,
                left: `${blob.x}%`,
                top: `${blob.y}%`,
                opacity: blob.opacity,
                filter: `blur(${ticket.cardBlur || 100}px)`,
                borderRadius: typeof blob.curve !== 'undefined' ? `${blob.curve}%` : '50%',
                translateX: blobXOffset,
                translateY: blobYOffset,
                }}
                className="absolute"
            />
            ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10  flex flex-col h-full flex-1">
        <div className="p-8 md:p-10 pt-16 md:pt-14 pb-2 md:pb-2 h-[160px] flex flex-col justify-center flex-shrink-0">
          <h3 className="text-xl md:text-2xl mb-2 leading-tight">{ticket.name}</h3>
          {ticket.description && (
            <p className="text-white/60 text-sm md:text-base leading-snug line-clamp-2">
              {ticket.description}
            </p>
          )}
        </div>
        {/* <div className="border-t border-dashed border-white/20 py-0 w-full" /> */}
        <div className="px-8 md:px-10 h-[210px] flex flex-col justify-end pb-6 flex-shrink-0">
            <div className="flex flex-col justify-end h-[80px] mb-2">
            {ticket.oldPrice ? (
              <span className="text-white/40 text-lg font-medium line-through decoration-white/40 leading-none h-6 flex items-end mb-1">{ticket.oldPrice}</span>
            ) : (
              <div className="h-6 mb-1" /> // Spacer
            )}
            <span className={`leading-none ${ticket.price.toLowerCase().includes('soon') ? 'text-xl md:text-2xl text-white/60' : 'text-xl md:text-4xl'}`}>
              {ticket.price}
            </span>
          </div>
          <p className="text-white/40 text-lg mb-4 leading-none h-4">{ticket.gst}</p>
          
          <a 
            href={ticket.disabled ? undefined : "https://link.district.in/DSTRKT/GHCI2027PartnerWebsite"}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full cursor-pointer ${ticket.disabled ? 'pointer-events-none' : ''}`}
          >
            <button 
              disabled={ticket.disabled}
              className={`group w-full h-16 relative rounded-full bg-[#A32482] hover:bg-[#8e1f7c] transition-all text-white text-xl font-bold active:scale-95 shadow-xl shadow-purple-900/20 overflow-hidden ${ticket.disabled ? 'opacity-50 cursor-not-allowed grayscale' : 'cursor-pointer'}`}
            >
              <div className={`h-[200%] w-full flex flex-col absolute top-0 left-0 ${ticket.disabled ? '' : 'transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2'}`}>
                  <div className="h-1/2 w-full flex items-center justify-center px-8">
                      {ticket.cta}
                  </div>
                  {!ticket.disabled && (
                    <div className="h-1/2 w-full flex items-center justify-center px-8">
                        {ticket.cta}
                    </div>
                  )}
              </div>
            </button>
          </a>
        </div>
        <div className="border-t border-dashed border-white/20 my-0 w-full" />

        <div className="flex-1 p-8 md:p-10 py-6 md:py-8 flex flex-col overflow-hidden">
          <p className="text-white/50 text-lg mb-4">What&apos;s included</p>
          <ul className="space-y-3 flex-1">
            {ticket.features.map((feature: string, fIdx: number) => (
              <li key={fIdx} className="flex items-start gap-3 text-sm md:text-base text-white/80">
                <span className="text-white text-xl mt-[-2px]">+</span>
                <span className="line-clamp-2">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-white/5 h-[60px] flex items-center justify-center flex-shrink-0">
            {ticket.footnote ? (
              <p className="text-white text-[10px] md:text-xs text-center uppercase tracking-widest font-bold leading-none">
                  {ticket.footnote}
              </p>
            ) : (
              <p className="text-white/20 text-[10px] md:text-xs text-center uppercase tracking-widest font-bold leading-none">
                  GHCI 27 • BENGALURU
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TicketingCardMobile = ({ ticket, idx, config }: { ticket: any; idx: number; config: any }) => {
    const d1Dash = config.divider1DashMobile || 2;
    const d1Gap = config.divider1GapMobile || 2;
    const d2Dash = config.divider2DashMobile || 8;
    const d2Gap = config.divider2GapMobile || 4;
    const nSize = config.notchSizeMobile || 20;

    const notchStaticGradientMobile = `radial-gradient(circle at 0px 50%, transparent ${nSize}px, rgba(255,255,255,0.2) ${nSize + 0.5}px, rgba(255,255,255,0.2) ${nSize + 1.5}px, transparent ${nSize + 2}px)`;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="relative w-full rounded-[0.5rem] overflow-hidden border flex flex-row"
            style={{
                borderColor: `rgba(255, 255, 255, 0.20)`,
                maskImage: `radial-gradient(circle at 0px 50%, transparent ${nSize}px, black ${nSize + 0.5}px)`,
                WebkitMaskImage: `radial-gradient(circle at 0px 50%, transparent ${nSize}px, black ${nSize + 0.5}px)`,
            }}
        >
            {/* Notch Border Stroke */}
            <div 
                className="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-24 z-30 pointer-events-none"
                style={{ background: notchStaticGradientMobile }}
            />

             {/* Background Blobs */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[#070708]" />
                {(ticket.blobsMobile || ticket.blobs || []).map((blob: any, bIdx: number) => (
                <motion.div
                    key={bIdx}
                    animate={config.bokehSpeed > 0 ? {
                        x: [0, 30 * (bIdx % 2 ? 1 : -1), -30 * (bIdx % 2 ? 1 : -1), 0],
                        y: [0, -20 * (bIdx % 3 ? 1 : -1), 20 * (bIdx % 3 ? 1 : -1), 0],
                    } : {}}
                    transition={{
                        duration: 20 + bIdx * 4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundColor: blob.color,
                        width: `${blob.width}%`,
                        height: `${blob.height}%`,
                        left: `${blob.x}%`,
                        top: `${blob.y}%`,
                        opacity: blob.opacity,
                        filter: `blur(${ticket.cardBlur || 100}px)`,
                        borderRadius: typeof blob.curve !== 'undefined' ? `${blob.curve}%` : '%',
                    }}
                    className="absolute"
                />
                ))}
            </div>

            <div className="relative z-10 flex w-full p-4 pl-8 md:p-10 ">
                {/* Header Section */}
                <div className="basis-[55%] pr-2">
                    <h3 className="text-lg md:text-xl mb-2 leading-tight">{ticket.name}</h3>
                    <p className="text-white/60 text-md md:text-md leading-tight">{ticket.description}</p>
                    {/* Divider 1: Custom Dashes (Edge to Edge) */}
                {/* <div 
                    className="h-[1px] w-auto -mx-0 md:-mx-10 mb-2 self-stretch shrink-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,1) 0, rgba(255,255,255,1) ${d1Dash}px, transparent ${d1Dash}px, transparent ${d1Dash + d1Gap}px)`,
                        opacity: config.dividerOpacityMobile ?? 0.2
                    }}
                /> */}

                {/* Price & CTA Section */}
                <div className="flex flex-col mr-4">
                    <div className="flex flex-col">
                        
                        {ticket.oldPrice ? (
              <span className="text-white/40 text-lg line-through decoration-white/40 leading-none h-7 flex items-end mb-1">{ticket.oldPrice}</span>
            ) : (
              <div className="h-2 mb-2" /> // Spacer to align prices
            )}
                        <span className={`tracking-tight ${ticket.price.toLowerCase().includes('soon') ? 'text-xl md:text-lg text-white/60' : 'text-4xl md:text-lg'}`}>
                            {ticket.price}
                        </span>
                    </div>
                    <p className="text-white/40 text-xs md:text-sm mb-2">{ticket.gst}</p>

                    <a 
                        href={ticket.disabled ? undefined : "https://link.district.in/DSTRKT/GHCI2027PartnerWebsite"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full cursor-pointer ${ticket.disabled ? 'pointer-events-none' : ''}`}
                    >
                        <button 
                            disabled={ticket.disabled}
                            className={`w-full py-2.5 rounded-full bg-[#A32482] text-white font-bold text-sm shadow-lg shadow-purple-900/40 active:scale-[0.98] transition-transform ${ticket.disabled ? 'opacity-50 cursor-not-allowed grayscale' : 'cursor-pointer'}`}
                        >
                            {ticket.cta}
                        </button>
                    </a>
                </div>
                </div>

                

                {/* Divider 2: Custom Dashes (Edge to Edge) */}
                {/* <div 
                    className="h-[1px] w-auto -mx-8 md:-mx-10 mb-8 self-stretch shrink-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,1) 0, rgba(255,255,255,1) ${d2Dash}px, transparent ${d2Dash}px, transparent ${d2Dash + d2Gap}px)`,
                        opacity: config.dividerOpacityMobile ?? 0.3
                    }}
                /> */}

                <div 
                    className="w-[0.5px] h-full"
                    style={{
                        backgroundImage: `repeating-linear-gradient(to bottom, rgba(255,255,255,1) 0, rgba(255,255,255,1) ${d2Dash}px, transparent ${d2Dash}px, transparent ${d2Dash + d2Gap}px)`,
                        opacity: config.dividerOpacityMobile ?? 0.2
                    }}
                />

                {/* Inclusions Section */}
                <div className="flex basis-[43%] justify-center flex-col pl-4 pr-1">
                  <div className="flex flex-col h-full">
                    <p className="text-white/50 text-md mb-2">What&apos;s included</p>
                    <ul className="space-y-1 mb-4">
                        {ticket.features.map((feature: string, fIdx: number) => (
                            <li key={fIdx} className="flex items-start gap-3 text-[10px] md:text-lg text-white/80 leading-snug">
                                <span className="text-white text-lg leading-none">+</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    {ticket.footnote && (
                        <p className="text-white/30 text-[8px] text-center mt-auto border-t border-white/5 pt-2 uppercase tracking-widest font-bold">
                            {ticket.footnote}
                        </p>
                    )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Ticketing() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Debug Navigation State
  const [debugView, setDebugView] = useState<'main' | 'ticket-edit'>('main');
  const [activeTicketId, setActiveTicketId] = useState<string | null>(null);

  const DEFAULT_CONFIG = {
  "bokehSpeed": 2,
  "tickets": [
    {
      "id": "last-year",
      "name": "Privilege Offer",
      "description": "For GHCI 25 attendees ",
      "footnote": "Offer valid till August 2, 2026",
      "price": "₹10,000",
      "gst": "+ applicable charges",
      "cta": "Get the Pass",
      "features": [
        "Full access to GHCI 27 (sessions, workshops & networking)",
        "1-year AnitaB.org Global Membership",
        "Attendee certification + digital badges"
      ],
      "cardBlur": 0,
      "blobsDesktop": [
        {
          "color": "#a32482",
          "width": 33,
          "height": 82,
          "x": -9,
          "y": 73,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 26,
          "height": 50,
          "x": -8,
          "y": -16,
          "opacity": 0.6
        },
        {
          "color": "#223852",
          "width": 27,
          "height": 69,
          "curve": 50,
          "x": 19,
          "y": 11,
          "opacity": 0.5
        },
        {
          "color": "#223852",
          "width": 38,
          "height": 67,
          "curve": 47,
          "x": 69,
          "y": 45,
          "opacity": 0.5
        },
        {
          "color": "#22021d",
          "width": 48,
          "height": 83,
          "curve": 44,
          "x": 27,
          "y": -15,
          "opacity": 1
        }
      ],
      "blobsMobile": [
        {
          "color": "#a32482",
          "width": 33,
          "height": 82,
          "x": -9,
          "y": 73,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 26,
          "height": 50,
          "x": -8,
          "y": -100,
          "opacity": 1
        }
      ],
      "blobs": [
        {
          "color": "#a32482",
          "width": 33,
          "height": 82,
          "x": -9,
          "y": 73,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 26,
          "height": 50,
          "x": -8,
          "y": -16,
          "opacity": 0.6
        }
      ]
    },
    {
      "id": "super-early",
      "name": "Super Early Bird",
      "description": "",
      "footnote": "",
      "price": "₹11,000",
      "oldPrice": "₹15,000",
      "gst": "+ applicable charges",
      "cta": "Get the Pass",
      "features": [
        "Full access to GHCI 27 (sessions, workshops & networking)",
        "1-year AnitaB.org Global Membership",
        "Attendee certification + digital badges"
      ],
      "cardBlur": 70,
      "blobsDesktop": [
        {
          "color": "#a32482",
          "width": 52,
          "height": 82,
          "x": 67,
          "y": -37,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 40,
          "height": 65,
          "x": -5,
          "y": 14,
          "opacity": 0.6
        },
        {
          "color": "#223852",
          "width": 27,
          "height": 69,
          "curve": 50,
          "x": 51,
          "y": 31,
          "opacity": 0.5
        },
        {
          "color": "#223852",
          "width": 38,
          "height": 67,
          "curve": 47,
          "x": 78,
          "y": 60,
          "opacity": 0.5
        },
        {
          "color": "#22021d",
          "width": 48,
          "height": 83,
          "curve": 44,
          "x": 27,
          "y": 39,
          "opacity": 1
        }
      ],
      "blobsMobile": [
        {
          "color": "#a32482",
          "width": 33,
          "height": 82,
          "x": -9,
          "y": 73,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 26,
          "height": 50,
          "x": -8,
          "y": -16,
          "opacity": 0.6
        },
        {
          "color": "#223852",
          "width": 27,
          "height": 69,
          "curve": 50,
          "x": 19,
          "y": 11,
          "opacity": 0.5
        },
        {
          "color": "#223852",
          "width": 38,
          "height": 67,
          "curve": 47,
          "x": 69,
          "y": 45,
          "opacity": 0.5
        },
        {
          "color": "#22021d",
          "width": 48,
          "height": 83,
          "curve": 44,
          "x": 27,
          "y": -27,
          "opacity": 1
        }
      ],
      "blobs": [
        {
          "color": "#22021D",
          "width": 80,
          "height": 60,
          "x": 10,
          "y": 40,
          "opacity": 0.8
        },
        {
          "color": "#A32482",
          "width": 50,
          "height": 40,
          "x": 60,
          "y": 70,
          "opacity": 0.5
        }
      ]
    },
    {
      "id": "early-bird",
      "name": "Early Bird",
      "description": "All Access 3-day pass. ",
      "footnote": "Offer valid till August 31",
      "price": "₹12,000",
      "oldPrice": "₹15,000",
      "gst": "+ applicable charges",
      "cta": "Get the Pass",
      "features": [
        "Full access to GHCI 27 (sessions, workshops & networking)",
        "1-year AnitaB.org Global Membership",
        "Attendee certification + digital badges"
      ],
      "cardBlur": 70,
      "blobsDesktop": [
        {
          "color": "#a32482",
          "width": 52,
          "height": 82,
          "x": 67,
          "y": -37,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 40,
          "height": 65,
          "x": -5,
          "y": 14,
          "opacity": 0.6
        },
        {
          "color": "#223852",
          "width": 27,
          "height": 69,
          "curve": 50,
          "x": 51,
          "y": 31,
          "opacity": 0.5
        },
        {
          "color": "#223852",
          "width": 38,
          "height": 67,
          "curve": 47,
          "x": 78,
          "y": 60,
          "opacity": 0.5
        },
        {
          "color": "#22021d",
          "width": 48,
          "height": 83,
          "curve": 44,
          "x": 27,
          "y": 39,
          "opacity": 1
        }
      ],
      "blobsMobile": [
        {
          "color": "#a32482",
          "width": 33,
          "height": 82,
          "x": -9,
          "y": 73,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 26,
          "height": 50,
          "x": -8,
          "y": -16,
          "opacity": 0.6
        },
        {
          "color": "#223852",
          "width": 27,
          "height": 69,
          "curve": 50,
          "x": 19,
          "y": 11,
          "opacity": 0.5
        },
        {
          "color": "#223852",
          "width": 38,
          "height": 67,
          "curve": 47,
          "x": 69,
          "y": 45,
          "opacity": 0.5
        },
        {
          "color": "#22021d",
          "width": 48,
          "height": 83,
          "curve": 44,
          "x": 27,
          "y": -27,
          "opacity": 1
        }
      ],
      "blobs": [
        {
          "color": "#22021D",
          "width": 80,
          "height": 60,
          "x": 10,
          "y": 40,
          "opacity": 0.8
        },
        {
          "color": "#A32482",
          "width": 50,
          "height": 40,
          "x": 60,
          "y": 70,
          "opacity": 0.5
        }
      ]
    },
    {
      "id": "regular",
      "name": "Academia / Faculty / Startup / Return-to-Work ",
      "description": "",
      "footnote": "For discount code support, contact the Support ID below",
      "price": "₹9,000",
      "gst": "+ applicable charges",
      "cta": "Get the Pass",
      "features": [
        "Full access to GHCI 27 (sessions, workshops & networking)",
        "1-year AnitaB.org Global Membership",
        "Attendee certification + digital badges"
      ],
      "cardBlur": 70,
      "blobsDesktop": [
        {
          "color": "#a32482",
          "width": 33,
          "height": 82,
          "x": -9,
          "y": 73,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 26,
          "height": 50,
          "x": -8,
          "y": -16,
          "opacity": 0.6
        },
        {
          "color": "#223852",
          "width": 27,
          "height": 69,
          "curve": 50,
          "x": 19,
          "y": 11,
          "opacity": 0.5
        },
        {
          "color": "#223852",
          "width": 38,
          "height": 67,
          "curve": 47,
          "x": 69,
          "y": 45,
          "opacity": 0.5
        },
        {
          "color": "#22021d",
          "width": 48,
          "height": 83,
          "curve": 44,
          "x": 27,
          "y": -15,
          "opacity": 1
        }
      ],
      "blobsMobile": [
        {
          "color": "#a32482",
          "width": 33,
          "height": 82,
          "x": -9,
          "y": 73,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 26,
          "height": 50,
          "x": -8,
          "y": -16,
          "opacity": 0.6
        },
        {
          "color": "#223852",
          "width": 27,
          "height": 69,
          "curve": 50,
          "x": 19,
          "y": 11,
          "opacity": 0.5
        },
        {
          "color": "#223852",
          "width": 38,
          "height": 67,
          "curve": 47,
          "x": 69,
          "y": 45,
          "opacity": 0.5
        },
        {
          "color": "#22021d",
          "width": 48,
          "height": 83,
          "curve": 44,
          "x": 27,
          "y": -15,
          "opacity": 1
        }
      ],
      "blobs": [
        {
          "color": "#4284c2",
          "width": 40,
          "height": 30,
          "x": -10,
          "y": -5,
          "opacity": 0.3
        },
        {
          "color": "#A32482",
          "width": 60,
          "height": 40,
          "x": 40,
          "y": 10,
          "opacity": 0.4
        }
      ]
    },
    {
      "id": "virtual",
      "name": "Virtual",
      "description": "Access GHCI 27 virtually from anywhere",
      "footnote": "",
      "price": "Launching soon",
      "gst": "",
      "cta": "Launching soon",
      "disabled": true,
      "features": [
        "Full access to GHCI 27, including sessions, workshops, and networking",
        "Live Q&A, chats, polls, and curated networking opportunities",
        "1-year AnitaB.org Global Membership",
        "Attendee certification + digital badges"
      ],
      "cardBlur": 70,
      "blobsDesktop": [
        {
          "color": "#a32482",
          "width": 52,
          "height": 82,
          "x": 67,
          "y": -37,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 40,
          "height": 65,
          "x": -5,
          "y": 14,
          "opacity": 0.6
        },
        {
          "color": "#223852",
          "width": 27,
          "height": 69,
          "curve": 50,
          "x": 51,
          "y": 31,
          "opacity": 0.5
        },
        {
          "color": "#223852",
          "width": 38,
          "height": 67,
          "curve": 47,
          "x": 78,
          "y": 60,
          "opacity": 0.5
        },
        {
          "color": "#22021d",
          "width": 48,
          "height": 83,
          "curve": 44,
          "x": 27,
          "y": 39,
          "opacity": 1
        }
      ],
      "blobsMobile": [
        {
          "color": "#a32482",
          "width": 33,
          "height": 82,
          "x": -9,
          "y": 73,
          "opacity": 1
        },
        {
          "color": "#223852",
          "width": 26,
          "height": 50,
          "x": -8,
          "y": -16,
          "opacity": 0.6
        },
        {
          "color": "#223852",
          "width": 27,
          "height": 69,
          "curve": 50,
          "x": 19,
          "y": 11,
          "opacity": 0.5
        },
        {
          "color": "#223852",
          "width": 38,
          "height": 67,
          "curve": 47,
          "x": 69,
          "y": 45,
          "opacity": 0.5
        },
        {
          "color": "#22021d",
          "width": 48,
          "height": 83,
          "curve": 44,
          "x": 27,
          "y": -27,
          "opacity": 1
        }
      ],
      "blobs": [
        {
          "color": "#22021D",
          "width": 80,
          "height": 60,
          "x": 10,
          "y": 40,
          "opacity": 0.8
        },
        {
          "color": "#A32482",
          "width": 50,
          "height": 40,
          "x": 60,
          "y": 70,
          "opacity": 0.5
        }
      ]
    }
  ],
  "bgType": "color" as "color" | "gradient",
  "bgColor": "#000000",
  "bgGradient": "linear-gradient(180deg, #050510 0%, #000 100%)",
  "titleText": "Choose Your Pass",
  "titleColor": "#FFFFFF",
  "bgShineHoverOpacity": 0.05,
  "bgShineDefaultOpacity": 0,
  "borderShineHoverOpacity": 0.55,
  "borderShineDefaultOpacity": 0.15,
  "borderOpacityDesktop": 0.1,
  "borderOpacityMobile": 0.05,
  "notchSizeDesktop": 46,
  "notchSizeMobile": 20,
  "dividerOpacityDesktop": 0.25,
  "dividerOpacityMobile": 0.3,
  "divider1DashDesktop": 4,
  "divider1GapDesktop": 4,
  "divider2DashDesktop": 14,
  "divider2GapDesktop": 6,
  "divider1DashMobile": 2,
  "divider1GapMobile": 2,
  "divider2DashMobile": 8,
  "divider2GapMobile": 4
  };


  const [config, setConfig] = useState(DEFAULT_CONFIG);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const savedSettings = localStorage.getItem('ghci-ticketing-settings');
    if (savedSettings) {
        try {
            const parsed = JSON.parse(savedSettings);
            // Validation: Ensure the structure is correct for v2.0
            if (parsed && Array.isArray(parsed.tickets)) {
                // Merge with DEFAULT_CONFIG tickets so new properties like blobsDesktop are preserved
                const mergedTickets = parsed.tickets.map((parsedTicket: any) => {
                    const defaultTicket = DEFAULT_CONFIG.tickets.find(t => t.id === parsedTicket.id);
                    if (!defaultTicket) return parsedTicket;
                    
                    const features = (parsedTicket.features || defaultTicket.features).filter((f: string) => f !== 'Virtual access available');
                    const blobsDesktop = parsedTicket.blobsDesktop || defaultTicket.blobsDesktop;
                    const blobsMobile = parsedTicket.blobsMobile || defaultTicket.blobsMobile;
                    
                    return { ...defaultTicket, ...parsedTicket, blobsDesktop, blobsMobile, features, footnote: defaultTicket.footnote, gst: defaultTicket.gst };
                });

                // Append any new default tickets that aren't in localStorage
                const finalTickets = [...mergedTickets];
                DEFAULT_CONFIG.tickets.forEach(dt => {
                    if (!finalTickets.find(t => t.id === dt.id)) {
                        finalTickets.push(dt);
                    }
                });

                setConfig({ ...DEFAULT_CONFIG, ...parsed, tickets: finalTickets });
            } else {
                console.warn('Stale ticketing settings found, keeping defaults.');
            }
        } catch (e) {
            console.error('Failed to load ticketing settings', e);
        }
    }

    const handleOpenSettings = () => {
        setShowSettings(true);
        setDebugView('main');
    };
    window.addEventListener('open-settings-ticketing', handleOpenSettings);
    
    const handleUpdateSettings = (e: any) => {
        if (e.detail) setConfig(e.detail);
    };
    window.addEventListener('update-settings-ticketing', handleUpdateSettings);

    return () => {
        window.removeEventListener('open-settings-ticketing', handleOpenSettings);
        window.removeEventListener('update-settings-ticketing', handleUpdateSettings);
        window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (mounted && window.location.hash === '#ticketing') {
      const scrollTimer = setTimeout(() => {
        const element = document.getElementById('ticketing');
        if (element) {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(scrollTimer);
    }
  }, [mounted]);

  const saveSettings = (newConfig: any) => {
    setConfig(newConfig);
    localStorage.setItem('ghci-ticketing-settings', JSON.stringify(newConfig));
  };

  const addTicket = () => {
    const newTicket = {
        ...defaultTickets[0],
        id: `ticket-${Date.now()}`,
        name: 'New Ticket Tier',
        blobsDesktop: [...((defaultTickets[0] as any).blobsDesktop || (defaultTickets[0] as any).blobs || [])],
        blobsMobile: [...((defaultTickets[0] as any).blobsMobile || (defaultTickets[0] as any).blobs || [])]
    };
    saveSettings({ ...config, tickets: [...config.tickets, newTicket] });
  };

  const removeTicket = (id: string) => {
    saveSettings({ ...config, tickets: config.tickets.filter(t => t.id !== id) });
  };

  const updateTicket = (id: string, data: any) => {
    saveSettings({
        ...config,
        tickets: config.tickets.map(t => t.id === id ? { ...t, ...data } : t)
    });
  };

  if (!mounted) return null;
  
  // Dynamic scheduling logic for Super Early Bird (July 1, 2026 cutoff)
  const getProcessedTickets = () => {
    const rawTickets = config.tickets || [];
    const queryDate = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('testDate') : null;
    let now = new Date();
    if (queryDate) {
      const formatted = queryDate.includes('T') ? queryDate : `${queryDate}T00:00:00`;
      const withTimezone = formatted.includes('+') || formatted.endsWith('Z') ? formatted : `${formatted}+05:30`;
      now = new Date(withTimezone);
    }
    const isJuly1OrLater = now >= new Date('2026-07-01T00:00:00+05:30');

    let processed = rawTickets.map(t => {
      if (t.id === 'super-early' && isJuly1OrLater) {
        return {
          ...t,
          disabled: true,
          cta: 'Sold Out'
        };
      }
      return t;
    });

    if (isJuly1OrLater) {
      // Find the super-early ticket
      const superEarlyTicket = processed.find(t => t.id === 'super-early');
      if (superEarlyTicket) {
        // Remove super-early from its current position
        const filtered = processed.filter(t => t.id !== 'super-early');
        // Find index of virtual ticket
        const virtualIdx = filtered.findIndex(t => t.id === 'virtual');
        if (virtualIdx !== -1) {
          // Insert after virtual
          filtered.splice(virtualIdx + 1, 0, superEarlyTicket);
        } else {
          filtered.push(superEarlyTicket);
        }
        processed = filtered;
      }
    } else {
      // Hide early-bird before July 1st
      processed = processed.filter(t => t.id !== 'early-bird');
    }
    return processed;
  };

  const tickets = getProcessedTickets();
  const activeTicket = tickets.find(t => t.id === activeTicketId);

  const renderBlobEditor = (blobType: 'blobsDesktop' | 'blobsMobile') => (
    <div className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex justify-between items-center">
            <label className="text-[8px] text-white/40 font-bold uppercase">{blobType === 'blobsDesktop' ? 'Desktop' : 'Mobile'} Ellipses</label>
            <button onClick={() => {
                const newBlobs = [...(activeTicket?.[blobType] || (activeTicket as any)?.blobs || []), { color: '#A32482', width: 40, height: 40, curve: 50, x: 50, y: 50, opacity: 0.5 }];
                updateTicket(activeTicketId!, { [blobType]: newBlobs });
            }} className="text-[8px] text-[#A32482] font-bold hover:underline">Add Ellipsis</button>
        </div>
        
        <div className="space-y-3">
            {(activeTicket?.[blobType] || (activeTicket as any)?.blobs || []).map((blob: any, bIdx: number) => (
                <div key={bIdx} className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-[8px] uppercase text-white/30">Ellipsis #{bIdx + 1}</span>
                        <button onClick={() => {
                            const newBlobs = (activeTicket?.[blobType] || (activeTicket as any)?.blobs || []).filter((_: any, i: number) => i !== bIdx);
                            updateTicket(activeTicketId!, { [blobType]: newBlobs });
                        }} className="text-white/20 hover:text-red-400">
                            <Trash2 className="w-3 h-3" />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="color" value={blob.color} onChange={(e) => {
                            const newBlobs = [...(activeTicket?.[blobType] || (activeTicket as any)?.blobs || [])];
                            newBlobs[bIdx].color = e.target.value;
                            updateTicket(activeTicketId!, { [blobType]: newBlobs });
                        }} className="w-full h-8 bg-transparent border-none cursor-pointer" />
                        <div className="space-y-1">
                            <div className="flex justify-between text-[8px] text-white/30 uppercase">
                                <span>Opacity</span>
                                <span>{Math.round(blob.opacity * 100)}%</span>
                            </div>
                            <input type="range" min="0" max="1" step="0.1" value={blob.opacity} onChange={(e) => {
                                const newBlobs = [...(activeTicket?.[blobType] || (activeTicket as any)?.blobs || [])];
                                newBlobs[bIdx].opacity = parseFloat(e.target.value);
                                updateTicket(activeTicketId!, { [blobType]: newBlobs });
                            }} className="w-full accent-[#A32482]" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <div className="flex justify-between text-[8px] text-white/30 uppercase">
                                <span>Width</span>
                                <span>{blob.width}%</span>
                            </div>
                            <input type="range" min="10" max="200" value={blob.width} onChange={(e) => {
                                const newBlobs = [...(activeTicket?.[blobType] || (activeTicket as any)?.blobs || [])];
                                newBlobs[bIdx].width = parseInt(e.target.value);
                                updateTicket(activeTicketId!, { [blobType]: newBlobs });
                            }} className="w-full accent-[#A32482]" />
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-[8px] text-white/30 uppercase">
                                <span>Height</span>
                                <span>{blob.height}%</span>
                            </div>
                            <input type="range" min="10" max="200" value={blob.height} onChange={(e) => {
                                const newBlobs = [...(activeTicket?.[blobType] || (activeTicket as any)?.blobs || [])];
                                newBlobs[bIdx].height = parseInt(e.target.value);
                                updateTicket(activeTicketId!, { [blobType]: newBlobs });
                            }} className="w-full accent-[#A32482]" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <div className="flex justify-between text-[8px] text-white/30 uppercase">
                                <span>Curve</span>
                                <span>{blob.curve ?? 50}%</span>
                            </div>
                            <input type="range" min="0" max="50" value={blob.curve ?? 50} onChange={(e) => {
                                const newBlobs = [...(activeTicket?.[blobType] || (activeTicket as any)?.blobs || [])];
                                newBlobs[bIdx].curve = parseInt(e.target.value);
                                updateTicket(activeTicketId!, { [blobType]: newBlobs });
                            }} className="w-full accent-[#A32482]" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <div className="flex justify-between text-[8px] text-white/30 uppercase">
                                <span>X Position</span>
                                <span>{blob.x}%</span>
                            </div>
                            <input type="range" min="-100" max="200" value={blob.x} onChange={(e) => {
                                const newBlobs = [...(activeTicket?.[blobType] || (activeTicket as any)?.blobs || [])];
                                newBlobs[bIdx].x = parseInt(e.target.value);
                                updateTicket(activeTicketId!, { [blobType]: newBlobs });
                            }} className="w-full accent-[#A32482]" />
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-[8px] text-white/30 uppercase">
                                <span>Y Position</span>
                                <span>{blob.y}%</span>
                            </div>
                            <input type="range" min="-100" max="200" value={blob.y} onChange={(e) => {
                                const newBlobs = [...(activeTicket?.[blobType] || (activeTicket as any)?.blobs || [])];
                                newBlobs[bIdx].y = parseInt(e.target.value);
                                updateTicket(activeTicketId!, { [blobType]: newBlobs });
                            }} className="w-full accent-[#A32482]" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );

  return (
    <section 
        id="ticketing" 
        className="py-6 md:py-12 text-white px-6 md:px-13 relative overflow-hidden"
        style={{
            background: config.bgType === 'gradient' ? config.bgGradient : config.bgColor,
            backgroundImage: 'url(/location-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center'
        }}
    >
      <div className="mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-24"
        >
          <h2 
            className="text-[1.8rem] md:text-6xl font-semibold tracking-tight"
            style={{ color: config.titleColor }}
          >
            {config.titleText}
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-stretch md:overflow-x-auto md:snap-x md:snap-mandatory gap-8 justify-items-center md:justify-start mb-12 md:mb-20 pb-8 scrollbar-hide scroll-smooth">
          {tickets.map((ticket, idx) => (
            <div key={ticket.id} className="w-full md:min-w-[calc((100%-96px)/3.5)] md:snap-start flex">
              {isMobile 
                ? <TicketingCardMobile key={ticket.id} ticket={ticket} idx={idx} config={config} />
                : <TicketingCard key={ticket.id} ticket={ticket} idx={idx} config={config} />
              }
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-white text-sm md:text-xl">
            For registration or discount code queries, contact <a href="mailto:support-ghci@anitabindia.org" className="text-white hover:text-[#A32482] transition-colors underline underline-offset-4">support-ghci@anitabindia.org</a>
          </p>
        </motion.div>
      </div>

      {/* Advanced Debug Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div 
            drag
            dragMomentum={false}
            className="fixed bottom-6 right-6 z-[999] w-[380px] bg-[#121214]/95 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col max-h-[85vh] overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-white/10 bg-white/5 cursor-grab active:cursor-grabbing shrink-0">
              <div className="flex items-center gap-3">
                {debugView !== 'main' ? (
                  <button onClick={() => setDebugView('main')} className="p-1.5 hover:bg-white/10 rounded-lg text-white/60 hover:text-white">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                ) : (
                  <button 
                    onClick={() => {
                        setShowSettings(false);
                        window.dispatchEvent(new CustomEvent('open-control-panel'));
                    }} 
                    className="p-1.5 hover:bg-white/10 rounded-lg text-white/60 hover:text-white"
                    title="Back to Control Panel"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}
                <div className="flex flex-col">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/90">
                    {debugView === 'main' ? 'Ticketing Manager' : 'Editing Ticket'}
                  </h3>
                  <p className="text-[10px] text-white/30 font-medium">{debugView === 'main' ? `${tickets.length} tiers active` : activeTicket?.name}</p>
                </div>
              </div>
              <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6 overflow-y-auto custom-scrollbar flex-1" onPointerDownCapture={(e) => e.stopPropagation()}>
              {debugView === 'main' ? (
                <>
                  {/* Global Settings */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[10px] font-bold text-white/30 uppercase tracking-widest">
                            <span>Bokeh Animation</span>
                            <span className="text-[#A32482] font-mono">{config.bokehSpeed}x</span>
                        </div>
                        <input type="range" min="0" max="5" step="0.1" value={config.bokehSpeed} onChange={(e) => saveSettings({...config, bokehSpeed: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Section Styling</label>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <label className="text-[8px] text-white/40 font-bold uppercase">BG Type</label>
                                <select value={config.bgType} onChange={(e) => saveSettings({...config, bgType: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-[10px] text-white">
                                    <option value="color">Solid Color</option>
                                    <option value="gradient">Gradient</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[8px] text-white/40 font-bold uppercase">BG Color</label>
                                <input type="color" value={config.bgColor} onChange={(e) => saveSettings({...config, bgColor: e.target.value})} className="w-full h-8 bg-transparent border-none cursor-pointer" />
                            </div>
                        </div>
                        {config.bgType === 'gradient' && (
                            <div className="space-y-1.5">
                                <label className="text-[8px] text-white/40 font-bold uppercase">Gradient CSS</label>
                                <input value={config.bgGradient} onChange={(e) => saveSettings({...config, bgGradient: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[10px] text-white" />
                            </div>
                        )}
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Title Customization</label>
                        <div className="space-y-3">
                            <div className="space-y-1.5">
                                <label className="text-[8px] text-white/40 font-bold uppercase">Section Title</label>
                                <input value={config.titleText} onChange={(e) => saveSettings({...config, titleText: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[10px] text-white" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[8px] text-white/40 font-bold uppercase">Text Color</label>
                                <input type="color" value={config.titleColor} onChange={(e) => saveSettings({...config, titleColor: e.target.value})} className="w-full h-8 bg-transparent border-none cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Card Notches</label>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <span className="text-[7px] text-[#A32482] uppercase font-bold tracking-wider">Desktop Notch Size</span>
                                <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase">
                                    <span>Radius</span>
                                    <span>{config.notchSizeDesktop || 25}px</span>
                                </div>
                                <input type="range" min="0" max="60" step="1" value={config.notchSizeDesktop || 25} onChange={(e) => saveSettings({...config, notchSizeDesktop: parseInt(e.target.value)})} className="w-full accent-[#A32482]" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[7px] text-[#A32482] uppercase font-bold tracking-wider">Mobile Notch Size</span>
                                <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase">
                                    <span>Radius</span>
                                    <span>{config.notchSizeMobile || 20}px</span>
                                </div>
                                <input type="range" min="0" max="60" step="1" value={config.notchSizeMobile || 20} onChange={(e) => saveSettings({...config, notchSizeMobile: parseInt(e.target.value)})} className="w-full accent-[#A32482]" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Dashed Dividers</label>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <span className="text-[7px] text-[#A32482] uppercase font-bold tracking-wider">Desktop Opacity</span>
                                <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase">
                                    <span>Global Divider Opacity</span>
                                    <span>{Math.round(config.dividerOpacityDesktop * 100)}%</span>
                                </div>
                                <input type="range" min="0" max="1" step="0.05" value={config.dividerOpacityDesktop} onChange={(e) => saveSettings({...config, dividerOpacityDesktop: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-[7px] text-[#A32482] uppercase font-bold tracking-wider">Mobile Opacity</span>
                                <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase">
                                    <span>Global Divider Opacity</span>
                                    <span>{Math.round(config.dividerOpacityMobile * 100)}%</span>
                                </div>
                                <input type="range" min="0" max="1" step="0.05" value={config.dividerOpacityMobile} onChange={(e) => saveSettings({...config, dividerOpacityMobile: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                            </div>

                            <div className="space-y-3 p-2 bg-white/5 rounded-lg border border-white/5">
                                <label className="text-[7px] font-bold text-white/40 uppercase">Divider 1 (Upper)</label>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <span className="text-[7px] text-[#A32482] uppercase font-bold tracking-wider">Desktop</span>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[7px] text-white/30">
                                                    <span>Dash: {config.divider1DashDesktop}px</span>
                                                </div>
                                                <input type="range" min="1" max="20" value={config.divider1DashDesktop || 4} onChange={(e) => saveSettings({...config, divider1DashDesktop: parseInt(e.target.value)})} className="w-full h-1 accent-[#A32482]" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[7px] text-white/30">
                                                    <span>Gap: {config.divider1GapDesktop}px</span>
                                                </div>
                                                <input type="range" min="1" max="20" value={config.divider1GapDesktop || 4} onChange={(e) => saveSettings({...config, divider1GapDesktop: parseInt(e.target.value)})} className="w-full h-1 accent-[#A32482]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-[7px] text-[#A32482] uppercase font-bold tracking-wider">Mobile</span>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[7px] text-white/30">
                                                    <span>Dash: {config.divider1DashMobile}px</span>
                                                </div>
                                                <input type="range" min="1" max="20" value={config.divider1DashMobile || 2} onChange={(e) => saveSettings({...config, divider1DashMobile: parseInt(e.target.value)})} className="w-full h-1 accent-[#A32482]" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[7px] text-white/30">
                                                    <span>Gap: {config.divider1GapMobile}px</span>
                                                </div>
                                                <input type="range" min="1" max="20" value={config.divider1GapMobile || 2} onChange={(e) => saveSettings({...config, divider1GapMobile: parseInt(e.target.value)})} className="w-full h-1 accent-[#A32482]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 p-2 bg-white/5 rounded-lg border border-white/5">
                                <label className="text-[7px] font-bold text-white/40 uppercase">Divider 2 (Lower)</label>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <span className="text-[7px] text-[#A32482] uppercase font-bold tracking-wider">Desktop</span>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[7px] text-white/30">
                                                    <span>Dash: {config.divider2DashDesktop}px</span>
                                                </div>
                                                <input type="range" min="1" max="40" value={config.divider2DashDesktop || 14} onChange={(e) => saveSettings({...config, divider2DashDesktop: parseInt(e.target.value)})} className="w-full h-1 accent-[#A32482]" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[7px] text-white/30">
                                                    <span>Gap: {config.divider2GapDesktop}px</span>
                                                </div>
                                                <input type="range" min="1" max="20" value={config.divider2GapDesktop || 6} onChange={(e) => saveSettings({...config, divider2GapDesktop: parseInt(e.target.value)})} className="w-full h-1 accent-[#A32482]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-[7px] text-[#A32482] uppercase font-bold tracking-wider">Mobile</span>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[7px] text-white/30">
                                                    <span>Dash: {config.divider2DashMobile}px</span>
                                                </div>
                                                <input type="range" min="1" max="40" value={config.divider2DashMobile || 8} onChange={(e) => saveSettings({...config, divider2DashMobile: parseInt(e.target.value)})} className="w-full h-1 accent-[#A32482]" />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[7px] text-white/30">
                                                    <span>Gap: {config.divider2GapMobile}px</span>
                                                </div>
                                                <input type="range" min="1" max="20" value={config.divider2GapMobile || 4} onChange={(e) => saveSettings({...config, divider2GapMobile: parseInt(e.target.value)})} className="w-full h-1 accent-[#A32482]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Glass & Border Intensity</label>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <span className="text-[7px] text-[#A32482] uppercase font-bold tracking-wider">Desktop</span>
                                    <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase">
                                        <span>Static Border Stroke</span>
                                        <span>{Math.round(config.borderOpacityDesktop * 100)}%</span>
                                    </div>
                                    <input type="range" min="0" max="1" step="0.05" value={config.borderOpacityDesktop} onChange={(e) => saveSettings({...config, borderOpacityDesktop: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-[7px] text-[#A32482] uppercase font-bold tracking-wider">Mobile</span>
                                    <div className="flex justify-between text-[8px] font-bold text-white/40 uppercase">
                                        <span>Static Border Stroke</span>
                                        <span>{Math.round(config.borderOpacityMobile * 100)}%</span>
                                    </div>
                                    <input type="range" min="0" max="1" step="0.05" value={config.borderOpacityMobile} onChange={(e) => saveSettings({...config, borderOpacityMobile: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <label className="text-[9px] font-bold text-white/20 uppercase">Border Shine (Edge)</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[7px] font-bold text-white/40 uppercase">
                                            <span>Default</span>
                                            <span>{Math.round(config.borderShineDefaultOpacity * 100)}%</span>
                                        </div>
                                        <input type="range" min="0" max="1" step="0.05" value={config.borderShineDefaultOpacity} onChange={(e) => saveSettings({...config, borderShineDefaultOpacity: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[7px] font-bold text-white/40 uppercase">
                                            <span>Hover</span>
                                            <span>{Math.round(config.borderShineHoverOpacity * 100)}%</span>
                                        </div>
                                        <input type="range" min="0" max="1" step="0.05" value={config.borderShineHoverOpacity} onChange={(e) => saveSettings({...config, borderShineHoverOpacity: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[9px] font-bold text-white/20 uppercase">Background Shine (Fill)</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[7px] font-bold text-white/40 uppercase">
                                            <span>Default</span>
                                            <span>{Math.round(config.bgShineDefaultOpacity * 100)}%</span>
                                        </div>
                                        <input type="range" min="0" max="1" step="0.05" value={config.bgShineDefaultOpacity} onChange={(e) => saveSettings({...config, bgShineDefaultOpacity: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[7px] font-bold text-white/40 uppercase">
                                            <span>Hover</span>
                                            <span>{Math.round(config.bgShineHoverOpacity * 100)}%</span>
                                        </div>
                                        <input type="range" min="0" max="1" step="0.05" value={config.bgShineHoverOpacity} onChange={(e) => saveSettings({...config, bgShineHoverOpacity: parseFloat(e.target.value)})} className="w-full accent-[#A32482]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>

                  {/* Tickets List */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center mb-4">
                        <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Active Tickets</label>
                        <button onClick={addTicket} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#A32482] rounded-lg text-[10px] font-bold hover:bg-[#8e1f7c] transition-all">
                            <Plus className="w-3 h-3" /> Add Ticket
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                        {tickets.map((ticket) => (
                            <div key={ticket.id} className="group flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-[#A32482]/30 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#A32482]/10 flex items-center justify-center text-[#A32482]">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-white/80">{ticket.name}</span>
                                        <span className="text-[10px] text-white/30">{ticket.price}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button 
                                        onClick={() => { setActiveTicketId(ticket.id); setDebugView('ticket-edit'); }}
                                        className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-[#A32482]"
                                    >
                                        <Edit3 className="w-4 h-4" />
                                    </button>
                                    <button 
                                        onClick={() => removeTicket(ticket.id)}
                                        className="p-2 hover:bg-white/10 rounded-lg text-white/40 hover:text-red-400"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                  {/* Ticket Content Editor */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <Type className="w-3 h-3" /> Content Settings
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                            <label className="text-[8px] text-white/40 font-bold uppercase">Name</label>
                            <input value={activeTicket?.name} onChange={(e) => updateTicket(activeTicketId!, { name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[8px] text-white/40 font-bold uppercase">Price</label>
                            <input value={activeTicket?.price} onChange={(e) => updateTicket(activeTicketId!, { price: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white" />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[8px] text-white/40 font-bold uppercase">Description</label>
                        <textarea value={activeTicket?.description} onChange={(e) => updateTicket(activeTicketId!, { description: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white h-20" />
                    </div>
                  </div>

                  {/* Visual Editor (Blobs) */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                        <ImageIcon className="w-3 h-3" /> Background Design
                    </div>
                    
                    <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-medium uppercase text-white/40">
                            <span>Card Blur</span>
                            <span className="text-[#A32482] font-mono">{activeTicket?.cardBlur}px</span>
                        </div>
                        <input type="range" min="0" max="300" value={activeTicket?.cardBlur} onChange={(e) => updateTicket(activeTicketId!, { cardBlur: parseInt(e.target.value) })} className="w-full accent-[#A32482]" />
                    </div>

                    {renderBlobEditor('blobsDesktop')}
                    {renderBlobEditor('blobsMobile')}
                  </div>
                </div>
              )}
            </div>
            
            {/* Footer Info */}
            <div className="p-4 bg-black/40 border-t border-white/5 flex flex-col gap-3">
                <button 
                    onClick={() => {
                        navigator.clipboard.writeText(JSON.stringify(config, null, 2));
                        const btn = document.getElementById('copy-json-btn');
                        if (btn) btn.innerHTML = 'Copied to Clipboard!';
                        setTimeout(() => { if (btn) btn.innerHTML = 'Copy Config JSON'; }, 2000);
                    }}
                    className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-bold text-white/60 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                    <Copy className="w-3 h-3" />
                    <span id="copy-json-btn">Copy Config JSON</span>
                </button>
                <p className="text-[8px] text-white/20 font-bold uppercase tracking-[0.2em] text-center">Ticketing v2.1 • Pro Editor</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
