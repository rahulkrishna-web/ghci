# Memory - GHCI Eventivee Microsite

## Created: 2026-03-30 | Updated: 2026-04-04T00:10:00+05:30

### Eventivee UI Recreation (2026-04-03)
- recreated full eventivee.framer.website UI in Next.js 16 + Tailwind v4
- Hardcoded the user's finalized Ticketing configuration (content, bokeh blobs, background colors, and border intensities) into the component's initial state.
- [0.1 hrs]
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
- Fixed missing glassy border on ticketing card top notch using specialized radial gradients.
- Added debug controls for Default and Hover border shine intensities (0-100%).
[0.3 hrs]
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
- Fixed a runtime TypeError in `Ticketing.tsx` caused by stale `localStorage` data. Added structural validation and safety fallbacks for the `tickets` state array.
- Restored "What You Get With Your Ticket" section before Contact. [2026-05-05 21:45]
- Implemented high-fidelity Ticketing section after TicketPerks with blurred background blobs and hover-parallax effects.
- Created a centralized Control Panel (Ctrl + Alt + C) for section navigation and global JSON settings management.
- Unified debug hotkeys: removed individual listeners from Hero and Contact, consolidating them into the Control Panel launcher.
- Added event-based settings synchronization between Control Panel and individual section debug panels.
- Integrated Ticketing section content: Last Year Attendees (₹10k), Super Early (₹11k), and Regular (₹15k).
- Implemented horizontal ticket layout for mobile viewports with left-side notches as per design specs.
[3.5 hrs]
- Updated ticket card background to use ticket-bg.png. [0.3 hrs]
- Set div.spreadsheet.png as the background for the "Getting There" card in Location.tsx. [2026-04-24 10:43] [0.2 hrs]
- Switched entire page layout to fluid width with 1rem (px-4) horizontal padding. [2026-04-24 10:49]
- Removed all max-width constraints (max-w-6xl, max-w-7xl) from section containers. [1.0 hrs]
- Fixed JSX syntax error in Navbar.tsx (closing motion.nav tag). [2026-04-24 10:52] [0.1 hrs]
- Fixed JSX syntax error in WhatToExpect.tsx (extra closing div). [2026-04-24 10:55] [0.1 hrs]
- Fixed horizontal scroll issue by adding overflow-x-hidden to the main layout wrapper. [2026-04-24 10:58] [0.2 hrs]
- Increased global horizontal padding to 10rem (px-40) on desktop for all sections. [2026-04-24 11:03]
- Fixed dashed divider rendering by adding robust fallbacks for config values to prevent undefined values from breaking CSS `linear-gradient` parsing.
- Made both dashed dividers edge-to-edge by utilizing negative horizontal margins (`-mx-8 md:-mx-10`) to break out of the card padding.
- Moved the `flex-grow` spacer to reside immediately after Divider 1, effectively pushing the Price and CTA block to the bottom of the card, ensuring strict horizontal alignment across all tiers.
[0.2 hrs]
- Decoupled dashed divider settings, introducing independent variables (`divider1DashDesktop`, `divider1DashMobile`, etc.) for fine-grained control over stroke and gap dimensions across viewports.
- Decoupled opacity settings, introducing independent variables (`borderOpacityDesktop`, `dividerOpacityMobile`, etc.) for finer control of border strokes and dashes.
- Updated the debug panel layout to nest Mobile and Desktop sliders inside the divider and opacity sections.
[0.2 hrs]
- Refactored TicketingCard to a vertical stack layout as per latest design standards.
- Implemented dual horizontal dashed dividers with varying stroke lengths (frequent vs. long) using `linear-gradient` background repeating patterns.
[0.2 hrs]
- Applied finalized split-shine intensities (Border Edge vs Background Fill) to the Ticketing component. [0.1 hrs]
- Fixed `ReferenceError: isHovered is not defined` in `Ticketing.tsx` by adding missing state and mouse event handlers. [2026-04-24 11:20] [0.1 hrs]
- Maintained 1rem (px-4) mobile padding for responsive consistency. [0.4 hrs]
- Integrated premium assets for "What To Expect" section (what-to-expect.png and card background). [2026-04-24 11:10]
- Removed legacy grid pattern from What To Expect card. [0.2 hrs]
- Refined what-to-expect card background to fill 100% of the container and removed the redundant border. [2026-04-24 11:13] [0.1 hrs]
- Integrated ScrollReveal component from reactbits.dev (without tilt effect). [2026-04-24 11:21]
- Implemented a glassy, mouse-reactive border effect for Ticketing cards: added a radial gradient "shine" layer that follows the cursor, emulating the Hero section's premium aesthetic. [2026-05-05 22:37] [0.3 hrs]
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

