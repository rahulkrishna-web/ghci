import Navbar from '@/components/eventivee/Navbar';
import Hero from '@/components/eventivee/Hero';
import Marquee from '@/components/eventivee/Marquee';
import About from '@/components/eventivee/About';
import ExperienceStats from '@/components/eventivee/ExperienceStats';
import WhatYouGain from '@/components/eventivee/WhatYouGain';
import WhoShouldAttend from '@/components/eventivee/WhoShouldAttend';
import ExploreTracks from '@/components/eventivee/ExploreTracks';
import WhatToExpect from '@/components/eventivee/WhatToExpect';
import SpeakerGrid from '@/components/eventivee/SpeakerGrid';
import Schedule from '@/components/eventivee/Schedule';
import WaysToInvolve from '@/components/eventivee/WaysToInvolve';
import Perks from '@/components/eventivee/Perks';
import PartnerWithUs from '@/components/eventivee/PartnerWithUs';
import Location from '@/components/eventivee/Location';
import TicketPerks from '@/components/eventivee/TicketPerks';
import Contact from '@/components/eventivee/Contact';
import FAQ from '@/components/eventivee/FAQ';
import Footer from '@/components/eventivee/Footer';
import Ticketing from '@/components/eventivee/Ticketing';

// Data loader
import { getContentData } from '@/lib/content';

export default function EventiveePage() {
  const heroData = getContentData('hero');
  const aboutData = getContentData('about');
  const gainData = getContentData('what-you-gain');
  const attendData = getContentData('who-should-attend');
  const tracksData = getContentData('explore-tracks');
  const expectData = getContentData('what-to-expect');
  const speakersData = getContentData('speakers');
  const involveData = getContentData('ways-to-involve');
  const partnerData = getContentData('partner-with-us');
  const locationData = getContentData('location');
  const perksData = getContentData('perks');
  const ticketPerksData = getContentData('ticket-perks');
  const contactData = getContentData('contact');
  const footerData = getContentData('footer');

  return (
    <main className="min-h-screen bg-[#070708] selection:bg-[#b02677] selection:text-white font-sans text-white overflow-x-hidden">
      <Navbar />
      <div id="hero">{heroData && <Hero data={heroData as any} />}</div>
      <div id="about">{aboutData && <About data={aboutData as any} />}</div>
      <div id="experience">{aboutData && <ExperienceStats data={aboutData as any} />}</div>
      <div id="gain">{gainData && <WhatYouGain data={gainData as any} />}</div>
      
      <div id="attend">{attendData && <WhoShouldAttend data={attendData as any} />}</div>
      
      <section 
        id="explore"
        className="w-full relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/expect-bg.png)' }}
      >
        <div id="tracks">{tracksData && <ExploreTracks data={tracksData as any} />}</div>
        <div id="expect">{expectData && <WhatToExpect data={expectData as any} />}</div>
      </section>
      
      <div id="speakers">{speakersData && <SpeakerGrid data={speakersData as any} />}</div>
      <div id="involve">{involveData && <WaysToInvolve data={involveData as any} />}</div>
      <div id="partner">{partnerData && <PartnerWithUs data={partnerData as any} />}</div>
      <div id="location">{locationData && <Location data={locationData as any} />}</div>
      <div id="ticket-perks">{ticketPerksData && <TicketPerks data={ticketPerksData as any} />}</div>
      
      {/* New Ticketing Section */}
      <Ticketing />
      
      <div id="contact">{contactData && <Contact data={contactData as any} />}</div>
      <div id="faq"><FAQ /></div>
      <div id="footer">{footerData && <Footer data={footerData as any} />}</div>
    </main>
  );
}
