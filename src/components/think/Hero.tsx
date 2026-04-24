"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] as any }}
          className="mb-8"
        >
          <span className="text-think-accent text-sm font-inter font-bold tracking-[0.2em] uppercase">
            September 24-26, 2027
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.21, 0.45, 0.32, 0.9] as any }}
          className="text-white text-6xl md:text-9xl font-inter font-extrabold tracking-tight leading-tighter mb-12"
        >
          THINK <br /> FORWARD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.21, 0.45, 0.32, 0.9] as any }}
          className="text-white/60 text-xl md:text-2xl font-inter max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          A summit dedicated to the visionaries shaping the next decade of digital experiences and human interaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] as any }}
        >
          <a href="https://konfhub.com/ghci-2027" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="h-16 px-12 rounded-full bg-think-accent text-black hover:bg-think-accent/90 text-xl font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(204,172,245,0.3)]">
              Join the Summit
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-think-accent/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
