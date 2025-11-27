# Alpha MMA Site Study

This file summarizes the structure, technology indicators, content, and recommendations for the Alpha MMA website (https://alphamma.com.au/).

## Summary
- The site is built using the GoDaddy Website Builder (footer: powered by GoDaddy). It is a single-page, content-focused site with sections for Coaches, Timetable, Membership, FAQ, and Contact.
- Images are hosted on `img1.wsimg.com` (GoDaddy hosted images). The sitemap references only the root page (single-page architecture).
- There is no visible online booking system or embedded booking widget. The site uses a contact form and phone for sign-ups and enquiries.

## What I inspected
- Homepage and anchored sections (About, Coaches, Timetable, Memberships, FAQ, Contact)
- Sitemap and robots.txt
- Page structure and image hosting patterns

## Key Observations
- Hosting/CMS: GoDaddy site builder (static site with WSIMG)
- Booking: No embedded third-party booking visible; likely sign-ups are manual via contact form or phone. Timetable content may not be an independent public page.
- Content: Coach bios, memberships (adult/teen/kids), FAQs, address and contact info present; clear CTAs to call or message.

## SEO & Accessibility
- The site is simple and content-focused. Page metadata appears present (titles and content). Sitemap includes only the root page; adding more structured metadata would help.
- Accessibility: Images include alt text; but otherwise no obvious accessibility applets visible. Keyboard/ARIA checks would require deeper auditing.

## Suggested features to add (migration to the booking platform)
1. Timetable & Class Scheduling
   - Add a schedule view with class grid (day/week), class cards, capacity, and instructor.
   - Add booking functionality: single-class bookings, class passes, memberships, trial passes.
   - Support recurring classes, cancellation rules, waitlists, and capacity management.

2. Membership & Payments
   - Integrate Stripe for recurring memberships and one-off passes.
   - Create member portal to view bookings and invoices.

3. Booking Integrations / Providers
   - If the client prefers their existing provider (Mindbody, Glofox, GymMaster), integrate their API or embed widget.
   - Optionally provide a local scheduling API for the platform to track availability and booking history.

4. Administrative Tools
   - Build a basic admin dashboard for class scheduling, attendee management, waitlists, and reports.

5. SEO & Content Enhancements
   - Add JSON-LD event schema for classes and structure athlete/coaches content using Person schema.
   - Add canonical and Open Graph metadata and ensure images are correctly sized with srcset.

6. Accessibility & UX
   - Ensure keyboard navigation for schedule, ARIA roles for modal booking flows, and screen-reader friendly forms.
   - Add captions/accessible content where media exists.

## How to integrate this into the current repo
1. Create a tenant branch/feature (e.g., `feature/alphamma-tenant`) in your fork.
2. Add `src/tenants/alphamma` with the following files:
   - `content.config.ts` — site copy: address, coaches, membership tiers, contact info.
   - `theme.config.ts` — color palettes, fonts matching the site.
   - `photos.config.ts` — image references and thumbnails.
   - `schedule.json` — a placeholder dataset for classes and times.
3. Implement components in the template (React): `TimetableGrid`, `ClassCard`, `BookingModal`, and `MemberDashboard`.
4. Implement an API layer to persist bookings + member data (REST or GraphQL).
5. Implement payment (Stripe) and optionally integrate with an existing booking provider API.

## Next steps I can take
- A) Scaffold a tenant for Alpha MMA in `src/tenants/alphamma` with sample data and components.
- B) Build a timetable UI and demo booking flow (mock data + Stripe test integration).
- C) Do a deeper SEO and accessibility audit with a prioritized issue list.

If you want me to move forward with scaffolding or implementing a feature, tell me which option (A/B/C) you prefer and I can implement it in your fork and open a PR for review.
