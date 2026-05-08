# Light Editorial Redesign Plan

Convert the portfolio from dark/cyan to a clean light editorial design. Keep all content, sections, links, and the existing dark theme as an optional toggle.

## 1. Design tokens (`src/index.css` + `tailwind.config.ts`)

Set light mode as default `:root`, move current dark palette to `.dark`:

- `--background` → #F8FAF7
- `--secondary` (section bg) → #EEF4EF
- `--card` / `--popover` → #FFFFFF
- `--foreground` → #141714
- `--muted-foreground` → #5E6861
- `--border` / `--input` → #D8E2DA
- `--primary` → #007C75, hover #075650
- `--accent` → #007C75
- New token `--gold` → #C77A14 (used for stat numbers, medal accents)
- `--ring` → #007C75
- Replace `--hero-gradient`, `--neon-glow`, `--skill-chip` with light-mode-friendly equivalents (subtle teal glow, white chip with teal border).
- Keep existing `.dark` block updated with the current dark palette so toggle still works.

Add fonts: import Playfair Display + Inter. Body uses Inter; headings use Playfair via a new `font-serif` family. Update `tailwind.config.ts` font families and add `gold` color.

## 2. Theme toggle

- Add `src/hooks/useTheme.ts`: reads/writes `localStorage('theme')`, toggles `.dark` class on `<html>`. Default = light.
- Add a small Sun/Moon button in `Navigation.tsx` (desktop nav + mobile menu).

## 3. Navigation (`src/components/Navigation.tsx`)

- Sticky, light translucent background (`bg-background/80 backdrop-blur`), bottom border `--border`.
- Left: "Ibrahim Qasmi" wordmark (serif).
- Center links: Work, Focus, Proof, Articles, Contact (anchor to existing sections; map to existing IDs).
- Right: theme toggle + "Book a Session" primary button (Topmate URL).
- Mobile: hamburger sheet with same items.

## 4. Hero (`src/components/Hero.tsx`)

Restructure to two-column editorial layout:

- Eyebrow: "AI Engineer • Kaggle Grandmaster"
- H1 (serif, large): "Building AI systems that move from notebooks to real users."
- Paragraph: provided supporting text.
- Buttons: Primary "Book a Session" (Topmate), Secondary "See Selected Work" (#work).
- Right: existing headshot in a white panel with subtle border + soft shadow (no neon ring).

Below hero: full-width **Proof strip** in `--secondary` background, 4 stats with gold numbers + muted labels (3x Kaggle GM, 7x Hackathon Winner, 500+ Mentorship Hours, 50+ AI Projects).

## 5. Section system

Reusable visual rules applied across all sections:

- `section-padding` keeps generous spacing.
- Alternate backgrounds: `bg-background` and `bg-secondary` for rhythm.
- Section heading: small uppercase eyebrow + serif H2 + short subhead.
- Cards: `bg-card border border-border rounded-lg` (8px), no nested cards, no heavy shadows. Hover: subtle border-color shift to primary/40 and 1px lift.
- Remove cyan glows / neon-border usages site-wide; replace with the new card style.

## 6. Selected Work (rename from Featured Projects)

`src/components/Projects.tsx`:

- Section title "Selected Work".
- First 2 projects: large 2-col cards (image left, content right) for hierarchy.
- Remaining: 3-col grid of standard cards.
- Each card: image, small pill (category/status), title (serif), 1-2 line outcome description, Demo/GitHub buttons (secondary style). Keep existing data; just restructure presentation.

## 7. Achievements (`src/components/Achievements.tsx`)

Keep all items, regroup under 4 clear subheadings with simple lists/cards:

1. Global recognition
2. Kaggle achievements
3. Hackathon wins
4. Programming contests

Use gold only for medal/rank numbers, neutral text otherwise. Reduce decorative elements.

## 8. Other sections

Apply the new tokens + card style to:

About, Experience, Education, Skills, Certificates, Badges, Blogs, Talks, CommunityLeadership, MentorshipVolunteering, KaggleDatasets, OpenSource, Hackathons, Recommendations, Testimonials, Contact, Footer (in Index), SocialLinks sidebar, ScrollToTop.

Mostly mechanical: swap `bg-card`/dark surfaces, remove cyan accents, ensure text uses `text-foreground` / `text-muted-foreground`, buttons use new primary/secondary variants.

## 9. Buttons

Add two button variants in `src/components/ui/button.tsx`:

- `primary` → `bg-primary text-primary-foreground hover:bg-[hsl(var(--primary-hover))]` (token `--primary-hover` = #075650).
- `outlineDark` → `border border-foreground text-foreground hover:bg-foreground hover:text-background`.

Use across Hero, Nav, Projects, Contact CTA.

## 10. Links cleanup

Audit components for `href="#"` placeholders; either point to a real anchor or render as a disabled-looking span (muted, not clickable). Keep all real external links unchanged with `target="_blank" rel="noopener noreferrer"`.

## 11. Accessibility & responsive

- Maintain visible focus rings (teal on light bg).
- Ensure WCAG AA contrast with the new palette.
- Test hero, proof strip, project grid, and nav at mobile widths; stack columns, scale serif headings down.
- Keep "Skip to content" link styled for light bg.

## Technical notes

- All colors stored as HSL in `index.css` and referenced via Tailwind tokens. No raw hex in components.
- `--gold` exposed in Tailwind config as `gold` color.
- Dark mode preserved by keeping current values inside `.dark { ... }` block; toggle adds/removes `dark` class on `<html>`.
- Playfair Display loaded via Google Fonts `<link>` in `index.html` for performance, replacing the current Inter-only import.
- No backend or data changes; purely presentation.
