# Missing Assets Checklist

Assets needed to complete the landing page. Drop each file into `/public/` and update references if the filename differs.

## Logo
- **File needed:** `/public/logo.svg` (or `.png`)
- **Current state:** Placeholder SVG with an "R" icon
- **Used in:** Navbar, Footer, Contact page navbar, Legal pages header
- **Recommended specs:** SVG preferred, ~32x32 icon mark. The text "Renderly" is rendered separately via code, so only the icon/mark is needed.
- **Files to update if filename changes:**
  - `src/features/landing-final/navbar.tsx` (line 106)
  - `src/features/landing-final/cta-footer.tsx` (line 139)
  - `src/features/contact/contact-page.tsx` (line 82)
  - `src/app/legal/layout.tsx` (line 13)

## Hero Video
- **File needed:** `/public/hero-demo.mp4`
- **Current state:** `<video>` element with SVG poster placeholder, no MP4 file
- **Used in:** Hero section (auto-plays muted, loops)
- **Recommended specs:** MP4, H.264 codec, 1280x720 or 1920x1080, under 10MB for fast load
- **File reference:** `src/features/landing-final/hero.tsx` (line 150)

## Hero Video Poster
- **File needed:** `/public/video-poster.jpg` (or keep current `.svg`)
- **Current state:** Placeholder SVG gradient with play icon
- **Used in:** Hero video poster attribute (shows before video loads)
- **Recommended specs:** JPG, same dimensions as video (1280x720 or 1920x1080), under 200KB
- **File reference:** `src/features/landing-final/hero.tsx` (line 147)

## CTA Section Video
- **File needed:** `/public/demo-video.mp4`
- **Current state:** `<video>` element with SVG poster placeholder, no MP4 file
- **Used in:** CTA/early-access section (click to play with controls)
- **Recommended specs:** MP4, H.264 codec, 800x600 (4:3 aspect), under 15MB
- **File reference:** `src/features/landing-final/cta-footer.tsx`

## CTA Video Poster
- **File needed:** `/public/demo-poster.svg` (or `.jpg`)
- **Current state:** Placeholder SVG gradient
- **Used in:** CTA video poster attribute
- **Recommended specs:** JPG, 800x600 (4:3 aspect), under 150KB
- **File reference:** `src/features/landing-final/cta-footer.tsx`

## Social / OG Image
- **Current state:** Dynamically generated at `/opengraph-image` (1200x630 PNG)
- **Status:** Working. Auto-generated with brand colors, stats, and title.
- **Optional improvement:** Replace with a static designed image at `/public/og-image.png` for consistency across all social platforms. If provided, add explicit `images` to the openGraph config in `src/app/layout.tsx`.
