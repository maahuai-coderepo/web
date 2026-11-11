# Maahu Brand Guidelines
## Design & Code Standards — v1.1

*This document is the single source of truth for all visual and code decisions across the Maahu website. Every page must follow these rules. When in doubt, refer here.*

---

## 1. Brand Voice

**Tagline:** Wear More. Own Less.

**Tone:** Confident, intelligent, culturally specific. Never promotional. Speaks like a trusted friend who happens to know finance.

**CTA Language:**
- Nav button → **"Join the Squad"** (short, fits nav space)
- All other CTAs → **"Join the Founding Squad"**
- Occasions section only → **"Join to Access →"** (contextual)
- Never use: "Join the Maahu Squad", "Sign Up", "Register"

---

## 2. Colour Palette

### Production Theme (linen-led pages)
Used on: index, about, how-it-works, join, blog listing and article reading surfaces

```css
--cream:      #f7f0e6;   /* page background */
--cream-2:    #ede4d6;   /* secondary surfaces, card backgrounds */
--cream-3:    #e4d8c6;   /* hover states on cards */
--gold:       #b8933e;   /* decorative accent — badges, highlights, borders */
--gold-light: #d4ae6a;   /* hover states on gold elements */
--gold-pale:  #e8d5a8;   /* very light gold, hamburger open state */
--gold-faint: rgba(184,147,62,0.1);  /* subtle gold backgrounds */
--dark:       #1a140d;   /* dark sections, nav background on scroll */
--dark-2:     #241c12;   /* secondary dark */
--text:       #1a140d;   /* primary body text */
--text-mid:   #6b5540;   /* secondary body text */
--text-dim:   rgba(61,47,31,0.5);   /* muted text, placeholders */
--border:     rgba(184,147,62,0.18); /* gold-tinted borders */
--border-2:   rgba(61,47,31,0.1);   /* subtle warm borders */
```

### Dark Brand Moments
Used on: image heroes, navigation, major closing CTA sections and footer

```css
--cream:       #f5ede0;
--cream-dim:   rgba(245,237,224,0.6);
--cream-faint: rgba(245,237,224,0.08);
--gold:        #c9a96e;   /* slightly lighter gold for dark backgrounds */
--gold-light:  #e8cfa0;
--gold-faint:  rgba(201,169,110,0.15);
--dark:        #0e0b08;   /* deepest background */
--dark-mid:    #1a1410;
--dark-card:   #161109;   /* article card backgrounds */
```

---

## 3. Typography

### Font Families
```css
/* Serif — emotion, headlines, brand moments */
font-family: 'Cormorant Garamond', serif;
/* Weights used: 300, 400, 500 */
/* Italic used for key words in headlines */

/* Sans-serif — body, UI, labels */
font-family: 'Jost', sans-serif;
/* Weights used: 200, 300, 400, 500 */
/* Default body weight: 300 */
```

### Type Scale — Main Site

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Hero title | Cormorant Garamond | clamp(56px, 8.5vw, 104px) | 300 | 0.98 | -0.02em |
| Section title | Cormorant Garamond | clamp(34px, 4vw, 52px) | 300 | 1.15 | 0 |
| How-it-works title | Cormorant Garamond | clamp(34px, 4vw, 52px) | 300 | 1.15 | 0 |
| Founder title | Cormorant Garamond | clamp(32px, 4vw, 48px) | 300 | 1.15 | 0 |
| Pull quote | Cormorant Garamond | clamp(22px, 2.8vw, 32px) | 300 italic | 1.4 | 0 |
| Body text | Jost | 15px | 300 | 1.85 | 0.01em |
| Card body text | Jost | 13px | 300 | 1.8 | 0 |
| Eyebrow label | Jost | 11px | 500 | — | 0.4em |
| Nav links | Jost | 11px | 400 | — | 0.28em |
| Button text | Jost | 10px | 500 | — | 0.3–0.35em |
| Footer labels | Jost | 9px | 500 | — | 0.4em |
| Footer links | Jost | 12px | 300 | — | 0.04em |
| Caption/meta | Jost | 11px | 300–400 | — | 0.1em |

### Type Scale — Blog

