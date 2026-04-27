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
- Integrated ScrollReveal component from reactbits.dev (without tilt effect). [2026-04-24 11:21]
- Applied ScrollReveal animation to the About section content for a premium entrance effect. [1.2 hrs]

### Contact Section Refinement [2026-04-27 15:55]
- Implemented a vertical linear gradient (Pink -> Magenta) on the "Touch" text in the Contact section to match Figma designs.
- Standardized brand magenta to #A32482 across the Contact component (buttons, banner, highlights).
- Optimized heading layout with precise line breaks and leading to align with the provided mockups.
- Updated content title casing to "Get in Touch" for perfect design fidelity.
[0.5 hrs]

### Contact Section Gradient Fix [2026-04-27 16:02]
- Updated "Get in Touch" heading to match the new design: single line with a horizontal gradient.
- Implemented `bg-gradient-to-r from-white to-[#A32482]` across the entire heading.
- Expanded container width from `max-w-md` to `max-w-2xl` to ensure the text stays on one line.
- Removed unused title splitting logic.
[0.5 hrs]

### Ticket Pricing Banner Gradient [2026-04-27 16:07]
- Applied the horizontal white-to-magenta gradient to the "Tickets starting at ₹3,000" text in the Contact section banner.
- Used `inline-block` and `bg-clip-text` to ensure the gradient aligns perfectly with the text length.
[0.2 hrs]

### Font Consistency Update [2026-04-27 16:15]
- Removed `font-mono` from transport options in the Location section to align with the global Montserrat font.
- Standardized headers "VIA CAB", "VIA METRO", and "VIA BUS" to use the brand's primary typography.
[0.2 hrs]

### Global Font Migration: Montserrat -> Proxima Nova [2026-04-27 16:17]
- Migrated project from Google Font Montserrat to locally hosted Proxima Nova.
- Configured `next/font/local` in `layout.tsx` using TTF files from `/public/fonts/proxima-nova`.
- Mapped weights: 300 (Light), 400 (Regular), 600 (Semibold), 800 (Extrabold).
- Updated Tailwind theme variable `--font-sans` in `globals.css` to track `--font-proxima-nova`.
[1.0 hrs]

### Partner Section Asset Integration [2026-04-27 16:35]
- Renamed and integrated local logos for the "Trusted By" section in `PartnerWithUs`.
- New logo filenames: `jio-institute.png`, `lloyds.png`, `mycareernet.png`, `backbase.png`, `avalara.png`.
- Updated `src/content/partner-with-us.md` to reference local `/trusted-by/` paths instead of external URLs.
[0.5 hrs]

### Partner Section Visual Polish [2026-04-27 16:40]
- Increased trusted partner logo height from `h-8` (32px) to `h-12` (48px) for better visibility.
- Changed "Trusted By" label from all-caps (`uppercase`) to sentence case to match the design.
[0.2 hrs]

### Partner Section Layout Overhaul [2026-04-27 16:42]
- Wrapped the entire "Partner With Us" content into a unified boxed container with 10px corner radius.
- Integrated `partner-bg.png` as the background for this container with a dark readability overlay.
- Removed the manual SVG wave pattern to use the designer-provided background asset.
- Adjusted interior padding (`p-10 md:p-16`) to create a professional, framed look matching the design specs.
[0.5 hrs]

### Partner Section Full-Width Transition [2026-04-27 16:43]
- Refactored `PartnerWithUs.tsx` to shift the background image from a boxed container to the full-viewport-width section wrapper.
- Increased background overlay opacity (`bg-black/80`) to ensure contrast against the full-width `partner-bg.png`.
- Realigned content using `px-4 md:px-40` on the inner container to maintain site-wide horizontal consistency.
[0.3 hrs]

### Partner Section Background Correction [2026-04-27 16:45]
- Corrected background overlay opacity from `bg-black/80` back to `bg-black/40`.
- The previous opacity was masking the full-width `partner-bg.png` texture entirely.
[0.1 hrs]

### Partner Background Alignment Fix [2026-04-27 16:46]
- Adjusted `backgroundPosition` to `bottom center` in `PartnerWithUs.tsx`.
- This ensures the decorative wavy lines (located at the bottom of the source image) are properly anchored to the bottom of the section and not clipped by the container.
[0.1 hrs]

### Location Section Asset Integration [2026-04-27 16:49]
- Applied `location-bg.png` as the full-width background for the "Our Location" section.
- Added a `bg-black/60` overlay to maintain professional contrast and text readability.
- Realigned the content container with `px-4 md:px-40` to ensure site-wide horizontal padding consistency while the background spans the full viewport.
[0.3 hrs]

### Ways to Involve Section Refinement [2026-04-27 16:52]
- Redesigned card title gradients to show more brand magenta color.
- Changed gradient from `to-br from-white via-white to-magenta` to a cleaner `to-r from-white to-magenta`.
- Applied the `getTitleWithHighlight` logic to all secondary cards (WeQuest, Ambassadors) to ensure visual consistency across the entire grid.
[0.3 hrs]

