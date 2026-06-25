'use client';
import { motion } from 'framer-motion';

type WequestWhyApplyProps = {
  data: {
    whyApplyTitle: string;
    whyApplyText: string;
  };
};

export default function WequestWhyApply({ data }: WequestWhyApplyProps) {
  // Parse markdown-like paragraphs and bullet points
  const lines = data.whyApplyText.split('\n');
  const paragraphs: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('-')) {
      const bulletText = trimmed.replace(/^-/, '').trim();
      currentList.push(
        <li key={`li-${index}`} className="flex items-start gap-3 text-white/70 text-base md:text-[18px] leading-relaxed font-normal">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A32482] mt-2.5 shrink-0" />
          <span>{bulletText}</span>
        </li>
      );
    } else {
      if (currentList.length > 0) {
        paragraphs.push(
          <ul key={`ul-${index}`} className="space-y-3.5 my-4">
            {currentList}
          </ul>
        );
        currentList = [];
      }
      if (trimmed !== '') {
        paragraphs.push(
          <p key={`p-${index}`} className="text-white/70 text-base md:text-[18px] lg:text-[20px] leading-relaxed font-normal mb-4">
            {trimmed}
          </p>
        );
      }
    }
  });

  if (currentList.length > 0) {
    paragraphs.push(
      <ul key="ul-final" className="space-y-3.5 my-4">
        {currentList}
      </ul>
    );
  }

  const headingText = (
    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight font-medium leading-tight pb-1">
      <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent">
        Why Apply?
      </span>
    </h2>
  );

  return (
    <section 
      id="wequest-why" 
      className="py-16 md:py-24 bg-[#070708] text-white px-4 md:px-13 relative overflow-hidden"
      style={{
        backgroundImage: `url('/wequest/why_apply_bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background soft glow */}
      <div className="absolute w-[50%] h-[50%] rounded-full bg-[#A32482]/5 blur-[120px] right-10 bottom-0 pointer-events-none" />

      {/* Container brought inside and widened to match what-is section */}
      <div className="max-w-[1140px] mx-auto w-full px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 text-left"
          >
            {headingText}
          </motion.div>

          {/* Right Column: Paragraphs & Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:col-span-8 text-left space-y-4"
          >
            {paragraphs}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
