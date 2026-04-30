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

### Marquee Relocation Above the Fold [2026-04-27 18:23]
- Moved the `Marquee` component from the main page structure into the `Hero` section to ensure it remains visible "above the fold" on page load.
- Adjusted `Marquee.tsx` to have a transparent background and removed unnecessary padding, allowing it to blend seamlessly with the Hero's cinematic background.
- Positioned the marquee absolutely at the bottom of the Hero section (`bottom-10`) to match the design reference.
[0.3 hrs]

### Experience Section Background Integration [2026-04-27 19:18]
- Integrated `2nd-section-bg.png` as the full-width background for the "Experience GHCI" section.
- Added a `bg-black/60` overlay to ensure readability and maintain visual consistency with the site's dark cinematic theme.
[0.1 hrs]

### Experience Background Bleed Fix [2026-04-27 19:21]
- Resolved a background "bleeding" issue in the Experience section by setting `backgroundRepeat: 'no-repeat'` and `backgroundPosition: 'top center'`.
- This ensures the large wavy line asset stays strictly contained within its section boundaries and doesn't spill over into the Hero or What You Gain sections.
[0.1 hrs]

### Experience Background Boundary Fix [2026-04-27 19:23]
- Restored the `bg-black` class to the Experience section to prevent background transparency issues that caused assets to "bleed" into adjacent viewport areas.
- Refined background properties to `backgroundSize: '100% auto'`, `backgroundPosition: 'bottom center'`, and `backgroundRepeat: 'no-repeat'` to strictly anchor the wavy graphic within the section's lower boundary.
[0.1 hrs]

### Experience Background Layer Refactoring [2026-04-27 19:27]
- Refactored the Experience section background from a style property on the section to a dedicated absolute-positioned `div` with `inset-0`.
- Applied `backgroundSize: 'cover'` to ensure the image maintains 100% height of the section while allowing the horizontal width to bleed beyond the screen edges as needed.
- This ensures perfectly centered positioning and strict clipping within the section's `overflow-hidden` container, preventing any spillover into adjacent sections.
[0.1 hrs]

### Experience Stats Refinement [2026-04-27 19:52]
- Top-aligned the stats columns in the Experience section by changing vertical justification to `justify-start`.
- Applied the consistent GHCI brand gradient (`from-white to-[#A32482]`) to the stat digits using `bg-clip-text` for a high-fidelity look.
- Refined typography and spacing based on user manual adjustments (increased font sizes and wider container).
[0.2 hrs]

### Experience Section Modularization [2026-04-27 19:57]
- Detached the "Experience GHCI" stats from the "Floating Gallery" (About.tsx) into a standalone `ExperienceStats.tsx` component.
- This modularization allows for cleaner separation of concerns while maintaining the identical cinematic design (same background graphics and layout).
- Updated the main page structure to render both sections sequentially.
[0.4 hrs]

### About section Build Error Fix [2026-04-27 19:59]
- Resolved a "Expression expected" build error in `About.tsx` caused by a redundant closing `</div>` tag left over during component modularization.
- Restored valid JSX structure by correcting the `div` nesting levels.
[0.1 hrs]

### ExploreTracks 4.5 Card Layout [2026-04-28 03:24]
- Refactored `ExploreTracks.tsx` from a static grid to a horizontal flex-scroll container on desktop.
- Adjusted card `min-width` to show exactly 4.5 cards on desktop and 2.2 cards on tablet viewports.
- Enabled `flex-shrink-0` to maintain card dimensions during horizontal scrolling.
[0.3 hrs]

### ExploreTracks Card Width Correction [2026-04-28 03:28]
- Fixed issue where cards were showing at 1.2 visibility on desktop.
- Replaced complex `calc` with percentage-based widths (`w-[21%]`) for better reliability in flex containers.
- Added `w-full` to the tracks container and increased gap to `gap-6`.
[0.2 hrs]