| Element | Font | Size | Weight |
|---|---|---|---|
| Article title | Cormorant Garamond | clamp(38px, 5.5vw, 60px) | 300 |
| Article body | Jost | 17px | 300 |
| Article h2 | Cormorant Garamond | clamp(26px, 3.5vw, 34px) | 400 |
| Article h3 | Cormorant Garamond | 22px | 400 italic |
| Blog hero title | Cormorant Garamond | clamp(48px, 7vw, 80px) | 300 |

### Typography Rules
- **Never go below 11px** on any visible text element
- **Eyebrows** always uppercase, 0.4em letter-spacing, obsidian on linen and gold on dark surfaces, with a gold `::before` bar (24px × 1px)
- **Italic em** on key emotional words in Cormorant Garamond headlines — use obsidian with a gold underline on linen; gold is permitted on dark image overlays
- **All caps** only for labels, eyebrows, button text — never for body copy

---

## 4. Buttons

### Primary Button — `.btn-primary`
```css
font-size: 10px; font-weight: 500;
letter-spacing: 0.35em; text-transform: uppercase;
color: var(--cream); background: var(--dark);
padding: 16px 36px; border: 1px solid var(--dark);
transition: background 0.3s, transform 0.2s;
/* hover: background: var(--gold); color: var(--dark); transform: translateY(-1px) */
```

### Secondary Button — `.btn-secondary`
```css
font-size: 10px; font-weight: 400;
letter-spacing: 0.3em; text-transform: uppercase;
color: rgba(247,240,230,0.6); background: transparent;
border: 1px solid rgba(184,147,62,0.3);
padding: 15px 28px;
/* hover: border-color: var(--gold); color: var(--gold) */
```

### Major CTA Button — `.btn-gold`
```css
font-size: 10px; font-weight: 500;
letter-spacing: 0.35em; text-transform: uppercase;
color: var(--cream); background: var(--dark);
padding: 18px 48px; border: 1px solid var(--dark);
/* hover: background: var(--gold); color: var(--dark); transform: translateY(-2px) */
```

### Nav CTA — `.nav-cta`
```css
font-size: 10px; font-weight: 500;
letter-spacing: 0.3em;
color: var(--cream); background: var(--dark);
padding: 11px 24px;
border: 1px solid var(--gold);
/* hover: background: var(--gold); color: var(--dark) */
```

### Dark Button — `.btn-dark` (blog/join success)
```css
font-size: 10px; font-weight: 500;
letter-spacing: 0.35em; text-transform: uppercase;
color: var(--cream); background: var(--dark);
padding: 14px 32px;
/* hover: background: var(--gold) */
```

---

## 5. Spacing & Layout

### Container Widths
```css
--container-wide:   1200px;  /* homepage sections */
--container-normal: 1100px;  /* about, how-it-works content */
--container-narrow: 760px;   /* blog articles */
```

### Section Padding (Desktop)
```css
/* Standard section */
padding: 100px 56px;

/* Large hero sections */
padding: 120px 56px;

/* Compact sections (trust bar, stats) */
padding: 72px 56px;

/* Footer */
padding: 64px 56px 40px;
```

### Section Padding (Mobile — max-width: 900px)
```css
padding: 60px 24px;   /* standard */
padding: 80px 24px;   /* hero */
padding: 40px 24px;   /* compact */
padding: 48px 24px 32px; /* footer */
```

### Grid Gap
```css
/* Card grids */
gap: 2px;   /* tight grid — the Maahu signature */

/* Content grids */
gap: 80px;  /* two-column content layouts */

/* Team grid */
gap: 64px;  /* editorial team layout */
```

---

## 6. Navigation

### Desktop Nav
```css
position: fixed; top: 0; z-index: 200;
padding: 20px 56px;
background: rgba(247,240,230,0.95);
backdrop-filter: blur(20px);
border-bottom: 1px solid var(--border);
```

### Blog Nav (dark theme)
```css
position: sticky; top: 0; z-index: 200;
padding: 20px 56px;
background: rgba(26,20,13,0.95);
backdrop-filter: blur(20px);
border-bottom: 1px solid rgba(184,147,62,0.15);
```

