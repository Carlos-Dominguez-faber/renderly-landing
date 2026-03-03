# Design Reference: sandcastles.ai

> Visual specification extracted from https://www.sandcastles.ai/
> Agents use this as the north star for layout, spacing, and visual patterns.

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#0A0B14` | Page background (very dark navy/black) |
| Surface | `#12131F` | Card backgrounds, elevated surfaces |
| Surface-alt | `#1A1B2E` | Slightly lighter cards (pricing, features) |
| Accent | `#3B5BFE` | Primary blue (CTAs, highlighted text, icons) |
| Accent-hover | `#4D6BFF` | Blue hover state |
| Text-primary | `#FFFFFF` | Headings, primary text |
| Text-secondary | `#8B8FA3` | Body text, descriptions |
| Text-muted | `#5A5E73` | Labels, metadata |
| Border | `rgba(255,255,255,0.08)` | Card borders, dividers |
| Border-hover | `rgba(255,255,255,0.15)` | Hover state borders |

### Renderly Adaptation

Map to Renderly brand tokens:
- `#0A0B14` → `var(--bg-dark)` / `#08090D`
- `#3B5BFE` → `var(--primary)` / `#2D5BFF`
- CTA buttons: use `var(--cta)` / `#FF6B4A` (Renderly's orange, NOT sandcastles' blue)
- Keep the dark aesthetic but use Renderly's orange as the warm accent

---

## Typography

| Element | Size (desktop) | Weight | Font |
|---------|---------------|--------|------|
| H1 (hero) | ~72px / 4.5rem | 700 (bold) | Sans-serif (system or Inter-like) |
| H2 (sections) | ~48px / 3rem | 600 (semibold) | Same |
| H3 (cards) | ~20px / 1.25rem | 600 | Same |
| Body | ~16px / 1rem | 400 | Same |
| Badge/label | ~14px / 0.875rem | 500 | Same |
| Small | ~12px / 0.75rem | 400 | Same |

### Renderly fonts
Use `font-display` for headings, `font-body` for body text (already configured in Tailwind).

---

## Layout Patterns

### Navbar
- **Position**: Fixed top, full-width
- **Height**: ~64px
- **Background**: Transparent on top, solid dark on scroll (no blur/glass — solid bg)
- **Layout**: Logo (left) — Nav links (center) — Login + CTA (right)
- **CTA button**: Filled blue/accent with rounded corners (~8px)
- **Links**: White/muted, no underline, hover brightens
- **No burger menu** visible in desktop (links hidden on mobile with hamburger)

### Hero
- **Layout**: Centered text, full-width dark bg
- **Trust badge**: Centered above H1 — pill shape, small avatars + text
- **H1**: 2-3 lines, center-aligned, keyword phrase highlighted in accent color
- **Subtitle**: 1-2 lines, muted text, center-aligned
- **CTA**: Single button, centered, filled accent color
- **Product screenshot**: Large rounded card below CTA showing the actual product UI
- **Play button**: Centered overlay on screenshot with "Play video" label
- **Spacing**: ~120px top padding, ~60px between elements

### Features Carousel
- **Heading**: Center-aligned H2
- **Carousel**: Horizontal scrollable, 3 cards visible on desktop
- **Arrows**: Previous/Next buttons top-right of heading row
- **Cards**: ~350px wide, rounded-xl, dark surface bg, border
  - Top: Screenshot image (rounded corners, fills card width)
  - Bottom: Bold title (with **strong** keyword highlighted) + description paragraph
- **Card hover**: Subtle border brighten

### How It Works (Tabbed)
- **Layout**: 2-column — tab list (left ~40%) + content panel (right ~60%)
- **Tab list**: Vertical stack of 4 tabs
  - Each tab: "STEP N" label (small, muted) + H3 title + description
  - Active tab: Left border accent, brighter text
  - Inactive: Dimmed text, no border
- **Content panel**: Large rounded screenshot for active tab
- **Background**: Dark, minimal