### ExploreTracks Figma Replication [2026-04-28 03:35]
- Replicated premium card styling from Figma:
    - Added `backdrop-blur-md` for the Glass effect.
    - Updated background fill to `bg-white/[0.05]` and border to `border-white/10`.
    - Set description text color to `#A3A3A3` as per Figma selection colors.
    - Increased section padding to `px-4 md:px-16 lg:px-20` to match design margins.
    - Adjusted vertical padding to `py-20` for better breathing room.
[0.4 hrs]

### ExploreTracks Leading Padding and Bleed [2026-04-28 03:41]
- Added leading padding (`px-4 md:px-20`) to the tracks container to provide a 1rem+ starting gap.
- Configured as a full-width bleed section: cards touch screen edges during scroll but respect margins at start/end.
- Switched to `snap-start` for better alignment with the new leading margins.
- Updated card width to `w-[18.5%]` to preserve the 4.5-card visibility within the padded container.
[0.2 hrs]

### ExploreTracks 4.5 Card Correction [2026-04-28 03:46]
- Fixed issue where too many cards were visible simultaneously.
- Restored `lg:w-[21%]` and `md:w-[44%]` to re-establish the 4.5 and 2.2 card visibility ratios.
- Verified that these percentages correctly account for the `px-20` container padding.
[0.1 hrs]

### ExploreTracks Spacer Implementation [2026-04-28 03:50]
- Added high-reliability spacer divs at the start and end of the track list to ensure consistent leading gaps.
- Adjusted card widths to `lg:w-[22%]` and `md:w-[46%]` to maintain the 4.5 and 2.2 visibility ratios given the new internal spacers.
- Verified that `snap-start` correctly targets the first card after the leading spacer.
[0.1 hrs]

### ExploreTracks Scroll Padding Fix [2026-04-28 03:51]
- Resolved issue where snap-alignment was overriding leading gaps.
- Implemented `scroll-pl-20` (and `md`, `lg` variations) to force snap-alignment to respect container padding.
- Removed manual spacers in favor of standard CSS `scroll-padding`.
[0.1 hrs]

[0.1 hrs]

### Grouped ExploreTracks and WhatToExpect [2026-04-28 04:18]
- Clubbed `ExploreTracks` and `WhatToExpect` components into a single common section wrapper layout in `page.tsx`.
- Applied global `/expect-bg.png` full size background on the grouped section wrapper and removed hardcoded static `bg-black` from `ExploreTracks` and `WhatToExpect` containers to let the new common backdrop bleed through gracefully.
[0.1 hrs]

### WhatToExpect Column Layout Overhaul [2026-04-28 04:25]
- Transitioned grid from basic `md:grid-cols-2` 50/50 split to a refined 12-column grid format.
- Adjusted widths visually applying `md:col-span-5` to the left-side image to shrink width and `md:col-span-7` to expand the right-side text block perfectly reproducing the specific Figma proportions superimposed.
[0.1 hrs]

### Speaker Card Hover Color Restoration [2026-04-28 04:47]
- Addressed an issue resulting in the speaker images failing to return to their full native color output on hover.
- Migrated standard subset `grayscale` filtering properties to robust `saturate-0` baseline rendering to prevent Tailwind v4 conflicts over filter specificity bindings. Tied hover state to explicit `group-hover:saturate-100` and native `group-hover:brightness-100` to unconditionally render native colored portraits seamlessly.
[0.1 hrs]

### WaysToInvolve Background Image Update [2026-04-28 05:10]
- Replaced the solid `bg-black` background of the `WaysToInvolve` section (`id="get-involved"`) with the `@public/get-involved.png` asset.
- Configured native background parameters (`backgroundSize: 'cover'`, `backgroundPosition: 'center'`) alongside `relative overflow-hidden` wrapper constraints to safely implement full viewport container rendering.
[0.1 hrs]

### Lead CTA Icons Replacement [2026-04-28 05:40]
- Replaced the default Lucide React `<Ticket />` and `<Calendar />` vector icons in the Hero Lead Call-To-Action clusters.
- Configured native `<img>` tags pointing to `@public/icons/Ticket.png` and `@public/icons/calender.png` using `object-contain` scaling to embed the custom graphical PNG assets provided by the design team.
[0.1 hrs]

