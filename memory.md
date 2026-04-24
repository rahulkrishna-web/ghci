# Memory - GHCI Eventivee Microsite

## Created: 2026-03-30 | Updated: 2026-04-04T00:10:00+05:30

### Eventivee UI Recreation (2026-04-03)
- recreated full eventivee.framer.website UI in Next.js 16 + Tailwind v4
- 14 components in `src/components/eventivee/`: Navbar, Hero, Marquee, About, Features, SpeakerGrid, Schedule, Testimonials, Pricing, Partners, Host, FAQ, CTA, Gallery, Footer
- Navbar uses Framer Motion `layout` wrapper so the glass pill expands natively into a unified surface on click, instead of rendering a separate dropdown menu.
- `PricingCard` component features a circular ticket-style cutout via `maskImage`.
- Hover effect on `PricingCard` refined to a "chroma spotlight" (radial-gradient) without the grid overlay, following user request.
- page assembled in `src/app/page.tsx`
- lucide-react v1.7 doesn't export brand icons (Instagram/Linkedin/Twitter) - used inline SVGs instead
- bg color: `#070708`, accent: purple-600, schedule bg: `#0a0a1a`, pricing bg: `#050510`
- section labels use `[About]`, `[Why Attend]`, `[Speakers]` format with purple-400 mono font
- headings use "white + white/40" pattern for two-tone effect
- cards use `bg-white/[0.03] border-white/[0.06]` for subtle dark glass effect
- CSS: added `scrollbar-hide` utility and `scroll-behavior: smooth` in globals.css
- images all from unsplash URLs (no local assets for the eventivee recreation)
- registration links point to https://konfhub.com/ghci-2027
- demo2 page at `/demo2` uses different "think" theme components (not eventivee)

### Branding & Hero Finalization (2026-04-04)
- Updated Navbar and Footer logos to `/ghci27-logo.png`.
- Increased Navbar logo size (`h-12`) and updated Menu button styling to match final design (pill-shaped, white borders, all-caps 'MENU').
- Full Hero section overhaul:
    - Background: `/lead-bg.png` (ballroom/conference scene).
    - Title: "GHCI Celebration-India".
    - Details: "05/01/2027" and "Main Street, 123 Road, New Delhi - 05".
    - Subtext: "7000+ Innovators, Professionals and Industry Leaders all in one place".
    - Buttons: Vibrant pink (`#b02677`) ticket-themed buttons replacing the previous purple/blue theme.
- Updated all "Eventivee®" and "ConfexPro" branding to "GHCI 2027" across the site.
- **Marquee Overhaul**: Removed top/bottom borders, added dashed pill borders to items, and implemented left/right gradient side-fades.
- **Agenda Background Overhaul**: Implemented a sophisticated background for the Schedule section featuring 5 animated, morphing blobs (Magenta `#a3238e` and Blue `#4284c2`) that use an SVG gooey filter to "join" fluidly. Added a hazy, glassy overlay with `backdrop-blur-[60px]`. Fixed z-index to ensure text visibility above the background.
- **Testimonials Marquee**: Replaced manual scroll on the Testimonials section with an infinite marquee effect. Removed scrollbar and added dark gradient edge-fades.

