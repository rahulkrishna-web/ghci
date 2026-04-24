# Project: GHCI 2027 Microsite - Comprehensive Plan

## 1. Project Overview
The GHCI 2027 Microsite serves as a conversion-focused event landing page for the Grace Hopper Celebration India. It aims to provide essential information (Hero, About, Agenda, Speakers, Benefits, Ticketing, Sponsorship) in a clean, single-scroll experience. A secure admin dashboard will manage registrations, guest lists, and payment tracking.

## 2. Technical Stack
- **Frontend**: Next.js (App Router), Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion.
- **Analytics**: Vercel Analytics / Google Analytics (optional).

## 3. Core Features & Architecture

### A. Microsite (Public Facing)
1. **Hero Section**: High-impact visuals, clear CTA (External Registration), dates, and venue.
2. **About Section**: Mission statement and impact of GHCI.
3. **Agenda**: Dynamic schedule with tracks and keynote speakers.
4. **Speakers**: Hover-enabled speaker cards with bios/profiles.
5. **Ticketing**: Pricing tiers (Student, Professional, Corporate) linked to external booking platform.
6. **Sponsorship**: Partner logos and "Become a Sponsor" enquiry form.
7. **Contact**: Essential links, social media, and support email.

## 4. Proposed Sitemap & Routes
| Path | Description | Access |
|------|-------------|--------|
| `/` | Landing Page - Option 1 (Eventivee style) | Public |
| `/demo2` | Landing Page - Option 2 (Think Forward style) | Public |

## 5. Development Phases

### Phase 1: Setup & UI Foundation
- Next.js project initialization.
- shadcn/ui and Tailwind configuration.
- Shared components (Button, Card, Input).

### Phase 2: Landing Page Implementation
- Section-by-section development (Hero to Contact).
- Responsive design & animations (Framer Motion).
- Lead generation (Sponsorship enquiry form).

### Phase 3: Final Polishing & Content
- Content population based on provided details.
- SEO optimization and performance tuning.
- Final cross-browser testing and responsive fixes.

### Phase 4: Launch
- Production deployment (Vercel).

### Phase 5: Testing & Launch
- Cross-browser testing.
- Load testing for ticketing spikes.
- Production deployment (Vercel).

## 6. Next Steps
1. Finalize UI brand guidelines (Anita B guidelines).
2. Design Mockups using Pencil tool.
3. Setup Firebase Project & API Keys.