### Partner CTA Alignment [2026-04-28 05:44]
- Redesigned the primary `Enquire Now` action button inside the `PartnerWithUs` section to perfectly match the Hero CTA component layout structure.
- Migrated the native button block into a grouped flex container featuring a separated 64x64 solid circular icon badge mapping perfectly adjacent to the main pill-rounded text anchor.
[0.1 hrs]

### Partner Insights Icons Replacement [2026-04-28 06:03]
- Swapped standard `lucide-react` vector models mapped inside `PartnerWithUs.tsx` column benefit points to exclusively provided custom colored images.
- Pointed the rendering switch-case logic mapping 'bolt', 'sparkles', and 'link' native references directly to exactly `access-technology.png`, `strengthen.png`, and `link.png` within the `@public/icons/...` directories rescaled seamlessly native to `w-10 h-10 object-contain`.
[0.1 hrs]
### ExploreTracks Equal Heights Fix Restored [2026-04-28 04:08]
- Replaced `h-full` with `h-auto` on the child cards for the track flex container. `h-full` resolves to 100% of auto on the wrapper when there is no implicit parent layout height, disabling `items-stretch` ability natively. `h-auto` defaults the item into flex computed cross-size bound constraints.
[0.1 hrs]

### Location & Contact High-Fidelity Refinements [2026-04-28 04:33]
- **Location Section**: Replaced generic transport icons with custom high-fidelity PNG assets (`cab.png`, `metro.png`, `bus.png`). Removed mobile vertical dividers and refined alignment for a clean, stacked layout.
- **Get in Touch (Contact) Section**:
    - Implemented a precise 75/25 horizontal split between main content and CTA buttons.
    - Replicated the 'Lead Section' (Hero) button cluster design: circular icon badges flush with pill-shaped buttons using `z-index` layering and `gap-0`.
    - Integrated `/icons/ticket.png` and refined button interactions (shadows, hover scales, and hover background transitions).
    - Optimized mobile responsiveness by using `flex-1` and `shrink-0` to prevent button squishing while maintaining the 75/25 visual ratio.
[1.5 hrs]

### Hero Title Line Break Fix [2026-04-28 06:51]
- Adjusted Hero title `h1` to ensure "Celebration India 2027" stays on a single line on desktop via `md:whitespace-nowrap`.
- Implemented responsive line breaks for mobile: "Grace Hopper" (Line 1), "Celebration" (Line 2), and "India 2027" (Line 3) using `block md:inline` span logic.
- Resolved vertical alignment issues on desktop by removing nested flex containers in favor of standard block/inline flow.
[0.5 hrs]

### Rolling Text Animation [2026-04-28 06:57]
- Implemented a premium "rolling" (marquee) text animation for all primary CTA buttons (`Hero`, `Contact`, `Navbar`, `PartnerWithUs`, `WaysToInvolve`).
- Wrapped button text in `overflow-hidden` containers with dual-stacked text spans that translate vertically on `group-hover` (using `-translate-y-full`).
- Standardized button heights and padding to ensure the rolling effect is seamless and perfectly centered across all sections.
[1.0 hrs]

### Rolling Text Animation Fix [2026-04-28 07:05]
- Fixed rolling text animation to ensure only one line of text is visible initially by applying `inline-flex flex-col` to the `a` tag and `shrink-0` to the inner text items.
- Resolved "double text" visibility issue across all primary CTA buttons (`Hero`, `Contact`, `Navbar`, `PartnerWithUs`, `WaysToInvolve`).
- Ensured perfect centering and clipping of the rolling text secondary state through standardized height and overflow constraints.
[0.5 hrs]