### Custom Elliptical Bokeh Implementation [2026-04-30 18:12]
- Replaced random bokeh generation with a fixed 6-blob elliptical layout based on user specifications.
- Implemented specific color ordering: Magenta (#A32482), Navy (#223852), and Burgundy (#22021D) in a Top-Middle-Bottom sequence.
- Optimized rendering to support elliptical dimensions and dual-side (left/right) positioning.
[0.2 hrs]

### Expanded Bokeh Debug Controls [2026-04-30 18:14]
- Increased Bokeh Opacity max to 1.0 and Speed Multiplier to 20x to facilitate precise positioning and animation testing.
- Refined Blur Amount control with 1px increments for granular visual tuning.
[0.1 hrs]

### Advanced Individual Bokeh Controls [2026-04-30 18:18]
- Refactored the bokeh system to allow individual control over each elliptical blob (color, opacity, x/y position, and dimensions).
- Implemented an interactive debug list with "Add" and "Delete" capabilities for blobs.
- Updated movement logic: setting Global Speed to 0 now completely freezes all animations.
- Cleaned up redundant global bokeh settings in favor of granular per-blob customization.
[0.3 hrs]

### JSX Syntax Fix in Bokeh Debug Panel [2026-04-30 18:21]
- Resolved "Expected '</', got 'ident'" build error caused by missing wrapper div in bokeh debug section.
- Corrected div nesting to ensure valid JSX structure.
[0.1 hrs]

### Unterminated Regexp Literal Fix [2026-04-30 18:22]
- Fixed "Unterminated regexp literal" error caused by an extra closing div inside a JSX expression.
- Re-aligned conditional logic and container nesting for the Hero debug panel.
[0.1 hrs]

### Draggable Debug Panel Upgrades [2026-04-30 18:29]
- Converted the static debug settings panel into a floating, draggable window using `framer-motion` (`motion.div` with `drag`).
- Added a dedicated header acting as a drag handle.
- Implemented `onPointerDownCapture={(e) => e.stopPropagation()}` on the scrollable container to ensure dragging doesn't interfere with inner scrolling or slider interactions.
- Restored standard scrollbars and improved internal padding/spacing for a cleaner layout.
[0.2 hrs]

### JSON Settings Export Feature [2026-04-30 18:36]
- Added an "EXPORT JSON" accordion section to the Hero debug panel.
- Included a button to directly copy the full `config` state to the clipboard.
- Displayed the formatted JSON inside a scrollable `<pre>` block for quick visual reference.
[0.1 hrs]

### Applied Final Bokeh Configuration [2026-04-30 18:38]
- Updated the default `config` state in the Hero component with the specific JSON exported from the debug panel.
- This permanently sets the exact blur, speed, and 6 manually-positioned blob coordinates that the user configured.
[0.1 hrs]

### Refined Location Section Layout [2026-04-30 18:47]
- Reduced vertical padding in the venue and date info cards from 32px to 20px (py-5).
- Decreased the gap between info cards from 24px to 16px (gap-4).
- Removed the fixed aspect-video ratio from the map container, allowing its height to be dynamically driven by the refined height of the adjacent info cards.
- Reduced the section heading bottom margin for a more compact and balanced layout.
[0.1 hrs]

### Fixed Layered Border for Ticket Banner [2026-04-30 18:50]
- Corrected the gradient border for the "Tickets starting at" banner in the Contact section.
- Added a solid brand-color base layer (#A32482) underneath the linear gradient to match the layered stroke specification in Figma.
- Updated gradient stops (16% magenta, 86% white) and applied 30% opacity to the gradient layer for accurate visual fidelity.
[0.1 hrs]

### Interactive Halftone Background in Contact Section [2026-04-30 19:00]
- Implemented a dynamic halftone background pattern in the "Get in Touch" section.
- Added mouse tracking using Framer Motion springs (, ) to drive CSS variables (, ).
- Used a radial-gradient mask to reveal a magenta halftone dot pattern around the cursor position.
- Added a subtle spotlight effect that follows the cursor to enhance the cinematic interactive feel.
[0.2 hrs]

### Interactive Halftone Background in Contact Section [2026-04-30 19:00]
- Implemented a dynamic halftone background pattern in the "Get in Touch" section.
- Added mouse tracking using Framer Motion springs (smoothX, smoothY) to drive CSS variables (--x, --y).
- Used a radial-gradient mask to reveal a magenta halftone dot pattern around the cursor position.
- Added a subtle spotlight effect that follows the cursor to enhance the cinematic interactive feel.
[0.2 hrs]

### Build Error Fix in Contact.tsx [2026-04-30 19:01]
- Fixed a JSX build error caused by a mismatched closing tag (changed </section> to </motion.section>).
[0.1 hrs]

### Halftone Effect Fix [2026-04-30 19:03]
- Fixed the missing halftone effect in the Contact section.
- Added useTransform to append "px" units to mouse motion values, ensuring CSS variables work correctly in radial gradients.
- Increased visibility of the pattern by boosting dot opacity and spotlight intensity.
[0.1 hrs]

### Contact Section Debug Panel [2026-04-30 19:05]
- Implemented a draggable debug settings panel for the Contact section, accessible via Ctrl+Alt+C.
- Added real-time sliders for halftone pattern (opacity, size, gap) and spotlight shine (radius, strength, color).
- Included a JSON export feature to copy the final configuration directly to the clipboard.
[0.3 hrs]

### Applied Final Contact Background Config [2026-04-30 19:07]
- Updated the default Contact section config with the user's refined parameters (halftoneOpacity: 0.21, halftoneSize: 2.5, shineSize: 460, etc.).
[0.1 hrs]

### Hero Section Transition Refinement [2026-05-01 10:21]
- Added a 100px vertical gradient (transparent to #070708) at the bottom of the Hero section for a seamless transition.
[0.2 hrs]

### Hero Title Mobile Typography Fix [2026-05-01 10:24]
- Reduced Hero title line-height to 1.0 on mobile to eliminate excessive gaps and match design specifications.
- Implemented responsive window resize listener for dynamic layout adjustments.
[0.3 hrs]

### Hero Title Mobile Layout & Size Enhancement [2026-05-01 10:26]
- Increased Hero title font size on mobile to 72px (80% increase) to improve visual impact.
- Standardized mobile title padding to 15px and implemented full-width centering to resolve ghosting and blurring issues.
- Fixed line-height consistency across title layers for perfect pixel alignment on small screens.
[0.5 hrs]

### Hero Content Layout Optimization [2026-05-01 10:28]
- Forced 'Grace Hopper' title segment into a single line on mobile via whitespace-nowrap for better brand prominence.
- Expanded Hero subtitle max-width to 500px on mobile to create a more balanced and cinematic text block.
[0.2 hrs]

### Hero Title Alignment Refinement [2026-05-01 10:30]
- Refined mobile Hero title font size from 72px to 56px to ensure 'Grace Hopper' aligns perfectly with the navbar logo and menu button.
- Maintained consistent 15px horizontal padding to match global navigation gutters.
[0.2 hrs]

### Hero Layout Refinement: Marquee Positioning [2026-05-01 10:31]
- Repositioned the Marquee component to `absolute bottom-4` to eliminate the excessive gap between the Hero section and the following 'Experience' section.
[0.1 hrs]

### Hero Section Vertical Compression [2026-05-01 10:37]
- Switched Hero section from full-viewport height (min-h-screen) to auto-height with optimized vertical padding (pt-32 pb-32).
- Reduced internal spacing gaps (from gap-10 to gap-4) and subtitle bottom margins to create a more compact, content-focused layout matching design.
- Removed redundant top margins from the content container to streamline the overall vertical flow.
[0.3 hrs]

### Contact Halftone Effect Calibration [2026-05-01 10:38]
- Updated Contact section halftone parameters to increase opacity (0.9) and refine dot spacing/shine size for a more aggressive cinematic texture.
[0.1 hrs]

### Custom Cursor Revitalization [2026-05-01 10:42]
- Reimplemented a high-fidelity custom cursor with a 5px radius (10px diameter) brand magenta (`#A32482`) pointer.
- Globally disabled the system mouse pointer via `cursor: none !important` in CSS.
- Configured dynamic hover states: cursor expands to 8px radius (16px diameter) and reduces to 0.9 opacity when interacting with links or buttons.
- Removed color blending effects to ensure brand magenta remains vibrant and consistent throughout the site.
[0.3 hrs]

### Custom Cursor Deployment Fix [2026-05-01 10:43]
- Discovered that the CustomCursor component was not integrated into the main layout.
- Successfully imported and added `<CustomCursor />` to the RootLayout's body, enabling the effect site-wide.
- Verified that the system cursor remains hidden while the custom pointer correctly tracks mouse movement.
[0.1 hrs]

### Custom Cursor Dimension Tuning [2026-05-01 10:45]
- Fine-tuned CustomCursor dimensions: reduced default size to 8px and hover size to 12px.
- Adjusted hover opacity to 0.8 for a more subtle interactive feedback.
[0.1 hrs]

### Card Section Vertical Scroll Glitch Fix [2026-05-05 22:05]
- Synced Ticketing section title style with other sections (`text-4xl md:text-6xl font-semibold`).
- Implemented uniform button alignment across ticketing cards by adding a fixed minimum height and spacers to the price section.
[0.3 hrs]
- Resolved a reported glitch in the ExploreTracks, WhatYouGain, and WhoShouldAttend sections where cards would inadvertently scroll vertically when hovered.
- Enforced `overflow-y-hidden` on horizontal scroll containers to lock vertical movement and prevent cards from being clipped by section bounds.
- Verified that horizontal snap-scrolling remains functional while global page scrolling is now properly prioritized when interacting with these sections.
[0.2 hrs]

### Animation Consistency Alignment [2026-05-01 10:59]
- Standardized the entry animations for the WhatToExpect section to match the site-wide "fade-in up" pattern.
- Replaced horizontal slides (`x: -20` / `x: 20`) with vertical translations (`y: 20` to `y: 0`).
- Implemented a subtle 0.1s delay for the info box to create a more sophisticated, layered reveal effect.
[0.1 hrs]

### Typographic Gradient Expansion [2026-05-01 11:06]
- Modified the title highlight logic in WaysToInvolve.tsx to apply the brand gradient across the full text block.
- Removed the previous "last word only" constraint to create a bolder, more cohesive header style for involvement cards.
[0.1 hrs]

### Missing Asset & Console Error Fix [2026-05-01 11:09]
- Resolved a 404 console error in the Hero section caused by a missing 'grain.png' file.
- Replaced the static image reference with an inline SVG-based noise filter, ensuring the cinematic texture is preserved without external dependencies.
[0.1 hrs]

### Custom Cursor Performance Optimization [2026-05-01 11:11]
- Optimized the CustomCursor's spring physics for zero-latency feel: increased stiffness to 1000 and reduced mass to 0.1.
- Enabled hardware acceleration by adding `will-change: transform` to the cursor element, ensuring smooth 60fps+ tracking.
[0.1 hrs]

### Custom Cursor Ultra-Smooth Refinement [2026-05-01 11:14]
- Pivoted from a high-stiffness "instant" tracking model to a more fluid, weighted "magnetic" spring system (stiffness: 150, damping: 25).
- Achieving "super smooth" movement by allowing a subtle natural follow trail, creating a more cinematic and premium interactive feel.
[0.1 hrs]

### Web Video Optimization for GHCI [2026-05-01 19:28]
- Optimized the main promotional video for web performance.
- Reduced file size from 765MB to 85MB (1080p) using CRF 22 for maximum sharpness without pixelation.
- Created an even lighter 720p version (39MB) for faster mobile loading.
- Reorganized files: original preserved as _4K.mp4, 1080p set as the default filename.
[0.5 hrs]

### Ultra-Small WebM Video Optimization [2026-05-01 19:40]
- Created an ultra-compressed WebM (VP9) version of the GHCI video.
- Reduced size to 5.4MB (from 765MB original) for extreme web performance.
- Settings: 540p resolution, 350kbps bitrate, no audio.
- Target: Faster initial load for mobile and background loops where extreme efficiency is required.
[0.3 hrs]

### Custom Cursor Performance Optimization [2026-05-02 12:15]
- Replaced the laggy JS-based custom cursor with a native CSS SVG cursor.
- Implemented `cursor: url(...)` in `globals.css` for both default and pointer states.
- Removed `CustomCursor.tsx` and its integration in `layout.tsx` to eliminate JS overhead.
- This provides hardware-accelerated cursor rendering, resolving the lag reported by the user.
- Fixed Hero title cursor by removing explicit `cursor-default` and applying global `*` CSS rule.
- Fixed dim Marquee text by increasing its z-index (z-30) to sit above the Hero bottom gradient.
- Implemented smart navigation arrows in `ExploreTracks.tsx` with dynamic scroll detection and smooth transition states.
- Updated `Contact.tsx` halftone effect settings with optimized parameters for better visual texture.
- Fixed halftone overlay issue in `Contact.tsx` by increasing content z-index (z-10) to move the effect to the background.
- Standardized image entrance transitions in `About.tsx` to "fade in up" (y: 20 -> 0) to maintain consistent motion language across the site.
- Applied `mix-blend-luminosity` to transport icons in `Location.tsx` for enhanced visual integration with the background.
- Refactored `ExploreTracks.tsx`: Centered the title and moved navigation arrows to float over the cards at the vertical center with smart visibility.
- Integrated an unmute toggle button into the floating gallery video in `About.tsx` with premium glassmorphic styling and persistence.
- Restored missing `'use client'` directive in `About.tsx` to fix the hook-related build error.
- Added a play/pause toggle button to the gallery video in `About.tsx`, positioned alongside the unmute button for full playback control.
- Updated the official contact email address to `ghci@anitabindia.org` across the `Contact.tsx` section and buttons.
- Optimized `Marquee.tsx` by replacing JavaScript-driven Framer Motion animations with pure CSS `translate3d` animations for buttery-smooth movement, especially on mobile.
- Refactored `ExperienceStats.tsx` to synchronize counter animations and implemented direct DOM manipulation (bypassing React state) for "buttery smooth" 60fps performance. Added `tabular-nums` to eliminate horizontal text jitter.
- Replaced transportation icons in `Location.tsx` with official brand SVGs from the `/getting-there/` directory.
[2.8 hrs]

### Content Updates: New Links Integration [2026-05-04 19:10]
- Integrated Call For Presenters (CFP) and Call For Jurors (CFJ) URLs into the "Ways to Get Involved" section.
- Expanded the Footer with new links: AnitaB India, Membership, Terms & Conditions, and Code of Conduct.
- Added a third column "AnitaB.org" to the footer for better categorization of institutional links.
- Updated CFP and CFJ links in the Footer's "GHCI" column for easy accessibility.
[0.5 hrs]

[2026-05-05 21:45]
- Implemented high-fidelity Ticketing section after TicketPerks with blurred background blobs and hover-parallax effects.
- Created a centralized Control Panel (Ctrl + Alt + C) for section navigation and global JSON settings management.
- Unified debug hotkeys: removed individual listeners from Hero and Contact, consolidating them into the Control Panel launcher.
- Added event-based settings synchronization between Control Panel and individual section debug panels.
- Integrated Ticketing section content: Last Year Attendees (₹10k), Super Early (₹11k), and Regular (₹15k).
- Implemented horizontal ticket layout for mobile viewports with left-side notches as per design specs.
[3.5 hrs]

[2026-05-05 21:50]
- Refined Ticketing card alignment by introducing spacers for the `oldPrice` field, ensuring "Get the Pass" buttons are perfectly aligned.
- Enhanced background movement in Ticketing cards: added a drifting bokeh animation and fixed the hover-parallax interaction.
- Added "Bokeh Speed" control to the Ticketing debug panel for live adjustment of background animation speed.
[0.5 hrs]

[2026-05-05 22:00]
- Upgraded Ticketing section to v2.0: implemented a fully dynamic ticket management system with individual background blobs and content.
- Redesigned Ticketing debug UI to a hierarchical "file-manager" style with nested navigation (Back button, Ticket List, Ticket Editor).
- Added support for adding/removing ticket tiers live and persisting the entire configuration (including individual card blobs) in JSON/localStorage.
[1.2 hrs]
- Switched Ticketing cards container from `flex` to `grid` (3 columns) to prevent wrapping issues caused by restrictive padding.
[0.2 hrs]
- Fixed a runtime TypeError in `Ticketing.tsx` caused by stale `localStorage` data. Added structural validation and safety fallbacks for the `tickets` state array.

[2026-05-05 22:10]
- Synced Ticketing section title style with other sections (`text-4xl md:text-6xl font-semibold`).
- Implemented uniform button alignment across ticketing cards by adding a fixed minimum height and spacers to the price section.
- Added comprehensive section styling to Ticketing config: background type (solid/gradient), background colors, and title text/color customization.
[0.7 hrs]

[2026-05-05 22:23]
- Simplified Ticketing title configuration: merged primary/secondary text into a single field and enforced a single color for the entire title.
[0.1 hrs]

[2026-05-05 22:25]
- Added "Back to Control Panel" navigation and a "Copy Config JSON" button to the Ticketing debug panel for easier configuration sharing and workflow.
[0.2 hrs]

[2026-05-05 21:35]
- Decoupled background blobs (ellipses) for desktop and mobile views in the Ticketing component.
- Implemented dynamic ellipse generation supporting arbitrary counts with independent size (width, height), curve radius, position (x, y), opacity, and color settings per viewport.
- Updated the Debug Panel to provide separate management interfaces for Desktop and Mobile ellipses.
- Adjusted default blob configurations to approximate the requested visual design layout.
[1.0 hrs]

[2026-05-06 03:25]
- Copied the highly customized `blobsDesktop` background settings from the 'Last Year Attendees' ticket to the 'Regular' ticket in the default configuration to ensure visual consistency.
[0.1 hrs]

[2026-05-06 03:36]
- Overhauled the Ticketing component's default configuration by injecting the provided comprehensive JSON payload, syncing the number of background blobs, position mapping, opacity tokens, and shape settings across all ticketing tiers to ensure parity with the desired Visual Editor state.
[0.1 hrs]

[2026-05-06 03:42]
- Resolved TypeScript compilation errors in the Debug Panel caused by strict type checking against the deprecated `blobs` property on ticket configurations by correctly casting fallback references to `any`.
[0.1 hrs]

[2026-05-06 03:47]
- Upgraded the Ticketing component's CTA button to feature the signature smooth vertical scroll text animation on hover, matching the high-fidelity interaction seen in the Hero component.
[0.1 hrs]

[2026-05-06 04:09]
- Expanded the Debug Panel's capabilities by introducing dedicated 'Notch Size' range sliders, allowing real-time radius manipulation of the CSS masking elements for both desktop and mobile layouts.
[0.1 hrs]

[2026-05-06 04:14]
- Fixed a TypeScript compilation error (`Object is of type 'unknown'`) during Vercel builds by explicitly casting the destructured variables array `([x, y]: number[])` inside the `useTransform` hook in the Ticketing component.
[0.1 hrs]

[2026-05-06 04:20]
- Updated the DEFAULT_CONFIG to set `borderOpacityMobile` to 1, providing a solid 1px white border out-of-the-box for ticket cards on mobile layouts.
[0.1 hrs]

[2026-05-06 04:23]
- Implemented a continuous border trace inside the mobile ticket notch cutout using an absolute overlay with a radial-gradient stroke.
[0.1 hrs]

[2026-05-06 04:30]
- Reduced the thickness of the CSS radial-gradient notch border strokes by 50% (from 1.5px to ~0.75px/1px visual) and refined the accompanying maskImage gradient stops for a cleaner anti-aliased edge on both Desktop and Mobile.
[0.1 hrs]

[2026-05-06 04:33]
- Updated the `DEFAULT_CONFIG` for the Ticketing component to set both `borderOpacityDesktop` and `borderOpacityMobile` to 0.8.
[0.1 hrs]

[2026-05-06 05:20]
- Fixed missing borders on desktop ticket card corners by aligning the static border stroke radius (`rounded-[2.5rem]`) with the outer container's overflow mask.
[0.1 hrs]

[2026-05-06 05:25]
- Applied a new comprehensive `DEFAULT_CONFIG` for the Ticketing component per user request, updating blobs layout, bokeh speed, border/divider opacities, and notch sizes.
[0.1 hrs]

[2026-05-06 06:27]
- Removed custom cursor SVG overrides from `src/app/globals.css` per user request.
[0.1 hrs]

[2026-05-06 06:39]
- Adjusted the opacity of the mobile notch stroke to 0.20 to perfectly match the updated main ticket card border opacity.
[0.1 hrs]

[2026-05-07 15:58]
- Fixed inconsistent card heights in WhoShouldAttend by implementing items-stretch and flex-1.
[0.2 hrs]

[2026-05-07 16:05]
- Redesigned mobile menu as a high-fidelity blurred popup overlay with spring animations.
- Implemented backdrop-blur-2xl and rounded card aesthetic for the mobile navigation popup.
[0.5 hrs]

[2026-05-07 16:06]
- Integrated high-fidelity button clusters (Register Now & Explore Agenda) into the mobile menu popup, matching the site-wide cinematic CTA style.
[0.2 hrs]

[2026-05-07 16:07]
- Centered the mobile menu modal by moving it outside the nav container and using flex alignment.
- Resolved layout constraints caused by parent transforms on the fixed overlay.
[0.2 hrs]

[2026-05-07 16:10]
- Removed the button clusters from the mobile menu footer to streamline the modal navigation UX.
[0.1 hrs]

[2026-05-07 16:11]
- Added scroll-padding-top to the global HTML styles to prevent the fixed navbar from overlapping section headers during anchor navigation.
[0.1 hrs]

[2026-05-07 16:16]
- Reordered Contact section layout: moved CTA buttons below the text and aligned them horizontally on mobile to match the Hero section's aesthetic.
[0.1 hrs]

[2026-05-07 16:19]
- Standardized the font size of CTA buttons in the Contact section to 15px (mobile) and 18px (desktop) to perfectly match the Hero section.
[0.1 hrs]

[2026-05-07 16:28]
- Fixed visual artifacts in the Getting There card by adding a fallback background color (#2d0b26) behind the spreadsheet image.
- Adjusted the background position of the Getting There card on mobile to center 10% for better focal point alignment.
[0.2 hrs]

[2026-05-07 16:33]
- Restricted the Getting There card's background color (#2d0b26) and 100% size settings to mobile viewports only, reverting to default 'cover' behavior on desktop.
[0.1 hrs]

[2026-05-07 16:34]
- Set background-repeat to 'no-repeat' for the Getting There card to prevent tiling of the spreadsheet background image.
[0.1 hrs]

[2026-05-07 16:51]
- Linked the 'Tickets' navbar link to the #ticketing section to ensure smooth anchor navigation to the pricing tiers.
[0.1 hrs]

[2026-05-09 13:40]
- Updated footer links for "Event Terms & Conditions" and "Code of Conduct" in src/content/footer.md.
[0.1 hrs]

[2026-05-09 13:41]
- Added "Tech Expo featuring cutting-edge demos and innovations" to the 'What to expect' section in src/content/what-to-expect.md.
[0.1 hrs]

[2026-05-09 13:42]
- Updated marquee text in Marquee.tsx to "Super Early Bird Now Live • Limited Spots".
[0.1 hrs]

[2026-05-09 13:43]
- Updated FAQ text in FAQ.tsx: replaced "non-binary people" with "allies".
[0.1 hrs]

[2026-05-09 13:43]
- Updated footer links: "Tickets" now points to #ticketing and "Sponsorship" points to #partner in src/content/footer.md.
[0.1 hrs]

[2026-05-09 13:44]
- Updated FAQ text in FAQ.tsx: revised answer for "Will there be a virtual option?".
[0.1 hrs]

[2026-05-09 13:45]
- Updated FAQ text in FAQ.tsx: revised answer for "Can I refund or transfer my ticket?".
[0.1 hrs]

[2026-05-09 13:46]
- Hid the "Tickets starting at ₹3,000" banner in src/components/eventivee/Contact.tsx.
[0.1 hrs]

[2026-05-09 13:47]
- Replaced "GHCI Ambassadors" tile with "Abie Awards" in src/content/ways-to-involve.md.
[0.1 hrs]

[2026-05-09 13:49]
- Updated "Call For Jurors" in ways-to-involve.md: moved to end, updated link to CFJ page, removed "View program details" button, and set type to secondary.
[0.1 hrs]

[2026-05-09 13:50]
- Changed "Advancing Inclusion Program" to primary type in ways-to-involve.md to align with the grid layout.
[0.1 hrs]

[2026-05-09 13:52]
- Updated Hero section: hid "Explore Agenda" button and updated "Register Now" to link to #ticketing section.
[0.1 hrs]

[2026-05-09 13:52]
- Updated "Ethics in Practice" track title in explore-tracks.md: removed the word "Policy".
[0.1 hrs]

[2026-05-09 13:55]
- Refined PartnerWithUs section: centralized heading and description, normalized text sizes, and moved CTA button below the text.
[0.1 hrs]

[2026-05-09 13:56]
- Restored the subtitle and refined content hierarchy in the PartnerWithUs section.
[0.1 hrs]

[2026-05-09 14:00]
- Added social media links (Twitter, Instagram, Facebook, LinkedIn) to footer.md and updated Footer.tsx to support Facebook icon.
[0.1 hrs]

[2026-05-09 14:04]
- Updated Ticketing section: changed heading to "Choose Your Pass", moved "Offer valid till" to a centralized footnote at the bottom of cards, updated date formatting to US English, and removed "Virtual access available".
[0.1 hrs]

[2026-05-09 14:06]
- Explicitly filtered out "Virtual access available" from all tickets, including those loaded from cached browser settings, to ensure consistent UI across sessions.
[0.1 hrs]

[2026-05-09 14:07]
- Fixed ReferenceError in Ticketing.tsx by restoring definitions for blobsDesktop and blobsMobile in the merge logic.
[0.1 hrs]

[2026-05-09 14:18]
- Applied a comprehensive ticketing configuration update, including tier name changes (e.g., "Privilege Offer"), revised pricing, and specific visual parameters like notch sizes and background opacities.
[0.1 hrs]

[2026-05-09 14:19]
- Added support contact information ("For registration or discount code queries, contact support-ghci@anitabindia.org") to the bottom of all ticket cards for both desktop and mobile views.
[0.1 hrs]

[2026-05-09 14:20]
- Moved the support contact message from individual ticket cards to the section level, centrally aligned below the ticket grid for a cleaner presentation.
[0.1 hrs]

[2026-05-11 13:03]
- Reverted Ticketing section move to its original position.
- Relocated the 'Partner With Us' section (containing the 'Trusted By' logo carousel) to sit directly above the Past Speakers (SpeakerGrid) section in `page.tsx`.
[0.1 hrs]

[2026-05-11 13:05]
- Extracted the 'Trusted By' logo carousel from `PartnerWithUs` into a separate `TrustedBy` component.
- Relocated the new `TrustedBy` section to sit directly above the Past Speakers (SpeakerGrid) section in `page.tsx`.
- Reverted the rest of the `PartnerWithUs` section to its original position after `WaysToInvolve`.
[0.2 hrs]

[2026-05-11 13:11]
- Fixed logo stretching in the footer by adding `object-contain` to both the primary logo and the large background watermark.
[0.1 hrs]

[2026-05-11 15:56]
- Added "Virtual" ticket tier with "Coming soon" pricing and disabled CTA.
- Updated desktop ticketing layout to a horizontal scroll container showing 3.5 cards.
- Implemented visual disabled state for ticket buttons (opacity, grayscale, no hover animation).
- Fixed issue where new default tickets (like "Virtual") wouldn't appear for users with existing localStorage settings by updating the hydration logic to append missing default tiers.
- Removed the visible horizontal scrollbar on desktop using the `scrollbar-hide` utility.
- Updated "Virtual" ticket feature points and refined the "Coming soon" price presentation to be more subtle (smaller font, reduced opacity).
- Synchronized "Virtual" ticket background blobs (desktop, mobile, and base) with the "Super Early Bird" settings as requested.
- Fully synchronized the Ticketing component's `DEFAULT_CONFIG` with the user-provided JSON configuration.
- Fixed syntax errors in the configuration (missing quotes/colons for `gst`, `cta`, and `price` keys) that were causing build failures.
- Re-synchronized the Ticketing component's `DEFAULT_CONFIG` with the final, error-free JSON provided by the user.
- Implemented uniform card alignment by standardizing header/footer heights (using `min-h`), fixing the card height to `850px`, and utilizing flexbox growth to align CTA buttons and dividers across all tiers.
- Refined card layout to reduce whitespace and ensure perfect alignment: standardized header (`160px`), price/CTA (`190px`), and footer (`70px`) heights, reduced overall card height to `780px`, and adjusted typography sizes for a more compact, premium look.
- Fixed "broken" buttons by applying `w-full`, correcting the `relative/absolute` positioning for the sliding text animation, and ensuring perfect vertical centering within the button container.
- Finalized Ticketing layout resilience: applied `flex-shrink-0` to all fixed-height containers (header, price, footer) to prevent compression on cards with more content (like Virtual), ensuring perfect cross-tier alignment.
- Optimized card proportions and whitespace: reduced overall height to `680px`, tightened section heights (Header: `140px`, Price/CTA: `170px`, Footer: `60px`), and adjusted font sizes for a more compact, high-density editorial feel.
- Updated Virtual pass status text from "Coming soon" to "Launching soon" for both price and CTA.
- Configured the site to use `favicon.png` from the public folder via Next.js metadata.
- Updated the 'Register Now' button in the Navbar (desktop and mobile) to link to the `#ticketing` section for smoother internal navigation.
- Removed the `max-w-2xl` constraint from the FAQ answer paragraphs to allow full-width text expansion on desktop.
- Standardized horizontal padding to `md:px-13` across all major sections (Hero, FAQ, Contact, TicketPerks, Footer, and Ticketing) to ensure a unified page width that aligns perfectly with the navbar.
- Updated the site title to "GHCI 2027" and configured the `favicon.png` for a complete branding refresh.
- Updated ticket offer deadlines: Privilege Offer (August 2, 2026), Super Early Bird (June 14, 2026), and removed the deadline for the Regular tier.
- Fixed an issue where `localStorage` was overwriting new deadlines by prioritizing `DEFAULT_CONFIG` footnotes during hydration.
- Removed the "Agenda" link from the footer and updated the Facebook social link to the official AnitaBorg India page.
- Updated "Advancing Inclusion Program" in the involvement section to "Launching soon" and changed the "Partner With Us" enquiry button to link to `corporate@anitabindia.org`.
- Replaced "18% GST Applicable" with "+ applicable charges" across all ticket tiers to account for additional fees (District fee, etc.).
[3.0 hrs]
- Provided technical requirements for Brevo newsletter integration (API Key v3, List ID, and Opt-in preferences). [0.2 hrs]
- Discussed Brevo integration methods: Recommended API-based custom form over standard embed code for better UI/UX consistency. [0.1 hrs]
- Implemented a custom newsletter signup popup modal with Framer Motion animations. [0.5 hrs]
- Connected the popup to Brevo API using a Next.js Server Action to securely handle the API key and subscribe users to List ID 15. [0.5 hrs]
- Migrated hardcoded Brevo API key from the server action to `.env.local` to adhere to security best practices. [0.1 hrs]

### Navigation Menu Refinement [2026-05-13 16:43]
- Removed the "Agenda" link from the main navigation menu in `Navbar.tsx` for both desktop and mobile views. [0.1 hrs]

### Ticketing Link Update [2026-05-14 12:56]
- Updated "Get the Pass" buttons in `Ticketing.tsx` (Desktop & Mobile) to link to the registration URL: https://link.district.in/DSTRKT/GHCI2027PartnerWebsite. [0.2 hrs]

### Button Interactivity Polish [2026-05-14 13:04]
- Added standard 'cursor-pointer' feedback to all main CTA buttons across Ticketing, Hero, Navbar, and Contact sections to improve user clickability awareness. [0.2 hrs]

### Homepage Layout & Section Refinement [2026-05-15 18:14]
- Reordered homepage sections in `page.tsx`: shifted "Ways to Get Involved" after "Explore What You'll Learn" and moved "Location" after "Contact".
- Increased top padding on "Ways to Get Involved" section for better spacing.
- Integrated `location-bg.png` background with cover sizing to the `Ticketing` section and removed it from the `Location` section.
- [0.5 hrs]

### Speaker Section Background Update [2026-05-15 18:44]
- Applied a vertical linear gradient background (#120110 to #22021d) to the SpeakerGrid section.
- [0.1 hrs]

### Meta Title Update [2026-05-20 19:30]
- Changed page meta title to "GHCI 27 - AnitaB.org India".
- [0.1 hrs]

### Ticketing Hash Navigation Fix [2026-05-26 14:40]
- Added a useEffect in Ticketing.tsx to scroll to the ticketing section on mount when navigated with the #ticketing hash. [0.2 hrs]

### Abie Awards Renaming [2026-05-29 11:15]
- Updated "Abie Awards" to "Anita Borg Impact Awards" in `src/content/ways-to-involve.md`. [0.1 hrs]

### CFP Deadline Extension [2026-05-29 11:17]
- Added "Apply by June 30, 2026, 11:59 PM IST" text next to the CFP CTA button in `WaysToInvolve.tsx`. [0.1 hrs]

### Trusted By Logo Additions [2026-05-29 11:56]
- Downloaded logos for Google, Uber, Amex, Twilio, and Oracle from Simple Icons CDN as SVGs.
- Appended these brands to the start of the `logos` list in `partner-with-us.md`. [0.2 hrs]

### Marquee Hover Stop [2026-05-29 11:59]
- Added CSS pause-on-hover rules for `.animate-marquee` and `.animate-marquee-slow` in `globals.css`.
- Refactored `TrustedBy` and `Testimonials` from Framer Motion animations to CSS marquee animations. [0.2 hrs]

### Wordmark Logo Updates [2026-05-29 12:45]
- Replaced the Google and Oracle icons/logos with their full wordmark SVGs from Wikimedia Commons.
- Cleaned up the American Express SVG by removing the background block to leave a clean, transparent logotype. [0.2 hrs]

### Jio Institute Logo Fix [2026-05-29 12:51]
- Restructured `jio-institute.png` by converting the white "Jio" letters inside the circle into alpha-transparent cut-outs, preventing them from disappearing under CSS brightness-0 invert filters. [0.1 hrs]

### Twilio Logo & Logo Sizing Consistency [2026-05-29 12:56]
- Downloaded the official Twilio wordmark SVG from the correct Wikimedia Commons path, replacing the broken URL.
- Cropped empty vertical letterboxing from `amex.svg` and `uber.svg` to optimize visual sizing.
- Normalized logo scale heights by adjusting the image class to `h-7 md:h-9` and widening the `max-w` to `max-w-[160px] md:max-w-[220px]` in `TrustedBy.tsx` to prevent wide logos from shrinking. [0.2 hrs]

### Logo Margin Cropping [2026-05-29 13:08]
- Cropped empty vertical transparent padding from `jio-institute.png`, `mycareernet.png`, and `avalara.png` using PIL to normalize their height scaling. [0.1 hrs]

### Google Tag Manager Integration [2026-06-01 14:58]
- Added Google Tag Manager script to layout `<head>` tag.
- Added Google Tag Manager noscript iframe fallback to layout `<body>` tag.
[0.1 hrs]

### Advancing Inclusion Program (AIP) Route Creation [2026-06-05 21:32]
- Created `/aip` page route configuration and dynamic content source file `src/content/aip.md`.
- Implemented standard components `AipNavbar`, `AipHero`, `AipWhatIs`, `AipCategories`, `AipBenefits`, `AipSplitSection`, and `AipCTA` mimicking homepage design guidelines.
- Configured absolute relative link mappings for reused Footer and AipNavbar components to ensure route continuity.
- Successfully compiled and verified page structures with no build or type errors. [1.2 hrs]

### AIP Subpage Sections Width Alignment [2026-06-06 03:19]
- Removed `max-w-7xl` constraints from `AipWhatIs`, `AipCategories`, `AipBenefits`, and `AipSplitSection` to match full screen-width layout behavior of Navbar and Hero sections.
- Re-aligned horizontal scrolling padding margins in `AipBenefits` to match standard padding styles. [0.2 hrs]

### AIP Bottom CTA Gradient Overlay Alignment [2026-06-06 03:22]
- Updated `AipCTA` bottom call-to-action title to render the last two words ("Now Open") with the white-to-magenta gradient overlay (`bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent`).
- Re-styled the outline button in `AipCTA` with a brand-magenta outline and matching text (`border-[#A32482]` and `text-[#A32482]`) that transforms into a solid magenta background with white text on hover. [0.15 hrs]

### AIP Bottom CTA Full Title Gradient Alignment [2026-06-06 03:24]
- Modified `AipCTA` to apply the white-to-magenta gradient overlay to the entire title ("Applications Are Now Open") rather than just the last two words, matching the design specification. [0.1 hrs]

### AIP Bottom CTA Button Gradient Alignment [2026-06-06 03:28]
- Applied the white-to-magenta text gradient (`bg-gradient-to-r from-white to-[#A32482] bg-clip-text text-transparent`) to the active state layer of the CTA button text ("APPLY NOW"), keeping the hover/slide-up text copy solid white. [0.1 hrs]

### AIP Bottom CTA Button Border Gradient Alignment [2026-06-06 03:29]
- Applied the white-to-magenta gradient overlay to the CTA button border ring by utilizing a 2px-padded `bg-gradient-to-r` wrapper with an inner dark container that shifts bg color on hover. [0.1 hrs]

### AIP Bottom CTA Proportions & Wrapping Alignment [2026-06-06 03:31]
- Inserted newline in description text inside `aip.md` and added `whitespace-pre-line` / `max-w-4xl` to align the line wrap exactly with Figma.
- Enlarged CTA button dimensions to `min-w-[680px]` and font size to `text-xl md:text-[2.25rem]` to match design specs. [0.15 hrs]

### AIP Categories Icons White Filter Alignment [2026-06-06 03:34]
- Applied `brightness-0 invert` filter class to category icons in `AipCategories` to force dark-colored PNG icons to display as solid white. [0.1 hrs]

### AIP "What is AIP?" Padding Alignment [2026-06-06 03:37]
- Added responsive desktop-based horizontal padding (`lg:px-[12%] xl:px-[16%]`) to the `AipWhatIs` section, aligning its contents inwards to match the horizontal boundaries of surrounding page content. [0.1 hrs]

### AIP "What is AIP?" Border, Wrapping, and Font Alignment [2026-06-06 03:41]
- Removed the top horizontal line divider from the `AipWhatIs` section wrapper.
- Set heading grid width to `md:col-span-5` and added `md:whitespace-nowrap` to prevent "What is AIP?" from wrapping to a second line.
- Reduced description grid width to `md:col-span-7` and text size from `text-[2rem]` to `text-lg md:text-2xl` (font weight normal) to align proportions with the design mockup. [0.15 hrs]

### AIP "What is AIP?" Horizontal Padding Decreased [2026-06-06 03:45]
- Decreased the horizontal padding of the `AipWhatIs` section by 50px on each side on desktop, updating classes to `lg:px-[8%] xl:px-[12.5%]`. [0.05 hrs]

### AIP "What is AIP?" Heading Title Gradient Alignment [2026-06-06 03:47]
- Replaced the last-word gradient highlighting with the exact design CSS gradient `linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)` applied to the entire "What is AIP?" title text via custom style properties.
- Removed the unused `getTitleWithHighlight` helper function from the component code. [0.08 hrs]

### AIP "Applications Are Now Open" Gradient Alignment [2026-06-06 03:48]
- Updated the "Applications Are Now Open" title gradient in `AipCTA.tsx` to match the exact design CSS gradient `linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)`.
- Synchronized the CTA button border ring and the button's gradient text overlay to use the same premium gradient specification. [0.1 hrs]

### AIP Scholarship Benefits and Split Section Background Images [2026-06-06 04:01]
- Inserted responsive background images (`/aip/scholarship-benefits-desktop.png` and `/aip/scholarship-benefits-mobile.png`) to the Scholarship Benefits section in `AipBenefits.tsx`.
- Inserted responsive background images (`/aip/who-why-desktop.png` and `/aip/who-why-mobile.png`) to the "Who Should Apply / Why Apply" section in `AipSplitSection.tsx`.
- Hidden the mobile version on desktop and the desktop version on mobile for both sections using Tailwind responsive visibility modifiers, with content layered on top using `relative z-10`. [0.2 hrs]

### AIP Hero Lead Image Update [2026-06-06 04:14]
- Replaced the placeholder block inside the right column of the `AipHero` component with the actual hero image `/aip/aip-lead-img.png`.
- Applied a transition hover scale effect to the image element. [0.05 hrs]

### AIP Mobile Content Centering [2026-06-06 16:25]
- Centered the title, subtitle, and CTA button in the AipHero component on mobile.
- Centered both heading and description content in the AipWhatIs component on mobile. [0.1 hrs]

### AIP Scholarship Categories Slider on Mobile [2026-06-06 16:36]
- Converted the Scholarship Categories section on mobile viewports from a vertical list of cards into a horizontal snap-scroll slider.
- Reduced the icon sizes by 50% on mobile (w-6 h-6 vs w-12 h-12 on desktop) inside the category cards. [0.15 hrs]

### AIP Scholarship Categories Card Width Adjustment [2026-06-06 16:40]
- Adjusted mobile width of the Scholarship Categories cards to min-w-[44%] to display approximately 2.2 cards simultaneously.
- Updated scroll snap behavior to snap-start. [0.08 hrs]

### AIP Scholarship Categories Card Width Adjusted to 1.5 [2026-06-06 16:55]
- Updated mobile width of categories cards to min-w-[65%] to display exactly 1.5 cards at once, preventing thin card proportions. [0.05 hrs]

### AIP Scholarship Categories Mobile Padding Offset Alignment [2026-06-06 16:57]
- Aligned the mobile left padding offset of the categories slider container with the scholarship benefits slider layout (removed parent section padding, added px-4 md:px-13 and scroll-pl-4 classes directly on the inner elements). [0.08 hrs]

### AIP Scholarship Benefits Mobile Card Width Adjusted to 1.5 [2026-06-06 17:07]
- Adjusted card width on mobile for Scholarship Benefits section from w-[85%] to w-[65%] to display exactly 1.5 cards at once. [0.05 hrs]

### AIP CTA Section Line Break Adjustment [2026-06-06 17:18]
- Moved the line break in CTA description in aip.md to after "join" to prevent "of women and allies in technology" from breaking across multiple lines. [0.03 hrs]

### AIP Hero Glass Effect and Mouse Shine Implementation [2026-06-06 17:20]
- Ported the interactive glass title effect and mouse-shine tracking calculations from the homepage Hero component into the AIP Hero title. [0.1 hrs]

### AIP CTA Section Line Break Removed [2026-06-06 17:33]
- Removed the hardcoded line break entirely from CTA description in aip.md to allow natural fluid wrapping on all screen sizes. [0.03 hrs]

### AIP WhatIs Spacing Symmetry Adjustment [2026-06-06 17:38]
- Removed the redundant pt-16 top padding from the inner container in AipWhatIs.tsx to make the top and bottom spacing of the section identical. [0.03 hrs]

### AIP Hero Design Alignment [2026-06-08 07:48]
- Updated title text layout to stack into three lines to match Figma.
- Configured title to use fluid font sizes (`lg:text-[4.5rem] xl:text-[5.5rem]`).
- Decreased description font size (`text-base md:text-lg`) and weight (`font-normal`), setting text color opacity to `70%`.
- Formatted description content in `aip.md` with explicit design line wrap.
- Switched desktop columns from 7:5 to 6:6 and set image aspect ratio to natural `1.45` to prevent horizontal cropping. [0.4 hrs]

### AIP Hero Image & Description Rescale [2026-06-08 07:53]
- Shifted grid column split from 6:6 to 5:7, giving the image 58.3% of the desktop layout width.
- Expanded the image's maximum width constraint from 620px to 760px for a more dominant visual presence.
- Increased description font size to `text-lg md:text-[1.35rem]` and opacity to `80%` to match Figma proportions.
- Added `whitespace-nowrap` to `Program (AIP)` text segments to prevent any internal wrapping inside the narrower column. [0.1 hrs]

### AIP Hero Title Size Reduction [2026-06-08 08:06]
- Reduced font size of both title and shine-overlay layers by 20% across all responsive viewports. [0.05 hrs]

### AIP Subtitle Line Break Restoration [2026-06-08 08:14]
- Restored `whitespace-pre-line` class to AipHero's subtitle `<p>` tag and reverted the content file to use `\n` to properly render the manual line break. [0.05 hrs]

### AIP 4K Layout Constraint [2026-06-08 08:23]
- Applied `max-w-[1400px] mx-auto` constraints to inner wrappers of AIP Hero, WhatIs, Categories, Benefits, and SplitSection to prevent content columns from drifting apart on ultra-wide / 4K displays. [0.1 hrs]

### AIP CTA Button Size Scaling [2026-06-08 08:44]
- Scaled down the CTA apply button in `AipCTA.tsx` from its oversized desktop layout (680px width, 80px height, 2.25rem text) to a standard premium button size (280px width, 64px height, 1.125rem text) as per Figma. [0.05 hrs]

### AIP Categories Hover Effect [2026-06-08 09:00]
- Removed default selected/focus state from `AipCategories.tsx` so that all card highlight styles trigger dynamically on mouse hover, matching the figma interaction requirements. [0.05 hrs]

### AIP Split Section Gradient Headers [2026-06-08 09:02]
- Applied the premium pink-to-white diagonal gradient text styling (`linear-gradient(258.87deg, #A32478 44.34%, #FFFFFF 90.93%)`) to both "Who Should Apply" and "Why Apply" headers in `AipSplitSection.tsx`. [0.05 hrs]

### AIP Why Apply Gradient Stop Adjust [2026-06-08 09:06]
- Modified the color stop for the pink gradient in the "Why Apply" header to `70%` in `AipSplitSection.tsx`, shifting the pink part to the right so that the word "Apply" transitions perfectly. [0.05 hrs]

### AIP Hero Background Bokeh Layout [2026-06-08 09:11]
- Restructured the background bokeh glows in `AipHero.tsx` into 6 separate layered ellipses matching the exact coordinates, sizes, colors, and opacity stops of the Figma mask design. [0.05 hrs]

### AIP Hero Debug Settings & Hotkeys [2026-06-08 09:20]
- Added interactive drag-and-drop debug settings overlay to `AipHero.tsx` with hotkey `Ctrl + Alt + A` and integrated it with the `ControlPanel` micro-management list under the `aip-hero` section. [0.05 hrs]

### AIP Dynamic Ellipse Creation and Animations [2026-06-08 09:30]
- Added full support to `AipHero` settings panel for adding, duplicating, deleting ellipses on-the-fly and configuring global speed and blur settings just like the homepage. [0.05 hrs]

### AIP Hero Helper Mode and LocalStorage Mount Sync [2026-06-08 09:38]
- Integrated a `ghci-aip-hero-settings` localStorage parser to preserve customized configurations on page load and update automatically on change.
- Allowed the Global Blur slider range to go down to `0px`.
- Introduced a togglable "Helper Mode" which sets active blurs to 0px, forces visible opacities, and highlights each ellipse with a dashed boundary border and number tag for easy positioning. [0.05 hrs]

### AIP Hero Customized Background Configuration [2026-06-08 09:48]
- Integrated the user's customized JSON coordinates, opacities, speeds, and dimensions into the initial default configuration of `AipHero.tsx`. [0.05 hrs]

### AIP Hero Customized Background Configuration Update [2026-06-08 09:56]
- Updated the default `bokehBlur` value to `33` in the default configuration structure inside `AipHero.tsx`. [0.05 hrs]

### AIP Navbar Width Alignment [2026-06-08 10:30]
- Wrapped the inner logo and navigation layout structure inside `AipNavbar.tsx` with a `max-w-[1400px] mx-auto` container to vertically match the alignment of the AIP page's constrained sections on QHD/4K screens. [0.05 hrs]

### AIP Page Layout Alignment Matching Homepage [2026-06-08 10:31]
- Removed the `max-w-[1400px] mx-auto` layout constraints from `AipNavbar.tsx`, `AipHero.tsx`, `AipWhatIs.tsx`, `AipCategories.tsx`, `AipBenefits.tsx`, and `AipSplitSection.tsx`, restoring full-width layout using standard page paddings (`px-4 md:px-13`) to match the homepage width behavior. [0.1 hrs]

### AIP Layout Padding and Widescreen Formatting [2026-06-08 10:50]
- Defined the `--spacing-13` CSS theme token inside `globals.css` to activate custom layout spacing (`px-13`) across all sections.
- Enabled inline rendering of AIP Hero title spans on desktop viewports to prevent wrapping columns on high-res monitors.
- Scaled up the Interactive Image Card max-width to `xl:max-w-[900px] 2xl:max-w-[1100px] min-[1920px]:max-w-[1300px]` for widescreen layout parity.
- Constrained the What Is description paragraph text using `max-w-5xl` for readability on high-res screens.
- Aligned Benefits title container horizontal padding to standard `px-4 md:px-13`. [0.15 hrs]

### AIP Hero Bokeh Background Configuration Update [2026-06-08 11:01]
- Updated the default bokeh parameters (coordinates, sizes, blur, and opacity) inside `AipHero.tsx` to match the user's updated specifications. [0.05 hrs]

### AIP Scholarship Categories Sharp SVGs and Dynamics [2026-06-08 11:12]
- Updated the three slight gray SVG icons (`academecians.svg`, `professionals.svg`, `users.svg`) in `public/aip/icons/` to be pure white (`stroke="white"`).
- Refactored `AipCategories.tsx` to use the new sharp SVG paths, implement CSS mask color inheritance (`bg-current` mapping dynamically to current text color), and support the highlighted card state on load. [0.15 hrs]

### AIP Scholarship Categories Hover Highlight Reversion [2026-06-08 11:15]
- Reverted initial highlighted state on card load inside `AipCategories.tsx`, changing layout behavior to hover-only highlight. [0.05 hrs]

### AIP Hero Image Update [2026-06-08 11:46]
- Changed the hardcoded hero image inside `AipHero.tsx` and the markdown frontmatter of `aip.md` to point to the new asset `ghci-aip-lead.jpeg`. [0.05 hrs]

### AIP Section Apply Now Link [2026-06-08 13:00]
- Changed the Advancing Inclusion Program card's "Launching soon" badge to an "Apply Now" button linking to `/aip`. [0.1 hrs]

### AIP How to Apply Section [2026-06-10 10:00]
- Added "How to Apply" component (`AipHowToApply.tsx`) between SplitSection and CTA sections on the AIP page.
- Extracted step details to frontmatter inside `src/content/aip.md`.
- Implemented smooth timeline animations and responsive visual design. [0.4 hrs]

### AIP Timeline Styling & Gap Refinement [2026-06-10 10:04]
- Reduced vertical spacing between timeline steps from 8/12 to 5/8.
- Added a horizontal white-to-magenta gradient to the "How to Apply" section title to match standard page headers. [0.1 hrs]

### AIP Timeline Connecting Line Refinement [2026-06-10 10:24]
- Refactored connecting line logic to use relative flex-stretch segment elements for each step, ensuring the connecting line stops exactly at point 6 instead of extending below it. [0.1 hrs]

### AIP Apply Now Link Update [2026-06-10 10:27]
- Updated AIP CTA section and Hero "Apply Now" links to point directly to https://ghci27.stutzee.com/applications/scholarship/create. [0.05 hrs]                                                                

### AIP Timeline Header Margin Refinement [2026-06-10 10:33]
- Removed the wrapping title div with `mb-16` in `AipHowToApply.tsx`.
- Applied `mb-5` directly to the `h2` to reduce the gap between the title and first point to 20px across viewports. [0.05 hrs]

### Create /partner Route and Page [2026-06-11 20:22]
- Created the new `/partner` subpage in `src/app/partner/page.tsx` loading partner details.
- Updated `PartnerWithUs.tsx` to support the `isPage` prop for dynamic spacing when displayed as a standalone page.
- Updated the Sponsorship footer link in `footer.md` to point to `/partner`. [0.4 hrs]

### Verification of GTM tracking code [2026-06-12 14:10]
- Inspected the project and verified Google Tag Manager is configured in `src/app/layout.tsx` (ID: `GTM-MRFZ6J6W`). [0.05 hrs]
- Verified that all subpages (including `/aip` and `/partner`) inherit the Root Layout and thus include GTM tracking. [0.05 hrs]

### Task Auditing & Man-Hour Summary [2026-06-15 04:52]
- Audited development log records inside `memory.md` to extract, compile, and aggregate task details and man-hours.
- Generated a structured categorization of tasks across major components (AIP, Ticketing, Hero, etc.) and created a detailed report artifact `task_hours_summary.md`.
[0.2 hrs]

### Ticketing Offer Date Update [2026-06-16 13:30]
- Updated the Super Early Bird offer validity date from June 14, 2026 to June 30, 2026.
[0.05 hrs]

### Remove via Verix from Tickets/Passes [2026-06-16 13:32]
- Removed "(via Verix)" reference from all passes/tickets inside Ticketing.tsx and ticket-perks.md.
[0.05 hrs]

### Countdown Timer Test Page [2026-06-22 12:51]
- Created dynamic countdown timer component (`CountdownTimer.tsx`) with sliding animation for individual digits, glassmorphism card containers, and glowing hover borders.
- Created `/test` subpage under `src/app/test/page.tsx` displaying the countdown timer, subpage navbar, intro copy, premium ticket CTA button, animated bokeh backgrounds, and standard footer.
[0.8 hrs]

### Countdown Timer Cards Background Shine [2026-06-23 13:06]
- Ported the homepage lead text interactive mouseover shine effect to the countdown cards background and borders in `/test`.
[0.3 hrs]

### Countdown Timer Cards Alignment Refinement [2026-06-23 13:08]
- Fixed 3-digit alignment issue on the Days card by changing the rigid grid to a flexible flex layout with content-driven dynamic widths (`w-auto`) on desktop/tablet.
- Adjusted digit box width, margins, and font sizes to fit 3 digits comfortably within mobile grid columns without boundary overflow.
[0.2 hrs]

### Countdown Timer Cards Boundary Overflow Fix [2026-06-23 13:12]
- Fixed card boundary compression/overflow by adding `shrink-0` class to `CountdownCard` container.
- Expanded the parent content wrapper max-width to `max-w-6xl` in `/src/app/test/page.tsx` to accommodate the expanded width requirements of the countdown cards row.
[0.1 hrs]

### Countdown Timer Cards Single Row Layout on Mobile [2026-06-23 13:14]
- Refactored the cards container to lock to a single non-wrapping row (`flex-row flex-nowrap`) across all viewports.
- Implemented responsive, percentage/pixel-precise digit container dimensions, font sizes, margins, gaps, and border radii to ensure that 4 cards fit on narrow mobile screens (360px+).
[0.2 hrs]

### Countdown Timer Hero Integration [2026-06-24 17:39]
- Updated `CountdownTimer.tsx` to support a customizable `className` prop to allow styling overrides.
- Integrated `CountdownTimer` into the homepage `Hero.tsx` below the button cluster and above the bottom marquee with no top/bottom helper text (counting down to Jan 20th, 2027).
[0.25 hrs]

### WeQuest Landing Page Creation [2026-06-24 18:27]
- Created `/wequest` static page route matching the layout and design patterns of the landing page.
- Generated and set up a custom tech conference background image for the WeQuest Hero.
- Created `src/content/wequest.md` and 9 modular section components representing the WeQuest presentation, timeline, benefits, criteria, selection tags, and key dates.
- Linked the homepage WeQuest section button directly to the new `/wequest` route.
[1.0 hrs]

### WeQuest Layout Alignment with Figma [2026-06-24 18:36]
- Modified `src/content/wequest.md` to update evaluation criteria parameters and date strings to match Figma.
- Updated `WequestSelection.tsx` to display inline list items separated by vertical lines inside a custom plum-colored card.
- Redesigned `WequestDates.tsx` using a gap-based CSS grid layout for perfectly aligned borders and updated titles to bold title case.
[0.3 hrs]

### WeQuest Selection Card Width Increase [2026-06-24 18:37]
- Updated `WequestSelection.tsx` to expand the card container to `max-w-6xl` and reduced horizontal padding and margin sizes between the text items to fit them entirely on a single horizontal row on desktop.
[0.1 hrs]

### WeQuest Selection Container Expanded [2026-06-24 18:39]
- Expanded the parent block container in `WequestSelection.tsx` to `max-w-6xl` to remove the 1024px maximum width constraint that was preventing the card scaling.
- Configured the flex layout on the evaluation list items with `md:flex-nowrap` to prevent "Growth Potential" from wrapping to the next line on desktop.
[0.1 hrs]

### WeQuest Key Dates Text Gradient [2026-06-24 18:42]
- Updated date values in `WequestDates.tsx` from solid magenta (`#A32482`) to the requested gradient: `linear-gradient(258.31deg, #A32478 44%, #FFFFFF 90.99%)`.
[0.1 hrs]

### WeQuest Key Dates Transparent Cell Cards [2026-06-24 18:44]
- Refactored `WequestDates.tsx` to set transparent backgrounds (`bg-transparent`) on each date card.
- Replaced the grid-gap border layout with a grid wrapper border and responsive single-pixel borders inside to prevent doubling of borders.
[0.1 hrs]

### WeQuest Key Dates Fully Rounded Cards [2026-06-24 18:46]
- Modified `WequestDates.tsx` to set `rounded-[12px] border border-white/10` on all four corners of each date card cell.
- Placed the cells inside a transparent grid with `gap-4` spacing.
[0.1 hrs]

### WeQuest Key Dates Grid Gap Removal [2026-06-24 18:47]
- Updated `WequestDates.tsx` to set `gap-0` on the grid container, letting the fully rounded date card cells touch each other directly.
[0.1 hrs]

### WeQuest Application Process Layout Alignment [2026-06-24 18:48]
- Updated `WequestProcess.tsx` to stack the step title on the first line and description on the next line, removing the em-dash divider.
- Updated `wequest.md` copy for process steps to match the exact wording of the shared Figma design.
[0.2 hrs]

### WeQuest Who Can Apply Card Alignment [2026-06-24 18:53]
- Updated `WequestWhoCanApply.tsx` to center card contents vertically (`justify-center` instead of `justify-end`).
- Tightened space between step title and description by reducing text gap wrapper from `space-y-4` to `space-y-2`.
[0.1 hrs]

### WeQuest Who Can Apply Hover Interactivity [2026-06-24 18:54]
- Modified `WequestWhoCanApply.tsx` to make all cards uniform by default.
- Implemented hover effects to apply the magenta-purple gradient background, border styling, drop shadow, and brightened description text (`text-white/90` from `text-white/60`) interactively.
[0.1 hrs]

### WeQuest What You'll Gain Card Updates [2026-06-24 18:56]
- Modified `WequestGains.tsx` to remove the circular background container behind the check icon.
- Refactored the layout to use a horizontal scroll view with navigation arrows, positioning the 5th card slightly off-screen on the right.
- Updated `wequest.md` copy for all gain items and added the 5th card (`Founder Community`) matching Figma.
[0.2 hrs]

### WeQuest Hero Contained Card & Illuminate Effect [2026-06-24 19:02]
- Copied lead background image from Downloads and optimized to high-compression WebP (`wequest-hero-bg.webp`) reducing size by ~95% (36 KB).
- Modified `WequestHero.tsx` to wrap the hero contents in an almost full-width rounded card component matching the Figma design.
- Realigned title styling and container bounds to correctly enable the mouse-shine illuminate hover effect matching the homepage text.
- Stacked and cleaned up sub-descriptions inside the card into a unified three-line list.
- Fixed alignment/overlapping bug on the title layers in `WequestHero.tsx` by introducing the same `w-full md:w-max` container wrapping layer as the homepage lead title.
[0.4 hrs]

### WeQuest What Is Section Layout & Copy Alignment [2026-06-24 19:08]
- Updated `wequest.md` whatIsText content to match the exact copy from Figma.
- Refactored `WequestWhatIs.tsx` to align container width (`max-w-5xl mx-auto`), broke heading to two lines with specific blocks, split text into standard paragraph blocks, and scaled text sizes (`text-base md:text-[18px] lg:text-[20px]`) for a clean font size proportion.
[0.2 hrs]

### WeQuest What Is Section Width & Copy Verification [2026-06-24 19:11]
- Verified the description copy exactly matches the Figma specs.
- Widened the description text column in `WequestWhatIs.tsx` by ~30% by increasing the outer container max-width to `max-w-[1140px]` and shifting the grid column spans to `md:col-span-4` (heading) and `md:col-span-8` (paragraphs).
[0.1 hrs]

### WeQuest Why Apply Section Container & Alignment Fix [2026-06-24 19:13]
- Refactored `WequestWhyApply.tsx` to match the exact container margins (`max-w-[1140px]`), grid layout (`md:col-span-4` and `md:col-span-8`), broken heading design, and text size proportions (`text-[18px]` bullets and `text-base md:text-[18px] lg:text-[20px]` paragraphs) of the "What is WeQuest?" section.
[0.1 hrs]

### WeQuest Why Apply Title Layout Fix [2026-06-24 19:14]
- Re-structured `WequestWhyApply.tsx` headingText to render on a single line with the text gradient spanning both words "Why Apply?".
[0.1 hrs]

### WeQuest Section Backgrounds Integration [2026-06-24 19:37]
- Optimized and converted the new background images `/public/wequest/why_apply_bg.png` and `how_to_apply_bg.png` to highly compressed WebP format, achieving ~87% file size reductions.
- Added `/wequest/why_apply_bg.webp` background to the section tag in `WequestWhyApply.tsx`.
- Added `/wequest/how_to_apply_bg.webp` background to the section tag in `WequestProcess.tsx`.
[0.1 hrs]

### WeQuest Page Improvements [2026-06-25 15:13]
- Optimized the 20.5MB `DSC00648.JPG` image into a 180KB WebP asset (`/public/wequest-hero-bg.webp`) to replace the WeQuest lead hero background.
- Changed grid items alignment to middle-align the titles in `WequestWhyApply.tsx` and `WequestWhatIs.tsx`.
- Changed the font weight of criteria card titles in `WequestWhoCanApply.tsx` from bold to medium.
[0.5 hrs]

### WeQuest Hero Background Gradient Alignment [2026-06-25 15:24]
- Applied a vertical linear gradient overlay (rgba(0, 0, 0, 0.9) 0% to rgba(0, 0, 0, 0) 100%) over the background image in `WequestHero.tsx` and removed the bottom-to-top vignette to match Figma.
[0.1 hrs]

### WeQuest Hero Subtitle Title Case Update [2026-06-25 15:26]
- Removed the `uppercase` class from the subtitle in `WequestHero.tsx` to render "Pitch. Connect. Grow." in title case as requested.
[0.05 hrs]

### WeQuest Hero CTA Button Sizing Alignment [2026-06-25 15:27]
- Aligned the CTA button and icon size in `WequestHero.tsx` with the larger homepage lead CTA button dimensions (icon container to `w-16 h-16` / button container to `h-16`).
[0.05 hrs]

### Attendee Count Stat Update [2026-06-25 15:29]
- Updated attendee statistics from 10,000+ to 12,000+ in `about.md` (homepage stat section), `wequest.md`, `WequestHero.tsx` (WeQuest description), and `partner-with-us.md`.
[0.05 hrs]

### Mobile Carousel Navigation Arrows Alignment [2026-06-25 15:37]
- Hid absolute navigation chevrons on mobile viewports using `hidden md:block` in `WequestGains.tsx`, `AipBenefits.tsx`, and `ExploreTracks.tsx` to prevent arrows from overlapping card content.
[0.1 hrs]

### Ticket Tiers Scheduling and Reordering [2026-06-25 16:09]
- Implemented client-side and SSR-safe date-based scheduling logic in `Ticketing.tsx` and `Marquee.tsx`.
- Automatically disables the "Super Early Bird" pass, changes its CTA to "Sold Out", and reorders it to appear after the "Virtual" pass on/after July 1, 2026.
- Added support for a URL query parameter `?testDate=YYYY-MM-DD` (e.g. `?testDate=2026-07-01`) to allow immediate manual verification of the scheduled ticket state.
[0.15 hrs]

### Timezone Alignment to IST [2026-06-25 16:10]
- Verified that the homepage `CountdownTimer.tsx` already targets Indian Standard Time (IST, `+05:30`) correctly.
- Aligned date comparison checks in `Ticketing.tsx` and `Marquee.tsx` to use the explicit `+05:30` IST timezone offset, ensuring timezone-independent scheduling for global visitors.
[0.05 hrs]

### Early Bird Ticket Addition [2026-06-30 23:33]
- Added "Early Bird Ticket" configuration to `Ticketing.tsx` in both default and fallback configs.
- Configured dynamic scheduling logic to keep "Early Bird Ticket" hidden until July 1st, after which it seamlessly replaces "Super Early Bird" (which is pushed to the end as 'Sold Out').
- Ensured properties match the user specs: Base price ₹12,000, footnote LAST DATE - August 31.
[0.2 hrs]

### Ticket Card Content Overlap Fix [2026-07-01 00:01]
- Resolved an overlap bug in `TicketingCard` (Desktop) where the strikethrough price and actual price would clip into the header description.
- Increased the fixed height constraint for the header block (`h-[140px]` -> `h-[160px]`) and the price/CTA block (`h-[170px]` -> `h-[210px]`) to safely accommodate multiline descriptions and the 196px intrinsic height of the price/CTA block without `justify-end` pushing overflow content upwards.
[0.1 hrs]

