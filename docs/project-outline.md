# Project: GHCI 2027 Microsite - Comprehensive Plan

## 1. Project Overview
The GHCI 2027 Microsite serves as a conversion-focused event landing page for the Grace Hopper Celebration India. It aims to provide essential information (Hero, About, Agenda, Speakers, Benefits, Ticketing, Sponsorship) in a clean, single-scroll experience. A secure admin dashboard will manage registrations, guest lists, and payment tracking.

## 2. Technical Stack
- **Frontend**: Next.js (App Router), Tailwind CSS, shadcn/ui, Lucide Icons.
- **Backend/Database**: Firebase (Firestore for data, Auth for admin access, Storage for assets).
- **Payments**: Razorpay Integration (Webhook-based confirmation).
- **Forms**: React Hook Form + Zod for validation.
- **Analytics**: Vercel Analytics / Google Analytics (optional).

## 3. Core Features & Architecture

### A. Microsite (Public Facing)
1. **Hero Section**: High-impact visuals, clear CTA (Register Now), dates, and venue.
2. **About Section**: Mission statement and impact of GHCI.
3. **Agenda**: Dynamic schedule with tracks and keynote speakers.
4. **Speakers**: Hover-enabled speaker cards with bios/profiles.
5. **Ticketing**: Pricing tiers (Student, Professional, Corporate) with real-time availability.
6. **Sponsorship**: Partner logos and "Become a Sponsor" enquiry form.
7. **Contact**: Essential links, social media, and support email.

### B. Admin Dashboard (Internal)
- **Authentication**: Firebase Auth (email/password or SSO).
- **Dashboard Overview**: Metrics (Total Tickets Sold, Revenue, Guest Count).
- **Ticket Management**: List view, search/filter by type, status.
- **Guest Management**: Detailed guest info, check-in status (QR scan ready).
- **Payment Logs**: Razorpay transaction status tracking.

## 4. Proposed Sitemap & Routes
| Path | Description | Access |
|------|-------------|--------|
| `/` | Landing Page (continuous scroll) | Public |
| `/tickets/success` | Post-payment success page | Public |
| `/admin/login` | Secure login for staff | Public (Unauth) |
| `/admin/dashboard` | Main operational metrics | Admin Only |
| `/admin/tickets` | Ticket sales and management | Admin Only |
| `/admin/guests` | Attendee list and check-in | Admin Only |
| `/admin/payments` | Payment reconciliation | Admin Only |

## 5. Development Phases

### Phase 1: Setup & UI Foundation
- Next.js project initialization.
- shadcn/ui and Tailwind configuration.
- Shared components (Button, Card, Input).

### Phase 2: Landing Page Implementation
- Section-by-section development (Hero to Contact).
- Responsive design & animations (Framer Motion).
- Lead generation (Sponsorship enquiry form).

### Phase 3: Firebase & Razorpay Backend
- Firestore schema design.
- Razorpay API integration & Webhook handler.
- Secure ticket issuance logic.

### Phase 4: Admin Dashboard
- Auth implementation.
- Data fetching with React Query/SWR or Server Components.
- CRUD operations for tickets and guests.

### Phase 5: Testing & Launch
- Cross-browser testing.
- Load testing for ticketing spikes.
- Production deployment (Vercel).

## 6. Next Steps
1. Finalize UI brand guidelines (Anita B guidelines).
2. Design Mockups using Pencil tool.
3. Setup Firebase Project & API Keys.