### Navbar Scroll Behavior & Glassmorphism [2026-04-28 08:29]
- Implemented a dynamic scroll-based state for the `Navbar`.
- **Top of Page (<100px)**: The navbar is fully transparent with expanded vertical padding (`py-8`) and no backdrop blur.
- **Scrolled State (>100px)**: The navbar transitions to a fixed position with a semi-transparent black background (`bg-black/80`), `backdrop-filter: blur(20px)`, and a compact layout (`py-4`).
- Leveraged `framer-motion` for smooth, cinematic transitions between states.
[1.0 hrs]

### Partner Logo Marquee Optimization [2026-04-28 17:19]
- Optimized the logo carousel in `PartnerWithUs.tsx` into a smooth, infinite marquee by removing conflicting CSS transitions and repeating the logo set multiple times for a seamless loop.
- Implemented a linear gradient mask on the container edges to create a "graceful" fade-in/fade-out effect.
- Adjusted animation duration and refined logo interactivity with subtle opacity transitions on hover.
[0.5 hrs]

### Experience Stats CountUp Animation [2026-04-28 17:23]
- Implemented a high-performance count-up animation for the "Experience GHCI" statistics using `framer-motion`'s `useMotionValue` and `useInView`.
- Configured numbers to animate from 0 to their target values (10,000+, 350+, 800+) with smooth `easeOutExpo` easing over 2 seconds.
- Ensured proper number formatting with locale-aware commas and preserved original suffixes.
[0.5 hrs]

### Speaker Card Visual Polish [2026-04-28 17:29]
- Updated the `SpeakerGrid.tsx` card styling to strictly follow Figma specifications:
    - Applied a `135deg` linear gradient (`#A3A3A3` to `#494949`) with a 20% black overlay.
    - Upgraded the border to `white/40` for improved definition.
- Preserved the high-frequency animated noise/grain overlay (`mix-blend-overlay`) to maintain the section's gritty, cinematic texture.
[0.3 hrs]

### Speaker Card Readability Enhancement [2026-04-28 17:31]
- Enhanced the text readability on speaker cards by implementing a deeper, vertical black-to-transparent gradient (`bg-gradient-to-t from-black via-black/40 to-transparent`).
- This update ensures high contrast for the white text (name and role) at the bottom of the card, strictly following the latest Figma design reference.
[0.1 hrs]

### Speaker Card Grain Intensification [2026-04-28 17:33]
- Intensified the cinematic grain effect on speaker cards to make it more "prominent" and "gritty":
    - Increased noise overlay opacity from `0.25` to `0.45`.
    - Refined SVG `fractalNoise` parameters (`baseFrequency: 0.8`, `numOctaves: 4`) for a denser texture.
    - Accelerated the "jitter" animation duration to `0.1s` for a more energetic, high-frequency cinematic flicker.
[0.2 hrs]

### Partner Section Layout & Typography Refinement [2026-04-28 17:38]
- Refined the `PartnerWithUs.tsx` layout to strictly match the Figma design proportions:
    - Forced the section header title to wrap to 2 lines using a `max-w-2xl` constraint.
    - Updated benefit titles to a precise `34px` font size with a `280px` width limit, ensuring they wrap to 2 lines.
    - Increased internal column padding to `md:p-10` for improved breathing room between statistics.
    - Reduced benefit description size to `20px` with `white/70` opacity for better visual hierarchy.
[0.4 hrs]

### Partner Section Separator Polish [2026-04-28 17:42]
- Redesigned the benefit column separators in `PartnerWithUs.tsx` for a more premium, centered aesthetic:
    - Reduced separator height to 50% and centered them vertically within the row.
    - Achieved perfect horizontal equidistance between text blocks by implementing a balanced padding strategy (`md:pr-12`, `md:px-12`, `md:pl-12`) across the three columns.
    - Used high-precision pseudo-elements (`md:before`) for the separators to ensure they stay exactly on the column boundaries.
[0.2 hrs]

### Experience Stats Multi-Trigger Animation [2026-04-28 17:49]
- Upgraded the count-up animation in `ExperienceStats.tsx` to trigger on every viewport entry.
- Removed the `once: true` constraint from `useInView` and implemented a state reset (`count.set(0)`) when the component exits the viewport.
- This ensures a dynamic, high-engagement experience that re-animates the statistics every time the user scrolls back to the section.
[0.2 hrs]

