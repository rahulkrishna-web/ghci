'use client';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, UserCircle, GraduationCap, Users } from 'lucide-react';

const IconMap: Record<string, any> = {
  'book': BookOpen,
  'briefcase': Briefcase,
  'user': UserCircle,
  'graduation-cap': GraduationCap,
  'users': Users
};

type WhoShouldAttendProps = {
  data: {
    sectionTitle: string;
    subtitle: string;
    blocks: { title: string; points: string[]; icon: string; highlight?: boolean }[];
  };
};

export default function WhoShouldAttend({ data }: WhoShouldAttendProps) {
  const topRow = data.blocks.slice(0, 3);
  const bottomRow = data.blocks.slice(3, 5);

  return (
    <section id="attendees" className="py-24 bg-black text-white px-4 md:px-40">
      <div className="w-full">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            {data.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="space-y-6">
            {/* Top Row (3 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topRow.map((block, idx) => {
                    const Icon = IconMap[block.icon];
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-10 rounded-[10px] flex flex-col h-full ${
                                block.highlight 
                                ? 'bg-[#A32482] shadow-2xl shadow-purple-900/20' 
                                : 'bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all'
                            }`}
                        >
                            <div className={`mb-8 ${block.highlight ? 'text-white' : 'text-white/40'}`}>
                                {Icon && <Icon className="w-10 h-10" />}
                            </div>
                            <h3 className="text-2xl font-bold mb-8 leading-tight">
                                {block.title}
                            </h3>
                            <ul className="space-y-4">
                                {block.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-4 text-sm font-medium leading-relaxed">
                                        <span className={`w-1 h-1 rounded-full mt-2.5 shrink-0 ${block.highlight ? 'bg-white/60' : 'bg-white/20'}`} />
                                        <span className={block.highlight ? 'text-white/90' : 'text-white/60'}>
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom Row (2 Cards - Centered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-3/4 mx-auto">
                {bottomRow.map((block, idx) => {
                    const Icon = IconMap[block.icon];
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx + 3) * 0.1 }}
                            className="p-10 rounded-[10px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all flex flex-col h-full"
                        >
                            <div className="mb-8 text-white/40">
                                {Icon && <Icon className="w-10 h-10" />}
                            </div>
                            <h3 className="text-2xl font-bold mb-8 leading-tight">
                                {block.title}
                            </h3>
                            <ul className="space-y-4">
                                {block.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-4 text-sm font-medium leading-relaxed">
                                        <span className="w-1 h-1 rounded-full mt-2.5 shrink-0 bg-white/20" />
                                        <span className="text-white/60">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
}
