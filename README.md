# Apex Housing Limited — Next.js

Marketing site for Apex Housing Limited: 3-bedroom, 2-bathroom apartments in a four-story building
on Woodward Avenue, Detroit, MI 48226.

Rebuilt from the previous static export into a maintainable **Next.js 15 App Router** project with
TypeScript, React 19 and plain CSS.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run typecheck
```

`next.config.mjs` uses `output: 'export'`, so `npm run build` produces a fully static site in `out/`
that can be hosted on any static host (Vercel, Netlify, S3, GitHub Pages, cPanel).

## Project structure

```
app/
  layout.tsx        Metadata, viewport, favicons, font preloads, JSON-LD schema
  page.tsx          Section composition for the single-page site
  globals.css       Design tokens, base styles, components, animations
components/
  Header.tsx        Sticky header, scroll state, mobile drawer  (client)
  Hero.tsx          Hero with parallax image and animated counters
  Highlights.tsx    Four-up highlight cards
  About.tsx         About copy, checklist, "04 stories" badge
  Features.tsx      Eight apartment feature cards
  FloorPlans.tsx    Floor-plan section + unit spec list
  FloorPlan.tsx     Animated SVG floor plan (draws in on scroll)   (client)
  Gallery.tsx       Tile grid, "view full gallery" toggle, lightbox (client)
  Location.tsx      Address, Google Maps embed, nearby highlights
  Quote.tsx         Inquiry section wrapper
  QuoteForm.tsx     Validated form that hands off to WhatsApp       (client)
  Cta.tsx           Contact band
  Footer.tsx        Footer navigation and details
  Reveal.tsx        Scroll-reveal wrapper (IntersectionObserver)    (client)
  CountUp.tsx       Number count-up on first view                   (client)
  ParallaxImage.tsx Scroll parallax image                           (client)
  ScrollProgress.tsx Top reading-progress bar                       (client)
  Icons.tsx         Inline SVG icon set and logo
lib/
  site.ts           All site content: contact details, nav, features, gallery, specs
public/
  images/           WebP photography
  fonts/            Cabinet Grotesk + Satoshi (self-hosted woff2)
```

## Editing content

Nearly all copy and data lives in `lib/site.ts` — phone number, email, address, navigation,
highlights, amenity list, gallery images, unit specs, nearby highlights, and form options. Change it
there and every section updates.

Room geometry for the floor plan is data-driven in `components/FloorPlan.tsx` (`ROOMS`, `DOORWAYS`,
`WINDOWS`).

## Notes

- Animations respect `prefers-reduced-motion`.
- The quote form is client-side only: it formats the input into a WhatsApp message and opens
  `wa.me`. No backend is required. To email submissions instead, swap the handler in
  `QuoteForm.tsx` for a route handler or form service (and drop `output: 'export'` if you need a
  server route).
- Images are served unoptimized because static export disables the Next.js image optimizer.