### Contact Section Visual Enhancements [2026-04-28 17:55]
- Refined the `Contact.tsx` layout and typography to match high-fidelity Figma specs:
    - Implemented a premium gradient border (`#A32478` to white at 30% opacity) for the "Tickets starting at..." banner using a nested `rounded-full` wrapper with `p-[1px]`.
    - Increased contact header size to `text-7xl` and adjusted layout split to a 75/25 ratio between content and CTAs.
    - Standardized CTA buttons to follow the "Lead Section" cluster design with 64x64 icon badges and rolling text animations.
- Updated `ExploreTracks.tsx` Check icons to `w-8 h-8` for improved visual prominence.
[0.5 hrs]

### Typography Refinement & Font Compatibility [2026-04-29 17:08]
- Converted all Proxima Nova TTF fonts to WOFF2 for maximum browser compatibility and improved performance.
- Updated `layout.tsx` to load WOFF2 assets and mapped `Semibold.woff2` to both `500` and `600` weights.
- Addressed "too bold" title feedback by switching global heading styles from `font-semibold` to `font-medium` (500).
- Explicitly updated `Hero` and `Contact` titles to `font-medium` and relaxed letter spacing (`tracking-[-0.01em]`) to align with Figma's lighter semibold aesthetic.
[0.8 hrs]

### Gradient Title Refinements [2026-04-29 17:15]
- Standardized the premium "white-to-magenta" gradient highlight for section titles across the site.
- Implemented `getTitleWithHighlight` in `WhatToExpect.tsx` to apply the gradient to the last word ("expect").
- Updated `Contact.tsx` to apply the same gradient to the "Touch" highlight, ensuring visual consistency with the `WaysToInvolve` section.
- Increased heading size in `WhatToExpect` to `text-[2.2rem]` and adjusted margins for better visual balance.
[0.3 hrs]

### WaysToInvolve Content & Style Update [2026-04-29 17:20]
- Converted all button and badge text in the "Ways to Get Involved" section to sentence case for a cleaner, more modern look.
- Updated `src/content/ways-to-involve.md` with new sentence case strings (e.g., "Learn more", "Applications closed").
- Refactored `WaysToInvolve.tsx` to remove `uppercase` and `tracking-wider` classes, and slightly increased font sizes for better legibility in sentence case.
[0.2 hrs]

### Portrait Card Layout Refinement [2026-04-29 17:30]
- Resolved the "flat card" issue in `ExploreTracks.tsx` by enforcing a portrait orientation with `min-h-[550px]` (mobile) and `min-h-[620px]` (desktop).
- Applied similar portrait styling to `WhoShouldAttend.tsx` to ensure consistent verticality across the site.
- Refined spacing in `ExploreTracks` with `p-10` and `mb-20` for icons, aligning titles and descriptions with generous vertical whitespace to match Figma's premium feel.
- Standardized title sizes in `ExploreTracks` to `28px` to match design specifications.
[0.4 hrs]

### ExploreTracks Content Expansion [2026-04-29 17:31]
- Expanded the "Explore What You'll Learn" section with two new tracks: "Ethics in Practice: People, Policy & Purpose" and "Unconference".
- Updated `src/content/explore-tracks.md` with high-fidelity descriptions to match design mockups.
[0.1 hrs]

### Card Layout Refinement: Height Reduction [2026-04-29 17:45]
- Reduced card heights by 50% in `ExploreTracks.tsx` and `WhoShouldAttend.tsx` per user request for a more compact layout.
- Updated `ExploreTracks` min-height to `340px` (desktop) and `280px` (mobile).
- Updated `WhoShouldAttend` min-height to `300px` (desktop) and `250px` (mobile).
- Adjusted vertical margins for icons and titles to ensure balanced spacing within the shorter card format.
[0.2 hrs]

