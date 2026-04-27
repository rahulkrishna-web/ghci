'use client';
import { motion } from 'framer-motion';
import { Ticket, Mail } from 'lucide-react';

type ContactProps = {
  data: {
    sectionTitle: string;
    subtitle: string;
    email: string;
    buttons: { text: string; link: string }[];
  };
};

export default function Contact({ data }: ContactProps) {

  return (
    <section id="contact" className="py-24 bg-black text-white px-4 md:px-40 border-t border-white/[0.05]">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            
            {/* Left Side: Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
            >
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent w-fit">
                    {data.sectionTitle}
                </h2>
                <div className="space-y-6">
                    <div className="text-white/60 text-lg leading-relaxed">
                        Have questions or need support?<br />
                        Our team is here to help.
                    </div>
                    <div className="text-white/60 text-lg">
                        Reach out at:<br />
                        <a href={`mailto:${data.email}`} className="text-white hover:text-[#A3238E] transition-colors">{data.email}</a>
                    </div>
                </div>
            </motion.div>

            {/* Right Side: CTAs */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 w-full md:w-auto"
            >
                {/* Register Row */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#A32482] flex items-center justify-center shrink-0">
                        <Ticket className="w-7 h-7 text-white" />
                    </div>
                    <a href={data.buttons[0].link} className="bg-[#A32482] hover:bg-[#8e1f7c] text-white px-10 py-5 rounded-full text-lg font-bold transition-all flex-1 md:flex-none text-center whitespace-nowrap">
                        Register Now
                    </a>
                </div>

                {/* Newsletter Row */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
                        <Mail className="w-7 h-7 text-black" />
                    </div>
                    <a href="#" className="bg-white hover:bg-white/90 text-[#A32482] px-10 py-5 rounded-full text-lg font-bold transition-all flex-1 md:flex-none text-center leading-tight whitespace-nowrap">
                        Subscribe to<br /><span className="text-[14px] font-semibold opacity-80 uppercase tracking-tighter">Newsletter</span>
                    </a>
                </div>
            </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full border-[1.5px] border-[#A32482]/40 rounded-full py-8 text-center px-4"
        >
            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent inline-block">
                Tickets starting at ₹3,000
            </h3>
            <p className="text-white/40 text-sm md:text-base font-medium tracking-wide">
                Early Bird pricing available for a limited time
            </p>
        </motion.div>
      </div>
    </section>
  );
}
