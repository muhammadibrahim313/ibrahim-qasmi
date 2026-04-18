
User picked **3 = Arctic Holo**. Building the entire site around it.

## Arctic Holo Brand System

**Palette**
- Base: midnight `#050A14` (HSL 217 62% 5%)
- Surface: deep navy `#0A1224` (HSL 222 55% 9%)
- Primary: holo cyan `#7DF9FF` (HSL 184 100% 74%)
- Accent: soft pink `#FF80B5` (HSL 333 100% 75%)
- Text: frost white `#F0F6FF` / muted `#8A9BB8`
- Signature gradient: `cyan → pink` for headlines, buttons, borders

**Typography**
- Display: `Sora` (700/800) — headings, hero
- Body: `Inter` (400/500) — paragraphs, UI
- Mono: `JetBrains Mono` — stats/numbers (3×, 88th, Top 1%)
- Replace global Playfair

**Signature effects**
- Frosted glass (backdrop-blur + low-alpha border) on nav, cards, modals
- Holographic gradient borders on hover (conic cyan→pink→cyan)
- Soft floating gradient orbs (cyan + pink) in hero/contact backgrounds
- Subtle grain/noise overlay site-wide
- Glow shadows in cyan on primary buttons & active states

## Component refresh

- **Navigation**: floating glass pill, blurred bg, animated cyan underline, mobile drawer recolor
- **Hero**: huge Sora headline, gradient text on "AI Engineer", recolored avatar ring (cyan→pink), floating orbs, restyled CTAs (Resume now `View my CV`)
- **Section headers**: small label `— 02 / Skills` + large display title — editorial feel
- **Cards** (Projects, Achievements, Blogs, Kaggle, Hackathons, Certificates, Talks, Testimonials, Recommendations, Mentorship, Community, OpenSource, Badges): frosted-glass surface, gradient border on hover, lift + cyan glow, image hover zoom
- **Buttons**: primary = cyan with pink glow on hover; secondary = ghost with gradient border; arrow slide
- **Skill chips**: cyan-tinted glass pills, pink hover glow
- **Contact form**: glass inputs with cyan focus ring
- **AnimatedGridBackground**: recolor dots/lines/ripples to cyan + pink
- **ScrollToTop**: glass circle with cyan glow
- **Footer**: glass band, gradient divider, recolored social icons

## Files to update

1. **Foundation** (instant site-wide flip)
   - `index.html` — load Sora + Inter + JetBrains Mono
   - `src/index.css` — full HSL token rewrite, gradients, shadows, grain bg, glass utility, new keyframes
   - `tailwind.config.ts` — fonts, brand colors, custom shadows/blurs

2. **Top of page**
   - `src/components/Navigation.tsx`
   - `src/components/Hero.tsx`
   - `src/components/AnimatedGridBackground.tsx`

3. **All sections**
   - `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Achievements.tsx`, `Experience.tsx`, `Education.tsx`, `Blogs.tsx`, `Hackathons.tsx`, `KaggleDatasets.tsx`, `Talks.tsx`, `Certificates.tsx`, `Badges.tsx`, `OpenSource.tsx`, `CommunityLeadership.tsx`, `MentorshipVolunteering.tsx`, `Recommendations.tsx`, `Testimonials.tsx`, `Contact.tsx`, `SocialLinks.tsx`

4. **Polish**
   - `src/components/ScrollToTop.tsx`
   - `src/pages/Index.tsx` (footer)

## Build order

Foundation → Nav + Hero → Section batch 1 (About/Skills/Projects/Achievements) → Section batch 2 (Experience/Education/Blogs/Kaggle/Hackathons) → Section batch 3 (Talks/Certificates/Badges/OpenSource/Community/Mentorship) → Section batch 4 (Recommendations/Testimonials/Contact/Social) → Footer + ScrollToTop polish.

Approve and I'll start building in default mode.
