# PLAN: Sandcastles.ai Clone for Renderly

> 3 parallel sandboxes producing design variants of the Renderly landing page,
> inspired by [sandcastles.ai](https://www.sandcastles.ai/).

---

## Objective

Replace the current Renderly landing page with a new design cloning the
structure, layout patterns, and visual language of sandcastles.ai — adapted
to Renderly's virtual staging product, copy, and brand colors.

## Sandboxes

| Sandbox | Personality | Copy | Goal |
|---------|-------------|------|------|
| 1 | **Literal** | Existing Renderly copy (`copy.ts`) | Pixel-faithful clone of sandcastles.ai layout/design |
| 2 | **Creativo** | Existing Renderly copy (`copy.ts`) | Sandcastles-inspired but with UX/animation improvements |
| 3 | **Disruptivo** | **New variant 3 copy** (`forja/copy-variant-3.md`) | Sandcastles structure + outcome-focused copy + experimental design |

## Supabase

No. This is a frontend-only landing page. No database involved.

## Phases (shared across all sandboxes)

Each agent builds the full landing page section by section:

### Phase 1: Foundation + Navbar
- Remove `scroll-expansion-hero.tsx` usage (replace with standard hero)
- Build new navbar matching sandcastles pattern (fixed, solid bg, logo left, links center, CTA right)
- Dark theme base: `#08090D` bg with blue accent `#2D5BFF`
- Keep bilingual support via `copy.ts`

### Phase 2: Hero Section
- Trust badge pill (avatars + "Trusted by 2,000+ agents & homeowners")
- Large H1 with keyword highlight in brand color
- Subtitle paragraph
- Single CTA button
- Below: product screenshot/mockup with optional play button overlay

### Phase 3: Features Carousel
- Section heading "Everything you need..."
- Horizontal scrolling cards (prev/next arrows)
- Each card: screenshot image + bold title + short description
- Map to Renderly features: AI Staging, Style Library, MLS-Ready, Video Tours, Custom Branding, Batch Processing

### Phase 4: How It Works (Tabbed)
- 3-4 step tabbed interface (not vertical steps)
- Left: tab list with step number + title + description
- Right: screenshot/mockup for selected tab
- Upload -> Style -> Download (+ optional "Share" step)

### Phase 5: Big Claim / Stats Section
- Dark full-width section
- Badge pill ("X rooms staged daily")
- Large typographic claim: "Save 95% vs traditional staging"
- Background: product screenshot or abstract visual

### Phase 6: Testimonials Carousel
- Star rating + "Trusted by X+ creators and brands" heading
- Horizontal card carousel
- Each card: quote icon, testimonial text, avatar + name
- Dark card on darker bg aesthetic

### Phase 7: Pricing Section
- Heading + subtitle
- Monthly/one-time toggle (adapted: "Per Property" / "Enterprise")
- 3-4 tier cards (not table)
- Popular card highlighted with badge
- Feature list with checkmarks per card

### Phase 8: FAQ Section
- Tabbed categories (General, Pricing, Technical)
- Accordion within each tab
- "Still have questions?" heading + "Contact Us" link

### Phase 9: Final CTA + Footer
- Dark section with heading + CTA + "Watch video" link
- Minimal footer: logo, nav columns, legal links, copyright

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 + React 19 + TypeScript |
| Styles | Tailwind CSS 3.4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Components | Custom (no shadcn dependency for this build) |

## Success Criteria

- `npm run build` passes with zero errors
- All sections render correctly at mobile + desktop
- Bilingual toggle works (EN/ES)
- Design is clearly sandcastles.ai-inspired but branded for Renderly
- Each sandbox produces a different interpretation