### Final Card Height Optimization [2026-04-29 17:47]
- Further reduced card heights by an additional 5% in `ExploreTracks.tsx` and `WhoShouldAttend.tsx` to finalize the compact aesthetic.
- Final `ExploreTracks` min-height: `325px` (desktop), `265px` (mobile).
- Final `WhoShouldAttend` min-height: `285px` (desktop), `235px` (mobile).
- Tightened internal vertical margins and padding to maintain optimal visual balance in the shorter format.
[0.1 hrs]

### Custom Icon Integration: WhoShouldAttend [2026-04-29 18:27]
- Replaced Lucide icons in the "Who Should Attend" section with custom PNG assets located in `public/icons/who-should-attend/`.
- Updated `IconMap` and rendering logic to support image-based icons with `object-contain` for sharp rendering.
- Cleaned up unused imports and refactored the component for better maintainability.
[0.2 hrs]

### Ticket Box Style Customization [2026-04-29 18:55]
- Increased the size of the ticket "notch" (the circular cutout on the left edge) by 2x in `TicketPerks.tsx`.
- Updated dimensions to `w-20 h-20` and adjusted the negative offset to `left-[-40px]` to maintain the perfect half-circle aesthetic.
[0.1 hrs]

### Contact Section Button Refinement [2026-04-29 19:07]
- Updated the "Subscribe" button text to "Subscribe to Newsletter" to match the Figma design.
- Standardized button widths in the Contact section to `w-32 md:w-56` to ensure both buttons are visually identical in size.
- Enabled text wrapping and adjusted line heights (`leading-tight`) to accommodate the longer newsletter label without increasing button height.
[0.2 hrs]

### Contact Section Button: Final Width & Wrap [2026-04-29 19:08]
- Reduced button widths to `w-28 md:w-48` to force the "Subscribe to Newsletter" text to wrap into two lines, matching the design reference.
- Implemented `flex-col` on button content to ensure centered vertical alignment for multi-line labels.
- Standardized both buttons to the same width and text styling for perfect symmetry.
[0.1 hrs]

### Custom Icon Integration: WhatYouGain [2026-04-29 19:28]
- Replaced Lucide icons in the "What You'll Gain" section with custom PNG assets located in `public/icons/gain/`.
- Mapped specific icons to cards based on design requirements: `1.png` (Card 1), `users (2).png` (Card 2), `users2-6.png` (Card 6), etc.
- Updated `IconMap` and rendering logic to use `img` tags with `object-contain` for sharp visual fidelity.
- Cleaned up unused imports and refactored the component for better performance.
[0.2 hrs]

### Vector Icon Restoration: WhatYouGain [2026-04-29 19:30]
- Reverted the "What You'll Gain" section to use Lucide vector icons (Feather-based) to resolve pixelation issues observed with PNG assets.
- Restored `Target`, `Users`, `ThumbsUp`, `Sparkles`, `Lightbulb`, and `TrendingUp` icons for crisp, scalable rendering.
- Re-implemented component-based rendering for better performance and visual consistency with the rest of the site.
[0.1 hrs]

### Card 4 Icon Update: WhatYouGain [2026-04-29 19:33]
- Updated the 4th card icon in the "What You'll Gain" section to `MousePointerClick` (the Lucide vector equivalent of `heroicons/cursor-click`) to match the user's specific design request.
[0.1 hrs]

### Card 5 Icon Confirmation: WhatYouGain [2026-04-29 19:33]
- Confirmed that the 5th card in the "What You'll Gain" section is using the vector `Lightbulb` icon, providing a sharp and scalable alternative to the `heroicons/light-bulb` asset.
[0.1 hrs]

### Heroicons Library Integration [2026-04-29 19:37]
- Installed `@heroicons/react` and integrated it into the "What You'll Gain" section.
- Replaced the 4th card icon with `CursorArrowRaysIcon` and the 5th card icon with `LightBulbIcon` from the Heroicons library to match specific user design requirements.
[0.2 hrs]

