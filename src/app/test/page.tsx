import AipNavbar from '@/components/eventivee/AipNavbar';
import CountdownTimer from '@/components/eventivee/CountdownTimer';
import Footer from '@/components/eventivee/Footer';
import { getContentData } from '@/lib/content';

export const metadata = {
  title: "Countdown - GHCI 27",
  description: "Join us in Bengaluru for Asia's largest gathering of women and allies in technology. Secure your spot now to be part of the future of innovation.",
};

export default function TestCountdownPage() {
  const footerData = getContentData('footer');

  // Programmatically adjust relative footer links to work from the /test subpage
  const footerFriendlyData = footerData
    ? {
        ...footerData,
        columns: (footerData as any).columns?.map((col: any) => ({
          ...col,
          links: col.links?.map((link: any) => ({
            ...link,
            href: link.href?.startsWith('#') ? `/${link.href}` : link.href,
          })),
        })),
      }
    : null;

  return (
    <main className="min-h-screen bg-[#070708] selection:bg-[#b02677] selection:text-white font-sans text-white overflow-x-hidden flex flex-col justify-between">
      {/* Navigation */}
      <AipNavbar />

      {/* Main Content Area */}
      <div className="relative flex-grow flex flex-col items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 px-4 md:px-13 overflow-hidden">
        
        {/* Animated Bokeh Backdrops for Premium Aesthetics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Top-left glowing blob */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#A32482]/10 blur-[120px]" />
          {/* Bottom-right glowing blob */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#223852]/35 blur-[150px]" />
          {/* Center magenta glowing blob */}
          <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#A32482]/5 blur-[120px]" />
          
          {/* Film Grain Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }} 
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Section tag / label in brand mono styling */}
          <div className="mb-4 font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#A32482] font-semibold">
            [ GHCI 2027 COUNTDOWN ]
          </div>

          {/* Section heading with the standard white + white/40 two-tone text effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
            <span className="text-white/40">Counting Down to the</span>
            <br />
            <span className="bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent">
              Celebration of Innovation
            </span>
          </h1>

          {/* Countdown timer */}
          <CountdownTimer />

          {/* Descriptive text block below the timer */}
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-10">
              Grace Hopper Celebration India (GHCI) is Asia's largest gathering of women and allies in technology. 
              Join us in Bengaluru for three days of inspiring keynotes, high-impact technical sessions, 
              career opportunities, and unmatched community networking. Secure your spot now to be part of the 
              future of technology.
            </p>

            {/* Premium CTA Button with Rolling Text Animation */}
            <div className="flex justify-center">
              <div className="flex items-center group gap-0 justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#A32482] border border-[#A32482]/30 flex items-center justify-center group-hover:bg-[#8e1f7c] transition-all z-10">
                  <img src="/icons/Ticket.png" alt="Ticket" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                </div>
                <a
                  href="/#ticketing"
                  className="h-12 md:h-14 inline-flex flex-col rounded-full bg-[#A32482] group-hover:bg-[#8e1f7c] transition-all text-white text-sm md:text-base font-semibold shadow-xl shadow-purple-900/20 active:scale-95 whitespace-nowrap z-0 overflow-hidden cursor-pointer"
                >
                  <div className="h-full w-full relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                    <div className="h-full w-full flex items-center justify-center px-6 md:px-8 shrink-0">
                      Register for GHCI 2027
                    </div>
                    <div className="h-full w-full flex items-center justify-center px-6 md:px-8 shrink-0">
                      Register for GHCI 2027
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      {footerFriendlyData && <Footer data={footerFriendlyData as any} />}
    </main>
  );
}
