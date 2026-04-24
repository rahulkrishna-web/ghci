'use client';
import { motion } from 'framer-motion';
import { Mic2, MessageSquare, Users, Lightbulb, Globe, Handshake } from 'lucide-react';

const features = [
  {
    title: '30+ World Class Speakers',
    description: 'Gain insights and connect with visionary industry leaders from around the world.',
    icon: Mic2,
  },
  {
    title: 'Engaging Keynote',
    description: 'Hear from hand-picked industry leaders and pioneers sharing exclusive insights.',
    icon: MessageSquare,
  },
  {
    title: '15+ Expert-Led Workshop',
    description: 'Dive into practical skills with focused sessions led by subject-matter experts.',
    icon: Users,
  },
  {
    title: 'Dynamic Breakout Sessions',
    description: 'Foster innovation and collaboration through focused, in-depth discussions.',
    icon: Lightbulb,
  },
  {
    title: '60+ Countries Represented',
    description: 'Network with a broad mix of peers and experts from over 60 countries.',
    icon: Globe,
  },
  {
    title: 'Networking Opportunities',
    description: 'Forge lasting connections with like-minded professionals and future collaborators.',
    icon: Handshake,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#070708] text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-mono tracking-wider mb-4 block">[Why Attend]</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Unleash the Potential of Your{' '}
            <span className="text-white/40">Conference</span>
          </h2>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all group"
            >
              <div className="w-12 h-12 mb-8 flex items-center justify-center text-white/60 group-hover:text-white transition-colors">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