### SVG Icon Integration: Card 1 [2026-04-29 19:42]
- Updated the first card in "What You'll Gain" to use a custom SVG asset (`1.svg`) for pixel-perfect sharpness.
- Refactored `IconMap` to support the new SVG-based icon component.
[0.1 hrs]

### Hero Title Shine Effect [2026-04-30 16:05]
- Implemented a mouse-following shine effect on the Hero section title using Framer Motion and radial gradients.
- Added a light white text stroke (`1px rgba(255, 255, 255, 0.1)`) to the title for better definition.
- Refactored the title to use `background-clip: text` for the dynamic shine highlight.
[0.5 hrs]

### Hero Title Shine Refinement [2026-04-30 16:21]
- Fixed character clipping (C, 7) by increasing line height to `8.5rem`, adding `py-10` padding, and adjusting tracking to `-0.01em`.
- Brightened character fill by increasing shine opacity to `0.8` and base opacity to `0.2`.
- Implemented a "shining border" by adding a secondary overlay layer with a `1.5px` stroke that responds to the mouse-following radial gradient.
[0.5 hrs]

### Hero Title Debug Settings [2026-04-30 16:22]
- Implemented a floating debug settings panel in the Hero section to customize the glass and shine effect parameters in real-time.
- Added controls for shine size/opacity, base opacity, stroke widths/opacities, tracking, and line height.
- Bound all Hero title styling logic to the debug configuration state.
[0.5 hrs]

### Hero Title Shine Finalization [2026-04-30 16:29]
- Applied final glass/shine parameters: Shine (540px, 0.6), Base (0.35), Strokes (1px/0.05 & 0.5px/0.55), Tracking (-0.02em).
- Hidden the debug settings panel by default to maintain a clean production look.
- Integrated a hidden hotkey (`Ctrl + Shift + D`) to toggle the settings panel for on-the-fly customizations.
[0.5 hrs]

### Hero Title Clipping Fix [2026-04-30 16:30]
- Resolved character clipping on 'C' and '7' by adding horizontal padding (`px-10`) to the Hero title layers, expanding the `background-clip` container bounds.
[0.1 hrs]

### Hero Title Clipping Fix (Expansion) [2026-04-30 16:31]
- Removed `max-w` constraints from Hero title layers and set `w-full` with `overflow-visible` to prevent horizontal clipping.
- Increased horizontal padding to `px-20` to accommodate glyph edges for characters like 'C' and '7'.
[0.1 hrs]

### Hero Animated Bokeh Background [2026-04-30 16:33]
- Replaced the static Hero background image with an animated Bokeh effect using Framer Motion.
- Implemented large, blurred circles with slow-moving paths in brand-aligned purple and pink tones.
- Added a subtle grain overlay for cinematic texture and deep black/purple base layer for contrast.
[0.5 hrs]

### Hero Debug Panel Reorganization [2026-04-30 16:35]
- Reorganized the debug settings panel into collapsible accordions for "Title Glass Effect" and "Bokeh Background".
- Added real-time customization controls for Bokeh opacity and blur amount.
[0.3 hrs]

### Enhanced Dynamic Bokeh System [2026-04-30 16:38]
- Upgraded the Bokeh background with a dynamic blob generation system.
- Added debug controls for Blob Count (up to 20), Speed Multiplier, and Hue Shift.
- Implemented randomized 3-point animation paths for more active and fluid background movement.
[0.5 hrs]

### Bokeh Distribution Fix [2026-04-30 16:41]
- Randomized initial positions (0-100%) for all Bokeh blobs to ensure they fill the entire viewport instead of clustering.
- Adjusted animation paths to be relative offsets for localized drifting across the screen.
[0.1 hrs]

### Hero Bokeh Defaults Update [2026-04-30 16:44]
- Applied user-preferred bokeh settings as defaults: 8 blobs, 5x speed, 0.19 opacity, 85px blur.
[0.1 hrs]

