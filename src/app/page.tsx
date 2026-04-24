import Navbar from '@/components/eventivee/Navbar';
import Hero from '@/components/eventivee/Hero';
import Marquee from '@/components/eventivee/Marquee';
import About from '@/components/eventivee/About';
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
    <main className="min-h-screen bg-[#070708] selection:bg-[#b02677] selection:text-white font-sans text-white">
      <Navbar />
      {heroData && <Hero data={heroData as any} />}
      <Marquee />
      {aboutData && <About data={aboutData as any} />}
      {gainData && <WhatYouGain data={gainData as any} />}
      {/* {perksData && <Perks data={perksData as any} />} */}
      {/* <Schedule /> */}
      
      {attendData && <WhoShouldAttend data={attendData as any} />}
      {tracksData && <ExploreTracks data={tracksData as any} />}
      {expectData && <WhatToExpect data={expectData as any} />}
      
      {speakersData && <SpeakerGrid data={speakersData as any} />}
      {involveData && <WaysToInvolve data={involveData as any} />}
      {partnerData && <PartnerWithUs data={partnerData as any} />}
      {locationData && <Location data={locationData as any} />}
      {/* {ticketPerksData && <TicketPerks data={ticketPerksData as any} />} */}
      {contactData && <Contact data={contactData as any} />}
      <FAQ />
      {footerData && <Footer data={footerData as any} />}
    </main>
  );
}