### Speaker Asset Integration & Interaction [2026-04-27 17:02]
- Standardized speaker headshot filenames in `/public/speakers/` (lowercase, kebab-case).
- Updated `src/content/speakers.md` to reference local optimized assets.
- Implemented cinematic hover effect in `SpeakerGrid.tsx`:
  - Default: Full grayscale (100% saturation removal) and slightly dimmed (`brightness-90`).
  - Hover: Smooth transition to full color (`grayscale-0`) and subtle scale-up (`scale-105`) over 700ms.
[0.5 hrs]

### Speaker Section Background Integration [2026-04-27 17:11]
- Integrated `speaker.png` as a full-width background for the `Speakers` section.
- Added a `bg-black/60` overlay to ensure typographic legibility and cinematic depth.
- Standardized the layout by moving section padding to a relative inner container.
[0.3 hrs]

### Feature Section Asset Integration [2026-04-27 17:18]
- Standardized feature card images in `/public/features/` with sequential naming (`feature-1.png` to `feature-6.png`).
- Migrated "What You'll Gain" section from placeholder Unsplash URLs to local high-fidelity assets.
[0.3 hrs]

### Experience Section Gallery Overhaul [2026-04-27 17:26]
- Restructured the "Experience GHCI" gallery from a 3-image layout to a high-fidelity 5-image floating grid.
- Mapped all local assets from `/public/experience/` (Center, Top-Left, Top-Right, Bottom-Left, Bottom-Right) to their respective spatial positions as per Figma.
- Enhanced the visual depth by adjusting relative positions, z-indexing, and adding subtle grayscale filters to the floating peripheral images.
[0.5 hrs]

### Experience Gallery Overlap Fix [2026-04-27 17:28]
- Resolved visual crowding in the "Experience GHCI" gallery by refining individual image positions.
- Reduced the main center image width to `55%` and pushed floating images to the absolute container edges (`left-0`, `right-0`).
- Increased the overall height of the gallery container on desktop to `700px` to allow for better vertical staggering and a cleaner floating effect.
[0.2 hrs]

### Mobile Slider Implementation [2026-04-27 17:34]
- Converted vertical card stacks into horizontal snap sliders for several key sections on mobile viewports:
    - `WhoShouldAttend`: Integrated 5 cards into a single slider row.
    - `ExploreTracks`: Five-column track list now scrolls horizontally.
    - `SpeakerGrid`: Lineup cards now feature horizontal swipe-scroll.
    - `WhatYouGain`: Six portrait cards refactored into a mobile carousel.
    - `WaysToInvolve`: Primary and secondary involvement cards migrated to horizontal sliders.
- Used Tailwind `overflow-x-auto`, `snap-x`, and `snap-mandatory` for a native-feeling mobile experience while preserving core grid layouts on desktop.
[0.8 hrs]

### Hero Button Join Update [2026-04-27 17:35]
- Refined the primary and secondary call-to-action buttons in the Hero section to act as unified components.
- Removed the `gap-3` between the icon cluster and the label cluster.
- Adjusted corner radii to `rounded-l-full` for icons and `rounded-r-full` for text labels, specifically targeting the meeting edges to ensure they "touch" and look integrated.
- Standardized height to `h-14` for both parts to ensure pixel-perfect alignment.
[0.2 hrs]

### Hero Glass Title Replication [2026-04-27 17:40]
- Replicated the "Glass" effect for the hero title by using `text-white/50` combined with `mix-blend-plus-lighter` for an ethereal, translucent look that picks up background colors.
- Fine-tuned typography to match Figma specs: `7.5rem` font size, `-0.02em` tracking, and `0.95` leading.
- Added styling nuances like `italic` and `uppercase` where appropriate to match the designer's intent.
[0.3 hrs]

### Hero Title Typography Correction [2026-04-27 17:42]
- Corrected the hero title typography to strictly adhere to the Figma design:
    - Removed incorrect italics and uppercase transformations.
    - Restored Title Case ("Grace Hopper Celebration India 2027").
    - Adjusted font-weight to `semibold` as per design specs.
- Maintained the requested glass effect (`white/50` + `mix-blend-plus-lighter`) and precise spacing (`tracking-[-0.02em]`, `leading-[0.95]`).
[0.1 hrs]

### Hero Title Layout Fix [2026-04-27 17:43]
- Forced "Celebration India 2027" to remain on a single line using `whitespace-nowrap` to prevent orphans or unintended wrapping on smaller desktop viewports.
[0.1 hrs]

### Hero Subtitle Spacing and Typography [2026-04-27 17:46]
- Updated the hero subtitle to solid `white` and increased font size to `2xl` (approx 24px) to improve legibility and visual weight.
- Adjusted the vertical gap between the main title and the subtitle to `mb-24` (96px), aligning the spacing with the visual line-height of the title as requested.
[0.2 hrs]