### Website Redesign and Content Abstraction [2026-04-21 16:44]
- Refactored components to read content from markdown files in `src/content/` using `gray-matter`.
- Replaced Hero layout with centered design and background image.
- Transformed glassy Navbar into horizontal top-bar layout.
- Abstracted page data down from `src/app/page.tsx` via Server Component data loading.
- Recreated 'What You Gain', 'Who Should Attend', 'Explore Tracks', 'Location', 'Perks' and 'Contact' sections matching provided design structure.
- Used Unsplash placeholders for newly constructed image slots.
[4.0 hrs]
### Footer Design Finalization [2026-04-24 02:05]
- Redesigned footer to exactly match provided premium design mockup.
- Implemented atmospheric radial glow background and large GHCI outline watermark text.
- Updated layout with Social label section and dual-column links (GHCI, Support).
- Upgraded social icons (X, LinkedIn, Instagram) and typography for premium feel.
- Updated footer content in `src/content/footer.md` to match the design columns and links.
[1.5 hrs]
- Refined watermark text styling for better visual accuracy with the design mockup. [0.2 hrs]
- Enhanced footer background with atmospheric mesh gradients (purple, magenta, blue) to match the cinematic lighting in the design. [0.5 hrs]
### FAQ Redesign & Relocation [2026-04-24 02:23]
- Redesigned FAQ section to match the provided dark boxed layout with plus icons.
- Updated FAQ content with 6 specific items matching the design image.
- Relocated FAQ section to be just above the Footer, below the Contact section.
- Implemented smooth Framer Motion animations for the accordion expand/collapse logic.
[0.8 hrs]
### Contact Section Redesign [2026-04-24 02:29]
- Redesigned 'Get in Touch' section to match the provided layout with split-color headings.
- Implemented icon-based pill buttons for 'Register Now' (pink) and 'Subscribe to Newsletter' (white).
- Added a large pill-bordered pricing banner at the bottom matching the design specs.
- Updated colors to precisely match the GHCI 2027 magenta tone (#A3238E).
[1.0 hrs]
### Ticket Perks Section Implementation [2026-04-24 02:32]
- Created new 'What You Get With Your Ticket' section matching the design mockup.
- Implemented a cinematic 'Ticket Card' on the right with a purple-blue gradient, notch cutout, and perforated line styling.
- Extracted section content to `src/content/ticket-perks.md`.
- Positioned the new section just above the 'Get in Touch' (Contact) section in `page.tsx`.
[0.8 hrs]
### Visual Cleanup & Border Removal [2026-04-24 02:40]
- Removed all persistent section borders (border-t) to create a seamless dark theme across the landing page.
- Eliminated any blue-tone gradients and subtle borders from the 'Ticket Perks' card to address the 'thin blue outline' feedback.
- Updated the footer's secondary glow from deep blue to indigo with reduced opacity for a more cohesive purple aesthetic.
- Removed the top-edge glow line from the Schedule section.
[0.5 hrs]
### Location Section Overhaul [2026-04-24 02:53]
- Redesigned 'Our Location' section with a premium dark-themed layout.
- Added venue info cards (KTPO), a static map view, and a comprehensive 'Getting There' guide.
- Implemented transport details (Cab, Metro, Bus) within a grid-patterned dark card.
- Relocated the section to sit just above 'Ticket Perks' for better logical flow.
[0.8 hrs]
### Location Section Layout Adjustments [2026-04-24 03:39]
- Adjusted 'Our Location' section so that info cards on the left match the map's height exactly.
- Implemented 'flex-1' and 'items-stretch' on the grid containers for perfect vertical alignment.
- Updated map placeholder to a Delhi-focused view as requested.
- Requested Google Maps embed code for final implementation.
[0.5 hrs]
### Location Section Aspect Ratio Update [2026-04-24 03:41]
- Set the map container to a fixed 16:9 aspect ratio (aspect-video).
- Ensured info cards on the left continue to stretch to match the map's height.
[0.2 hrs]
### Google Maps Integration [2026-04-24 03:42]
- Integrated the live Google Maps iframe for KTPO Bengaluru.
- Applied a 'cinematic dark' filter to the map (grayscale + invert) to match the site's aesthetic.
- Added a hover transition that reveals the full-color map for better usability.
- Maintained the 16:9 aspect ratio and equal-height layout.
[0.5 hrs]
### Map Visual Consistency Fix [2026-04-24 03:43]
- Removed the hover-to-light-mode transition from the Google Maps iframe to maintain a consistent dark aesthetic.
[0.1 hrs]
### Map Color Restoration [2026-04-24 03:43]
- Restored the Google Maps iframe to its standard light colors.
- Removed all dark-mode filters and hover transitions for a clean, natural look.
[0.1 hrs]
### Getting There Section Refinement [2026-04-24 03:46]
- Replicated 'Getting There' design exactly as per mockup.
- Removed background boxes from icons for a cleaner, outline-focused look.
- Implemented vertical columns separators with 'border-l' between transport options.
- Adjusted typography and spacing for perfect alignment of icons, titles, and descriptions.
[0.5 hrs]
### Partner Section Implementation [2026-04-24 03:49]
- Implemented 'Partner With Us' and 'Trusted By' combined section matching the new design layout.
- Added a benefits grid with vertical separators and icon-lead titles.
- Integrated a grayscale logo cloud for 'Trusted By' partners with hover color transitions.
- Added a cinematic wavy pattern background accent.
- Grouped logic into `PartnerWithUs.tsx` and updated `page.tsx` position above Location.
[1.0 hrs]
### Page Import Fix [2026-04-24 03:52]
- Fixed a build error caused by duplicate 'Schedule' and 'Marquee' imports in page.tsx.
- Removed unused 'Partners' import to keep the build clean.
[0.1 hrs]
### Ways to Get Involved Redesign [2026-04-24 03:55]
- Redesigned the 'Ways to Get Involved' section with an asymmetrical, two-row card grid.
- Implemented specific card types: Large 'Primary' cards for Speakers/Jurors and compact 'Secondary' cards for Programs.
- Added support for multiple button variants (Solid/Outline) and state-based labels (Applications Closed).
- Integrated 'Launching Soon' badges for upcoming programs.
- Relocated the section to sit directly above the 'Partner With Us' section for better thematic grouping.
[1.0 hrs]
### Ways to Involve Visual Polish [2026-04-24 04:00]
- Implemented precise text gradients for highlighted title words (White -> Magenta) to match Figma library styles.
- Updated core brand color to the exact Figma hex: '#A32482'.
- Refined button styles with increased padding (px-8 py-3.5) and subtle shadow depth for a more premium look.
- Updated 'Launching Soon' badges with solid backgrounds and updated typography.
[0.5 hrs]
### Past Speakers Section Redesign [2026-04-24 04:03]
- Redesigned the 'Speaker Grid' as a 'Past Speakers' section with a clean 4-column layout.
- Implemented full-bleed grayscale portrait cards with name/role information overlaid using a bottom-faded gradient.
- Added a cinematic wavy pattern background accent to the header area.
- Updated content with 12 industry leaders as seen in the design mockups.
- Relocated the section to sit directly above 'Ways to Get Involved'.
[1.0 hrs]
### Explore and What to Expect Sections [2026-04-24 04:14]
- Redesigned 'Explore What You'll Learn' as a centered, 5-column grid with premium track cards and magenta check icons.
- Created a new 'What to Expect' component with a split layout: Cinematic image on the left and a grid-patterned information box with interactive bullets on the right.
- Updated track content to focus on AI, Digital Systems, Deep Tech, and Leadership as per the new cinematic design.
- Reordered the page layout to place these sections directly above 'Past Speakers'.
[1.5 hrs]
### Global Font Update [2026-04-24 04:45]
- Switched the entire project font system to Montserrat (as a high-quality alternative to Proxima Nova).
- Updated RootLayout to use Montserrat with a wide range of weights (100-900).
- Reconfigured Tailwind theme variables in globals.css to map 'font-sans' to Montserrat.
- Removed old Geist and Inter configurations to ensure full visual consistency.
[0.5 hrs]
### Montserrat Global Deployment Verified [2026-04-24 04:51]
- Conducted a project-wide audit for explicit font references.
- Verified Tailwind CSS v4 variables: '--font-sans' is correctly bound to '--font-montserrat'.
- Confirmed that all Next.js font optimizations are active via RootLayout.
[0.1 hrs]
### Who Should Attend Redesign [2026-04-24 04:54]
- Redesigned the 'Who Should Attend' section with a 3+2 grid layout and industry-standard iconography.
- Implemented a solid magenta highlight for the 'Students' card to emphasize core engagement.
- Added detailed multi-point feature lists for each attendee track (Professionals, Founders, Academia, etc.).
- Relocated the section to sit directly above 'Explore What You'll Learn' to create a unified attendee-to-learning roadmap.
- Switched to Lucide icons for sharp, consistent visual language.
[1.0 hrs]
### Fix: Who Should Attend Syntax Error [2026-04-24 04:57]
- Resolved a JSX build error caused by attempted dynamic object access as a component tag.
- Refactored component rendering to assign dynamic icons to a capitalized 'Icon' variable before rendering.
- Standardized .map() callback patterns for cleaner, more robust JSX structure.
[0.2 hrs]
### Global Design Polish: Corner Radius Standardization [2026-04-24 05:02]
- Standardized the component corner radius to exactly 10px (rounded-[10px]) across the entire site.
- Updated WhoShouldAttend, ExploreTracks, WhatToExpect, SpeakerGrid, WaysToInvolve, About (video), WhatYouGain, and Location.
- Ensured consistency between image containers, info boxes, and interactive cards for a unified, premium industrial look.
[1.0 hrs]
### Detail Redesign: Experience & Gain Sections [2026-04-24 05:06]
- Rebuilt 'Experience GHCI' with floating image gallery, wavy background accents, and refined 3-column stats with dividers.
- Rebuilt 'What You'll Gain' as a 6-column portrait grid with integrated Lucide iconography and bottom-aligned text overlays.
- Standardized both sections with 10px corner radius and dark cinematic aesthetic.
[1.5 hrs]
### Bug Fix: About Component Index Error [2026-04-24 05:08]
- Resolved a 'Cannot read properties of undefined (reading 1)' TypeError in About.tsx.
- Implemented defensive array checks and fallback image URLs for the Experience GHCI gallery.
- Ensured component remains stable even if data.gallery is missing or partially populated.
[0.2 hrs]
### Layout Cleanup: Hidden Sections [2026-04-24 05:11]
- Commented out the 'Schedule' and 'TicketPerks' sections from the homepage to streamline content.
- Preserved the component code and data loading logic for future restoration.
[0.1 hrs]
### Layout Cleanup: Perks Section Hidden [2026-04-24 05:14]
- Identified the 'What You Get After Your Ticket' section as the Perks component.
- Commented out the Perks section in page.tsx to fully satisfy the removal request.
[0.1 hrs]
### Detail Redesign: Lead Section (Navbar & Hero) [2026-04-24 05:20]
- Rebuilt Navbar with transparent background and high-contrast white 'Register Now' button.
- Rebuilt Hero with massive elegant typography and a cinematic radial magenta glow.
- Implemented button clusters with circular iconic badges and refined pill-shaped buttons.
- Standardized navigation architecture to match the new visual design.
[1.5 hrs]

### Watermark Outline Fix [2026-04-24 10:13]
- Fixed interior overlapping lines in "GHCI" watermark in Footer.tsx.
- Replaced -webkit-text-stroke with 4-way text-shadow to achieve a "union" effect on Montserrat font paths.
[0.3 hrs]

### Footer Asset Integration [2026-04-24 10:28]
- Integrated footer-bg.png and sharp GHCI.svg watermark into Footer.tsx.
- Removed CSS-based watermark and mesh gradients to use designer-provided assets.
- Adjusted SVG positioning to overflow the bottom bounds as per design specs.
[0.5 hrs]
- Adjusted Footer watermark vertical offset to translate-y-[10%] for 10% bottom clipping. [2026-04-24 10:30] [0.1 hrs]
- Integrated lead-bg.png as the background for the Hero (lead) section with a readability overlay. [2026-04-24 10:31] [0.2 hrs]
- Restored "What You Get With Your Ticket" section before Contact. [2026-04-24 10:33]
- Updated ticket card background to use ticket-bg.png. [0.3 hrs]
- Set div.spreadsheet.png as the background for the "Getting There" card in Location.tsx. [2026-04-24 10:43] [0.2 hrs]
- Switched entire page layout to fluid width with 1rem (px-4) horizontal padding. [2026-04-24 10:49]
- Removed all max-width constraints (max-w-6xl, max-w-7xl) from section containers. [1.0 hrs]
- Fixed JSX syntax error in Navbar.tsx (closing motion.nav tag). [2026-04-24 10:52] [0.1 hrs]
- Fixed JSX syntax error in WhatToExpect.tsx (extra closing div). [2026-04-24 10:55] [0.1 hrs]
- Fixed horizontal scroll issue by adding overflow-x-hidden to the main layout wrapper. [2026-04-24 10:58] [0.2 hrs]
- Increased global horizontal padding to 10rem (px-40) on desktop for all sections. [2026-04-24 11:03]
- Maintained 1rem (px-4) mobile padding for responsive consistency. [0.4 hrs]
- Integrated premium assets for "What To Expect" section (what-to-expect.png and card background). [2026-04-24 11:10]
- Removed legacy grid pattern from What To Expect card. [0.2 hrs]
- Refined what-to-expect card background to fill 100% of the container and removed the redundant border. [2026-04-24 11:13] [0.1 hrs]
