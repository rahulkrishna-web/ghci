'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const speakers = [
  {
    name: 'Dr. Aradhana Gupta',
    role: 'Chief AI Architect',
    image: '/public/eventivee/speaker-1.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'Director of Product',
    image: '/public/eventivee/speaker-3.jpg',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'AI Researcher',
    image: '/speakers/5.png',
  },
  {
    name: 'Maya Patel',
    role: 'VP of Engineering',
    image: '/public/eventivee/speaker-4.jpg',
  }
];

export default function SpeakerGrid() {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <h2 className="text-7xl font-bold tracking-tighter uppercase italic">Speakers</h2>
          <p className="max-w-xs text-white/60">GHC 2027 brings together the most influential names in technology.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image src={speaker.image} alt={speaker.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight italic">{speaker.name}</h3>
              <p className="text-white/40 font-medium">{speaker.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