### Mobile Hamburger (CRITICAL — apply to every page)
```css
/* Grain overlay — must be z-index:1 NOT 9999 */
body::after { z-index: 1; pointer-events: none; touch-action: none; }

/* Nav — always above everything */
nav { z-index: 200; pointer-events: all; }

/* Hamburger button */
.nav-hamburger {
  z-index: 210;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  cursor: pointer;
}

/* Mobile drawer */
.mobile-drawer { z-index: 205; }

/* Hero overlays — MUST have pointer-events:none */
.about-hero-overlay { pointer-events: none; }
.about-hero-img { pointer-events: none; }
/* Apply to ANY full-bleed overlay on any page */
```

### Mobile Drawer
```css
background: rgba(26,20,13,0.97);
backdrop-filter: blur(24px);
/* Nav links: Cormorant Garamond 30px weight 300 */
/* CTA: gold background, dark text, 11px uppercase */
/* City tag: 9px, gold 35% opacity, bottom 36px */
```

---

## 7. Footer

### Main Site Footer
- Dark background `var(--dark)`
- 4-column grid: brand + tagline / Navigate / Journal / Company
- Bottom bar: copyright · Instagram @maahu.ai · "Launching Mumbai · 2026"
- Bottom bar alignment: `justify-content: center; gap: 32px`

### Blog Footer
- Dark background `var(--dark-mid)`
- 3-column: brand + tagline / nav links / Instagram
- Bottom bar: copyright · city tag

---

## 8. Animations

### fadeUp (used on all hero text)
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Must be defined in EVERY page that uses it */
```

### Stagger delays for hero elements
```css
.eyebrow    { animation: fadeUp 0.8s ease 0.2s forwards; }
.hero-title { animation: fadeUp 0.9s ease 0.35s forwards; }
.hero-sub   { animation: fadeUp 0.9s ease 0.5s forwards; }
.hero-cta   { animation: fadeUp 0.9s ease 0.65s forwards; }
.hero-stats { animation: fadeUp 0.9s ease 0.8s forwards; }
```

### Scroll reveal (value cards, trust items, team cards)
```css
/* IntersectionObserver — fadeUp on enter viewport */
opacity: 0; transform: translateY(16px);
transition: opacity 0.6s ease, transform 0.6s ease;
```

### Marquee
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
animation: marquee 30s linear infinite;
```

---

## 9. Shared CSS File Structure

When implemented, `/css/maahu.css` should contain:

```
1. CSS custom properties (:root) — main theme
2. CSS custom properties (.blog-theme) — blog theme
3. Reset & base (*, html, body)
4. Grain overlay (body::after)
5. Navigation (nav, .nav-brand, .nav-links, .nav-cta)
6. Hamburger (.nav-hamburger, spans, .open states)
7. Mobile drawer (.mobile-drawer, all children)
8. Buttons (.btn-primary, .btn-secondary, .btn-gold, .btn-dark)
9. Eyebrow (.eyebrow)
10. Section title (.section-title)
11. Section body (.section-body)
12. Pull quote (.pull-quote, .pull-source)
13. Footer (footer, .footer-top, .footer-bottom, .footer-insta)
14. Animations (@keyframes fadeUp, marquee)
15. Mobile media queries for all shared components
```

Each page file keeps only its own unique section CSS.

---

## 10. Checklist — Every New Page

- [ ] Links to `/css/maahu.css`
- [ ] Has `@keyframes fadeUp` if using hero animations (until shared CSS is live)
- [ ] grain overlay is `z-index:1` NOT `z-index:9999`
- [ ] Nav is `z-index:200`
- [ ] Hamburger is `z-index:210` with `-webkit-tap-highlight-color:transparent`
- [ ] Mobile drawer is `z-index:205`
- [ ] Any full-bleed overlay has `pointer-events:none`
- [ ] All hero text starts `opacity:0` with `animation: fadeUp ... forwards`
- [ ] CTA text says "Join the Founding Squad" (not "Join the Squad" or "Join the Maahu Squad")
- [ ] Footer bottom bar uses `justify-content:center; gap:32px`
- [ ] Body font-weight is 300
- [ ] Section titles use `clamp(34px, 4vw, 52px)`
- [ ] Body/paragraph text is 15px
- [ ] Card body text is 13px

---

*Last updated: April 2026 · Maahu Digital Technologies Pvt Ltd*
