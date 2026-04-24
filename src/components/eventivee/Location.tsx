'use client';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Car, Train, Bus } from 'lucide-react';

type LocationProps = {
  data: {
    sectionTitle: string;
    venueName: string;
    venueArea: string;
    dates: string;
    mapUrl: string;
    description: string;
    gettingThere: {
      description: string;
      options: { title: string; desc: string }[];
    };
  };
};

export default function Location({ data }: LocationProps) {
  return (
    <section id="location" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-white"
        >
          {data.sectionTitle}
        </motion.h2>

        {/* Top Section: Venue & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
          
          {/* Left Column: Info Cards */}
          <div className="flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 bg-white/[0.04] p-8 rounded-[10px] flex items-center gap-6 border border-white/5"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-white/70" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                    {data.venueName}
                </h3>
                <p className="text-white/50 text-lg">{data.venueArea}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex-1 bg-white/[0.04] p-8 rounded-[10px] flex items-center gap-6 border border-white/5"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-white/70" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                {data.dates}
              </h3>
            </motion.div>
          </div>

          {/* Right Column: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[10px] overflow-hidden border border-white/10 aspect-video h-full"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.87808540542!2d77.71672157507658!3d12.979648637336428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0dfeba4898b5%3A0x7d4e9b0b1aad9e57!2sKarnataka%20Trade%20Promotion%20Organisation%20(KTPO)!5e0!3m2!1sen!2sin!4v1776982286459!5m2!1sen!2sin" 
              className="w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/60 text-lg md:text-xl leading-relaxed mb-20 max-w-5xl"
        >
          {data.description}
        </motion.p>

        {/* Getting There Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-white/5 rounded-[10px] p-10 md:p-16 relative overflow-hidden"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-black pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Getting There</h3>
            <p className="text-white/50 text-lg mb-16 max-w-3xl leading-relaxed">
              {data.gettingThere.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Option 1 */}
              <div className="space-y-6 pr-8">
                <Car className="w-8 h-8 text-white/80" />
                <div className="space-y-4">
                    <h4 className="text-sm font-black uppercase tracking-widest text-white/50 font-mono">
                        {data.gettingThere.options[0].title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                        {data.gettingThere.options[0].desc}
                    </p>
                </div>
              </div>

              {/* Option 2 */}
              <div className="space-y-6 px-12 border-l border-white/10">
                <Train className="w-8 h-8 text-white/80" />
                <div className="space-y-4">
                    <h4 className="text-sm font-black uppercase tracking-widest text-white/50 font-mono">
                        {data.gettingThere.options[1].title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                        {data.gettingThere.options[1].desc}
                    </p>
                </div>
              </div>

              {/* Option 3 */}
              <div className="space-y-6 pl-12 border-l border-white/10">
                <Bus className="w-8 h-8 text-white/80" />
                <div className="space-y-4">
                    <h4 className="text-sm font-black uppercase tracking-widest text-white/50 font-mono">
                        {data.gettingThere.options[2].title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                        {data.gettingThere.options[2].desc}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
