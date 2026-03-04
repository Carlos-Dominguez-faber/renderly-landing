# Renderly — Consolidation Plan

## Goal
Promote the cherry-picked "final" landing page to be the main site at `/`. Delete all A/B testing variants. Fix broken links. Create Contact, Privacy Policy, and Terms of Service pages.

## Phases

### Phase 1: Delete Variant Code ✅
- Deleted route dirs: `/original`, `/v1`, `/v2`, `/v3`, `/final`
- Deleted feature dirs: `landing/`, `landing-v1/`, `landing-v2/`, `landing-v3/`
- Deleted 9 orphaned UI components (kept `badge.tsx`, `button.tsx`)

### Phase 2: Promote Final to Root ✅
- Replaced `src/app/page.tsx` variant picker with direct `FinalLandingPage` import

### Phase 3: Fix Broken Links ✅
- CTA button → `/signup`
- About → `https://systemizemybiz.agency` (external)
- Contact → `/contact`
- Login → `/login` (added to footer)
- Privacy Policy → `/legal/privacy-policy`
- Terms of Service → `/legal/terms-of-service`
- Blog → `#` (pending user URL)

### Phase 4: Create New Pages
- `/contact` — Contact form page (sandcastles.ai inspired)
- `/legal/privacy-policy` — Full privacy policy
- `/legal/terms-of-service` — Full terms of service

### Phase 5: CSS Cleanup + Sitemap ✅
- Removed ~80 lines of V3-only CSS
- Added 3 new pages to sitemap.ts

## Links Still Needing User Input
- Blog URL
- Contact email (defaulting to hello@renderly.com)
- Video demo URL (play button in CTA section)
