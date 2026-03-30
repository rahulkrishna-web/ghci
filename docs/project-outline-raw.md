# Project: GHCI 2027 Microsite

## raw client brief

The website is for GHCI.
The Grace Hopper Celebration India (GHCI) is a technical conference for women and allies in technology, hosted by AnitaB.org India in partnership with ACM India. The event brings together professionals for networking, mentoring, and technical sessions, aiming to achieve a 50/50 gender-equitable workforce in technology.
Here is the link - https://ghci.anitabindia.org/

Files we have
Logo units: https://drive.google.com/drive/folders/1JC677vrG9pQe5FRZq5lkZCIAohj6_Km9?usp=drive_link (Parent org)
Asked for the GHCI logo unit
Also Attaching the Anita B guidelines just for your reference

Approach

We’re treating this as a clean, conversion - focused event microsite (not a full website).
The goal is to make information easy to consume while driving registrations and sponsorship enquiries.

The structure will remain simple (continuous scroll) and will cover:

Hero Section

About GHCI 2027 (including venue and dates)

Tentative Agenda (Keynotes, Tracks, Sessions, Expo, Pathways)

Speakers (Past + Current)

Benefits for attendees (Students, Corporates, Community, Individuals)

Ticketing (pricing, inclusions, exclusions, registration)

Sponsorship (Previous partners + current opportunities)

Contact

## tech

- nextjs
- shadcn ui
- firebase
- razorpay(for payments)

## architecture

- / the landing page
- /admin the admin dashboard
  - /admin/login
  - /admin/dashboard
  - /admin/dashboard/tickets
  - /admin/dashboard/tickets/[id]
  - /admin/dashboard/guests
  - /admin/dashboard/guests/[id]
  - /admin/dashboard/payments
  - /admin/dashboard/payments/[id]
