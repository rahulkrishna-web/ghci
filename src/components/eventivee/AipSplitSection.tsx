'use client';
import { motion } from 'framer-motion';

type AipSplitSectionProps = {
  data: {
    whoShouldApplyTitle: string;
    whoShouldApplyText: string;
    whyApplyTitle: string;
    whyApplyText: string;
  };
};

export default function AipSplitSection({ data }: AipSplitSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[#070708] text-white px-4 md:px-13 relative overflow-hidden">
      {/* Responsive Background Images */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img 
          src="/aip/who-why-mobile.png" 
          alt="" 
          className="w-full h-full object-cover block md:hidden" 
        />
        <img 
          src="/aip/who-why-desktop.png" 
          alt="" 
          className="w-full h-full object-cover hidden md:block" 
        />
      </div>

      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Who Should Apply Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-14 rounded-[10px] bg-white/[0.03] border border-white/5 backdrop-blur-md flex flex-col justify-start min-h-[300px] hover:bg-white/[0.05] transition-all duration-300"
          >
            <h3 
              className="text-3xl md:text-[2.5rem] tracking-tight font-medium mb-6 text-transparent bg-clip-text leading-none pb-1"
              style={{
                backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)',
                WebkitBackgroundClip: 'text'
              }}
            >
              {data.whoShouldApplyTitle}
            </h3>
            <p className="text-white/70 text-lg md:text-[1.35rem] leading-relaxed md:leading-[1.5] font-medium whitespace-pre-line">
              {data.whoShouldApplyText}
            </p>
          </motion.div>

          {/* Why Apply Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 md:p-14 rounded-[10px] bg-white/[0.03] border border-white/5 backdrop-blur-md flex flex-col justify-start min-h-[300px] hover:bg-white/[0.05] transition-all duration-300"
          >
            <h3 
              className="text-3xl md:text-[2.5rem] tracking-tight font-medium mb-6 text-transparent bg-clip-text leading-none pb-1"
              style={{
                backgroundImage: 'linear-gradient(258.87deg, #A32478 70%, #FFFFFF 90.93%)',
                WebkitBackgroundClip: 'text'
              }}
            >
              {data.whyApplyTitle}
            </h3>
            <p className="text-white/70 text-lg md:text-[1.35rem] leading-relaxed md:leading-[1.5] font-medium whitespace-pre-line">
              {data.whyApplyText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