### Stats/Big Claim Section
- **Full-width dark section** with center-aligned content
- **Badge pill**: Small text above heading
- **H2**: Very large type (bigger than other section H2s), split into 2 lines
  - Keyword phrase in accent color
- **Background image**: Product screenshot, slightly dimmed, below text
- **Gradient overlay**: Bottom fade to black

### Testimonials
- **Trust bar**: Star icons (5 stars filled) + "4.9/5 Rating" + avatar stack
- **H2**: "Trusted by 75K+ creators and brands"
- **Carousel**: Horizontal scroll, 3 cards visible
  - Card: Dark surface, quote icon (blue, top-left), testimonial text, divider, avatar + name
  - Quote icon: Stylized quotation marks image/SVG
- **Arrows**: Previous/Next below carousel

### Pricing
- **Heading**: H2 + subtitle
- **Toggle**: Monthly / Yearly pill toggle (one active, one dimmed)
  - "save 20% with yearly" badge next to toggle
- **Cards**: 3 columns, equal height
  - Header: Plan name (H3) + description
  - Price: Large number + "/mo" suffix + "Billed Monthly/Yearly" subtext
  - Strikethrough old price, accent new price
  - "Includes:" label + feature list with check icons
  - CTA: "Start for Free →" link at bottom
  - Popular card: "Popular" badge, slightly elevated or bordered differently
- **Card style**: Dark surface, rounded-xl, subtle border

### FAQ
- **Layout**: Left column (H2 + "Contact Us" link) + Right column (content)
- **Tabs**: Horizontal pill tabs: "General", "Billing", "Account"
- **Accordion**: Each item has question + expand/collapse arrow
  - Expanded: Shows answer paragraph
  - Collapsed: Just question text
- **Style**: Clean, minimal, dark bg

### Final CTA
- **Full-width section** with dark gradient bg
- **Content**: H2 + subtitle + CTA button + "WATCH VIDEO" label with play icon
- **Below**: Video thumbnail with play overlay (same as hero pattern)

### Footer
- **2-row layout**:
  - Top: Logo (left) + 2 link columns (right)
  - Bottom: Copyright (left) + Legal links (right)
- **Style**: Very minimal, muted text, dark bg

---

## Component Patterns to Note

### Pill Badges
- `rounded-full px-4 py-1.5 text-sm font-medium`
- Dark surface bg with border
- Sometimes: avatar stack before text

### CTA Buttons
- `rounded-lg px-6 py-3 font-semibold`
- Filled accent color (Renderly: orange `#FF6B4A`, not blue)
- Hover: Slightly lighter + subtle shadow
- No border

### Cards
- `rounded-2xl border border-white/[0.08] bg-[surface-color]`
- Hover: border brightens to `border-white/15`
- Subtle shadow on hover
- Internal padding: `p-6` to `p-8`

### Screenshots/Mockups
- `rounded-xl overflow-hidden shadow-2xl`
- Often with slight border
- Dark overlay for video thumbnails

### Section Spacing
- Between sections: ~120px (`py-24` to `py-32`)
- Section heading to content: ~48px (`mb-12`)
- Max content width: ~1200px (`max-w-7xl`)

---

## Animations (observed)

- **Fade-in on scroll**: Sections fade in as they enter viewport
- **Carousel slide**: Smooth horizontal scroll on arrow click
- **Tab switch**: Content fades/slides when tab changes
- **Hover effects**: Cards scale slightly (1.01-1.02), borders brighten
- **No heavy motion**: Clean, professional, subtle. No parallax, no particle effects.

---

## Key Differences from Current Renderly

| Current Renderly | Sandcastles Target |
|------------------|-------------------|
| Scroll-expansion hero | Standard centered hero + product screenshot |
| Vertical steps (How it Works) | Tabbed layout with screenshots |
| No testimonials section | Carousel testimonials |
| Card-grid pricing | Card pricing with toggle |
| Simple accordion FAQ | Tabbed + accordion FAQ |
| PulseBeams animation | Minimal fade-in animations |
| Floating glass navbar | Solid dark navbar |
| Multiple ambient glow effects | Clean, flat dark aesthetic |
