'use client';
import Hero from '@/components/think/Hero';
import AboutStats from '@/components/think/AboutStats';
import Expectations from '@/components/think/Expectations';
import SpeakerGrid from '@/components/think/SpeakerGrid';
import Agenda from '@/components/think/Agenda';
import Testimonials from '@/components/think/Testimonials';
import Pricing from '@/components/think/Pricing';
import SponsorsFAQ from '@/components/think/SponsorsFAQ';

export default function Demo2Page() {
  return (
    <main className="min-h-screen bg-black selection:bg-think-accent selection:text-black font-inter">
      {/* Immersive Textures */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-50">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
      </div>

      <Hero />
      <AboutStats />
      <Expectations />
      <SpeakerGrid />
      <Agenda />
      <Testimonials />
      <Pricing />
      <SponsorsFAQ />

      {/* Footer */}
      <footer className="py-32 bg-black text-white px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <h2 className="text-8xl md:text-[12rem] font-black tracking-[ -0.05em] uppercase italic leading-none opacity-10 mb-12">
              GHCI <br /> 2027
            </h2>
            <div className="flex gap-12 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-think-accent transition-colors">Twitter</a>
              <a href="#" className="hover:text-think-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-think-accent transition-colors">YouTube</a>
            </div>
          </div>
          <div className="text-right">
             <p className="text-white/40 mb-8 max-w-xs ml-auto font-medium">Join us in Bangalore for the largest celebration of women in technology.</p>
             <a 
               href="https://konfhub.com/ghci-2027" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-block px-12 py-6 rounded-full bg-think-accent text-black font-black uppercase text-xl hover:scale-105 transition-transform"
             >
               Get Tickets
             </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
