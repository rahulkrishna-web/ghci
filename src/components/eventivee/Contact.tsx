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
        <div className="flex flex-row justify-between items-start gap-4 md:gap-12 mb-20">
            
            {/* Left Side: Content (75% approx) */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
            >
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-white">
                    Get in <span className="text-[#A32482]">Touch</span>
                </h2>
                <div className="space-y-6">
                    <div className="text-white/70 text-base md:text-xl leading-relaxed">
                        Have questions or need support?<br />
                        Our team is here to help.
                    </div>
                    <div className="text-white/70 text-base md:text-xl">
                        Reach out at:<br />
                        <a href={`mailto:${data.email}`} className="text-white hover:text-[#A3238E] transition-colors break-all md:break-normal font-medium">{data.email}</a>
                    </div>
                </div>
            </motion.div>

            {/* Right Side: CTAs (25% approx) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="shrink-0 flex flex-col gap-6 items-end pt-2"
            >
                {/* Register Cluster */}
                <div className="flex items-center group gap-0">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center shrink-0 z-10 transition-colors group-hover:bg-[#8e1f7c]">
                        <img src="/icons/register-now.png" alt="Register" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                    </div>
                    <a 
                        href={data.buttons[0].link} 
                        className="bg-[#A32482] hover:bg-[#8e1f7c] text-white px-6 md:px-10 py-2.5 md:py-4 rounded-full text-[12px] md:text-lg font-bold transition-all shadow-xl shadow-purple-900/20 active:scale-95 whitespace-nowrap z-0"
                    >
                        Register Now
                    </a>
                </div>

                {/* Newsletter Cluster */}
                <div className="flex items-center group gap-0">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white border border-white/10 flex items-center justify-center shrink-0 z-10 transition-colors group-hover:bg-neutral-100">
                        <img src="/icons/newsletter.png" alt="Newsletter" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                    </div>
                    <a 
                        href="#" 
                        className="bg-white hover:bg-neutral-200 text-[#A32482] px-6 md:px-10 py-2.5 md:py-4 rounded-full text-[12px] md:text-lg font-bold transition-all shadow-xl active:scale-95 whitespace-nowrap z-0"
                    >
                        Subscribe
                    </a>
                </div>
            </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full border border-[#A32482]/30 rounded-full py-6 md:py-8 text-center px-4"
        >
            <h3 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 tracking-tight text-white inline-block">
                Tickets starting at <span className="text-[#A32482]">₹3,000</span>
            </h3>
            <p className="text-white/40 text-[10px] md:text-base font-medium tracking-wider uppercase">
                Early Bird pricing available for a limited time
            </p>
        </motion.div>
      </div>
    </section>
  );
}