### Hero Title Clipping Final Fix [2026-04-30 16:46]
- Switched Hero title containers from `w-full` to `w-max` with `mx-auto` centering.
- This ensures the `background-clip: text` container expands to the full intrinsic width of the text, preventing background truncation on wide glyphs like 'C' and '7' across all resolutions.
[0.1 hrs]

### Hero Title Alignment Fix [2026-04-30 16:47]
- Resolved a misalignment issue where the absolute overlay layer was offset from the base title.
- Enforced centering on the parent container using `flex flex-col items-center`.
[0.1 hrs]

### Hero Hydration & Stacking Fix [2026-04-30 16:49]
- Fixed Next.js hydration error by deferring Bokeh blob rendering to the client-side (using `mounted` state).
- Resolved title doubling/misalignment by using `absolute inset-0` on the overlay layer within a `w-max` parent container.
[0.2 hrs]

### Hero Missing Import Fix [2026-04-30 16:50]
- Fixed a `ReferenceError` by importing `useMemo` from React.
[0 hrs]

### Hero Title Centering Refinement [2026-04-30 16:51]
- Implemented a nested centering strategy: `w-full flex justify-center` parent with a `w-max` content box.
- This ensures the title block is perfectly centered in the viewport while maintaining the exact internal stacking of fill and border layers.
[0.1 hrs]

### Global Custom Cursor Implementation [2026-04-30 16:53]
- Created and integrated a `CustomCursor` component with brand magenta styling.
- Features smooth spring-following motion and dynamic hover expansion (16px to 64px) on interactive elements.
- Hidden system cursor globally for a premium, cinematic experience.
[0.3 hrs]

### Custom Cursor Debug Integration [2026-04-30 16:56]
- Fixed a hydration error in `CustomCursor` by deferring rendering to client-side mount.
- Added a "CUSTOM CURSOR" accordion to the Hero debug panel.
- Implemented a custom event system to sync cursor settings (size, border, opacity) globally from the debug panel.
[0.2 hrs]

### Hero Syntax Error Fix [2026-04-30 16:57]
- Fixed a build error (`Unexpected token`) caused by a missing closing `div` in the debug panel settings.
[0 hrs]

### Global System Cursor Suppression [2026-04-30 16:59]
- Applied `* { cursor: none !important; }` globally in CSS to completely hide the default browser pointer, ensuring the custom cursor is the sole interactive indicator.
[0.1 hrs]

### Custom Cursor Design Refinement [2026-04-30 17:03]
- Removed border from the custom cursor.
- Updated defaults: 16px solid magenta (default), 20px with 0.8 opacity (hover).
[0.1 hrs]

### Custom Cursor Deactivation [2026-04-30 17:05]
- Disabled the custom cursor globally and restored the system pointer to ensure a stable build for client feedback.
- Removed cursor customization settings from the Hero debug panel.
[0.1 hrs]

### Hero Syntax Cleanup [2026-04-30 17:07]
- Fixed a build error (`Unterminated regexp literal`) caused by an extra closing `div` remaining after the cursor settings were removed.
[0 hrs]

### Hero Syntax Fix - Final [2026-04-30 17:08]
- Resolved the persistent `Unterminated regexp literal` build error by removing a second hidden extra `div` tag.
[0 hrs]

### Hero Button Hover Synchronization [2026-04-30 17:09]
- Synchronized hover states for CTA button clusters using `group-hover`.
- Both the circular icon and rectangular text components now transition to a unified color simultaneously when any part of the cluster is hovered.
[0.1 hrs]

### Hero Layout Tightening [2026-04-30 17:16]
- Reduced vertical spacing between Date and Title by adjusting margins (`mb-8` to `mb-2`).
- Compressed Title line height by updating `config.lineHeight` default (8.5 to 6.8).
- Removed `py-10` padding from title layers to eliminate excess whitespace.
[0.1 hrs]

### Marquee Edge Masking Refinement [2026-04-30 17:19]
- Replaced solid dark gradient overlays with a transparent `mask-image` linear gradient.
- This ensures the bokeh background remains fully visible while the marquee text smoothly fades at the viewport edges.
[0.1 hrs]
