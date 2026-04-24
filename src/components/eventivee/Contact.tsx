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
  // We'll split the title "Get in Touch" based on the design
  const titleParts = data.sectionTitle.split(' ');
  const mainTitle = titleParts.slice(0, 2).join(' '); // "Get in"
  const highlightTitle = titleParts.slice(2).join(' '); // "Touch"

  return (
    <section id="contact" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            
            {/* Left Side: Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-md"
            >
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                    {mainTitle} <span className="text-[#A3238E]">{highlightTitle}</span>
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
                    <div className="w-14 h-14 rounded-full bg-[#A3238E] flex items-center justify-center shrink-0">
                        <Ticket className="w-7 h-7 text-white" />
                    </div>
                    <a href={data.buttons[0].link} className="bg-[#A3238E] hover:bg-[#8e1f7c] text-white px-10 py-5 rounded-full text-lg font-bold transition-all flex-1 md:flex-none text-center">
                        Register Now
                    </a>
                </div>

                {/* Newsletter Row */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0">
                        <Mail className="w-7 h-7 text-black" />
                    </div>
                    <a href="#" className="bg-white hover:bg-white/90 text-[#A3238E] px-10 py-5 rounded-full text-lg font-bold transition-all flex-1 md:flex-none text-center leading-tight">
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
            className="w-full border-[1.5px] border-[#A3238E]/40 rounded-full py-8 text-center px-4"
        >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                Tickets starting at <span className="text-[#A3238E]">₹3,000</span>
            </h3>
            <p className="text-white/40 text-sm md:text-base font-medium tracking-wide">
                Early Bird pricing available for a limited time
            </p>
        </motion.div>
      </div>
    </section>
  );
}
