'use client';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const plans = [
  {
    name: 'General',
    description: 'Entry level access with a very essential perks included.',
    price: '$299',
    earlyBird: '"Early Bird: $249 until July 15"',
    cta: 'Get General Pass',
    spotsLeft: '⏳ Only 100 Early Bird spots left',
    features: ['Full access to all keynotes', 'Entry to breakout sessions', 'Conference swag kit'],
    highlight: false,
  },
  {
    name: '👑 VIP Pass',
    description: 'Top-tier luxury treatment with exclusive benefits.',
    price: '$600',
    earlyBird: '"Early Bird: $599 until July 15"',
    cta: 'Get VIP Pass',
    spotsLeft: '⏳ Only 30 Early Bird spots left',
    features: ['All General Pass access', 'Priority front-row seating', 'Exclusive networking sessions'],
    highlight: true,
  },
  {
    name: 'Student',
    description: 'Entry level access with a very essential perks included.',
    price: '$199',
    earlyBird: '"Early Bird: $49 until July 15"',
    cta: 'Get Student Pass',
    spotsLeft: '⏳ Only 100 Early Bird spots left',
    features: ['Full access to all keynotes', 'Entry to breakout sessions', 'Valid student ID card required'],
    highlight: false,
  },
];

import { useState, useRef } from 'react';

const PricingCard = ({ plan, idx }: { plan: any; idx: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      style={{
        maskImage: 'radial-gradient(circle at 50% 0px, transparent 20px, black 21px)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 0px, transparent 20px, black 21px)',
      }}
      className={`relative rounded-[2rem] p-8 flex flex-col border overflow-hidden transition-colors ${
        plan.highlight
          ? 'bg-white/[0.04] border-purple-500/30'
          : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.03]'
      }`}
    >
      {/* Chroma Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168,85,247,0.15), rgba(59,130,246,0.1) 40%, transparent 60%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          {plan.highlight && '👑 '}
          {plan.name.replace('👑 ', '')}
        </h3>
        <p className="text-white/50 text-sm mb-6">{plan.description}</p>

        {/* Divider */}
        <div className="border-t border-dashed border-white/10 my-4" />

        {/* Price */}
        <div className="text-5xl font-bold mb-2">{plan.price}</div>
        <p className="text-white/40 text-sm mb-8">{plan.earlyBird}</p>

        {/* CTA */}
        <a
          href="https://konfhub.com/ghci-2027"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm mb-4 w-fit transition-colors ${
            plan.highlight
              ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]'
              : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
        >
          {plan.highlight && <Shield className="w-4 h-4" />}
          {plan.cta}
        </a>

        {/* Spots Left */}
        <p className="text-white/40 text-xs mb-8">{plan.spotsLeft}</p>

        {/* Features */}
        <div className="mt-auto">
          <p className="text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            What&apos;s included
          </p>
          <ul className="space-y-3">
            {plan.features.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                <span className="text-purple-500/50 mt-0.5">+</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#050510] text-white px-6 relative">
      {/* Blue gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 text-sm font-mono tracking-wider mb-4 block">[Tickets]</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Unlock the Experience{' '}
            <span className="text-white/40">That Suits You</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
