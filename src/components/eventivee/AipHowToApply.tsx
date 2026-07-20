'use client';
import { motion } from 'framer-motion';

type AipHowToApplyProps = {
  data: {
    howToApplyTitle?: string;
    howToApplySteps?: string[];
  };
};

export default function AipHowToApply({ data }: AipHowToApplyProps) {
  const title = data.howToApplyTitle || "How to Apply";
  const steps = data.howToApplySteps || [
    "Click on Apply Now",
    "Create an account or sign in to your existing Stutzee account",
    "Click on New Application",
    "Select AIP (GHCI Scholarships)",
    "Fill in your application details — you can save your progress anytime using the 'Save Draft' option",
    "Once ready, submit your application. You can view your submitted application but please note that it cannot be edited after submission"
  ];

  return (
    <section className="py-16 md:py-24 bg-[#070708] text-white px-4 md:px-13 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute w-[50%] h-[50%] rounded-full bg-[#A32482]/5 blur-[120px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-6xl font-medium tracking-tight mb-5 text-transparent bg-clip-text pb-1"
          style={{
            backgroundImage: 'linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)',
            WebkitBackgroundClip: 'text'
          }}
        >
          {title}
        </motion.h2>

        {/* Timeline container */}
        <div className="relative max-w-2xl mx-auto">
          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-stretch gap-5 md:gap-8 relative group"
              >
                {/* Left side: Circle and Line Segment */}
                <div className="flex flex-col items-center shrink-0 relative">
                  {/* Step Number Circle */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#A32482] text-white flex items-center justify-center font-bold text-base md:text-lg z-10 shadow-lg shadow-purple-950/20 group-hover:scale-110 transition-transform duration-300">
                    {idx + 1}
                  </div>
                  {/* Line segment to next item */}
                  {idx < steps.length - 1 && (
                    <div 
                      className="w-[2px] bg-[#A32482]/30 pointer-events-none absolute top-10 md:top-12 bottom-0 left-1/2 -translate-x-1/2 z-0"
                      style={{
                        backgroundImage: 'linear-gradient(to bottom, #A32482 0%, #b02677 100%)'
                      }}
                    />
                  )}
                </div>

                {/* Step Description */}
                <div className={`pt-1.5 md:pt-2 ${idx < steps.length - 1 ? 'pb-6 md:pb-8' : ''}`}>
                  <p className="text-white/80 text-lg md:text-[22px] font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
